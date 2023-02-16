export class MarketoInstanceUrlBuilder {
  public static buildFromAccount(account: string): string {
    return `https://${account}.mktorest.com`;
  }
}
