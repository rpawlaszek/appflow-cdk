
# AWS AppFlow Construct Library

The `@aws-cdk/aws-appflow` package contains constructs for building AppFlow-service managed flows SaaS applications and AWS services.

# Example

```ts
import { Bucket } from 'aws-cdk-lib/aws-s3';
import {
  Filter,
  FilterCondition,
  Mapping,
  OnDemandFlow,
  S3Destination,
  SalesforceConnectorProfile,
  SalesforceSource,
  Transform,
  Validation,
  ValidationAction,
  ValidationCondition,
} from '../src';

const profile = new SalesforceConnectorProfile(this, 'MyConnectorProfile', {
  oAuth: {
    accessToken: <accessToken>,
    flows: {
      refreshTokenGrant: {
        refreshToken: <refreshToken>,
        client: <clientSecret>,
      },
    },
  },
  instanceUrl: <instanceUrl>,
  isSandbox: false,
});

const source = new SalesforceSource({
  profile: profile,
  object: 'Account',
});

const bucket = new Bucket(this, 'DestinationBucket');

const destination = new S3Destination({
  location: { bucket },
});

new OnDemandFlow(this, 'SfAccountToS3', {
  source: source,
  destination: destination,
  mappings: [Mapping.mapAll()],
  transforms: [
    Transform.mask({ name: 'Name' }, '*'),
  ],
  validations: [
    Validation.when(ValidationCondition.isNull('Name'), ValidationAction.ignoreRecord()),
  ],
  filters: [
    Filter.when(FilterCondition.timestampLessThanEquals({ name: 'LastModifiedDate', dataType: 'datetime' }, new Date(Date.parse('2022-02-02')))),
  ],
});

```

# Flows

`OnDemandFlow`
`OnEventFlow`
`OnScheduleFlow`

# Application Integrations

# Operations

Operations are collections of AppFlow tasks that are required to obtain a concrete result.

## Transforms

## Mappings

## Filters

## Validations