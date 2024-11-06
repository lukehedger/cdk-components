import { HttpApi } from 'aws-cdk-lib/aws-apigatewayv2';
import { Construct } from 'constructs';

export interface WebhookSubscriptionApiProps {
  name: string;
}

export class WebhookSubscriptionApi extends Construct {
  constructor(scope: Construct, id: string, props: WebhookSubscriptionApiProps) {
    super(scope, id);

    this.provision(props);
  }

  private provision(props: WebhookSubscriptionApiProps) {
    new HttpApi(this, 'WebhookSubscriptionApi', {
      apiName: props.name,
    });
  }
}
