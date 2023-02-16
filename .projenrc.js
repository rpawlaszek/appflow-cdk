const { awscdk } = require('projen');
const { Stability } = require('projen/lib/cdk');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Rafał Pawłaszek',
  authorAddress: 'rpawlasz@amazon.com',
  cdkVersion: '2.55.1',
  defaultReleaseBranch: 'main',
  name: 'appflow-cdk',
  repositoryUrl: 'git@github.com:rpawlaszek/appflow-cdk.git',
  stability: Stability.EXPERIMENTAL,
  docgen: true,
  peerDeps: [
    '@aws-cdk/aws-redshift-alpha@2.55.1-alpha.0',
    '@aws-cdk/aws-glue-alpha@2.55.1-alpha.0',
  ],
  keywords: [
    'aws',
    'appflow',
    'cdk',
  ],
  // publishToPypi: {
  //   distName: 'appflow-cdk',
  //   module: 'appflow-cdk',
  // },
  // publishToNuget: {
  //   dotNetNamespace: 'AppFlow.CDK',
  //   packageId: 'AppFlow.CDK',
  // },
  gitignore: [
    '*.rest',
  ],
});
project.synth();