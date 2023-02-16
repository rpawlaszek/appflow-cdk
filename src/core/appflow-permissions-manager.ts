
import { Annotations, Aws, Lazy } from 'aws-cdk-lib';
import { Effect, PolicyStatement, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { IKey } from 'aws-cdk-lib/aws-kms';
import { IBucket } from 'aws-cdk-lib/aws-s3';
import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';

const glob = global as any;

/**
 * @internal
 */
export class AppFlowPermissionsManager {
/**
 * Singleton instance of the AppFlowPermissionsManager
 */
  public static instance(): AppFlowPermissionsManager {
    if (!glob.__cdkAppFlowPermissionsManager) {
      glob.__cdkAppFlowPermissionsManager = new AppFlowPermissionsManager();
    }
    return glob.__cdkAppFlowPermissionsManager;
  }

  private readonly principal = new ServicePrincipal('appflow.amazonaws.com');

  private readonly tokenPermissions = new Map<string, Set<string>>();

  private readonly writeS3BucketActions = ['s3:PutObject', 's3:AbortMultipartUpload',
    's3:ListMultipartUploadParts', 's3:ListBucketMultipartUploads',
    's3:GetBucketAcl', 's3:PutObjectAcl'];
  private readonly readS3BucketActions = ['s3:GetObject', 's3:ListBucket'];
  private readonly encryptKMSKeyActions = ['kms:Encrypt', 'kms:GenerateDataKey'];
  private readonly decryptKMSKeyActions = ['kms:Decrypt'];
  private readonly readSMSecretActions = ['secretsmanager:GetSecretValue', 'secretsmanager:DescribeSecret'];

  private constructor() { }

  private getActionsFor(arn: string) {
    let actions: Set<string>;
    let isNew: boolean;
    if (this.tokenPermissions.has(arn)) {
      actions = this.tokenPermissions.get(arn)!;
      isNew = false;
    } else {
      actions = new Set<string>();
      this.tokenPermissions.set(arn, actions);
      isNew = true;
    }

    return { actions, isNew: isNew };
  }

  public grantBucketWrite(bucket?: IBucket) {
    if (bucket) {
      const { actions, isNew } = this.getActionsFor(bucket.bucketArn);

      this.writeS3BucketActions.forEach(a => actions.add(a));

      if (isNew) {
        bucket.addToResourcePolicy(
          new PolicyStatement({
            effect: Effect.ALLOW,
            principals: [this.principal],
            actions: Lazy.list({ produce: () => Array.from(actions) }),
            resources: [
              bucket.bucketArn,
              bucket.arnForObjects('*'),
            ],
            conditions: {
              StringEquals: {
                'aws:SourceAccount': Aws.ACCOUNT_ID,
              },
            },
          }),
        );
      }

      this.grantKeyEncrypt(bucket.encryptionKey);
    }
  }

  public grantBucketRead(bucket?: IBucket) {
    if (bucket) {
      const { actions, isNew } = this.getActionsFor(bucket.bucketArn);

      this.readS3BucketActions.forEach(a => actions.add(a));

      if (isNew) {
        bucket.addToResourcePolicy(
          new PolicyStatement({
            effect: Effect.ALLOW,
            principals: [this.principal],
            actions: Lazy.list({ produce: () => Array.from(actions) }),
            resources: [
              bucket.bucketArn,
              bucket.arnForObjects('*'),
            ],
            conditions: {
              StringEquals: {
                'aws:SourceAccount': Aws.ACCOUNT_ID,
              },
            },
          }),
        );
      }

      this.grantKeyDecrypt(bucket.encryptionKey);
    }
  }

  public grantBucketReadWrite(bucket?: IBucket) {
    if (bucket) {
      this.grantBucketRead(bucket);
      this.grantBucketWrite(bucket);
    }
  }

  public grantKeyEncryptDecrypt(key?: IKey) {
    this.grantKeyEncrypt(key);
    this.grantKeyDecrypt(key);
  }

  public grantKeyEncrypt(key?: IKey) {
    if (key) {
      const { actions, isNew } = this.getActionsFor(key.keyArn);

      this.encryptKMSKeyActions.forEach(a => actions.add(a));

      if (isNew) {
        const statement = new PolicyStatement({
          principals: [this.principal],
          actions: Lazy.list({ produce: () => Array.from(actions) }),
          resources: ['*'],
          conditions: {
            StringEquals: {
              'aws:SourceAccount': Aws.ACCOUNT_ID,
            },
          },
        });

        const addResult = key.addToResourcePolicy(statement, /* allowNoOp */ true);

        if (!addResult.statementAdded) {
          Annotations.of(key).addWarning(`Can not change key policy of imported kms key. Ensure that your key policy contains the following permissions: \n${JSON.stringify(statement.toJSON(), null, 2)}`);
        }
      }
    }
  }

  public grantKeyDecrypt(key?: IKey) {
    if (key) {
      const { actions, isNew } = this.getActionsFor(key.keyArn);

      this.decryptKMSKeyActions.forEach(a => actions.add(a));

      if (isNew) {
        const statement = new PolicyStatement({
          principals: [this.principal],
          actions: Lazy.list({ produce: () => Array.from(actions) }),
          resources: ['*'],
          conditions: {
            StringEquals: {
              'aws:SourceAccount': Aws.ACCOUNT_ID,
            },
          },
        });

        const addResult = key.addToResourcePolicy(statement, /* allowNoOp */ true);

        if (!addResult.statementAdded) {
          Annotations.of(key).addWarning(`Can not change key policy of imported kms key. Ensure that your key policy contains the following permissions: \n${JSON.stringify(statement.toJSON(), null, 2)}`);
        }
      }
    }
  }

  public grantSecretRead(secret?: ISecret) {
    if (secret) {
      const { actions, isNew } = this.getActionsFor(secret.secretArn);

      this.readSMSecretActions.forEach(a => actions.add(a));

      if (isNew) {
        const statement = new PolicyStatement({
          principals: [this.principal],
          actions: Lazy.list({ produce: () => Array.from(actions) }),
          resources: [secret.secretFullArn ? secret.secretFullArn : `${secret.secretArn}-??????`],
          conditions: {
            StringEquals: {
              'aws:SourceAccount': Aws.ACCOUNT_ID,
            },
          },
        });

        secret.addToResourcePolicy(statement);
        this.grantKeyEncryptDecrypt(secret.encryptionKey);
      }
    }
  }
}