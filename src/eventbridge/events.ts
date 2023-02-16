import { Aws } from 'aws-cdk-lib';

export class EventSources {
  public static salesforceEventSource(suffix?: string): string {
    return suffix
      ?`aws.partner/appflow/salesforce.com/${Aws.ACCOUNT_ID}/${suffix}`
      : `aws.partner/appflow/salesforce.com/${Aws.ACCOUNT_ID}`;
  }
}