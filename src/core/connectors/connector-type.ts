
// TODO: make sure that all the casings are correct
//       e.g. in ConnectorType:
//            S3 | Amplitude | Datadog | Dynatrace | Googleanalytics | Infornexus | Salesforce | Servicenow | Singular | Slack | Trendmicro | Veeva | Zendesk
export class ConnectorType {
  //   public static get amplitude(): ConnectorType { return new ConnectorType('Amplitude', false); }
  //   public static get datadog(): ConnectorType { return new ConnectorType('Datadog', false); }
  //   public static get dynatrace(): ConnectorType { return new ConnectorType('Dynatrace', false); }
  public static get eventbridge(): ConnectorType {
    return new class extends ConnectorType {
      constructor() {
        super('EventBridge', false);
      }

      public get asProfileConnectorType(): string {
        return this.name;
      }
    };
  }
  //   public static get googleanalytics(): ConnectorType { return new ConnectorType('GoogleAnalytics', false); }
  public static get googleanalytics4(): ConnectorType { return new ConnectorType('GoogleAnalytics4', true); }
  //   public static get infornexus(): ConnectorType { return new ConnectorType('InforNexus', false); }
  public static get marketo(): ConnectorType { return new ConnectorType('Marketo', false); }
  public static get redshift(): ConnectorType { return new ConnectorType('Redshift', false); }
  public static get s3(): ConnectorType { return new ConnectorType('S3', false); }
  public static get salesforce(): ConnectorType { return new ConnectorType('Salesforce', false); }
  public static get salesforcemarketingcloud(): ConnectorType { return new ConnectorType('SalesforceMarketingCloud', true); }
  public static get sapodata(): ConnectorType {
    class SapOData extends ConnectorType {
      public get asTaskConnectorOperatorOrigin(): string {
        return 'sapoData';
      }
      public get asProfileConnectorType(): string {
        return this.name;
      }
    }

    return new SapOData('SAPOData', false);
  }
  public static get servicenow(): ConnectorType { return new ConnectorType('ServiceNow', false); }
  //   public static get singular(): ConnectorType { return new ConnectorType('Singular', false); }
  public static get slack(): ConnectorType { return new ConnectorType('Slack', false); }
  public static get snowflake(): ConnectorType { return new ConnectorType('Snowflake', false); }
  //   public static get trendmicro(): ConnectorType { return new ConnectorType('Trendmicro', false); }
  //   public static get veeva(): ConnectorType { return new ConnectorType('Veeva', false); }
  public static get zendesk(): ConnectorType { return new ConnectorType('Zendesk', false); }
  public static custom(name: string): ConnectorType { return new ConnectorType(name, true); }

  protected constructor(private readonly name: string, public readonly isCustom: boolean) { }

  public get asProfileConnectorType(): string {
    return this.isCustom
      ? 'CustomConnector'
      : `${this.name[0].toUpperCase()}${this.name.substring(1).toLowerCase()}`;
  }

  public get asTaskConnectorOperatorOrigin(): string {
    return this.isCustom
      ? 'customConnector'
      : `${this.name[0].toLowerCase()}${this.name.substring(1)}`;
  }

  public get asProfileConnectorLabel(): string | undefined {
    return this.isCustom
      ? this.name
      : undefined;
  }
}
