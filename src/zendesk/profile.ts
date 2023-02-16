import { CfnConnectorProfile } from 'aws-cdk-lib/aws-appflow';
import { Construct } from 'constructs';
import { ConnectorProfileBase, ConnectorProfileProps } from '../core/connectors/connector-profile';
import { ConnectorType } from '../core/connectors/connector-type';

export interface ZendeskConnectorProfileProps extends ConnectorProfileProps {
  readonly credentials: ZendeskConnectorCredentials;
  readonly properties: ZendeskConnectorProperties;
}

export interface ZendeskOAuthSettings {
  readonly accessToken?: string;
  readonly clientId: string;
  readonly clientSecret: string;
}

export interface ZendeskConnectorCredentials {
  readonly oAuth: ZendeskOAuthSettings;
}

export interface ZendeskConnectorProperties {
  readonly instanceUrl: string;
}

export class ZendeskConnectorProfile extends ConnectorProfileBase {

  public static fromConnectionProfileArn(scope: Construct, id: string, arn: string) {
    return this._fromConnectorProfileArn(scope, id, arn) as ZendeskConnectorProfile;
  }

  public static fromConnectionProfileName(scope: Construct, id: string, name: string) {
    return this._fromConnectorProfileName(scope, id, name) as ZendeskConnectorProfile;
  }

  constructor(scope: Construct, id: string, props: ZendeskConnectorProfileProps) {
    super(scope, id, props, ConnectorType.zendesk);
  }

  protected buildConnectorProfileProperties(props: ConnectorProfileProps): CfnConnectorProfile.ConnectorProfilePropertiesProperty {
    const properties = (props as ZendeskConnectorProfileProps).properties;
    return {
      zendesk: {
        instanceUrl: properties.instanceUrl,
      },
    };
  }

  protected buildConnectorProfileCredentials(props: ConnectorProfileProps): CfnConnectorProfile.ConnectorProfileCredentialsProperty {
    const credentials = (props as ZendeskConnectorProfileProps).credentials;
    return {
      zendesk: {
        accessToken: credentials.oAuth.accessToken,
        clientId: credentials.oAuth.clientId,
        clientSecret: credentials.oAuth.clientSecret,
      },
    };
  }
}