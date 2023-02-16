
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
} from '../src';

const profile = new SalesforceConnectorProfile(this, 'MyConnectorProfile', {
  credentials: {
    oAuth: {
      clientCredentials: {
        accessToken: <accessToken>
        refreshToken: <refreshToken>,
      },
    },
  },
  properties: {
    instanceUrl: <instanceUrl>,
    isSandbox: false,
  },
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

# Thoughts

- should we even be allowing for strings as profiles, keys, secrets? This makes typing more difficult. Maybe we should stick with interfaces + require reliance on `fromXXX` ?
