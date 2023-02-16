import { IBucket } from 'aws-cdk-lib/aws-s3';

export interface S3Location {
  readonly bucket: IBucket;
  readonly prefix?: string;
}