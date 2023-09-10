import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3'
import { NagSuppressions } from 'cdk-nag';

export class ExampleStackTwo extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'MyExampleBucket', {
      versioned: true
    });
    
    NagSuppressions.addResourceSuppressions(
      bucket,
      [
        {
          id: 'AwsSolutions-S1',
          reason: "A reason for suppressing the warning.",
        },
        {
          id: 'AwsSolutions-S10',
          reason: "A reason for suppressing the warning.",
        }
      ],
      true
    );

  }
}
