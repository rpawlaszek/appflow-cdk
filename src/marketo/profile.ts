
import { CfnConnectorProfile } from 'aws-cdk-lib/aws-appflow';
import { Construct } from 'constructs';
import { ConnectorProfileBase, ConnectorProfileProps } from '../core/connectors/connector-profile';
import { ConnectorType } from '../core/connectors/connector-type';

export interface MarketoConnectorProfileProps extends ConnectorProfileProps {
  readonly credentials: MarketoConnectorCredentials;
  readonly properties: MarketoConnectorProperties;
}

export interface MarketoOAuthSettings {
  readonly accessToken?: string;
  readonly clientId: string;
  readonly clientSecret: string;
}

export interface MarketoConnectorCredentials {
  readonly oAuth: MarketoOAuthSettings;
}

export interface MarketoConnectorProperties {
  readonly instanceUrl: string;
}

export class MarketoConnectorProfile extends ConnectorProfileBase {

  public static fromConnectionProfileArn(scope: Construct, id: string, arn: string) {
    return this._fromConnectorProfileArn(scope, id, arn) as MarketoConnectorProfile;
  }

  public static fromConnectionProfileName(scope: Construct, id: string, name: string) {
    return this._fromConnectorProfileName(scope, id, name) as MarketoConnectorProfile;
  }

  constructor(scope: Construct, id: string, props: MarketoConnectorProfileProps) {
    super(scope, id, props, ConnectorType.marketo);
  }

  protected buildConnectorProfileProperties(props: ConnectorProfileProps): CfnConnectorProfile.ConnectorProfilePropertiesProperty {
    const properties = (props as MarketoConnectorProfileProps).properties;
    return {
      marketo: {
        instanceUrl: properties.instanceUrl,
      },
    };
  }

  protected buildConnectorProfileCredentials(props: ConnectorProfileProps): CfnConnectorProfile.ConnectorProfileCredentialsProperty {
    const credentials = (props as MarketoConnectorProfileProps).credentials;
    return {
      marketo: {
        accessToken: credentials.oAuth.accessToken,
        clientId: credentials.oAuth.clientId,
        clientSecret: credentials.oAuth.clientSecret,
      },
    };
  }
}