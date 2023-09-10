# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

# Testing your IaC

cfn-nag linter (lokaal) tegen synth aan. cdk-nag linter bestaat nog niet.
cfn-lint voor awareness van CFN templates kan zijn dat een service nog niet beschikbaar is in een specifieke region cfn=lint is zich hiervan bewust.

## Integration tests
Controle van integraties en afhankelijkheden tussen lagen.

Voorbeeld: controle of tags bestaan voor monitoring software

## Snapshot tests

### What does it do?
Snapshot tests compare the synthed code from a stacks or construct previous run to that of the current run. It will throw an error if the synthed cloudformation templates are not identical.

Snapshot tests can help identify changes made by for example CDK toolkit upgrades. They can also help identify unintentional changes to stacks or constructs while implementing a new feature or while adding infrastructure. They can also validate that code refactoring did not change the output. Or make you aware of changes to context values.

### How is it done?
The file `./test/snapshot.test.ts` contains an example in which a snapshot test is done of a CDK stack.

You can run the tests using the command `npm test`. You can also test a single file using the command `npm test -- -i snapshot.test.ts`, or a single test in a file using `npm test -- -i snapshot.test.ts -t "ExampleStackOne snapshot test"`. In which `-t` refers to a `describe(...)`, `it(...)` or `test(...)` block and `-i` to the file name.

An other method of running a single test would be to alter the test file an use Jests `.only()` method.

Update your snapshot by running the command `npm test -- -u` or a single snapshot using `npm test -- -i snapshot.test.ts -t "ExampleStackOne snapshot test" -u`.

## Fine-grained Assertion tests

### What does it do?
Fine-grained assertion test can help us to stay in compliance with security office requirements, or any other ruleset we need to comply with.

Resource relationships
logic errors
compliance

### How is it done

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html

# Next
- Testing Lambda functions.

# Sources
https://www.youtube.com/watch?v=KJC380Juo2w
https://www.youtube.com/watch?v=qlzX65SdNdQ
https://www.youtube.com/watch?v=DYS-obUX_V0
https://www.youtube.com/watch?v=b6p25GzGsAE
https://www.youtube.com/watch?v=1R7G_wcyd3s
https://docs.aws.amazon.com/cdk/v2/guide/testing.html
