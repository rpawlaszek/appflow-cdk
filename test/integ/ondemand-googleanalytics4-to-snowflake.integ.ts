import { App, Stack } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Secret } from 'aws-cdk-lib/aws-secretsmanager';
import { GoogleAnalytics4ApiVersion, GoogleAnalytics4ConnectorProfile, GoogleAnalytics4Source, Mapping, OnDemandFlow, SnowflakeConnectorProfile, SnowflakeDestination } from '../../src';

const app = new App({
  treeMetadata: false,
});

const stack = new Stack(app, 'TestStack');

const gaSecret = Secret.fromSecretNameV2(stack, 'GA4TestSecret', 'appflow/ga4');

const gaProfile = new GoogleAnalytics4ConnectorProfile(stack, 'GA4TestConnector', {
  oAuth: {
    accessToken: gaSecret.secretValueFromJson('accessToken').toString(),
    endpoints: {
      token: gaSecret.secretValueFromJson('tokenUrl').toString(),
    },
  },
});

const source = new GoogleAnalytics4Source({
  profile: gaProfile,
  apiVersion: GoogleAnalytics4ApiVersion.V1BETA,
  object: gaSecret.secretValueFromJson('coreReport').toString(),
});

const secret = Secret.fromSecretNameV2(stack, 'SnowTestSecret', 'appflow/snowflake');

const dataBucket = Bucket.fromBucketAttributes(stack, 'ImportedBucket', {
  bucketName: secret.secretValueFromJson('bucketName').toString(),
});

const snowProfile = new SnowflakeConnectorProfile(stack, 'SnowTestConnector', {
  properties: {
    associatedLocation: {
      bucket: dataBucket,
    },
    location: {
      account: secret.secretValueFromJson('account').toString(),
      warehouse: secret.secretValueFromJson('warehouse').toString(),
      database: secret.secretValueFromJson('database').toString(),
      schema: secret.secretValueFromJson('schema').toString(),
      stage: secret.secretValueFromJson('stage').toString(),
    },
  },
  credentials: {
    basic: {
      username: secret.secretValueFromJson('username').toString(),
      password: secret.secretValueFromJson('password').toString(),
    },
  },
});

const destination = new SnowflakeDestination({
  profile: snowProfile,
  object: {
    database: secret.secretValueFromJson('database').toString(),
    schema: secret.secretValueFromJson('schema').toString(),
    table: secret.secretValueFromJson('table').toString(),
  },
  errorHandling: {
    errorLocation: {
      bucket: dataBucket,
      prefix: 'error',
    },
  },
});


new OnDemandFlow(stack, 'OnDemandFlow', {
  source: source,
  destination: destination,
  mappings: [
    Mapping.map({ name: 'achievementId', dataType: 'String' }, { name: 'ACCOUNT_NUMBER', dataType: 'TEXT' }),
  ],
});

app.synth();