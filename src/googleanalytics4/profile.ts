import { CfnConnectorProfile } from 'aws-cdk-lib/aws-appflow';
import { Construct } from 'constructs';
import { ConnectorAuthenticationType } from '../core/connectors/connector-authentication-type';
import { ConnectorProfileBase, ConnectorProfileProps } from '../core/connectors/connector-profile';
import { ConnectorType } from '../core/connectors/connector-type';
import { OAuth2GrantType as OAuthGrantType } from '../core/connectors/oauth2-granttype';

export interface GoogleAnalytics4ConnectorProfileProps extends ConnectorProfileProps {
  readonly oAuth: GoogleAnalytics4OAuthSettings;
}

export interface GoogleAnalytics4OAuthRefreshTokenGrantFlowSettings {
  readonly refreshToken?: string;
  readonly clientSecret?: string;
  readonly clientId?: string;
  readonly redirectUri?: string;
}

export interface GoogleAnalytics4OAuthFlows {
  readonly refreshTokenGrant: GoogleAnalytics4OAuthRefreshTokenGrantFlowSettings;
}

export interface GoogleAnalytics4OAuthEndpointsSettings {
  readonly token: string;
}

export interface GoogleAnalytics4OAuthSettings {

  /**
   * The access token to be used when interacting with Google Analytics 4
   *
   * Note that if only the access token is provided AppFlow is not able to retrieve a fresh access token when the current one is expired
   */
  readonly accessToken?: string;

  readonly flows?: GoogleAnalytics4OAuthFlows;

  readonly endpoints: GoogleAnalytics4OAuthEndpointsSettings;
}

export class GoogleAnalytics4ConnectorProfile extends ConnectorProfileBase {

  public static fromConnectionProfileArn(scope: Construct, id: string, arn: string) {
    return this._fromConnectorProfileArn(scope, id, arn) as GoogleAnalytics4ConnectorProfile;
  }

  public static fromConnectionProfileName(scope: Construct, id: string, name: string) {
    return this._fromConnectorProfileName(scope, id, name) as GoogleAnalytics4ConnectorProfile;
  }

  constructor(scope: Construct, id: string, props: GoogleAnalytics4ConnectorProfileProps) {
    super(scope, id, props, ConnectorType.googleanalytics4);
  }

  protected buildConnectorProfileProperties(
    props: ConnectorProfileProps,
  ): CfnConnectorProfile.ConnectorProfilePropertiesProperty {
    const properties = (props as GoogleAnalytics4ConnectorProfileProps);
    return {
      customConnector: {
        oAuth2Properties: {
          // TODO: make sure this works
          oAuth2GrantType: OAuthGrantType.AUTHORIZATION_CODE,
          tokenUrl: properties.oAuth.endpoints.token,
          // TODO: work this out
          //   tokenUrlCustomProperties: props.properties.tokenUrlProperties,
        },
      },
    };
  }

  protected buildConnectorProfileCredentials(
    props: ConnectorProfileProps,
  ): CfnConnectorProfile.ConnectorProfileCredentialsProperty {
    const properties = (props as GoogleAnalytics4ConnectorProfileProps);
    return {
      customConnector: {
        oauth2: {
          accessToken: properties.oAuth.accessToken,
          refreshToken: properties.oAuth.flows?.refreshTokenGrant?.refreshToken,
          clientId: properties.oAuth.flows?.refreshTokenGrant?.clientId,
          clientSecret: properties.oAuth.flows?.refreshTokenGrant?.clientSecret,
          oAuthRequest: {
            redirectUri: properties.oAuth.flows?.refreshTokenGrant?.redirectUri,
          },
        },
        authenticationType: ConnectorAuthenticationType.OAUTH2,
      },
    };
  }
}