import { S3Location } from './s3-location';

export interface ErrorHandlingConfiguration {
  readonly errorLocation?: S3Location;
  readonly failOnFirstError?: boolean;
}
