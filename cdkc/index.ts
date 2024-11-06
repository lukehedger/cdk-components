import { Construct } from 'constructs';

class C extends Construct {
  constructor(scope: Construct, id: string, props: unknown) {
    super(scope, id);
  }
}

export const c = (scope: Construct, id: string, props: unknown) => { return new C(scope, id, props); };
