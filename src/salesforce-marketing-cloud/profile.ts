import { CfnConnectorProfile } from 'aws-cdk-lib/aws-appflow';
import { Construct } from 'constructs';
import { ConnectorAuthenticationType } from '../core/connectors/connector-authentication-type';
import { ConnectorProfileBase, ConnectorProfileProps } from '../core/connectors/connector-profile';
import { ConnectorType } from '../core/connectors/connector-type';
import { OAuth2GrantType as OAuthGrantType } from '../core/connectors/oauth2-granttype';

export interface SalesforceMarketingCloudConnectorProfileProps extends ConnectorProfileProps {
  readonly credentials: SalesforceMarketingCloudConnectorCredentials;
  readonly properties: SalesforceMarketingCloudConnectorProperties;
}

export interface SalesforceMarketingCloudOAuthRefreshTokenGrantFlowSettings {
  // TODO: make sure this is right. It should be most likely not allowed to be undefined
  readonly refreshToken?: string;
  readonly clientSecret: string;
  readonly clientId: string;
}

export interface SalesforceMarketingCloudOAuthFlows {
  readonly refreshTokenGrant: SalesforceMarketingCloudOAuthRefreshTokenGrantFlowSettings;
}

export interface SalesforceMarketingCloudOAuthSettings {
  readonly accessToken?: string;
  readonly flows?: SalesforceMarketingCloudOAuthFlows;
}

export interface SalesforceMarketingCloudConnectorCredentials {
  readonly oAuth: SalesforceMarketingCloudOAuthSettings;
}

export interface SalesforceMarketingCloudConnectorProperties {
  readonly tokenUrl: string;
  readonly instanceUrl: string;
}

export class SalesforceMarketingCloudConnectorProfile extends ConnectorProfileBase {

  public static fromConnectionProfileArn(scope: Construct, id: string, arn: string) {
    return this._fromConnectorProfileArn(scope, id, arn) as SalesforceMarketingCloudConnectorProfile;
  }

  public static fromConnectionProfileName(scope: Construct, id: string, name: string) {
    return this._fromConnectorProfileName(scope, id, name) as SalesforceMarketingCloudConnectorProfile;
  }

  constructor(scope: Construct, id: string, props: SalesforceMarketingCloudConnectorProfileProps) {
    super(scope, id, props, ConnectorType.salesforcemarketingcloud);
  }

  protected buildConnectorProfileProperties(
    props: ConnectorProfileProps,
  ): CfnConnectorProfile.ConnectorProfilePropertiesProperty {
    const properties = (props as SalesforceMarketingCloudConnectorProfileProps);
    return {
      customConnector: {
        oAuth2Properties: {
          // TODO: make sure this works
          oAuth2GrantType: properties.credentials.oAuth.flows?.refreshTokenGrant
            ? OAuthGrantType.CLIENT_CREDENTIALS
            : OAuthGrantType.AUTHORIZATION_CODE,
          tokenUrl: properties.properties.tokenUrl,
          // TODO: work this out
          //   tokenUrlCustomProperties: props.properties.tokenUrlProperties,
        },
        profileProperties: {
          instanceUrl: properties.properties.instanceUrl,
        },
      },
    };
  }

  protected buildConnectorProfileCredentials(
    props: ConnectorProfileProps,
  ): CfnConnectorProfile.ConnectorProfileCredentialsProperty {
    const properties = (props as SalesforceMarketingCloudConnectorProfileProps);
    return {
      customConnector: {
        oauth2: {
          accessToken: properties.credentials.oAuth.accessToken,
          refreshToken: properties.credentials.oAuth.flows?.refreshTokenGrant.refreshToken,
          clientId: properties.credentials.oAuth.flows?.refreshTokenGrant.clientId,
          clientSecret: properties.credentials.oAuth.flows?.refreshTokenGrant.clientSecret,
        },
        authenticationType: ConnectorAuthenticationType.OAUTH2,
      },
    };
  }
}