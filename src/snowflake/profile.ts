import { CfnConnectorProfile } from 'aws-cdk-lib/aws-appflow';
import { ArnPrincipal, Effect, IRole, PolicyDocument, PolicyStatement, Role } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { AppFlowPermissionsManager } from '../core/appflow-permissions-manager';
import { ConnectorProfileBase, ConnectorProfileProps } from '../core/connectors/connector-profile';
import { ConnectorType } from '../core/connectors/connector-type';
import { S3Location } from '../core/s3-location';

/**
 * 1. make sure to understand the steps here: https://docs.snowflake.com/en/user-guide/data-load-s3-config-storage-integration
 * 2. think if we can set up the role here somehow.
 */
export interface SnowflakeConnectorProfileProps extends ConnectorProfileProps {
  readonly credentials: SnowflakeConnectorCredentials;
  readonly properties: SnowflakeConnectorProperties;
}

export interface SnowflakeBasicSettings {
  readonly username: string;
  readonly password: string;
}

export interface SnowflakeConnectorCredentials {
  readonly basic: SnowflakeBasicSettings;
}

export interface SnowflakeLocation {
  readonly region?: string;
  readonly account: string;
  readonly warehouse: string;
  readonly database: string;
  readonly schema: string;
  readonly stage: string;
}

export interface SnowflakeStorageIntegration {
  readonly storageUserArn: string;
  readonly externalId: string;
}

export interface SnowflakeConnectorProperties {
  readonly associatedLocation: S3Location;
  readonly location: SnowflakeLocation;
  readonly integration?: SnowflakeStorageIntegration;
}

export class SnowflakeConnectorProfile extends ConnectorProfileBase {

  public static fromConnectionProfileArn(scope: Construct, id: string, arn: string) {
    return this._fromConnectorProfileArn(scope, id, arn) as SnowflakeConnectorProfile;
  }

  public static fromConnectionProfileName(scope: Construct, id: string, name: string) {
    return this._fromConnectorProfileName(scope, id, name) as SnowflakeConnectorProfile;
  }

  /**
   * @internal
   */
  public readonly _location: S3Location;

  public readonly integrationRole?: IRole;

  constructor(scope: Construct, id: string, props: SnowflakeConnectorProfileProps) {
    super(scope, id, props, ConnectorType.snowflake);
    this._location = props.properties.associatedLocation;

    this.integrationRole = this.tryCreateRole(scope, id, props);
  }

  // INFO: maybe move it to an external class so that it can be either used here or used in any subsequent deployment?
  private tryCreateRole(scope: Construct, id: string, props: ConnectorProfileProps): IRole | undefined {

    const properties = (props as SnowflakeConnectorProfileProps).properties;
    const integration = properties.integration;

    if (!integration) {
      return undefined;
    }

    // INFO: following https://docs.snowflake.com/en/user-guide/data-load-s3-config-storage-integration#configuring-secure-access-to-cloud-storage
    // TODO: currently, the implementation allows read-only access. Make sure that we don't need the write permissions
    return new Role(scope, `${id}IntegrationRole`, {
      assumedBy: new ArnPrincipal(integration.storageUserArn),
      externalIds: [integration.externalId],
      inlinePolicies: {
        SnowflakeAccess: new PolicyDocument({
          statements: [
            new PolicyStatement({
              effect: Effect.ALLOW,
              actions: [
                's3:GetObject',
                's3:GetObjectVersion',
              ],
              resources: [properties.associatedLocation.bucket.arnForObjects(
                properties.associatedLocation.prefix ?? '*',
              )],
            }),
            new PolicyStatement({
              effect: Effect.ALLOW,
              actions: [
                's3:ListBucket',
                's3:GetBucketLocation',
              ],
              resources: [properties.associatedLocation.bucket.bucketArn],
              conditions: {
                StringLike: {
                  's3:prefix': [properties.associatedLocation.prefix ?? '*'],
                },
              },
            }),
          ],
        }),
      },
    });
  }

  protected buildConnectorProfileCredentials(props: ConnectorProfileProps): CfnConnectorProfile.ConnectorProfileCredentialsProperty {

    const credentials = (props as SnowflakeConnectorProfileProps).credentials;

    return {
      snowflake: {
        username: credentials.basic.username,
        password: credentials.basic.password,
      },
    };
  }

  protected buildConnectorProfileProperties(props: ConnectorProfileProps): CfnConnectorProfile.ConnectorProfilePropertiesProperty {
    const properties = (props as SnowflakeConnectorProfileProps).properties;

    this.tryAddNodeDependency(this, properties.associatedLocation.bucket);
    AppFlowPermissionsManager.instance().grantBucketReadWrite(properties.associatedLocation.bucket);

    return {
      snowflake: {
        bucketName: properties.associatedLocation.bucket.bucketName,
        bucketPrefix: properties.associatedLocation.prefix,
        stage: `${properties.location.database}.${properties.location.schema}.${properties.location.stage}`,
        warehouse: properties.location.warehouse,
        accountName: properties.location.account,
        region: properties.location.region,
      },
    };
  }
}