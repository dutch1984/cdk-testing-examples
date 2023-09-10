#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ExampleStackOne } from '../lib/example-stack-one';
import { ExampleStackTwo } from '../lib/example-stack-two';

const app = new cdk.App()
new ExampleStackOne(app, 'ExampleStackOne', {})
new ExampleStackTwo(app, 'ExampleStackTwo', {})