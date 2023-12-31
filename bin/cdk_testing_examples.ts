#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ExampleStackOne } from '../lib/example-stack-one';
import { ExampleStackTwo } from '../lib/example-stack-two';
import { AwsSolutionsChecks } from 'cdk-nag';

const app = new cdk.App()
new ExampleStackOne(app, 'ExampleStackOne', {})
new ExampleStackTwo(app, 'ExampleStackTwo', {})

cdk.Aspects.of(app).add(new AwsSolutionsChecks())
