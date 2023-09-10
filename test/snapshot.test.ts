import * as cdk from 'aws-cdk-lib';
import { ExampleStackOne } from '../lib/example-stack-one'
import { ExampleStackTwo } from '../lib/example-stack-two';

describe('Snapshot test', () => {
    let stackName: string
    let app: cdk.App

    beforeEach(() => {
        stackName = 'test-example-stack'
        app = new cdk.App()
    });

    test('ExampleStackOne snapshot test', () => {
        // Arrange
        new ExampleStackOne(app, stackName)
        // Act
        const template = app.synth({ force: true }).getStackByName(stackName).template;
        // Assert
        expect(template).toMatchSnapshot()
    });

    test('ExampleStackTwo snapshot test', () => {
        // Arrange
        new ExampleStackTwo(app, stackName)
        // Act
        const template = app.synth({ force: true }).getStackByName(stackName).template;
        // Assert
        expect(template).toMatchSnapshot()
    });
});
    