import * as cdk from 'aws-cdk-lib';
import { ExampleStackOne } from '../lib/example-stack-one'
import { Match, Template } from 'aws-cdk-lib/assertions';

describe('ExampleStackOne', () => {
    let stackName: string
    let app: cdk.App
    let sut: cdk.Stack
    let template: Template

    beforeAll(() => {
        stackName = 'test-example-stack'
        app = new cdk.App({outdir: 'cdk.out'})
        sut = new ExampleStackOne(app, stackName)
        template = Template.fromStack(sut)
    });

    test('Should only contain one bucket', () => {
        template.resourceCountIs('AWS::S3::Bucket', 1)
    });

    describe('Bucket', () => {

        test('Should use AWS default encryption', () => {
            template.hasResourceProperties('AWS::S3::Bucket', {
                BucketEncryption: {
                    ServerSideEncryptionConfiguration: [
                        {
                            ServerSideEncryptionByDefault: {
                                SSEAlgorithm: 'AES256'
                            }
                        }
                    ]
                }
            })
        });

        test('Should have an application tag', () => {
            template.hasResourceProperties('AWS::S3::Bucket', {
                Tags: [
                    {Key: 'application', Value: Match.anyValue()}
                ]
            })
        });

        test('Should have a policy attached', () => {
            const bucket = template.findResources('AWS::S3::Bucket')
            const bucketName = Object.keys(bucket)[0]
            template.hasResourceProperties('AWS::S3::BucketPolicy', {
                Bucket: {
                    'Ref': Match.exact(bucketName)
                }
            })
        });

        describe('The bucket policy', () => {

            test('Should enforce HTTPS traffic', () => {
                const bucket = template.findResources('AWS::S3::Bucket')
                const bucketName = Object.keys(bucket)[0]
                template.hasResourceProperties('AWS::S3::BucketPolicy', {
                    Bucket: {
                        'Ref': Match.exact(bucketName)
                    },
                    PolicyDocument: {
                        Statement: [
                            {
                                Action: 's3:*',
                                Condition: { Bool: { 'aws:SecureTransport': 'false'}},
                                Effect: 'Deny',
                                Principal: { AWS: '*' },
                                Resource: [
                                    {'Fn::GetAtt': [bucketName,'Arn']},
                                    {'Fn::Join': ['',[{'Fn::GetAtt': [bucketName,'Arn']},'/*']]}
                                ],
                            }
                        ]
                    }
                })
            });

        })

    })

});
    