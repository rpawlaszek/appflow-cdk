import { CfnConnectorProfile } from 'aws-cdk-lib/aws-appflow';
import { Construct } from 'constructs';
import { ConnectorProfileBase, ConnectorProfileProps } from '../core/connectors/connector-profile';
import { ConnectorType } from '../core/connectors/connector-type';

export interface SlackConnectorProfileProps extends ConnectorProfileProps {
  readonly credentials: SlackConnectorCredentials;
  readonly properties: SlackConnectorProperties;
}

export interface SlackOAuthSettings {
  readonly accessToken?: string;
  readonly clientId: string;
  readonly clientSecret: string;
}

export interface SlackConnectorCredentials {
  readonly oAuth: SlackOAuthSettings;
}

export interface SlackConnectorProperties {
  readonly instanceUrl: string;
}

export class SlackConnectorProfile extends ConnectorProfileBase {

  public static fromConnectionProfileArn(scope: Construct, id: string, arn: string) {
    return this._fromConnectorProfileArn(scope, id, arn) as SlackConnectorProfile;
  }

  public static fromConnectionProfileName(scope: Construct, id: string, name: string) {
    return this._fromConnectorProfileName(scope, id, name) as SlackConnectorProfile;
  }

  constructor(scope: Construct, id: string, props: SlackConnectorProfileProps) {
    super(scope, id, props, ConnectorType.slack);
  }

  protected buildConnectorProfileProperties(props: ConnectorProfileProps): CfnConnectorProfile.ConnectorProfilePropertiesProperty {
    const properties = (props as SlackConnectorProfileProps).properties;
    return {
      slack: {
        instanceUrl: properties.instanceUrl,
      },
    };
  }

  protected buildConnectorProfileCredentials(props: ConnectorProfileProps): CfnConnectorProfile.ConnectorProfileCredentialsProperty {
    const credentials = (props as SlackConnectorProfileProps).credentials;
    return {
      slack: {
        accessToken: credentials.oAuth.accessToken,
        clientId: credentials.oAuth.clientId,
        clientSecret: credentials.oAuth.clientSecret,
      },
    };
  }
}