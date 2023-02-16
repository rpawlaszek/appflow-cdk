import { CfnConnectorProfile } from 'aws-cdk-lib/aws-appflow';
import { Construct } from 'constructs';
import { ConnectorProfileBase, ConnectorProfileProps } from '../core/connectors/connector-profile';
import { ConnectorType } from '../core/connectors/connector-type';

export interface SAPOdataConnectorProfileProps extends ConnectorProfileProps {
  readonly credentials: SAPOdataConnectorCredentials;
  readonly properties: SAPOdataConnectorProperties;
}

export interface SAPOdataBasicSettings {
  readonly username: string;
  readonly password: string;
}

export interface SAPOdataOauthRefreshTokenGrantFlowSettings {
  readonly accessToken?: string;
  readonly refreshToken?: string;
  readonly clientId: string;
  readonly clientSecret: string;
}

export interface SAPOdataOAuthSettings {
  readonly refreshToken: SAPOdataOauthRefreshTokenGrantFlowSettings;
}

export interface SAPOdataConnectorCredentials {
  readonly basic?: SAPOdataBasicSettings;
  readonly oAuth?: SAPOdataOAuthSettings;
}

export interface SAPOdataConnectorProperties {
  readonly applicationHostUrl: string;
  readonly applicationServicePath: string;
  readonly portNumber?: number;
  // TODO: make sure if this is only number
  readonly clientNumber: string;
  readonly logonLanguage: string;
}

export class SAPOdataConnectorProfile extends ConnectorProfileBase {

  public static fromConnectionProfileArn(scope: Construct, id: string, arn: string) {
    return this._fromConnectorProfileArn(scope, id, arn) as SAPOdataConnectorProfile;
  }

  public static fromConnectionProfileName(scope: Construct, id: string, name: string) {
    return this._fromConnectorProfileName(scope, id, name) as SAPOdataConnectorProfile;
  }

  constructor(scope: Construct, id: string, props: SAPOdataConnectorProfileProps) {
    super(scope, id, props, ConnectorType.sapodata);
  }

  protected buildConnectorProfileCredentials(props: ConnectorProfileProps): CfnConnectorProfile.ConnectorProfileCredentialsProperty {

    const credentials = (props as SAPOdataConnectorProfileProps).credentials;

    let sapOdata: { [key: string]: any } = {};

    if (credentials.basic) {
      sapOdata.basicAuthCredentials = {
        username: credentials.basic.username,
        password: credentials.basic.password,
      };
    } else if (credentials.oAuth) {
      sapOdata.oAuthCredentials = {
        accessToken: credentials.oAuth.refreshToken.accessToken,
        refreshToken: credentials.oAuth.refreshToken.refreshToken,
        clientId: credentials.oAuth.refreshToken.clientId,
        clientSecret: credentials.oAuth.refreshToken.clientSecret,
      };
    }

    return {
      sapoData: sapOdata,
    };
  }

  protected buildConnectorProfileProperties(props: ConnectorProfileProps): CfnConnectorProfile.ConnectorProfilePropertiesProperty {
    const properties = (props as SAPOdataConnectorProfileProps).properties;
    return {
      sapoData: {
        applicationHostUrl: properties.applicationHostUrl,
        applicationServicePath: properties.applicationServicePath,
        portNumber: properties.portNumber,
        clientNumber: properties.clientNumber,
        logonLanguage: properties.logonLanguage,
      },
    };
  }
}