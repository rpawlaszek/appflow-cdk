export class ZendeskInstanceUrlBuilder {
  public static buildFromAccount(account: string): string {
    return `https://${account}.zendesk.com`;
  }
}
