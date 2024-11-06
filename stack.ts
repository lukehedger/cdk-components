import { type App, Stack, type StackProps } from "aws-cdk-lib";
import { WebhookSubscriptionApi } from "./components/WebhookSubscriptionApi";

export const CaptainWebhook = class extends Stack {
  private WebhookSubscriptionApi!: WebhookSubscriptionApi;

  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    this.provisionResources();
  }

  private provisionResources() {
    this.WebhookSubscriptionApi = new WebhookSubscriptionApi(this, 'WebhookSubscriptionApi', { name: 'aye-aye' });
  }
};
