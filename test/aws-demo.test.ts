import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as AwsDemo from '../lib/aws-demo-cognito-stack';

let template: Template;
beforeAll(() => {
    const app = new cdk.App();
    // WHEN
    const stack = new AwsDemo.AwsDemoCognitoStack(app, 'MyTestStack');
    // THEN
    template = Template.fromStack(stack);
});

test('Cognito User Pool Created', () => {
    template.hasResource('AWS::Cognito::UserPool', {
    });
});

test('Cognito User Pool Domain Created', () => {
    template.hasResource('AWS::Cognito::UserPoolDomain', {
    });
});

test('Cognito User Pool Identity Provider Created', () => {
    template.hasResource('AWS::Cognito::UserPoolIdentityProvider', {
    });
});

test('Cognito User Pool Client Created', () => {
    template.hasResource('AWS::Cognito::UserPoolClient', {
    });
});
