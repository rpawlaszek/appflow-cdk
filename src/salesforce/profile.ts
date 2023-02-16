import { CfnConnectorProfile } from 'aws-cdk-lib/aws-appflow';
import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import { Construct } from 'constructs';
import { ConnectorProfileBase, ConnectorProfileProps } from '../core/connectors/connector-profile';
import { ConnectorType } from '../core/connectors/connector-type';

export interface SalesforceConnectorProfileProps extends ConnectorProfileProps {
  readonly credentials: SalesforceConnectorCredentials;
  readonly properties: SalesforceConnectorProperties;
}

// export interface SalesforceOAuthClientCredentialsFlowClientSettings {
//   readonly id: string;
//   readonly secret: string;
// }

// TODO: it can be either
//       1) accessToken+refreshToken (and it will be stored as-is)
//       2) refreshToken+client (and then a refresh Token renewal will trigger following: https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_refresh_token_flow.htm&type=5)
//       3) client + authCode + redirectUri (and then potentially a Lambda is required)
//       For now only 1) and 2) are implemented, but 3) is not possible due to the requirement of a user's creds

// TODO: think of naming. Maybe it should be named `tokenBased` ? It's not clientCredentials actually
export interface SalesforceOAuthRefreshTokenGrantFlowSettings {
  readonly accessToken?: string;
  readonly refreshToken?: string;
  // TODO: Describe when it is necessary
  readonly client?: ISecret;// | SalesforceOAuthClientCredentialsFlowClientSettings;
}

export interface SalesforceOAuthSettings {
  readonly refreshToken: SalesforceOAuthRefreshTokenGrantFlowSettings;
}

export interface SalesforceConnectorCredentials {
  readonly oAuth: SalesforceOAuthSettings;
}

export interface SalesforceConnectorProperties {
  readonly isSandbox: boolean;
  readonly instanceUrl: string;
}

export class SalesforceConnectorProfile extends ConnectorProfileBase {

  public static fromConnectionProfileArn(scope: Construct, id: string, arn: string) {
    return this._fromConnectorProfileArn(scope, id, arn) as SalesforceConnectorProfile;
  }

  public static fromConnectionProfileName(scope: Construct, id: string, name: string) {
    return this._fromConnectorProfileName(scope, id, name) as SalesforceConnectorProfile;
  }

  constructor(scope: Construct, id: string, props: SalesforceConnectorProfileProps) {
    super(scope, id, props, ConnectorType.salesforce);
    this.tryAddNodeDependency(this, props.credentials.oAuth.refreshToken.client);
  }

  protected buildConnectorProfileProperties(properties: ConnectorProfileProps): CfnConnectorProfile.ConnectorProfilePropertiesProperty {
    const props = properties as SalesforceConnectorProfileProps;
    return {
      salesforce: {
        isSandboxEnvironment: props.properties.isSandbox,
        instanceUrl: props.properties.instanceUrl,
      },
    };
  }

  protected buildConnectorProfileCredentials(properties: ConnectorProfileProps): CfnConnectorProfile.ConnectorProfileCredentialsProperty {
    const props = properties as SalesforceConnectorProfileProps;

    let salesforce: { [key: string]: any } = {};

    salesforce.accessToken = props.credentials.oAuth.refreshToken.accessToken;
    salesforce.refreshToken = props.credentials.oAuth.refreshToken.refreshToken;

    if (props.credentials.oAuth.refreshToken.client) {
      salesforce.clientCredentialsArn = props.credentials.oAuth.refreshToken.client.secretArn;
      // TODO: make sure why this doesn't work.
      //       this doc says it should: https://docs.aws.amazon.com/appflow/latest/userguide/salesforce.html
      //       in order to obtain the access token I needed to follow: https://medium.com/@bpmmendis94/obtain-access-refresh-tokens-from-salesforce-rest-api-a324fe4ccd9b
      salesforce.accessToken = salesforce.accessToken ?? 'testAccessToken';
      // salesforce.refreshToken = salesforce.refreshToken ?? 'testRefreshToken';
    }

    return {
      salesforce: salesforce,
    };
  }
}