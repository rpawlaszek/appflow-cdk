export class SlackInstanceUrlBuilder {
  public static buildFromWorkspace(workspace: string): string {
    return `https://${workspace}.slack.com`;
  }
}
