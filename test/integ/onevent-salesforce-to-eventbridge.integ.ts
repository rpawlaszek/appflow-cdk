import { App, RemovalPolicy, Stack } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import {
  EventBridgeDestination,
  SalesforceSource,
  EventSources,
  Mapping,
  OnEventFlow,
  SalesforceConnectorProfile,
} from '../../src';

const app = new App({
  treeMetadata: false,
});

const stack = new Stack(app, 'TestStack');

const source = new SalesforceSource({
  profile: SalesforceConnectorProfile.fromConnectionProfileName(stack, 'TestProfile', 'appflow-tester'),
  object: 'AccountChangeEvent',
});

const bucket = new Bucket(stack, 'TestBucket', {
  autoDeleteObjects: true,
  removalPolicy: RemovalPolicy.DESTROY,
});

const destination = new EventBridgeDestination({
  partnerBus: EventSources.salesforceEventSource('test'),
  errorHandling: { errorLocation: { bucket } },
});

const flow = new OnEventFlow(stack, 'EventFlow', {
  source: source,
  destination: destination,
  mappings: [Mapping.mapAll()],
});

flow.onStarted('captureOnStarted');

app.synth();