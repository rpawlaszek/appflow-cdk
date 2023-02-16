import { CfnConnectorProfile } from 'aws-cdk-lib/aws-appflow';
import { Construct } from 'constructs';
import { ConnectorProfileBase, ConnectorProfileProps } from '../core/connectors/connector-profile';
import { ConnectorType } from '../core/connectors/connector-type';

export interface ServiceNowConnectorProfileProps extends ConnectorProfileProps {
  readonly credentials: ServiceNowConnectorCredentials;
  readonly properties: ServiceNowConnectorProperties;
}

export interface ServiceNowBasicSettings {
  readonly username: string;
  readonly password: string;
}

export interface ServiceNowConnectorCredentials {
  readonly basic: ServiceNowBasicSettings;
}

export interface ServiceNowConnectorProperties {
  readonly instanceUrl: string;
}

export class ServiceNowConnectorProfile extends ConnectorProfileBase {

  public static fromConnectionProfileArn(scope: Construct, id: string, arn: string) {
    return this._fromConnectorProfileArn(scope, id, arn) as ServiceNowConnectorProfile;
  }

  public static fromConnectionProfileName(scope: Construct, id: string, name: string) {
    return this._fromConnectorProfileName(scope, id, name) as ServiceNowConnectorProfile;
  }

  constructor(scope: Construct, id: string, props: ServiceNowConnectorProfileProps) {
    super(scope, id, props, ConnectorType.servicenow);
  }

  protected buildConnectorProfileCredentials(props: ConnectorProfileProps): CfnConnectorProfile.ConnectorProfileCredentialsProperty {
    const credentials = (props as ServiceNowConnectorProfileProps).credentials;
    return {
      serviceNow: {
        username: credentials.basic?.username,
        password: credentials.basic?.password,
      },
    };
  }

  protected buildConnectorProfileProperties(props: ConnectorProfileProps): CfnConnectorProfile.ConnectorProfilePropertiesProperty {
    const properties = (props as ServiceNowConnectorProfileProps).properties;
    return {
      serviceNow: {
        instanceUrl: properties.instanceUrl,
      },
    };
  }
}