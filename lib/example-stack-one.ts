import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3'

export class ExampleStackOne extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'MyExampleBucket', {
      versioned: true,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true
    });

    cdk.Tags.of(bucket).add('application', 'test')

  }
}
