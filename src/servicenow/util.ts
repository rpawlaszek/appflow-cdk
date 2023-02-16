export class ServiceNowInstanceUrlBuilder {
  public static buildFromDomain(domain: string): string {
    return `https://${domain}.service-now.com`;
  }
}
