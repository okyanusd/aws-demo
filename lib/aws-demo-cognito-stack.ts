import * as cdk from 'aws-cdk-lib';
import { UserPool, UserPoolIdentityProviderAmazon } from 'aws-cdk-lib/aws-cognito';
import { Construct } from 'constructs';
import * as AWS from "@aws-sdk/client-cognito-identity-provider";
// import { CognitoIdentityProviderClient, ListUserPoolsCommand, ListUserPoolsCommandOutput } from "@aws-sdk/client-cognito-identity-provider";

export class AwsDemoCognitoStack extends cdk.Stack {
  
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const pool = new UserPool(this, 'okyanusd_userpool', {
      userPoolName: 'okyanusd_userpool',
      signInAliases: { username: true, email: true },
    });
    const provider = new UserPoolIdentityProviderAmazon(this, 'Amazon', {
      userPool: pool,
      clientId: 'amzn-client-id',
      clientSecret: 'amzn-client-secret',
    });
    
    const client = pool.addClient('okyanusd-app-client');
    pool.addDomain('CognitoDomain', {
      cognitoDomain: {
        domainPrefix: 'okyanusd-domain',
      },
    });


    // const clientIdentity = new AWS.CognitoIdentityProvider({});

    // let params = {
    //   MaxResults: 1,
    // };

    
    // const result = clientIdentity.listUserPools(params);
    // console.log("\n")
    // result.then((value) => {
    //   console.log(value.UserPools); // 👉️ "Hello world"
      
    // }).catch((err) => {
    //   console.log(err);
    // });
    // console.log("\n")

    // console.log("soner\n");
    
   
    
  }
}
