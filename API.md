# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectorProfileBase <a name="ConnectorProfileBase" id="appflow-cdk.ConnectorProfileBase"></a>

- *Implements:* <a href="#appflow-cdk.IConnectorProfile">IConnectorProfile</a>

#### Initializers <a name="Initializers" id="appflow-cdk.ConnectorProfileBase.Initializer"></a>

```typescript
import { ConnectorProfileBase } from 'appflow-cdk'

new ConnectorProfileBase(scope: Construct, id: string, props: ConnectorProfileProps, connectorType: ConnectorType)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ConnectorProfileBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectorProfileBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectorProfileBase.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.ConnectorProfileProps">ConnectorProfileProps</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectorProfileBase.Initializer.parameter.connectorType">connectorType</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.ConnectorProfileBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.ConnectorProfileBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.ConnectorProfileBase.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.ConnectorProfileProps">ConnectorProfileProps</a>

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="appflow-cdk.ConnectorProfileBase.Initializer.parameter.connectorType"></a>

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.ConnectorProfileBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#appflow-cdk.ConnectorProfileBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="appflow-cdk.ConnectorProfileBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="appflow-cdk.ConnectorProfileBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="appflow-cdk.ConnectorProfileBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.ConnectorProfileBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#appflow-cdk.ConnectorProfileBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#appflow-cdk.ConnectorProfileBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="appflow-cdk.ConnectorProfileBase.isConstruct"></a>

```typescript
import { ConnectorProfileBase } from 'appflow-cdk'

ConnectorProfileBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="appflow-cdk.ConnectorProfileBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="appflow-cdk.ConnectorProfileBase.isOwnedResource"></a>

```typescript
import { ConnectorProfileBase } from 'appflow-cdk'

ConnectorProfileBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.ConnectorProfileBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="appflow-cdk.ConnectorProfileBase.isResource"></a>

```typescript
import { ConnectorProfileBase } from 'appflow-cdk'

ConnectorProfileBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.ConnectorProfileBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ConnectorProfileBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#appflow-cdk.ConnectorProfileBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#appflow-cdk.ConnectorProfileBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#appflow-cdk.ConnectorProfileBase.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectorProfileBase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectorProfileBase.property.credentials">credentials</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="appflow-cdk.ConnectorProfileBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="appflow-cdk.ConnectorProfileBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="appflow-cdk.ConnectorProfileBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.ConnectorProfileBase.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.ConnectorProfileBase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="appflow-cdk.ConnectorProfileBase.property.credentials"></a>

```typescript
public readonly credentials: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---


### FlowBase <a name="FlowBase" id="appflow-cdk.FlowBase"></a>

- *Implements:* <a href="#appflow-cdk.IFlow">IFlow</a>

#### Initializers <a name="Initializers" id="appflow-cdk.FlowBase.Initializer"></a>

```typescript
import { FlowBase } from 'appflow-cdk'

new FlowBase(scope: Construct, id: string, props: FlowBaseProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.FlowBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#appflow-cdk.FlowBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.FlowBase.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.FlowBaseProps">FlowBaseProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.FlowBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.FlowBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.FlowBase.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.FlowBaseProps">FlowBaseProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.FlowBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#appflow-cdk.FlowBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#appflow-cdk.FlowBase.onEvent">onEvent</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FlowBase.onFishined">onFishined</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FlowBase.onStarted">onStarted</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="appflow-cdk.FlowBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="appflow-cdk.FlowBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="appflow-cdk.FlowBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `onEvent` <a name="onEvent" id="appflow-cdk.FlowBase.onEvent"></a>

```typescript
public onEvent(id: string, options?: OnEventOptions): Rule
```

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.FlowBase.onEvent.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="appflow-cdk.FlowBase.onEvent.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_events.OnEventOptions

---

##### `onFishined` <a name="onFishined" id="appflow-cdk.FlowBase.onFishined"></a>

```typescript
public onFishined(id: string, options?: OnEventOptions): Rule
```

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.FlowBase.onFishined.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="appflow-cdk.FlowBase.onFishined.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_events.OnEventOptions

---

##### `onStarted` <a name="onStarted" id="appflow-cdk.FlowBase.onStarted"></a>

```typescript
public onStarted(id: string, options?: OnEventOptions): Rule
```

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.FlowBase.onStarted.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="appflow-cdk.FlowBase.onStarted.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_events.OnEventOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.FlowBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#appflow-cdk.FlowBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#appflow-cdk.FlowBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="appflow-cdk.FlowBase.isConstruct"></a>

```typescript
import { FlowBase } from 'appflow-cdk'

FlowBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="appflow-cdk.FlowBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="appflow-cdk.FlowBase.isOwnedResource"></a>

```typescript
import { FlowBase } from 'appflow-cdk'

FlowBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.FlowBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="appflow-cdk.FlowBase.isResource"></a>

```typescript
import { FlowBase } from 'appflow-cdk'

FlowBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.FlowBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.FlowBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#appflow-cdk.FlowBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#appflow-cdk.FlowBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#appflow-cdk.FlowBase.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.FlowBase.property.type">type</a></code> | <code><a href="#appflow-cdk.FlowType">FlowType</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="appflow-cdk.FlowBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="appflow-cdk.FlowBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="appflow-cdk.FlowBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.FlowBase.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="appflow-cdk.FlowBase.property.type"></a>

```typescript
public readonly type: FlowType;
```

- *Type:* <a href="#appflow-cdk.FlowType">FlowType</a>

---


### GoogleAnalytics4ConnectorProfile <a name="GoogleAnalytics4ConnectorProfile" id="appflow-cdk.GoogleAnalytics4ConnectorProfile"></a>

#### Initializers <a name="Initializers" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.Initializer"></a>

```typescript
import { GoogleAnalytics4ConnectorProfile } from 'appflow-cdk'

new GoogleAnalytics4ConnectorProfile(scope: Construct, id: string, props: GoogleAnalytics4ConnectorProfileProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.GoogleAnalytics4ConnectorProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#appflow-cdk.GoogleAnalytics4ConnectorProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.GoogleAnalytics4ConnectorProfile.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.GoogleAnalytics4ConnectorProfileProps">GoogleAnalytics4ConnectorProfileProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.GoogleAnalytics4ConnectorProfileProps">GoogleAnalytics4ConnectorProfileProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.GoogleAnalytics4ConnectorProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#appflow-cdk.GoogleAnalytics4ConnectorProfile.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.GoogleAnalytics4ConnectorProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#appflow-cdk.GoogleAnalytics4ConnectorProfile.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#appflow-cdk.GoogleAnalytics4ConnectorProfile.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#appflow-cdk.GoogleAnalytics4ConnectorProfile.fromConnectionProfileArn">fromConnectionProfileArn</a></code> | *No description.* |
| <code><a href="#appflow-cdk.GoogleAnalytics4ConnectorProfile.fromConnectionProfileName">fromConnectionProfileName</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.isConstruct"></a>

```typescript
import { GoogleAnalytics4ConnectorProfile } from 'appflow-cdk'

GoogleAnalytics4ConnectorProfile.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.isOwnedResource"></a>

```typescript
import { GoogleAnalytics4ConnectorProfile } from 'appflow-cdk'

GoogleAnalytics4ConnectorProfile.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.isResource"></a>

```typescript
import { GoogleAnalytics4ConnectorProfile } from 'appflow-cdk'

GoogleAnalytics4ConnectorProfile.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromConnectionProfileArn` <a name="fromConnectionProfileArn" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.fromConnectionProfileArn"></a>

```typescript
import { GoogleAnalytics4ConnectorProfile } from 'appflow-cdk'

GoogleAnalytics4ConnectorProfile.fromConnectionProfileArn(scope: Construct, id: string, arn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.fromConnectionProfileArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.fromConnectionProfileArn.parameter.id"></a>

- *Type:* string

---

###### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.fromConnectionProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `fromConnectionProfileName` <a name="fromConnectionProfileName" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.fromConnectionProfileName"></a>

```typescript
import { GoogleAnalytics4ConnectorProfile } from 'appflow-cdk'

GoogleAnalytics4ConnectorProfile.fromConnectionProfileName(scope: Construct, id: string, name: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.fromConnectionProfileName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.fromConnectionProfileName.parameter.id"></a>

- *Type:* string

---

###### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.fromConnectionProfileName.parameter.name"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.GoogleAnalytics4ConnectorProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#appflow-cdk.GoogleAnalytics4ConnectorProfile.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#appflow-cdk.GoogleAnalytics4ConnectorProfile.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#appflow-cdk.GoogleAnalytics4ConnectorProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.GoogleAnalytics4ConnectorProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.GoogleAnalytics4ConnectorProfile.property.credentials">credentials</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="appflow-cdk.GoogleAnalytics4ConnectorProfile.property.credentials"></a>

```typescript
public readonly credentials: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---


### MarketoConnectorProfile <a name="MarketoConnectorProfile" id="appflow-cdk.MarketoConnectorProfile"></a>

#### Initializers <a name="Initializers" id="appflow-cdk.MarketoConnectorProfile.Initializer"></a>

```typescript
import { MarketoConnectorProfile } from 'appflow-cdk'

new MarketoConnectorProfile(scope: Construct, id: string, props: MarketoConnectorProfileProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.MarketoConnectorProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#appflow-cdk.MarketoConnectorProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.MarketoConnectorProfile.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.MarketoConnectorProfileProps">MarketoConnectorProfileProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.MarketoConnectorProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.MarketoConnectorProfile.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.MarketoConnectorProfile.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.MarketoConnectorProfileProps">MarketoConnectorProfileProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.MarketoConnectorProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#appflow-cdk.MarketoConnectorProfile.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="appflow-cdk.MarketoConnectorProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="appflow-cdk.MarketoConnectorProfile.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="appflow-cdk.MarketoConnectorProfile.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.MarketoConnectorProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#appflow-cdk.MarketoConnectorProfile.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#appflow-cdk.MarketoConnectorProfile.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#appflow-cdk.MarketoConnectorProfile.fromConnectionProfileArn">fromConnectionProfileArn</a></code> | *No description.* |
| <code><a href="#appflow-cdk.MarketoConnectorProfile.fromConnectionProfileName">fromConnectionProfileName</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="appflow-cdk.MarketoConnectorProfile.isConstruct"></a>

```typescript
import { MarketoConnectorProfile } from 'appflow-cdk'

MarketoConnectorProfile.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="appflow-cdk.MarketoConnectorProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="appflow-cdk.MarketoConnectorProfile.isOwnedResource"></a>

```typescript
import { MarketoConnectorProfile } from 'appflow-cdk'

MarketoConnectorProfile.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.MarketoConnectorProfile.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="appflow-cdk.MarketoConnectorProfile.isResource"></a>

```typescript
import { MarketoConnectorProfile } from 'appflow-cdk'

MarketoConnectorProfile.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.MarketoConnectorProfile.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromConnectionProfileArn` <a name="fromConnectionProfileArn" id="appflow-cdk.MarketoConnectorProfile.fromConnectionProfileArn"></a>

```typescript
import { MarketoConnectorProfile } from 'appflow-cdk'

MarketoConnectorProfile.fromConnectionProfileArn(scope: Construct, id: string, arn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.MarketoConnectorProfile.fromConnectionProfileArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.MarketoConnectorProfile.fromConnectionProfileArn.parameter.id"></a>

- *Type:* string

---

###### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.MarketoConnectorProfile.fromConnectionProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `fromConnectionProfileName` <a name="fromConnectionProfileName" id="appflow-cdk.MarketoConnectorProfile.fromConnectionProfileName"></a>

```typescript
import { MarketoConnectorProfile } from 'appflow-cdk'

MarketoConnectorProfile.fromConnectionProfileName(scope: Construct, id: string, name: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.MarketoConnectorProfile.fromConnectionProfileName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.MarketoConnectorProfile.fromConnectionProfileName.parameter.id"></a>

- *Type:* string

---

###### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.MarketoConnectorProfile.fromConnectionProfileName.parameter.name"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.MarketoConnectorProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#appflow-cdk.MarketoConnectorProfile.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#appflow-cdk.MarketoConnectorProfile.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#appflow-cdk.MarketoConnectorProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.MarketoConnectorProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.MarketoConnectorProfile.property.credentials">credentials</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="appflow-cdk.MarketoConnectorProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="appflow-cdk.MarketoConnectorProfile.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="appflow-cdk.MarketoConnectorProfile.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.MarketoConnectorProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.MarketoConnectorProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="appflow-cdk.MarketoConnectorProfile.property.credentials"></a>

```typescript
public readonly credentials: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---


### OnDemandFlow <a name="OnDemandFlow" id="appflow-cdk.OnDemandFlow"></a>

- *Implements:* <a href="#appflow-cdk.IFlow">IFlow</a>

#### Initializers <a name="Initializers" id="appflow-cdk.OnDemandFlow.Initializer"></a>

```typescript
import { OnDemandFlow } from 'appflow-cdk'

new OnDemandFlow(scope: Construct, id: string, props: OnDemandFlowProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.OnDemandFlow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#appflow-cdk.OnDemandFlow.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.OnDemandFlow.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.OnDemandFlowProps">OnDemandFlowProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.OnDemandFlow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.OnDemandFlow.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.OnDemandFlow.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.OnDemandFlowProps">OnDemandFlowProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.OnDemandFlow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#appflow-cdk.OnDemandFlow.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#appflow-cdk.OnDemandFlow.onEvent">onEvent</a></code> | *No description.* |
| <code><a href="#appflow-cdk.OnDemandFlow.onFishined">onFishined</a></code> | *No description.* |
| <code><a href="#appflow-cdk.OnDemandFlow.onStarted">onStarted</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="appflow-cdk.OnDemandFlow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="appflow-cdk.OnDemandFlow.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="appflow-cdk.OnDemandFlow.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `onEvent` <a name="onEvent" id="appflow-cdk.OnDemandFlow.onEvent"></a>

```typescript
public onEvent(id: string, options?: OnEventOptions): Rule
```

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.OnDemandFlow.onEvent.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="appflow-cdk.OnDemandFlow.onEvent.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_events.OnEventOptions

---

##### `onFishined` <a name="onFishined" id="appflow-cdk.OnDemandFlow.onFishined"></a>

```typescript
public onFishined(id: string, options?: OnEventOptions): Rule
```

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.OnDemandFlow.onFishined.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="appflow-cdk.OnDemandFlow.onFishined.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_events.OnEventOptions

---

##### `onStarted` <a name="onStarted" id="appflow-cdk.OnDemandFlow.onStarted"></a>

```typescript
public onStarted(id: string, options?: OnEventOptions): Rule
```

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.OnDemandFlow.onStarted.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="appflow-cdk.OnDemandFlow.onStarted.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_events.OnEventOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.OnDemandFlow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#appflow-cdk.OnDemandFlow.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#appflow-cdk.OnDemandFlow.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="appflow-cdk.OnDemandFlow.isConstruct"></a>

```typescript
import { OnDemandFlow } from 'appflow-cdk'

OnDemandFlow.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="appflow-cdk.OnDemandFlow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="appflow-cdk.OnDemandFlow.isOwnedResource"></a>

```typescript
import { OnDemandFlow } from 'appflow-cdk'

OnDemandFlow.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.OnDemandFlow.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="appflow-cdk.OnDemandFlow.isResource"></a>

```typescript
import { OnDemandFlow } from 'appflow-cdk'

OnDemandFlow.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.OnDemandFlow.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.OnDemandFlow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#appflow-cdk.OnDemandFlow.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#appflow-cdk.OnDemandFlow.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#appflow-cdk.OnDemandFlow.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.OnDemandFlow.property.type">type</a></code> | <code><a href="#appflow-cdk.FlowType">FlowType</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="appflow-cdk.OnDemandFlow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="appflow-cdk.OnDemandFlow.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="appflow-cdk.OnDemandFlow.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.OnDemandFlow.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="appflow-cdk.OnDemandFlow.property.type"></a>

```typescript
public readonly type: FlowType;
```

- *Type:* <a href="#appflow-cdk.FlowType">FlowType</a>

---


### OnEventFlow <a name="OnEventFlow" id="appflow-cdk.OnEventFlow"></a>

- *Implements:* <a href="#appflow-cdk.IFlow">IFlow</a>

#### Initializers <a name="Initializers" id="appflow-cdk.OnEventFlow.Initializer"></a>

```typescript
import { OnEventFlow } from 'appflow-cdk'

new OnEventFlow(scope: Construct, id: string, props: OnEventFlowProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.OnEventFlow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#appflow-cdk.OnEventFlow.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.OnEventFlow.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.OnEventFlowProps">OnEventFlowProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.OnEventFlow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.OnEventFlow.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.OnEventFlow.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.OnEventFlowProps">OnEventFlowProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.OnEventFlow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#appflow-cdk.OnEventFlow.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#appflow-cdk.OnEventFlow.onEvent">onEvent</a></code> | *No description.* |
| <code><a href="#appflow-cdk.OnEventFlow.onFishined">onFishined</a></code> | *No description.* |
| <code><a href="#appflow-cdk.OnEventFlow.onStarted">onStarted</a></code> | *No description.* |
| <code><a href="#appflow-cdk.OnEventFlow.onDeactivated">onDeactivated</a></code> | *No description.* |
| <code><a href="#appflow-cdk.OnEventFlow.onStatus">onStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="appflow-cdk.OnEventFlow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="appflow-cdk.OnEventFlow.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="appflow-cdk.OnEventFlow.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `onEvent` <a name="onEvent" id="appflow-cdk.OnEventFlow.onEvent"></a>

```typescript
public onEvent(id: string, options?: OnEventOptions): Rule
```

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.OnEventFlow.onEvent.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="appflow-cdk.OnEventFlow.onEvent.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_events.OnEventOptions

---

##### `onFishined` <a name="onFishined" id="appflow-cdk.OnEventFlow.onFishined"></a>

```typescript
public onFishined(id: string, options?: OnEventOptions): Rule
```

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.OnEventFlow.onFishined.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="appflow-cdk.OnEventFlow.onFishined.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_events.OnEventOptions

---

##### `onStarted` <a name="onStarted" id="appflow-cdk.OnEventFlow.onStarted"></a>

```typescript
public onStarted(id: string, options?: OnEventOptions): Rule
```

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.OnEventFlow.onStarted.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="appflow-cdk.OnEventFlow.onStarted.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_events.OnEventOptions

---

##### `onDeactivated` <a name="onDeactivated" id="appflow-cdk.OnEventFlow.onDeactivated"></a>

```typescript
public onDeactivated(id: string, options?: OnEventOptions): Rule
```

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.OnEventFlow.onDeactivated.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="appflow-cdk.OnEventFlow.onDeactivated.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_events.OnEventOptions

---

##### `onStatus` <a name="onStatus" id="appflow-cdk.OnEventFlow.onStatus"></a>

```typescript
public onStatus(id: string, options?: OnEventOptions): Rule
```

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.OnEventFlow.onStatus.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="appflow-cdk.OnEventFlow.onStatus.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_events.OnEventOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.OnEventFlow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#appflow-cdk.OnEventFlow.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#appflow-cdk.OnEventFlow.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="appflow-cdk.OnEventFlow.isConstruct"></a>

```typescript
import { OnEventFlow } from 'appflow-cdk'

OnEventFlow.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="appflow-cdk.OnEventFlow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="appflow-cdk.OnEventFlow.isOwnedResource"></a>

```typescript
import { OnEventFlow } from 'appflow-cdk'

OnEventFlow.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.OnEventFlow.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="appflow-cdk.OnEventFlow.isResource"></a>

```typescript
import { OnEventFlow } from 'appflow-cdk'

OnEventFlow.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.OnEventFlow.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.OnEventFlow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#appflow-cdk.OnEventFlow.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#appflow-cdk.OnEventFlow.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#appflow-cdk.OnEventFlow.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.OnEventFlow.property.type">type</a></code> | <code><a href="#appflow-cdk.FlowType">FlowType</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="appflow-cdk.OnEventFlow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="appflow-cdk.OnEventFlow.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="appflow-cdk.OnEventFlow.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.OnEventFlow.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="appflow-cdk.OnEventFlow.property.type"></a>

```typescript
public readonly type: FlowType;
```

- *Type:* <a href="#appflow-cdk.FlowType">FlowType</a>

---


### OnScheduleFlow <a name="OnScheduleFlow" id="appflow-cdk.OnScheduleFlow"></a>

- *Implements:* <a href="#appflow-cdk.IFlow">IFlow</a>

#### Initializers <a name="Initializers" id="appflow-cdk.OnScheduleFlow.Initializer"></a>

```typescript
import { OnScheduleFlow } from 'appflow-cdk'

new OnScheduleFlow(scope: Construct, id: string, props: OnScheduleFlowProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.OnScheduleFlow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#appflow-cdk.OnScheduleFlow.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.OnScheduleFlow.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.OnScheduleFlowProps">OnScheduleFlowProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.OnScheduleFlow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.OnScheduleFlow.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.OnScheduleFlow.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.OnScheduleFlowProps">OnScheduleFlowProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.OnScheduleFlow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#appflow-cdk.OnScheduleFlow.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#appflow-cdk.OnScheduleFlow.onEvent">onEvent</a></code> | *No description.* |
| <code><a href="#appflow-cdk.OnScheduleFlow.onFishined">onFishined</a></code> | *No description.* |
| <code><a href="#appflow-cdk.OnScheduleFlow.onStarted">onStarted</a></code> | *No description.* |
| <code><a href="#appflow-cdk.OnScheduleFlow.onDeactivated">onDeactivated</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="appflow-cdk.OnScheduleFlow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="appflow-cdk.OnScheduleFlow.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="appflow-cdk.OnScheduleFlow.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `onEvent` <a name="onEvent" id="appflow-cdk.OnScheduleFlow.onEvent"></a>

```typescript
public onEvent(id: string, options?: OnEventOptions): Rule
```

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.OnScheduleFlow.onEvent.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="appflow-cdk.OnScheduleFlow.onEvent.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_events.OnEventOptions

---

##### `onFishined` <a name="onFishined" id="appflow-cdk.OnScheduleFlow.onFishined"></a>

```typescript
public onFishined(id: string, options?: OnEventOptions): Rule
```

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.OnScheduleFlow.onFishined.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="appflow-cdk.OnScheduleFlow.onFishined.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_events.OnEventOptions

---

##### `onStarted` <a name="onStarted" id="appflow-cdk.OnScheduleFlow.onStarted"></a>

```typescript
public onStarted(id: string, options?: OnEventOptions): Rule
```

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.OnScheduleFlow.onStarted.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="appflow-cdk.OnScheduleFlow.onStarted.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_events.OnEventOptions

---

##### `onDeactivated` <a name="onDeactivated" id="appflow-cdk.OnScheduleFlow.onDeactivated"></a>

```typescript
public onDeactivated(id: string, options?: OnEventOptions): Rule
```

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.OnScheduleFlow.onDeactivated.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="appflow-cdk.OnScheduleFlow.onDeactivated.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_events.OnEventOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.OnScheduleFlow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#appflow-cdk.OnScheduleFlow.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#appflow-cdk.OnScheduleFlow.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="appflow-cdk.OnScheduleFlow.isConstruct"></a>

```typescript
import { OnScheduleFlow } from 'appflow-cdk'

OnScheduleFlow.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="appflow-cdk.OnScheduleFlow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="appflow-cdk.OnScheduleFlow.isOwnedResource"></a>

```typescript
import { OnScheduleFlow } from 'appflow-cdk'

OnScheduleFlow.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.OnScheduleFlow.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="appflow-cdk.OnScheduleFlow.isResource"></a>

```typescript
import { OnScheduleFlow } from 'appflow-cdk'

OnScheduleFlow.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.OnScheduleFlow.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.OnScheduleFlow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#appflow-cdk.OnScheduleFlow.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#appflow-cdk.OnScheduleFlow.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#appflow-cdk.OnScheduleFlow.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.OnScheduleFlow.property.type">type</a></code> | <code><a href="#appflow-cdk.FlowType">FlowType</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="appflow-cdk.OnScheduleFlow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="appflow-cdk.OnScheduleFlow.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="appflow-cdk.OnScheduleFlow.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.OnScheduleFlow.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="appflow-cdk.OnScheduleFlow.property.type"></a>

```typescript
public readonly type: FlowType;
```

- *Type:* <a href="#appflow-cdk.FlowType">FlowType</a>

---


### RedshiftConnectorProfile <a name="RedshiftConnectorProfile" id="appflow-cdk.RedshiftConnectorProfile"></a>

#### Initializers <a name="Initializers" id="appflow-cdk.RedshiftConnectorProfile.Initializer"></a>

```typescript
import { RedshiftConnectorProfile } from 'appflow-cdk'

new RedshiftConnectorProfile(scope: Construct, id: string, props: RedshiftConnectorProfileProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.RedshiftConnectorProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#appflow-cdk.RedshiftConnectorProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.RedshiftConnectorProfile.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.RedshiftConnectorProfileProps">RedshiftConnectorProfileProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.RedshiftConnectorProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.RedshiftConnectorProfile.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.RedshiftConnectorProfile.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.RedshiftConnectorProfileProps">RedshiftConnectorProfileProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.RedshiftConnectorProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#appflow-cdk.RedshiftConnectorProfile.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="appflow-cdk.RedshiftConnectorProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="appflow-cdk.RedshiftConnectorProfile.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="appflow-cdk.RedshiftConnectorProfile.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.RedshiftConnectorProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#appflow-cdk.RedshiftConnectorProfile.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#appflow-cdk.RedshiftConnectorProfile.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#appflow-cdk.RedshiftConnectorProfile.fromConnectionProfileArn">fromConnectionProfileArn</a></code> | *No description.* |
| <code><a href="#appflow-cdk.RedshiftConnectorProfile.fromConnectionProfileName">fromConnectionProfileName</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="appflow-cdk.RedshiftConnectorProfile.isConstruct"></a>

```typescript
import { RedshiftConnectorProfile } from 'appflow-cdk'

RedshiftConnectorProfile.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="appflow-cdk.RedshiftConnectorProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="appflow-cdk.RedshiftConnectorProfile.isOwnedResource"></a>

```typescript
import { RedshiftConnectorProfile } from 'appflow-cdk'

RedshiftConnectorProfile.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.RedshiftConnectorProfile.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="appflow-cdk.RedshiftConnectorProfile.isResource"></a>

```typescript
import { RedshiftConnectorProfile } from 'appflow-cdk'

RedshiftConnectorProfile.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.RedshiftConnectorProfile.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromConnectionProfileArn` <a name="fromConnectionProfileArn" id="appflow-cdk.RedshiftConnectorProfile.fromConnectionProfileArn"></a>

```typescript
import { RedshiftConnectorProfile } from 'appflow-cdk'

RedshiftConnectorProfile.fromConnectionProfileArn(scope: Construct, id: string, arn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.RedshiftConnectorProfile.fromConnectionProfileArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.RedshiftConnectorProfile.fromConnectionProfileArn.parameter.id"></a>

- *Type:* string

---

###### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.RedshiftConnectorProfile.fromConnectionProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `fromConnectionProfileName` <a name="fromConnectionProfileName" id="appflow-cdk.RedshiftConnectorProfile.fromConnectionProfileName"></a>

```typescript
import { RedshiftConnectorProfile } from 'appflow-cdk'

RedshiftConnectorProfile.fromConnectionProfileName(scope: Construct, id: string, name: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.RedshiftConnectorProfile.fromConnectionProfileName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.RedshiftConnectorProfile.fromConnectionProfileName.parameter.id"></a>

- *Type:* string

---

###### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.RedshiftConnectorProfile.fromConnectionProfileName.parameter.name"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.RedshiftConnectorProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#appflow-cdk.RedshiftConnectorProfile.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#appflow-cdk.RedshiftConnectorProfile.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#appflow-cdk.RedshiftConnectorProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.RedshiftConnectorProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.RedshiftConnectorProfile.property.credentials">credentials</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="appflow-cdk.RedshiftConnectorProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="appflow-cdk.RedshiftConnectorProfile.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="appflow-cdk.RedshiftConnectorProfile.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.RedshiftConnectorProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.RedshiftConnectorProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="appflow-cdk.RedshiftConnectorProfile.property.credentials"></a>

```typescript
public readonly credentials: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---


### SalesforceConnectorProfile <a name="SalesforceConnectorProfile" id="appflow-cdk.SalesforceConnectorProfile"></a>

#### Initializers <a name="Initializers" id="appflow-cdk.SalesforceConnectorProfile.Initializer"></a>

```typescript
import { SalesforceConnectorProfile } from 'appflow-cdk'

new SalesforceConnectorProfile(scope: Construct, id: string, props: SalesforceConnectorProfileProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SalesforceConnectorProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceConnectorProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceConnectorProfile.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.SalesforceConnectorProfileProps">SalesforceConnectorProfileProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.SalesforceConnectorProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.SalesforceConnectorProfile.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.SalesforceConnectorProfile.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.SalesforceConnectorProfileProps">SalesforceConnectorProfileProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.SalesforceConnectorProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#appflow-cdk.SalesforceConnectorProfile.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="appflow-cdk.SalesforceConnectorProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="appflow-cdk.SalesforceConnectorProfile.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="appflow-cdk.SalesforceConnectorProfile.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.SalesforceConnectorProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#appflow-cdk.SalesforceConnectorProfile.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#appflow-cdk.SalesforceConnectorProfile.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#appflow-cdk.SalesforceConnectorProfile.fromConnectionProfileArn">fromConnectionProfileArn</a></code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceConnectorProfile.fromConnectionProfileName">fromConnectionProfileName</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="appflow-cdk.SalesforceConnectorProfile.isConstruct"></a>

```typescript
import { SalesforceConnectorProfile } from 'appflow-cdk'

SalesforceConnectorProfile.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="appflow-cdk.SalesforceConnectorProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="appflow-cdk.SalesforceConnectorProfile.isOwnedResource"></a>

```typescript
import { SalesforceConnectorProfile } from 'appflow-cdk'

SalesforceConnectorProfile.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.SalesforceConnectorProfile.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="appflow-cdk.SalesforceConnectorProfile.isResource"></a>

```typescript
import { SalesforceConnectorProfile } from 'appflow-cdk'

SalesforceConnectorProfile.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.SalesforceConnectorProfile.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromConnectionProfileArn` <a name="fromConnectionProfileArn" id="appflow-cdk.SalesforceConnectorProfile.fromConnectionProfileArn"></a>

```typescript
import { SalesforceConnectorProfile } from 'appflow-cdk'

SalesforceConnectorProfile.fromConnectionProfileArn(scope: Construct, id: string, arn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.SalesforceConnectorProfile.fromConnectionProfileArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.SalesforceConnectorProfile.fromConnectionProfileArn.parameter.id"></a>

- *Type:* string

---

###### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.SalesforceConnectorProfile.fromConnectionProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `fromConnectionProfileName` <a name="fromConnectionProfileName" id="appflow-cdk.SalesforceConnectorProfile.fromConnectionProfileName"></a>

```typescript
import { SalesforceConnectorProfile } from 'appflow-cdk'

SalesforceConnectorProfile.fromConnectionProfileName(scope: Construct, id: string, name: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.SalesforceConnectorProfile.fromConnectionProfileName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.SalesforceConnectorProfile.fromConnectionProfileName.parameter.id"></a>

- *Type:* string

---

###### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.SalesforceConnectorProfile.fromConnectionProfileName.parameter.name"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SalesforceConnectorProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#appflow-cdk.SalesforceConnectorProfile.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#appflow-cdk.SalesforceConnectorProfile.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#appflow-cdk.SalesforceConnectorProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceConnectorProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceConnectorProfile.property.credentials">credentials</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="appflow-cdk.SalesforceConnectorProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="appflow-cdk.SalesforceConnectorProfile.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="appflow-cdk.SalesforceConnectorProfile.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.SalesforceConnectorProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.SalesforceConnectorProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="appflow-cdk.SalesforceConnectorProfile.property.credentials"></a>

```typescript
public readonly credentials: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---


### SalesforceMarketingCloudConnectorProfile <a name="SalesforceMarketingCloudConnectorProfile" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile"></a>

#### Initializers <a name="Initializers" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.Initializer"></a>

```typescript
import { SalesforceMarketingCloudConnectorProfile } from 'appflow-cdk'

new SalesforceMarketingCloudConnectorProfile(scope: Construct, id: string, props: SalesforceMarketingCloudConnectorProfileProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfile.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfileProps">SalesforceMarketingCloudConnectorProfileProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfileProps">SalesforceMarketingCloudConnectorProfileProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfile.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfile.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfile.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfile.fromConnectionProfileArn">fromConnectionProfileArn</a></code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfile.fromConnectionProfileName">fromConnectionProfileName</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.isConstruct"></a>

```typescript
import { SalesforceMarketingCloudConnectorProfile } from 'appflow-cdk'

SalesforceMarketingCloudConnectorProfile.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.isOwnedResource"></a>

```typescript
import { SalesforceMarketingCloudConnectorProfile } from 'appflow-cdk'

SalesforceMarketingCloudConnectorProfile.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.isResource"></a>

```typescript
import { SalesforceMarketingCloudConnectorProfile } from 'appflow-cdk'

SalesforceMarketingCloudConnectorProfile.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromConnectionProfileArn` <a name="fromConnectionProfileArn" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.fromConnectionProfileArn"></a>

```typescript
import { SalesforceMarketingCloudConnectorProfile } from 'appflow-cdk'

SalesforceMarketingCloudConnectorProfile.fromConnectionProfileArn(scope: Construct, id: string, arn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.fromConnectionProfileArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.fromConnectionProfileArn.parameter.id"></a>

- *Type:* string

---

###### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.fromConnectionProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `fromConnectionProfileName` <a name="fromConnectionProfileName" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.fromConnectionProfileName"></a>

```typescript
import { SalesforceMarketingCloudConnectorProfile } from 'appflow-cdk'

SalesforceMarketingCloudConnectorProfile.fromConnectionProfileName(scope: Construct, id: string, name: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.fromConnectionProfileName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.fromConnectionProfileName.parameter.id"></a>

- *Type:* string

---

###### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.fromConnectionProfileName.parameter.name"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfile.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfile.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfile.property.credentials">credentials</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="appflow-cdk.SalesforceMarketingCloudConnectorProfile.property.credentials"></a>

```typescript
public readonly credentials: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---


### SAPOdataConnectorProfile <a name="SAPOdataConnectorProfile" id="appflow-cdk.SAPOdataConnectorProfile"></a>

#### Initializers <a name="Initializers" id="appflow-cdk.SAPOdataConnectorProfile.Initializer"></a>

```typescript
import { SAPOdataConnectorProfile } from 'appflow-cdk'

new SAPOdataConnectorProfile(scope: Construct, id: string, props: SAPOdataConnectorProfileProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SAPOdataConnectorProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#appflow-cdk.SAPOdataConnectorProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SAPOdataConnectorProfile.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.SAPOdataConnectorProfileProps">SAPOdataConnectorProfileProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.SAPOdataConnectorProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.SAPOdataConnectorProfile.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.SAPOdataConnectorProfile.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.SAPOdataConnectorProfileProps">SAPOdataConnectorProfileProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.SAPOdataConnectorProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#appflow-cdk.SAPOdataConnectorProfile.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="appflow-cdk.SAPOdataConnectorProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="appflow-cdk.SAPOdataConnectorProfile.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="appflow-cdk.SAPOdataConnectorProfile.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.SAPOdataConnectorProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#appflow-cdk.SAPOdataConnectorProfile.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#appflow-cdk.SAPOdataConnectorProfile.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#appflow-cdk.SAPOdataConnectorProfile.fromConnectionProfileArn">fromConnectionProfileArn</a></code> | *No description.* |
| <code><a href="#appflow-cdk.SAPOdataConnectorProfile.fromConnectionProfileName">fromConnectionProfileName</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="appflow-cdk.SAPOdataConnectorProfile.isConstruct"></a>

```typescript
import { SAPOdataConnectorProfile } from 'appflow-cdk'

SAPOdataConnectorProfile.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="appflow-cdk.SAPOdataConnectorProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="appflow-cdk.SAPOdataConnectorProfile.isOwnedResource"></a>

```typescript
import { SAPOdataConnectorProfile } from 'appflow-cdk'

SAPOdataConnectorProfile.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.SAPOdataConnectorProfile.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="appflow-cdk.SAPOdataConnectorProfile.isResource"></a>

```typescript
import { SAPOdataConnectorProfile } from 'appflow-cdk'

SAPOdataConnectorProfile.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.SAPOdataConnectorProfile.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromConnectionProfileArn` <a name="fromConnectionProfileArn" id="appflow-cdk.SAPOdataConnectorProfile.fromConnectionProfileArn"></a>

```typescript
import { SAPOdataConnectorProfile } from 'appflow-cdk'

SAPOdataConnectorProfile.fromConnectionProfileArn(scope: Construct, id: string, arn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.SAPOdataConnectorProfile.fromConnectionProfileArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.SAPOdataConnectorProfile.fromConnectionProfileArn.parameter.id"></a>

- *Type:* string

---

###### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.SAPOdataConnectorProfile.fromConnectionProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `fromConnectionProfileName` <a name="fromConnectionProfileName" id="appflow-cdk.SAPOdataConnectorProfile.fromConnectionProfileName"></a>

```typescript
import { SAPOdataConnectorProfile } from 'appflow-cdk'

SAPOdataConnectorProfile.fromConnectionProfileName(scope: Construct, id: string, name: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.SAPOdataConnectorProfile.fromConnectionProfileName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.SAPOdataConnectorProfile.fromConnectionProfileName.parameter.id"></a>

- *Type:* string

---

###### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.SAPOdataConnectorProfile.fromConnectionProfileName.parameter.name"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SAPOdataConnectorProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#appflow-cdk.SAPOdataConnectorProfile.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#appflow-cdk.SAPOdataConnectorProfile.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#appflow-cdk.SAPOdataConnectorProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SAPOdataConnectorProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SAPOdataConnectorProfile.property.credentials">credentials</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="appflow-cdk.SAPOdataConnectorProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="appflow-cdk.SAPOdataConnectorProfile.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="appflow-cdk.SAPOdataConnectorProfile.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.SAPOdataConnectorProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.SAPOdataConnectorProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="appflow-cdk.SAPOdataConnectorProfile.property.credentials"></a>

```typescript
public readonly credentials: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---


### ServiceNowConnectorProfile <a name="ServiceNowConnectorProfile" id="appflow-cdk.ServiceNowConnectorProfile"></a>

#### Initializers <a name="Initializers" id="appflow-cdk.ServiceNowConnectorProfile.Initializer"></a>

```typescript
import { ServiceNowConnectorProfile } from 'appflow-cdk'

new ServiceNowConnectorProfile(scope: Construct, id: string, props: ServiceNowConnectorProfileProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ServiceNowConnectorProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#appflow-cdk.ServiceNowConnectorProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.ServiceNowConnectorProfile.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.ServiceNowConnectorProfileProps">ServiceNowConnectorProfileProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.ServiceNowConnectorProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.ServiceNowConnectorProfile.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.ServiceNowConnectorProfile.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.ServiceNowConnectorProfileProps">ServiceNowConnectorProfileProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.ServiceNowConnectorProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#appflow-cdk.ServiceNowConnectorProfile.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="appflow-cdk.ServiceNowConnectorProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="appflow-cdk.ServiceNowConnectorProfile.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="appflow-cdk.ServiceNowConnectorProfile.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.ServiceNowConnectorProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#appflow-cdk.ServiceNowConnectorProfile.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#appflow-cdk.ServiceNowConnectorProfile.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#appflow-cdk.ServiceNowConnectorProfile.fromConnectionProfileArn">fromConnectionProfileArn</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ServiceNowConnectorProfile.fromConnectionProfileName">fromConnectionProfileName</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="appflow-cdk.ServiceNowConnectorProfile.isConstruct"></a>

```typescript
import { ServiceNowConnectorProfile } from 'appflow-cdk'

ServiceNowConnectorProfile.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="appflow-cdk.ServiceNowConnectorProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="appflow-cdk.ServiceNowConnectorProfile.isOwnedResource"></a>

```typescript
import { ServiceNowConnectorProfile } from 'appflow-cdk'

ServiceNowConnectorProfile.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.ServiceNowConnectorProfile.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="appflow-cdk.ServiceNowConnectorProfile.isResource"></a>

```typescript
import { ServiceNowConnectorProfile } from 'appflow-cdk'

ServiceNowConnectorProfile.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.ServiceNowConnectorProfile.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromConnectionProfileArn` <a name="fromConnectionProfileArn" id="appflow-cdk.ServiceNowConnectorProfile.fromConnectionProfileArn"></a>

```typescript
import { ServiceNowConnectorProfile } from 'appflow-cdk'

ServiceNowConnectorProfile.fromConnectionProfileArn(scope: Construct, id: string, arn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.ServiceNowConnectorProfile.fromConnectionProfileArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.ServiceNowConnectorProfile.fromConnectionProfileArn.parameter.id"></a>

- *Type:* string

---

###### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.ServiceNowConnectorProfile.fromConnectionProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `fromConnectionProfileName` <a name="fromConnectionProfileName" id="appflow-cdk.ServiceNowConnectorProfile.fromConnectionProfileName"></a>

```typescript
import { ServiceNowConnectorProfile } from 'appflow-cdk'

ServiceNowConnectorProfile.fromConnectionProfileName(scope: Construct, id: string, name: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.ServiceNowConnectorProfile.fromConnectionProfileName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.ServiceNowConnectorProfile.fromConnectionProfileName.parameter.id"></a>

- *Type:* string

---

###### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.ServiceNowConnectorProfile.fromConnectionProfileName.parameter.name"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ServiceNowConnectorProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#appflow-cdk.ServiceNowConnectorProfile.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#appflow-cdk.ServiceNowConnectorProfile.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#appflow-cdk.ServiceNowConnectorProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.ServiceNowConnectorProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.ServiceNowConnectorProfile.property.credentials">credentials</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="appflow-cdk.ServiceNowConnectorProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="appflow-cdk.ServiceNowConnectorProfile.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="appflow-cdk.ServiceNowConnectorProfile.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.ServiceNowConnectorProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.ServiceNowConnectorProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="appflow-cdk.ServiceNowConnectorProfile.property.credentials"></a>

```typescript
public readonly credentials: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---


### SlackConnectorProfile <a name="SlackConnectorProfile" id="appflow-cdk.SlackConnectorProfile"></a>

#### Initializers <a name="Initializers" id="appflow-cdk.SlackConnectorProfile.Initializer"></a>

```typescript
import { SlackConnectorProfile } from 'appflow-cdk'

new SlackConnectorProfile(scope: Construct, id: string, props: SlackConnectorProfileProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SlackConnectorProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#appflow-cdk.SlackConnectorProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SlackConnectorProfile.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.SlackConnectorProfileProps">SlackConnectorProfileProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.SlackConnectorProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.SlackConnectorProfile.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.SlackConnectorProfile.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.SlackConnectorProfileProps">SlackConnectorProfileProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.SlackConnectorProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#appflow-cdk.SlackConnectorProfile.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="appflow-cdk.SlackConnectorProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="appflow-cdk.SlackConnectorProfile.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="appflow-cdk.SlackConnectorProfile.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.SlackConnectorProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#appflow-cdk.SlackConnectorProfile.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#appflow-cdk.SlackConnectorProfile.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#appflow-cdk.SlackConnectorProfile.fromConnectionProfileArn">fromConnectionProfileArn</a></code> | *No description.* |
| <code><a href="#appflow-cdk.SlackConnectorProfile.fromConnectionProfileName">fromConnectionProfileName</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="appflow-cdk.SlackConnectorProfile.isConstruct"></a>

```typescript
import { SlackConnectorProfile } from 'appflow-cdk'

SlackConnectorProfile.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="appflow-cdk.SlackConnectorProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="appflow-cdk.SlackConnectorProfile.isOwnedResource"></a>

```typescript
import { SlackConnectorProfile } from 'appflow-cdk'

SlackConnectorProfile.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.SlackConnectorProfile.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="appflow-cdk.SlackConnectorProfile.isResource"></a>

```typescript
import { SlackConnectorProfile } from 'appflow-cdk'

SlackConnectorProfile.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.SlackConnectorProfile.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromConnectionProfileArn` <a name="fromConnectionProfileArn" id="appflow-cdk.SlackConnectorProfile.fromConnectionProfileArn"></a>

```typescript
import { SlackConnectorProfile } from 'appflow-cdk'

SlackConnectorProfile.fromConnectionProfileArn(scope: Construct, id: string, arn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.SlackConnectorProfile.fromConnectionProfileArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.SlackConnectorProfile.fromConnectionProfileArn.parameter.id"></a>

- *Type:* string

---

###### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.SlackConnectorProfile.fromConnectionProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `fromConnectionProfileName` <a name="fromConnectionProfileName" id="appflow-cdk.SlackConnectorProfile.fromConnectionProfileName"></a>

```typescript
import { SlackConnectorProfile } from 'appflow-cdk'

SlackConnectorProfile.fromConnectionProfileName(scope: Construct, id: string, name: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.SlackConnectorProfile.fromConnectionProfileName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.SlackConnectorProfile.fromConnectionProfileName.parameter.id"></a>

- *Type:* string

---

###### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.SlackConnectorProfile.fromConnectionProfileName.parameter.name"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SlackConnectorProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#appflow-cdk.SlackConnectorProfile.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#appflow-cdk.SlackConnectorProfile.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#appflow-cdk.SlackConnectorProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SlackConnectorProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SlackConnectorProfile.property.credentials">credentials</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="appflow-cdk.SlackConnectorProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="appflow-cdk.SlackConnectorProfile.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="appflow-cdk.SlackConnectorProfile.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.SlackConnectorProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.SlackConnectorProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="appflow-cdk.SlackConnectorProfile.property.credentials"></a>

```typescript
public readonly credentials: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---


### SnowflakeConnectorProfile <a name="SnowflakeConnectorProfile" id="appflow-cdk.SnowflakeConnectorProfile"></a>

#### Initializers <a name="Initializers" id="appflow-cdk.SnowflakeConnectorProfile.Initializer"></a>

```typescript
import { SnowflakeConnectorProfile } from 'appflow-cdk'

new SnowflakeConnectorProfile(scope: Construct, id: string, props: SnowflakeConnectorProfileProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SnowflakeConnectorProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#appflow-cdk.SnowflakeConnectorProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SnowflakeConnectorProfile.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.SnowflakeConnectorProfileProps">SnowflakeConnectorProfileProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.SnowflakeConnectorProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.SnowflakeConnectorProfile.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.SnowflakeConnectorProfile.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.SnowflakeConnectorProfileProps">SnowflakeConnectorProfileProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.SnowflakeConnectorProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#appflow-cdk.SnowflakeConnectorProfile.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="appflow-cdk.SnowflakeConnectorProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="appflow-cdk.SnowflakeConnectorProfile.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="appflow-cdk.SnowflakeConnectorProfile.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.SnowflakeConnectorProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#appflow-cdk.SnowflakeConnectorProfile.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#appflow-cdk.SnowflakeConnectorProfile.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#appflow-cdk.SnowflakeConnectorProfile.fromConnectionProfileArn">fromConnectionProfileArn</a></code> | *No description.* |
| <code><a href="#appflow-cdk.SnowflakeConnectorProfile.fromConnectionProfileName">fromConnectionProfileName</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="appflow-cdk.SnowflakeConnectorProfile.isConstruct"></a>

```typescript
import { SnowflakeConnectorProfile } from 'appflow-cdk'

SnowflakeConnectorProfile.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="appflow-cdk.SnowflakeConnectorProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="appflow-cdk.SnowflakeConnectorProfile.isOwnedResource"></a>

```typescript
import { SnowflakeConnectorProfile } from 'appflow-cdk'

SnowflakeConnectorProfile.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.SnowflakeConnectorProfile.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="appflow-cdk.SnowflakeConnectorProfile.isResource"></a>

```typescript
import { SnowflakeConnectorProfile } from 'appflow-cdk'

SnowflakeConnectorProfile.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.SnowflakeConnectorProfile.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromConnectionProfileArn` <a name="fromConnectionProfileArn" id="appflow-cdk.SnowflakeConnectorProfile.fromConnectionProfileArn"></a>

```typescript
import { SnowflakeConnectorProfile } from 'appflow-cdk'

SnowflakeConnectorProfile.fromConnectionProfileArn(scope: Construct, id: string, arn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.SnowflakeConnectorProfile.fromConnectionProfileArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.SnowflakeConnectorProfile.fromConnectionProfileArn.parameter.id"></a>

- *Type:* string

---

###### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.SnowflakeConnectorProfile.fromConnectionProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `fromConnectionProfileName` <a name="fromConnectionProfileName" id="appflow-cdk.SnowflakeConnectorProfile.fromConnectionProfileName"></a>

```typescript
import { SnowflakeConnectorProfile } from 'appflow-cdk'

SnowflakeConnectorProfile.fromConnectionProfileName(scope: Construct, id: string, name: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.SnowflakeConnectorProfile.fromConnectionProfileName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.SnowflakeConnectorProfile.fromConnectionProfileName.parameter.id"></a>

- *Type:* string

---

###### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.SnowflakeConnectorProfile.fromConnectionProfileName.parameter.name"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SnowflakeConnectorProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#appflow-cdk.SnowflakeConnectorProfile.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#appflow-cdk.SnowflakeConnectorProfile.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#appflow-cdk.SnowflakeConnectorProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SnowflakeConnectorProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SnowflakeConnectorProfile.property.credentials">credentials</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |
| <code><a href="#appflow-cdk.SnowflakeConnectorProfile.property.integrationRole">integrationRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="appflow-cdk.SnowflakeConnectorProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="appflow-cdk.SnowflakeConnectorProfile.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="appflow-cdk.SnowflakeConnectorProfile.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.SnowflakeConnectorProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.SnowflakeConnectorProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="appflow-cdk.SnowflakeConnectorProfile.property.credentials"></a>

```typescript
public readonly credentials: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---

##### `integrationRole`<sup>Optional</sup> <a name="integrationRole" id="appflow-cdk.SnowflakeConnectorProfile.property.integrationRole"></a>

```typescript
public readonly integrationRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---


### TriggeredFlowBase <a name="TriggeredFlowBase" id="appflow-cdk.TriggeredFlowBase"></a>

- *Implements:* <a href="#appflow-cdk.IFlow">IFlow</a>

#### Initializers <a name="Initializers" id="appflow-cdk.TriggeredFlowBase.Initializer"></a>

```typescript
import { TriggeredFlowBase } from 'appflow-cdk'

new TriggeredFlowBase(scope: Construct, id: string, props: FlowBaseProps, autoActivate?: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.TriggeredFlowBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#appflow-cdk.TriggeredFlowBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.TriggeredFlowBase.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.FlowBaseProps">FlowBaseProps</a></code> | *No description.* |
| <code><a href="#appflow-cdk.TriggeredFlowBase.Initializer.parameter.autoActivate">autoActivate</a></code> | <code>boolean</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.TriggeredFlowBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.TriggeredFlowBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.TriggeredFlowBase.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.FlowBaseProps">FlowBaseProps</a>

---

##### `autoActivate`<sup>Optional</sup> <a name="autoActivate" id="appflow-cdk.TriggeredFlowBase.Initializer.parameter.autoActivate"></a>

- *Type:* boolean

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.TriggeredFlowBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#appflow-cdk.TriggeredFlowBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#appflow-cdk.TriggeredFlowBase.onEvent">onEvent</a></code> | *No description.* |
| <code><a href="#appflow-cdk.TriggeredFlowBase.onFishined">onFishined</a></code> | *No description.* |
| <code><a href="#appflow-cdk.TriggeredFlowBase.onStarted">onStarted</a></code> | *No description.* |
| <code><a href="#appflow-cdk.TriggeredFlowBase.onDeactivated">onDeactivated</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="appflow-cdk.TriggeredFlowBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="appflow-cdk.TriggeredFlowBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="appflow-cdk.TriggeredFlowBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `onEvent` <a name="onEvent" id="appflow-cdk.TriggeredFlowBase.onEvent"></a>

```typescript
public onEvent(id: string, options?: OnEventOptions): Rule
```

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.TriggeredFlowBase.onEvent.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="appflow-cdk.TriggeredFlowBase.onEvent.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_events.OnEventOptions

---

##### `onFishined` <a name="onFishined" id="appflow-cdk.TriggeredFlowBase.onFishined"></a>

```typescript
public onFishined(id: string, options?: OnEventOptions): Rule
```

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.TriggeredFlowBase.onFishined.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="appflow-cdk.TriggeredFlowBase.onFishined.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_events.OnEventOptions

---

##### `onStarted` <a name="onStarted" id="appflow-cdk.TriggeredFlowBase.onStarted"></a>

```typescript
public onStarted(id: string, options?: OnEventOptions): Rule
```

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.TriggeredFlowBase.onStarted.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="appflow-cdk.TriggeredFlowBase.onStarted.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_events.OnEventOptions

---

##### `onDeactivated` <a name="onDeactivated" id="appflow-cdk.TriggeredFlowBase.onDeactivated"></a>

```typescript
public onDeactivated(id: string, options?: OnEventOptions): Rule
```

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.TriggeredFlowBase.onDeactivated.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="appflow-cdk.TriggeredFlowBase.onDeactivated.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_events.OnEventOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.TriggeredFlowBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#appflow-cdk.TriggeredFlowBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#appflow-cdk.TriggeredFlowBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="appflow-cdk.TriggeredFlowBase.isConstruct"></a>

```typescript
import { TriggeredFlowBase } from 'appflow-cdk'

TriggeredFlowBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="appflow-cdk.TriggeredFlowBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="appflow-cdk.TriggeredFlowBase.isOwnedResource"></a>

```typescript
import { TriggeredFlowBase } from 'appflow-cdk'

TriggeredFlowBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.TriggeredFlowBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="appflow-cdk.TriggeredFlowBase.isResource"></a>

```typescript
import { TriggeredFlowBase } from 'appflow-cdk'

TriggeredFlowBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.TriggeredFlowBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.TriggeredFlowBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#appflow-cdk.TriggeredFlowBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#appflow-cdk.TriggeredFlowBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#appflow-cdk.TriggeredFlowBase.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.TriggeredFlowBase.property.type">type</a></code> | <code><a href="#appflow-cdk.FlowType">FlowType</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="appflow-cdk.TriggeredFlowBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="appflow-cdk.TriggeredFlowBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="appflow-cdk.TriggeredFlowBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.TriggeredFlowBase.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="appflow-cdk.TriggeredFlowBase.property.type"></a>

```typescript
public readonly type: FlowType;
```

- *Type:* <a href="#appflow-cdk.FlowType">FlowType</a>

---


### ZendeskConnectorProfile <a name="ZendeskConnectorProfile" id="appflow-cdk.ZendeskConnectorProfile"></a>

#### Initializers <a name="Initializers" id="appflow-cdk.ZendeskConnectorProfile.Initializer"></a>

```typescript
import { ZendeskConnectorProfile } from 'appflow-cdk'

new ZendeskConnectorProfile(scope: Construct, id: string, props: ZendeskConnectorProfileProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ZendeskConnectorProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#appflow-cdk.ZendeskConnectorProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.ZendeskConnectorProfile.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.ZendeskConnectorProfileProps">ZendeskConnectorProfileProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.ZendeskConnectorProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.ZendeskConnectorProfile.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.ZendeskConnectorProfile.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.ZendeskConnectorProfileProps">ZendeskConnectorProfileProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.ZendeskConnectorProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#appflow-cdk.ZendeskConnectorProfile.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="appflow-cdk.ZendeskConnectorProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="appflow-cdk.ZendeskConnectorProfile.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="appflow-cdk.ZendeskConnectorProfile.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.ZendeskConnectorProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#appflow-cdk.ZendeskConnectorProfile.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#appflow-cdk.ZendeskConnectorProfile.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#appflow-cdk.ZendeskConnectorProfile.fromConnectionProfileArn">fromConnectionProfileArn</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ZendeskConnectorProfile.fromConnectionProfileName">fromConnectionProfileName</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="appflow-cdk.ZendeskConnectorProfile.isConstruct"></a>

```typescript
import { ZendeskConnectorProfile } from 'appflow-cdk'

ZendeskConnectorProfile.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="appflow-cdk.ZendeskConnectorProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="appflow-cdk.ZendeskConnectorProfile.isOwnedResource"></a>

```typescript
import { ZendeskConnectorProfile } from 'appflow-cdk'

ZendeskConnectorProfile.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.ZendeskConnectorProfile.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="appflow-cdk.ZendeskConnectorProfile.isResource"></a>

```typescript
import { ZendeskConnectorProfile } from 'appflow-cdk'

ZendeskConnectorProfile.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="appflow-cdk.ZendeskConnectorProfile.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromConnectionProfileArn` <a name="fromConnectionProfileArn" id="appflow-cdk.ZendeskConnectorProfile.fromConnectionProfileArn"></a>

```typescript
import { ZendeskConnectorProfile } from 'appflow-cdk'

ZendeskConnectorProfile.fromConnectionProfileArn(scope: Construct, id: string, arn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.ZendeskConnectorProfile.fromConnectionProfileArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.ZendeskConnectorProfile.fromConnectionProfileArn.parameter.id"></a>

- *Type:* string

---

###### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.ZendeskConnectorProfile.fromConnectionProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `fromConnectionProfileName` <a name="fromConnectionProfileName" id="appflow-cdk.ZendeskConnectorProfile.fromConnectionProfileName"></a>

```typescript
import { ZendeskConnectorProfile } from 'appflow-cdk'

ZendeskConnectorProfile.fromConnectionProfileName(scope: Construct, id: string, name: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.ZendeskConnectorProfile.fromConnectionProfileName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="appflow-cdk.ZendeskConnectorProfile.fromConnectionProfileName.parameter.id"></a>

- *Type:* string

---

###### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.ZendeskConnectorProfile.fromConnectionProfileName.parameter.name"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ZendeskConnectorProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#appflow-cdk.ZendeskConnectorProfile.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#appflow-cdk.ZendeskConnectorProfile.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#appflow-cdk.ZendeskConnectorProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.ZendeskConnectorProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.ZendeskConnectorProfile.property.credentials">credentials</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="appflow-cdk.ZendeskConnectorProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="appflow-cdk.ZendeskConnectorProfile.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="appflow-cdk.ZendeskConnectorProfile.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.ZendeskConnectorProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.ZendeskConnectorProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="appflow-cdk.ZendeskConnectorProfile.property.credentials"></a>

```typescript
public readonly credentials: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---


## Structs <a name="Structs" id="Structs"></a>

### ConnectorProfileProps <a name="ConnectorProfileProps" id="appflow-cdk.ConnectorProfileProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.ConnectorProfileProps.Initializer"></a>

```typescript
import { ConnectorProfileProps } from 'appflow-cdk'

const connectorProfileProps: ConnectorProfileProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ConnectorProfileProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | TODO: think if this should be here as not all connector profiles have that. |
| <code><a href="#appflow-cdk.ConnectorProfileProps.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `key`<sup>Optional</sup> <a name="key" id="appflow-cdk.ConnectorProfileProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

TODO: think if this should be here as not all connector profiles have that.

---

##### `name`<sup>Optional</sup> <a name="name" id="appflow-cdk.ConnectorProfileProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

### DataPullConfig <a name="DataPullConfig" id="appflow-cdk.DataPullConfig"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.DataPullConfig.Initializer"></a>

```typescript
import { DataPullConfig } from 'appflow-cdk'

const dataPullConfig: DataPullConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.DataPullConfig.property.mode">mode</a></code> | <code><a href="#appflow-cdk.DataPullMode">DataPullMode</a></code> | *No description.* |
| <code><a href="#appflow-cdk.DataPullConfig.property.timestampField">timestampField</a></code> | <code>string</code> | The name of the field to use as a timestamp for recurring incremental flows. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="appflow-cdk.DataPullConfig.property.mode"></a>

```typescript
public readonly mode: DataPullMode;
```

- *Type:* <a href="#appflow-cdk.DataPullMode">DataPullMode</a>

---

##### `timestampField`<sup>Optional</sup> <a name="timestampField" id="appflow-cdk.DataPullConfig.property.timestampField"></a>

```typescript
public readonly timestampField: string;
```

- *Type:* string

The name of the field to use as a timestamp for recurring incremental flows.

The default field is set per particular @see ISource.

---

### ErrorHandlingConfiguration <a name="ErrorHandlingConfiguration" id="appflow-cdk.ErrorHandlingConfiguration"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.ErrorHandlingConfiguration.Initializer"></a>

```typescript
import { ErrorHandlingConfiguration } from 'appflow-cdk'

const errorHandlingConfiguration: ErrorHandlingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ErrorHandlingConfiguration.property.errorLocation">errorLocation</a></code> | <code><a href="#appflow-cdk.S3Location">S3Location</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ErrorHandlingConfiguration.property.failOnFirstError">failOnFirstError</a></code> | <code>boolean</code> | *No description.* |

---

##### `errorLocation`<sup>Optional</sup> <a name="errorLocation" id="appflow-cdk.ErrorHandlingConfiguration.property.errorLocation"></a>

```typescript
public readonly errorLocation: S3Location;
```

- *Type:* <a href="#appflow-cdk.S3Location">S3Location</a>

---

##### `failOnFirstError`<sup>Optional</sup> <a name="failOnFirstError" id="appflow-cdk.ErrorHandlingConfiguration.property.failOnFirstError"></a>

```typescript
public readonly failOnFirstError: boolean;
```

- *Type:* boolean

---

### EventBridgeDestinationProps <a name="EventBridgeDestinationProps" id="appflow-cdk.EventBridgeDestinationProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.EventBridgeDestinationProps.Initializer"></a>

```typescript
import { EventBridgeDestinationProps } from 'appflow-cdk'

const eventBridgeDestinationProps: EventBridgeDestinationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.EventBridgeDestinationProps.property.partnerBus">partnerBus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.EventBridgeDestinationProps.property.errorHandling">errorHandling</a></code> | <code><a href="#appflow-cdk.ErrorHandlingConfiguration">ErrorHandlingConfiguration</a></code> | *No description.* |

---

##### `partnerBus`<sup>Required</sup> <a name="partnerBus" id="appflow-cdk.EventBridgeDestinationProps.property.partnerBus"></a>

```typescript
public readonly partnerBus: string;
```

- *Type:* string

---

##### `errorHandling`<sup>Optional</sup> <a name="errorHandling" id="appflow-cdk.EventBridgeDestinationProps.property.errorHandling"></a>

```typescript
public readonly errorHandling: ErrorHandlingConfiguration;
```

- *Type:* <a href="#appflow-cdk.ErrorHandlingConfiguration">ErrorHandlingConfiguration</a>

---

### Field <a name="Field" id="appflow-cdk.Field"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.Field.Initializer"></a>

```typescript
import { Field } from 'appflow-cdk'

const field: Field = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.Field.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.Field.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.Field.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="appflow-cdk.Field.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

### FlowBaseProps <a name="FlowBaseProps" id="appflow-cdk.FlowBaseProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.FlowBaseProps.Initializer"></a>

```typescript
import { FlowBaseProps } from 'appflow-cdk'

const flowBaseProps: FlowBaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.FlowBaseProps.property.destination">destination</a></code> | <code><a href="#appflow-cdk.IDestination">IDestination</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FlowBaseProps.property.mappings">mappings</a></code> | <code><a href="#appflow-cdk.IMapping">IMapping</a>[]</code> | *No description.* |
| <code><a href="#appflow-cdk.FlowBaseProps.property.source">source</a></code> | <code><a href="#appflow-cdk.ISource">ISource</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FlowBaseProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.FlowBaseProps.property.filters">filters</a></code> | <code><a href="#appflow-cdk.IFilter">IFilter</a>[]</code> | *No description.* |
| <code><a href="#appflow-cdk.FlowBaseProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#appflow-cdk.FlowBaseProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.FlowBaseProps.property.transforms">transforms</a></code> | <code><a href="#appflow-cdk.ITransform">ITransform</a>[]</code> | *No description.* |
| <code><a href="#appflow-cdk.FlowBaseProps.property.validations">validations</a></code> | <code><a href="#appflow-cdk.IValidation">IValidation</a>[]</code> | *No description.* |
| <code><a href="#appflow-cdk.FlowBaseProps.property.type">type</a></code> | <code><a href="#appflow-cdk.FlowType">FlowType</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FlowBaseProps.property.triggerConfig">triggerConfig</a></code> | <code><a href="#appflow-cdk.TriggerConfig">TriggerConfig</a></code> | *No description.* |

---

##### `destination`<sup>Required</sup> <a name="destination" id="appflow-cdk.FlowBaseProps.property.destination"></a>

```typescript
public readonly destination: IDestination;
```

- *Type:* <a href="#appflow-cdk.IDestination">IDestination</a>

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="appflow-cdk.FlowBaseProps.property.mappings"></a>

```typescript
public readonly mappings: IMapping[];
```

- *Type:* <a href="#appflow-cdk.IMapping">IMapping</a>[]

---

##### `source`<sup>Required</sup> <a name="source" id="appflow-cdk.FlowBaseProps.property.source"></a>

```typescript
public readonly source: ISource;
```

- *Type:* <a href="#appflow-cdk.ISource">ISource</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="appflow-cdk.FlowBaseProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `filters`<sup>Optional</sup> <a name="filters" id="appflow-cdk.FlowBaseProps.property.filters"></a>

```typescript
public readonly filters: IFilter[];
```

- *Type:* <a href="#appflow-cdk.IFilter">IFilter</a>[]

---

##### `key`<sup>Optional</sup> <a name="key" id="appflow-cdk.FlowBaseProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `name`<sup>Optional</sup> <a name="name" id="appflow-cdk.FlowBaseProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="appflow-cdk.FlowBaseProps.property.transforms"></a>

```typescript
public readonly transforms: ITransform[];
```

- *Type:* <a href="#appflow-cdk.ITransform">ITransform</a>[]

---

##### `validations`<sup>Optional</sup> <a name="validations" id="appflow-cdk.FlowBaseProps.property.validations"></a>

```typescript
public readonly validations: IValidation[];
```

- *Type:* <a href="#appflow-cdk.IValidation">IValidation</a>[]

---

##### `type`<sup>Required</sup> <a name="type" id="appflow-cdk.FlowBaseProps.property.type"></a>

```typescript
public readonly type: FlowType;
```

- *Type:* <a href="#appflow-cdk.FlowType">FlowType</a>

---

##### `triggerConfig`<sup>Optional</sup> <a name="triggerConfig" id="appflow-cdk.FlowBaseProps.property.triggerConfig"></a>

```typescript
public readonly triggerConfig: TriggerConfig;
```

- *Type:* <a href="#appflow-cdk.TriggerConfig">TriggerConfig</a>

---

### FlowProps <a name="FlowProps" id="appflow-cdk.FlowProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.FlowProps.Initializer"></a>

```typescript
import { FlowProps } from 'appflow-cdk'

const flowProps: FlowProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.FlowProps.property.destination">destination</a></code> | <code><a href="#appflow-cdk.IDestination">IDestination</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FlowProps.property.mappings">mappings</a></code> | <code><a href="#appflow-cdk.IMapping">IMapping</a>[]</code> | *No description.* |
| <code><a href="#appflow-cdk.FlowProps.property.source">source</a></code> | <code><a href="#appflow-cdk.ISource">ISource</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FlowProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.FlowProps.property.filters">filters</a></code> | <code><a href="#appflow-cdk.IFilter">IFilter</a>[]</code> | *No description.* |
| <code><a href="#appflow-cdk.FlowProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#appflow-cdk.FlowProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.FlowProps.property.transforms">transforms</a></code> | <code><a href="#appflow-cdk.ITransform">ITransform</a>[]</code> | *No description.* |
| <code><a href="#appflow-cdk.FlowProps.property.validations">validations</a></code> | <code><a href="#appflow-cdk.IValidation">IValidation</a>[]</code> | *No description.* |

---

##### `destination`<sup>Required</sup> <a name="destination" id="appflow-cdk.FlowProps.property.destination"></a>

```typescript
public readonly destination: IDestination;
```

- *Type:* <a href="#appflow-cdk.IDestination">IDestination</a>

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="appflow-cdk.FlowProps.property.mappings"></a>

```typescript
public readonly mappings: IMapping[];
```

- *Type:* <a href="#appflow-cdk.IMapping">IMapping</a>[]

---

##### `source`<sup>Required</sup> <a name="source" id="appflow-cdk.FlowProps.property.source"></a>

```typescript
public readonly source: ISource;
```

- *Type:* <a href="#appflow-cdk.ISource">ISource</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="appflow-cdk.FlowProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `filters`<sup>Optional</sup> <a name="filters" id="appflow-cdk.FlowProps.property.filters"></a>

```typescript
public readonly filters: IFilter[];
```

- *Type:* <a href="#appflow-cdk.IFilter">IFilter</a>[]

---

##### `key`<sup>Optional</sup> <a name="key" id="appflow-cdk.FlowProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `name`<sup>Optional</sup> <a name="name" id="appflow-cdk.FlowProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="appflow-cdk.FlowProps.property.transforms"></a>

```typescript
public readonly transforms: ITransform[];
```

- *Type:* <a href="#appflow-cdk.ITransform">ITransform</a>[]

---

##### `validations`<sup>Optional</sup> <a name="validations" id="appflow-cdk.FlowProps.property.validations"></a>

```typescript
public readonly validations: IValidation[];
```

- *Type:* <a href="#appflow-cdk.IValidation">IValidation</a>[]

---

### GoogleAnalytics4ConnectorProfileProps <a name="GoogleAnalytics4ConnectorProfileProps" id="appflow-cdk.GoogleAnalytics4ConnectorProfileProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.GoogleAnalytics4ConnectorProfileProps.Initializer"></a>

```typescript
import { GoogleAnalytics4ConnectorProfileProps } from 'appflow-cdk'

const googleAnalytics4ConnectorProfileProps: GoogleAnalytics4ConnectorProfileProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.GoogleAnalytics4ConnectorProfileProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | TODO: think if this should be here as not all connector profiles have that. |
| <code><a href="#appflow-cdk.GoogleAnalytics4ConnectorProfileProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.GoogleAnalytics4ConnectorProfileProps.property.oAuth">oAuth</a></code> | <code><a href="#appflow-cdk.GoogleAnalytics4OAuthSettings">GoogleAnalytics4OAuthSettings</a></code> | *No description.* |

---

##### `key`<sup>Optional</sup> <a name="key" id="appflow-cdk.GoogleAnalytics4ConnectorProfileProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

TODO: think if this should be here as not all connector profiles have that.

---

##### `name`<sup>Optional</sup> <a name="name" id="appflow-cdk.GoogleAnalytics4ConnectorProfileProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oAuth`<sup>Required</sup> <a name="oAuth" id="appflow-cdk.GoogleAnalytics4ConnectorProfileProps.property.oAuth"></a>

```typescript
public readonly oAuth: GoogleAnalytics4OAuthSettings;
```

- *Type:* <a href="#appflow-cdk.GoogleAnalytics4OAuthSettings">GoogleAnalytics4OAuthSettings</a>

---

### GoogleAnalytics4OAuthEndpointsSettings <a name="GoogleAnalytics4OAuthEndpointsSettings" id="appflow-cdk.GoogleAnalytics4OAuthEndpointsSettings"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.GoogleAnalytics4OAuthEndpointsSettings.Initializer"></a>

```typescript
import { GoogleAnalytics4OAuthEndpointsSettings } from 'appflow-cdk'

const googleAnalytics4OAuthEndpointsSettings: GoogleAnalytics4OAuthEndpointsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.GoogleAnalytics4OAuthEndpointsSettings.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `token`<sup>Required</sup> <a name="token" id="appflow-cdk.GoogleAnalytics4OAuthEndpointsSettings.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

### GoogleAnalytics4OAuthFlows <a name="GoogleAnalytics4OAuthFlows" id="appflow-cdk.GoogleAnalytics4OAuthFlows"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.GoogleAnalytics4OAuthFlows.Initializer"></a>

```typescript
import { GoogleAnalytics4OAuthFlows } from 'appflow-cdk'

const googleAnalytics4OAuthFlows: GoogleAnalytics4OAuthFlows = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.GoogleAnalytics4OAuthFlows.property.refreshTokenGrant">refreshTokenGrant</a></code> | <code><a href="#appflow-cdk.GoogleAnalytics4OAuthRefreshTokenGrantFlowSettings">GoogleAnalytics4OAuthRefreshTokenGrantFlowSettings</a></code> | *No description.* |

---

##### `refreshTokenGrant`<sup>Required</sup> <a name="refreshTokenGrant" id="appflow-cdk.GoogleAnalytics4OAuthFlows.property.refreshTokenGrant"></a>

```typescript
public readonly refreshTokenGrant: GoogleAnalytics4OAuthRefreshTokenGrantFlowSettings;
```

- *Type:* <a href="#appflow-cdk.GoogleAnalytics4OAuthRefreshTokenGrantFlowSettings">GoogleAnalytics4OAuthRefreshTokenGrantFlowSettings</a>

---

### GoogleAnalytics4OAuthRefreshTokenGrantFlowSettings <a name="GoogleAnalytics4OAuthRefreshTokenGrantFlowSettings" id="appflow-cdk.GoogleAnalytics4OAuthRefreshTokenGrantFlowSettings"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.GoogleAnalytics4OAuthRefreshTokenGrantFlowSettings.Initializer"></a>

```typescript
import { GoogleAnalytics4OAuthRefreshTokenGrantFlowSettings } from 'appflow-cdk'

const googleAnalytics4OAuthRefreshTokenGrantFlowSettings: GoogleAnalytics4OAuthRefreshTokenGrantFlowSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.GoogleAnalytics4OAuthRefreshTokenGrantFlowSettings.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.GoogleAnalytics4OAuthRefreshTokenGrantFlowSettings.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.GoogleAnalytics4OAuthRefreshTokenGrantFlowSettings.property.redirectUri">redirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.GoogleAnalytics4OAuthRefreshTokenGrantFlowSettings.property.refreshToken">refreshToken</a></code> | <code>string</code> | *No description.* |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="appflow-cdk.GoogleAnalytics4OAuthRefreshTokenGrantFlowSettings.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="appflow-cdk.GoogleAnalytics4OAuthRefreshTokenGrantFlowSettings.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `redirectUri`<sup>Optional</sup> <a name="redirectUri" id="appflow-cdk.GoogleAnalytics4OAuthRefreshTokenGrantFlowSettings.property.redirectUri"></a>

```typescript
public readonly redirectUri: string;
```

- *Type:* string

---

##### `refreshToken`<sup>Optional</sup> <a name="refreshToken" id="appflow-cdk.GoogleAnalytics4OAuthRefreshTokenGrantFlowSettings.property.refreshToken"></a>

```typescript
public readonly refreshToken: string;
```

- *Type:* string

---

### GoogleAnalytics4OAuthSettings <a name="GoogleAnalytics4OAuthSettings" id="appflow-cdk.GoogleAnalytics4OAuthSettings"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.GoogleAnalytics4OAuthSettings.Initializer"></a>

```typescript
import { GoogleAnalytics4OAuthSettings } from 'appflow-cdk'

const googleAnalytics4OAuthSettings: GoogleAnalytics4OAuthSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.GoogleAnalytics4OAuthSettings.property.endpoints">endpoints</a></code> | <code><a href="#appflow-cdk.GoogleAnalytics4OAuthEndpointsSettings">GoogleAnalytics4OAuthEndpointsSettings</a></code> | *No description.* |
| <code><a href="#appflow-cdk.GoogleAnalytics4OAuthSettings.property.accessToken">accessToken</a></code> | <code>string</code> | The access token to be used when interacting with Google Analytics 4. |
| <code><a href="#appflow-cdk.GoogleAnalytics4OAuthSettings.property.flows">flows</a></code> | <code><a href="#appflow-cdk.GoogleAnalytics4OAuthFlows">GoogleAnalytics4OAuthFlows</a></code> | *No description.* |

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="appflow-cdk.GoogleAnalytics4OAuthSettings.property.endpoints"></a>

```typescript
public readonly endpoints: GoogleAnalytics4OAuthEndpointsSettings;
```

- *Type:* <a href="#appflow-cdk.GoogleAnalytics4OAuthEndpointsSettings">GoogleAnalytics4OAuthEndpointsSettings</a>

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="appflow-cdk.GoogleAnalytics4OAuthSettings.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

The access token to be used when interacting with Google Analytics 4.

Note that if only the access token is provided AppFlow is not able to retrieve a fresh access token when the current one is expired

---

##### `flows`<sup>Optional</sup> <a name="flows" id="appflow-cdk.GoogleAnalytics4OAuthSettings.property.flows"></a>

```typescript
public readonly flows: GoogleAnalytics4OAuthFlows;
```

- *Type:* <a href="#appflow-cdk.GoogleAnalytics4OAuthFlows">GoogleAnalytics4OAuthFlows</a>

---

### GoogleAnalytics4SourceProps <a name="GoogleAnalytics4SourceProps" id="appflow-cdk.GoogleAnalytics4SourceProps"></a>

Properties of a Google Analytics v4 Source.

#### Initializer <a name="Initializer" id="appflow-cdk.GoogleAnalytics4SourceProps.Initializer"></a>

```typescript
import { GoogleAnalytics4SourceProps } from 'appflow-cdk'

const googleAnalytics4SourceProps: GoogleAnalytics4SourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.GoogleAnalytics4SourceProps.property.apiVersion">apiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.GoogleAnalytics4SourceProps.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.GoogleAnalytics4SourceProps.property.profile">profile</a></code> | <code><a href="#appflow-cdk.GoogleAnalytics4ConnectorProfile">GoogleAnalytics4ConnectorProfile</a></code> | *No description.* |

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="appflow-cdk.GoogleAnalytics4SourceProps.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="appflow-cdk.GoogleAnalytics4SourceProps.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `profile`<sup>Required</sup> <a name="profile" id="appflow-cdk.GoogleAnalytics4SourceProps.property.profile"></a>

```typescript
public readonly profile: GoogleAnalytics4ConnectorProfile;
```

- *Type:* <a href="#appflow-cdk.GoogleAnalytics4ConnectorProfile">GoogleAnalytics4ConnectorProfile</a>

---

### MapAllConfig <a name="MapAllConfig" id="appflow-cdk.MapAllConfig"></a>

A helper interface.

#### Initializer <a name="Initializer" id="appflow-cdk.MapAllConfig.Initializer"></a>

```typescript
import { MapAllConfig } from 'appflow-cdk'

const mapAllConfig: MapAllConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.MapAllConfig.property.exclude">exclude</a></code> | <code>string[]</code> | *No description.* |

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="appflow-cdk.MapAllConfig.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

---

### MarketoConnectorCredentials <a name="MarketoConnectorCredentials" id="appflow-cdk.MarketoConnectorCredentials"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.MarketoConnectorCredentials.Initializer"></a>

```typescript
import { MarketoConnectorCredentials } from 'appflow-cdk'

const marketoConnectorCredentials: MarketoConnectorCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.MarketoConnectorCredentials.property.oAuth">oAuth</a></code> | <code><a href="#appflow-cdk.MarketoOAuthSettings">MarketoOAuthSettings</a></code> | *No description.* |

---

##### `oAuth`<sup>Required</sup> <a name="oAuth" id="appflow-cdk.MarketoConnectorCredentials.property.oAuth"></a>

```typescript
public readonly oAuth: MarketoOAuthSettings;
```

- *Type:* <a href="#appflow-cdk.MarketoOAuthSettings">MarketoOAuthSettings</a>

---

### MarketoConnectorProfileProps <a name="MarketoConnectorProfileProps" id="appflow-cdk.MarketoConnectorProfileProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.MarketoConnectorProfileProps.Initializer"></a>

```typescript
import { MarketoConnectorProfileProps } from 'appflow-cdk'

const marketoConnectorProfileProps: MarketoConnectorProfileProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.MarketoConnectorProfileProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | TODO: think if this should be here as not all connector profiles have that. |
| <code><a href="#appflow-cdk.MarketoConnectorProfileProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.MarketoConnectorProfileProps.property.credentials">credentials</a></code> | <code><a href="#appflow-cdk.MarketoConnectorCredentials">MarketoConnectorCredentials</a></code> | *No description.* |
| <code><a href="#appflow-cdk.MarketoConnectorProfileProps.property.properties">properties</a></code> | <code><a href="#appflow-cdk.MarketoConnectorProperties">MarketoConnectorProperties</a></code> | *No description.* |

---

##### `key`<sup>Optional</sup> <a name="key" id="appflow-cdk.MarketoConnectorProfileProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

TODO: think if this should be here as not all connector profiles have that.

---

##### `name`<sup>Optional</sup> <a name="name" id="appflow-cdk.MarketoConnectorProfileProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="appflow-cdk.MarketoConnectorProfileProps.property.credentials"></a>

```typescript
public readonly credentials: MarketoConnectorCredentials;
```

- *Type:* <a href="#appflow-cdk.MarketoConnectorCredentials">MarketoConnectorCredentials</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="appflow-cdk.MarketoConnectorProfileProps.property.properties"></a>

```typescript
public readonly properties: MarketoConnectorProperties;
```

- *Type:* <a href="#appflow-cdk.MarketoConnectorProperties">MarketoConnectorProperties</a>

---

### MarketoConnectorProperties <a name="MarketoConnectorProperties" id="appflow-cdk.MarketoConnectorProperties"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.MarketoConnectorProperties.Initializer"></a>

```typescript
import { MarketoConnectorProperties } from 'appflow-cdk'

const marketoConnectorProperties: MarketoConnectorProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.MarketoConnectorProperties.property.instanceUrl">instanceUrl</a></code> | <code>string</code> | *No description.* |

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="appflow-cdk.MarketoConnectorProperties.property.instanceUrl"></a>

```typescript
public readonly instanceUrl: string;
```

- *Type:* string

---

### MarketoOAuthSettings <a name="MarketoOAuthSettings" id="appflow-cdk.MarketoOAuthSettings"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.MarketoOAuthSettings.Initializer"></a>

```typescript
import { MarketoOAuthSettings } from 'appflow-cdk'

const marketoOAuthSettings: MarketoOAuthSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.MarketoOAuthSettings.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.MarketoOAuthSettings.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.MarketoOAuthSettings.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="appflow-cdk.MarketoOAuthSettings.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="appflow-cdk.MarketoOAuthSettings.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="appflow-cdk.MarketoOAuthSettings.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

### MarketoSourceProps <a name="MarketoSourceProps" id="appflow-cdk.MarketoSourceProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.MarketoSourceProps.Initializer"></a>

```typescript
import { MarketoSourceProps } from 'appflow-cdk'

const marketoSourceProps: MarketoSourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.MarketoSourceProps.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.MarketoSourceProps.property.profile">profile</a></code> | <code><a href="#appflow-cdk.MarketoConnectorProfile">MarketoConnectorProfile</a></code> | *No description.* |
| <code><a href="#appflow-cdk.MarketoSourceProps.property.apiVersion">apiVersion</a></code> | <code>string</code> | *No description.* |

---

##### `object`<sup>Required</sup> <a name="object" id="appflow-cdk.MarketoSourceProps.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `profile`<sup>Required</sup> <a name="profile" id="appflow-cdk.MarketoSourceProps.property.profile"></a>

```typescript
public readonly profile: MarketoConnectorProfile;
```

- *Type:* <a href="#appflow-cdk.MarketoConnectorProfile">MarketoConnectorProfile</a>

---

##### `apiVersion`<sup>Optional</sup> <a name="apiVersion" id="appflow-cdk.MarketoSourceProps.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

---

### OnDemandFlowProps <a name="OnDemandFlowProps" id="appflow-cdk.OnDemandFlowProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.OnDemandFlowProps.Initializer"></a>

```typescript
import { OnDemandFlowProps } from 'appflow-cdk'

const onDemandFlowProps: OnDemandFlowProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.OnDemandFlowProps.property.destination">destination</a></code> | <code><a href="#appflow-cdk.IDestination">IDestination</a></code> | *No description.* |
| <code><a href="#appflow-cdk.OnDemandFlowProps.property.mappings">mappings</a></code> | <code><a href="#appflow-cdk.IMapping">IMapping</a>[]</code> | *No description.* |
| <code><a href="#appflow-cdk.OnDemandFlowProps.property.source">source</a></code> | <code><a href="#appflow-cdk.ISource">ISource</a></code> | *No description.* |
| <code><a href="#appflow-cdk.OnDemandFlowProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.OnDemandFlowProps.property.filters">filters</a></code> | <code><a href="#appflow-cdk.IFilter">IFilter</a>[]</code> | *No description.* |
| <code><a href="#appflow-cdk.OnDemandFlowProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#appflow-cdk.OnDemandFlowProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.OnDemandFlowProps.property.transforms">transforms</a></code> | <code><a href="#appflow-cdk.ITransform">ITransform</a>[]</code> | *No description.* |
| <code><a href="#appflow-cdk.OnDemandFlowProps.property.validations">validations</a></code> | <code><a href="#appflow-cdk.IValidation">IValidation</a>[]</code> | *No description.* |

---

##### `destination`<sup>Required</sup> <a name="destination" id="appflow-cdk.OnDemandFlowProps.property.destination"></a>

```typescript
public readonly destination: IDestination;
```

- *Type:* <a href="#appflow-cdk.IDestination">IDestination</a>

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="appflow-cdk.OnDemandFlowProps.property.mappings"></a>

```typescript
public readonly mappings: IMapping[];
```

- *Type:* <a href="#appflow-cdk.IMapping">IMapping</a>[]

---

##### `source`<sup>Required</sup> <a name="source" id="appflow-cdk.OnDemandFlowProps.property.source"></a>

```typescript
public readonly source: ISource;
```

- *Type:* <a href="#appflow-cdk.ISource">ISource</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="appflow-cdk.OnDemandFlowProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `filters`<sup>Optional</sup> <a name="filters" id="appflow-cdk.OnDemandFlowProps.property.filters"></a>

```typescript
public readonly filters: IFilter[];
```

- *Type:* <a href="#appflow-cdk.IFilter">IFilter</a>[]

---

##### `key`<sup>Optional</sup> <a name="key" id="appflow-cdk.OnDemandFlowProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `name`<sup>Optional</sup> <a name="name" id="appflow-cdk.OnDemandFlowProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="appflow-cdk.OnDemandFlowProps.property.transforms"></a>

```typescript
public readonly transforms: ITransform[];
```

- *Type:* <a href="#appflow-cdk.ITransform">ITransform</a>[]

---

##### `validations`<sup>Optional</sup> <a name="validations" id="appflow-cdk.OnDemandFlowProps.property.validations"></a>

```typescript
public readonly validations: IValidation[];
```

- *Type:* <a href="#appflow-cdk.IValidation">IValidation</a>[]

---

### OnEventFlowProps <a name="OnEventFlowProps" id="appflow-cdk.OnEventFlowProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.OnEventFlowProps.Initializer"></a>

```typescript
import { OnEventFlowProps } from 'appflow-cdk'

const onEventFlowProps: OnEventFlowProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.OnEventFlowProps.property.destination">destination</a></code> | <code><a href="#appflow-cdk.IDestination">IDestination</a></code> | *No description.* |
| <code><a href="#appflow-cdk.OnEventFlowProps.property.mappings">mappings</a></code> | <code><a href="#appflow-cdk.IMapping">IMapping</a>[]</code> | *No description.* |
| <code><a href="#appflow-cdk.OnEventFlowProps.property.source">source</a></code> | <code><a href="#appflow-cdk.ISource">ISource</a></code> | *No description.* |
| <code><a href="#appflow-cdk.OnEventFlowProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.OnEventFlowProps.property.filters">filters</a></code> | <code><a href="#appflow-cdk.IFilter">IFilter</a>[]</code> | *No description.* |
| <code><a href="#appflow-cdk.OnEventFlowProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#appflow-cdk.OnEventFlowProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.OnEventFlowProps.property.transforms">transforms</a></code> | <code><a href="#appflow-cdk.ITransform">ITransform</a>[]</code> | *No description.* |
| <code><a href="#appflow-cdk.OnEventFlowProps.property.validations">validations</a></code> | <code><a href="#appflow-cdk.IValidation">IValidation</a>[]</code> | *No description.* |
| <code><a href="#appflow-cdk.OnEventFlowProps.property.autoActivate">autoActivate</a></code> | <code>boolean</code> | *No description.* |

---

##### `destination`<sup>Required</sup> <a name="destination" id="appflow-cdk.OnEventFlowProps.property.destination"></a>

```typescript
public readonly destination: IDestination;
```

- *Type:* <a href="#appflow-cdk.IDestination">IDestination</a>

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="appflow-cdk.OnEventFlowProps.property.mappings"></a>

```typescript
public readonly mappings: IMapping[];
```

- *Type:* <a href="#appflow-cdk.IMapping">IMapping</a>[]

---

##### `source`<sup>Required</sup> <a name="source" id="appflow-cdk.OnEventFlowProps.property.source"></a>

```typescript
public readonly source: ISource;
```

- *Type:* <a href="#appflow-cdk.ISource">ISource</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="appflow-cdk.OnEventFlowProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `filters`<sup>Optional</sup> <a name="filters" id="appflow-cdk.OnEventFlowProps.property.filters"></a>

```typescript
public readonly filters: IFilter[];
```

- *Type:* <a href="#appflow-cdk.IFilter">IFilter</a>[]

---

##### `key`<sup>Optional</sup> <a name="key" id="appflow-cdk.OnEventFlowProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `name`<sup>Optional</sup> <a name="name" id="appflow-cdk.OnEventFlowProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="appflow-cdk.OnEventFlowProps.property.transforms"></a>

```typescript
public readonly transforms: ITransform[];
```

- *Type:* <a href="#appflow-cdk.ITransform">ITransform</a>[]

---

##### `validations`<sup>Optional</sup> <a name="validations" id="appflow-cdk.OnEventFlowProps.property.validations"></a>

```typescript
public readonly validations: IValidation[];
```

- *Type:* <a href="#appflow-cdk.IValidation">IValidation</a>[]

---

##### `autoActivate`<sup>Optional</sup> <a name="autoActivate" id="appflow-cdk.OnEventFlowProps.property.autoActivate"></a>

```typescript
public readonly autoActivate: boolean;
```

- *Type:* boolean

---

### OnScheduleFlowProps <a name="OnScheduleFlowProps" id="appflow-cdk.OnScheduleFlowProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.OnScheduleFlowProps.Initializer"></a>

```typescript
import { OnScheduleFlowProps } from 'appflow-cdk'

const onScheduleFlowProps: OnScheduleFlowProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.OnScheduleFlowProps.property.destination">destination</a></code> | <code><a href="#appflow-cdk.IDestination">IDestination</a></code> | *No description.* |
| <code><a href="#appflow-cdk.OnScheduleFlowProps.property.mappings">mappings</a></code> | <code><a href="#appflow-cdk.IMapping">IMapping</a>[]</code> | *No description.* |
| <code><a href="#appflow-cdk.OnScheduleFlowProps.property.source">source</a></code> | <code><a href="#appflow-cdk.ISource">ISource</a></code> | *No description.* |
| <code><a href="#appflow-cdk.OnScheduleFlowProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.OnScheduleFlowProps.property.filters">filters</a></code> | <code><a href="#appflow-cdk.IFilter">IFilter</a>[]</code> | *No description.* |
| <code><a href="#appflow-cdk.OnScheduleFlowProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#appflow-cdk.OnScheduleFlowProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.OnScheduleFlowProps.property.transforms">transforms</a></code> | <code><a href="#appflow-cdk.ITransform">ITransform</a>[]</code> | *No description.* |
| <code><a href="#appflow-cdk.OnScheduleFlowProps.property.validations">validations</a></code> | <code><a href="#appflow-cdk.IValidation">IValidation</a>[]</code> | *No description.* |
| <code><a href="#appflow-cdk.OnScheduleFlowProps.property.autoActivate">autoActivate</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#appflow-cdk.OnScheduleFlowProps.property.pullConfig">pullConfig</a></code> | <code><a href="#appflow-cdk.DataPullConfig">DataPullConfig</a></code> | *No description.* |
| <code><a href="#appflow-cdk.OnScheduleFlowProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | *No description.* |
| <code><a href="#appflow-cdk.OnScheduleFlowProps.property.scheduleProperties">scheduleProperties</a></code> | <code><a href="#appflow-cdk.ScheduleProperties">ScheduleProperties</a></code> | *No description.* |

---

##### `destination`<sup>Required</sup> <a name="destination" id="appflow-cdk.OnScheduleFlowProps.property.destination"></a>

```typescript
public readonly destination: IDestination;
```

- *Type:* <a href="#appflow-cdk.IDestination">IDestination</a>

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="appflow-cdk.OnScheduleFlowProps.property.mappings"></a>

```typescript
public readonly mappings: IMapping[];
```

- *Type:* <a href="#appflow-cdk.IMapping">IMapping</a>[]

---

##### `source`<sup>Required</sup> <a name="source" id="appflow-cdk.OnScheduleFlowProps.property.source"></a>

```typescript
public readonly source: ISource;
```

- *Type:* <a href="#appflow-cdk.ISource">ISource</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="appflow-cdk.OnScheduleFlowProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `filters`<sup>Optional</sup> <a name="filters" id="appflow-cdk.OnScheduleFlowProps.property.filters"></a>

```typescript
public readonly filters: IFilter[];
```

- *Type:* <a href="#appflow-cdk.IFilter">IFilter</a>[]

---

##### `key`<sup>Optional</sup> <a name="key" id="appflow-cdk.OnScheduleFlowProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `name`<sup>Optional</sup> <a name="name" id="appflow-cdk.OnScheduleFlowProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="appflow-cdk.OnScheduleFlowProps.property.transforms"></a>

```typescript
public readonly transforms: ITransform[];
```

- *Type:* <a href="#appflow-cdk.ITransform">ITransform</a>[]

---

##### `validations`<sup>Optional</sup> <a name="validations" id="appflow-cdk.OnScheduleFlowProps.property.validations"></a>

```typescript
public readonly validations: IValidation[];
```

- *Type:* <a href="#appflow-cdk.IValidation">IValidation</a>[]

---

##### `autoActivate`<sup>Optional</sup> <a name="autoActivate" id="appflow-cdk.OnScheduleFlowProps.property.autoActivate"></a>

```typescript
public readonly autoActivate: boolean;
```

- *Type:* boolean

---

##### `pullConfig`<sup>Required</sup> <a name="pullConfig" id="appflow-cdk.OnScheduleFlowProps.property.pullConfig"></a>

```typescript
public readonly pullConfig: DataPullConfig;
```

- *Type:* <a href="#appflow-cdk.DataPullConfig">DataPullConfig</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="appflow-cdk.OnScheduleFlowProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

---

##### `scheduleProperties`<sup>Optional</sup> <a name="scheduleProperties" id="appflow-cdk.OnScheduleFlowProps.property.scheduleProperties"></a>

```typescript
public readonly scheduleProperties: ScheduleProperties;
```

- *Type:* <a href="#appflow-cdk.ScheduleProperties">ScheduleProperties</a>

---

### RedshiftConnectorBasicCredentials <a name="RedshiftConnectorBasicCredentials" id="appflow-cdk.RedshiftConnectorBasicCredentials"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.RedshiftConnectorBasicCredentials.Initializer"></a>

```typescript
import { RedshiftConnectorBasicCredentials } from 'appflow-cdk'

const redshiftConnectorBasicCredentials: RedshiftConnectorBasicCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.RedshiftConnectorBasicCredentials.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.RedshiftConnectorBasicCredentials.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `password`<sup>Optional</sup> <a name="password" id="appflow-cdk.RedshiftConnectorBasicCredentials.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Optional</sup> <a name="username" id="appflow-cdk.RedshiftConnectorBasicCredentials.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

### RedshiftConnectorCredentials <a name="RedshiftConnectorCredentials" id="appflow-cdk.RedshiftConnectorCredentials"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.RedshiftConnectorCredentials.Initializer"></a>

```typescript
import { RedshiftConnectorCredentials } from 'appflow-cdk'

const redshiftConnectorCredentials: RedshiftConnectorCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.RedshiftConnectorCredentials.property.basic">basic</a></code> | <code><a href="#appflow-cdk.RedshiftConnectorBasicCredentials">RedshiftConnectorBasicCredentials</a></code> | *No description.* |

---

##### `basic`<sup>Required</sup> <a name="basic" id="appflow-cdk.RedshiftConnectorCredentials.property.basic"></a>

```typescript
public readonly basic: RedshiftConnectorBasicCredentials;
```

- *Type:* <a href="#appflow-cdk.RedshiftConnectorBasicCredentials">RedshiftConnectorBasicCredentials</a>

---

### RedshiftConnectorProfileProps <a name="RedshiftConnectorProfileProps" id="appflow-cdk.RedshiftConnectorProfileProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.RedshiftConnectorProfileProps.Initializer"></a>

```typescript
import { RedshiftConnectorProfileProps } from 'appflow-cdk'

const redshiftConnectorProfileProps: RedshiftConnectorProfileProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.RedshiftConnectorProfileProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | TODO: think if this should be here as not all connector profiles have that. |
| <code><a href="#appflow-cdk.RedshiftConnectorProfileProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.RedshiftConnectorProfileProps.property.credentials">credentials</a></code> | <code><a href="#appflow-cdk.RedshiftConnectorCredentials">RedshiftConnectorCredentials</a></code> | *No description.* |
| <code><a href="#appflow-cdk.RedshiftConnectorProfileProps.property.properties">properties</a></code> | <code><a href="#appflow-cdk.RedshiftConnectorProperties">RedshiftConnectorProperties</a></code> | *No description.* |

---

##### `key`<sup>Optional</sup> <a name="key" id="appflow-cdk.RedshiftConnectorProfileProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

TODO: think if this should be here as not all connector profiles have that.

---

##### `name`<sup>Optional</sup> <a name="name" id="appflow-cdk.RedshiftConnectorProfileProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="appflow-cdk.RedshiftConnectorProfileProps.property.credentials"></a>

```typescript
public readonly credentials: RedshiftConnectorCredentials;
```

- *Type:* <a href="#appflow-cdk.RedshiftConnectorCredentials">RedshiftConnectorCredentials</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="appflow-cdk.RedshiftConnectorProfileProps.property.properties"></a>

```typescript
public readonly properties: RedshiftConnectorProperties;
```

- *Type:* <a href="#appflow-cdk.RedshiftConnectorProperties">RedshiftConnectorProperties</a>

---

### RedshiftConnectorProperties <a name="RedshiftConnectorProperties" id="appflow-cdk.RedshiftConnectorProperties"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.RedshiftConnectorProperties.Initializer"></a>

```typescript
import { RedshiftConnectorProperties } from 'appflow-cdk'

const redshiftConnectorProperties: RedshiftConnectorProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.RedshiftConnectorProperties.property.cluster">cluster</a></code> | <code>@aws-cdk/aws-redshift-alpha.ICluster</code> | The Redshift cluster to use this connector profile with. |
| <code><a href="#appflow-cdk.RedshiftConnectorProperties.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database which the RedshiftConnectorProfile will be working with. |
| <code><a href="#appflow-cdk.RedshiftConnectorProperties.property.intermediateLocation">intermediateLocation</a></code> | <code><a href="#appflow-cdk.S3Location">S3Location</a></code> | An intermediate location for the data retrieved from the flow source that will be further transferred to the Redshfit database. |
| <code><a href="#appflow-cdk.RedshiftConnectorProperties.property.bucketAccessRole">bucketAccessRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | An IAM Role that the Redshift cluster will assume to get data from the intermiediate S3 Bucket. |
| <code><a href="#appflow-cdk.RedshiftConnectorProperties.property.dataApiRole">dataApiRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | An IAM Role that AppFlow will assume to interact with the Redshift cluster's Data API. |
| <code><a href="#appflow-cdk.RedshiftConnectorProperties.property.databaseUrl">databaseUrl</a></code> | <code>string</code> | *No description.* |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="appflow-cdk.RedshiftConnectorProperties.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* @aws-cdk/aws-redshift-alpha.ICluster

The Redshift cluster to use this connector profile with.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="appflow-cdk.RedshiftConnectorProperties.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the database which the RedshiftConnectorProfile will be working with.

---

##### `intermediateLocation`<sup>Required</sup> <a name="intermediateLocation" id="appflow-cdk.RedshiftConnectorProperties.property.intermediateLocation"></a>

```typescript
public readonly intermediateLocation: S3Location;
```

- *Type:* <a href="#appflow-cdk.S3Location">S3Location</a>

An intermediate location for the data retrieved from the flow source that will be further transferred to the Redshfit database.

---

##### `bucketAccessRole`<sup>Optional</sup> <a name="bucketAccessRole" id="appflow-cdk.RedshiftConnectorProperties.property.bucketAccessRole"></a>

```typescript
public readonly bucketAccessRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

An IAM Role that the Redshift cluster will assume to get data from the intermiediate S3 Bucket.

---

##### `dataApiRole`<sup>Optional</sup> <a name="dataApiRole" id="appflow-cdk.RedshiftConnectorProperties.property.dataApiRole"></a>

```typescript
public readonly dataApiRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* autogenerated IAM role

An IAM Role that AppFlow will assume to interact with the Redshift cluster's Data API.

---

##### `databaseUrl`<sup>Optional</sup> <a name="databaseUrl" id="appflow-cdk.RedshiftConnectorProperties.property.databaseUrl"></a>

```typescript
public readonly databaseUrl: string;
```

- *Type:* string

---

### RedshiftDestinationObject <a name="RedshiftDestinationObject" id="appflow-cdk.RedshiftDestinationObject"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.RedshiftDestinationObject.Initializer"></a>

```typescript
import { RedshiftDestinationObject } from 'appflow-cdk'

const redshiftDestinationObject: RedshiftDestinationObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.RedshiftDestinationObject.property.table">table</a></code> | <code>string \| @aws-cdk/aws-redshift-alpha.ITable</code> | *No description.* |
| <code><a href="#appflow-cdk.RedshiftDestinationObject.property.schema">schema</a></code> | <code>string</code> | *No description.* |

---

##### `table`<sup>Required</sup> <a name="table" id="appflow-cdk.RedshiftDestinationObject.property.table"></a>

```typescript
public readonly table: string | ITable;
```

- *Type:* string | @aws-cdk/aws-redshift-alpha.ITable

---

##### `schema`<sup>Optional</sup> <a name="schema" id="appflow-cdk.RedshiftDestinationObject.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string
- *Default:* public

---

### RedshiftDestinationProps <a name="RedshiftDestinationProps" id="appflow-cdk.RedshiftDestinationProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.RedshiftDestinationProps.Initializer"></a>

```typescript
import { RedshiftDestinationProps } from 'appflow-cdk'

const redshiftDestinationProps: RedshiftDestinationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.RedshiftDestinationProps.property.object">object</a></code> | <code><a href="#appflow-cdk.RedshiftDestinationObject">RedshiftDestinationObject</a></code> | A Redshift table object (optionally with the schema). |
| <code><a href="#appflow-cdk.RedshiftDestinationProps.property.profile">profile</a></code> | <code><a href="#appflow-cdk.RedshiftConnectorProfile">RedshiftConnectorProfile</a></code> | An instance of the @type RedshiftConnectorProfile. |
| <code><a href="#appflow-cdk.RedshiftDestinationProps.property.errorHandling">errorHandling</a></code> | <code><a href="#appflow-cdk.ErrorHandlingConfiguration">ErrorHandlingConfiguration</a></code> | The settings that determine how Amazon AppFlow handles an error when placing data in the Salesforce destination. |

---

##### `object`<sup>Required</sup> <a name="object" id="appflow-cdk.RedshiftDestinationProps.property.object"></a>

```typescript
public readonly object: RedshiftDestinationObject;
```

- *Type:* <a href="#appflow-cdk.RedshiftDestinationObject">RedshiftDestinationObject</a>

A Redshift table object (optionally with the schema).

---

##### `profile`<sup>Required</sup> <a name="profile" id="appflow-cdk.RedshiftDestinationProps.property.profile"></a>

```typescript
public readonly profile: RedshiftConnectorProfile;
```

- *Type:* <a href="#appflow-cdk.RedshiftConnectorProfile">RedshiftConnectorProfile</a>

An instance of the @type RedshiftConnectorProfile.

---

##### `errorHandling`<sup>Optional</sup> <a name="errorHandling" id="appflow-cdk.RedshiftDestinationProps.property.errorHandling"></a>

```typescript
public readonly errorHandling: ErrorHandlingConfiguration;
```

- *Type:* <a href="#appflow-cdk.ErrorHandlingConfiguration">ErrorHandlingConfiguration</a>

The settings that determine how Amazon AppFlow handles an error when placing data in the Salesforce destination.

For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure.

---

### S3Catalog <a name="S3Catalog" id="appflow-cdk.S3Catalog"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.S3Catalog.Initializer"></a>

```typescript
import { S3Catalog } from 'appflow-cdk'

const s3Catalog: S3Catalog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.S3Catalog.property.database">database</a></code> | <code>@aws-cdk/aws-glue-alpha.Database</code> | *No description.* |
| <code><a href="#appflow-cdk.S3Catalog.property.tablePrefix">tablePrefix</a></code> | <code>string</code> | *No description.* |

---

##### `database`<sup>Required</sup> <a name="database" id="appflow-cdk.S3Catalog.property.database"></a>

```typescript
public readonly database: Database;
```

- *Type:* @aws-cdk/aws-glue-alpha.Database

---

##### `tablePrefix`<sup>Required</sup> <a name="tablePrefix" id="appflow-cdk.S3Catalog.property.tablePrefix"></a>

```typescript
public readonly tablePrefix: string;
```

- *Type:* string

---

### S3DestinationProps <a name="S3DestinationProps" id="appflow-cdk.S3DestinationProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.S3DestinationProps.Initializer"></a>

```typescript
import { S3DestinationProps } from 'appflow-cdk'

const s3DestinationProps: S3DestinationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.S3DestinationProps.property.location">location</a></code> | <code><a href="#appflow-cdk.S3Location">S3Location</a></code> | *No description.* |
| <code><a href="#appflow-cdk.S3DestinationProps.property.catalog">catalog</a></code> | <code><a href="#appflow-cdk.S3Catalog">S3Catalog</a></code> | *No description.* |
| <code><a href="#appflow-cdk.S3DestinationProps.property.formatting">formatting</a></code> | <code><a href="#appflow-cdk.S3OutputFormatting">S3OutputFormatting</a></code> | *No description.* |

---

##### `location`<sup>Required</sup> <a name="location" id="appflow-cdk.S3DestinationProps.property.location"></a>

```typescript
public readonly location: S3Location;
```

- *Type:* <a href="#appflow-cdk.S3Location">S3Location</a>

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="appflow-cdk.S3DestinationProps.property.catalog"></a>

```typescript
public readonly catalog: S3Catalog;
```

- *Type:* <a href="#appflow-cdk.S3Catalog">S3Catalog</a>

---

##### `formatting`<sup>Optional</sup> <a name="formatting" id="appflow-cdk.S3DestinationProps.property.formatting"></a>

```typescript
public readonly formatting: S3OutputFormatting;
```

- *Type:* <a href="#appflow-cdk.S3OutputFormatting">S3OutputFormatting</a>

---

### S3FileAggregation <a name="S3FileAggregation" id="appflow-cdk.S3FileAggregation"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.S3FileAggregation.Initializer"></a>

```typescript
import { S3FileAggregation } from 'appflow-cdk'

const s3FileAggregation: S3FileAggregation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.S3FileAggregation.property.fileSize">fileSize</a></code> | <code>number</code> | The maximum size, in MB, of the file containing portion of incoming data. |
| <code><a href="#appflow-cdk.S3FileAggregation.property.type">type</a></code> | <code><a href="#appflow-cdk.S3OutputAggregationType">S3OutputAggregationType</a></code> | *No description.* |

---

##### `fileSize`<sup>Optional</sup> <a name="fileSize" id="appflow-cdk.S3FileAggregation.property.fileSize"></a>

```typescript
public readonly fileSize: number;
```

- *Type:* number

The maximum size, in MB, of the file containing portion of incoming data.

---

##### `type`<sup>Optional</sup> <a name="type" id="appflow-cdk.S3FileAggregation.property.type"></a>

```typescript
public readonly type: S3OutputAggregationType;
```

- *Type:* <a href="#appflow-cdk.S3OutputAggregationType">S3OutputAggregationType</a>

---

### S3InputFormat <a name="S3InputFormat" id="appflow-cdk.S3InputFormat"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.S3InputFormat.Initializer"></a>

```typescript
import { S3InputFormat } from 'appflow-cdk'

const s3InputFormat: S3InputFormat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.S3InputFormat.property.type">type</a></code> | <code><a href="#appflow-cdk.S3InputFileType">S3InputFileType</a></code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="appflow-cdk.S3InputFormat.property.type"></a>

```typescript
public readonly type: S3InputFileType;
```

- *Type:* <a href="#appflow-cdk.S3InputFileType">S3InputFileType</a>

---

### S3Location <a name="S3Location" id="appflow-cdk.S3Location"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.S3Location.Initializer"></a>

```typescript
import { S3Location } from 'appflow-cdk'

const s3Location: S3Location = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.S3Location.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#appflow-cdk.S3Location.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="appflow-cdk.S3Location.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="appflow-cdk.S3Location.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

### S3OutputFilePrefix <a name="S3OutputFilePrefix" id="appflow-cdk.S3OutputFilePrefix"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.S3OutputFilePrefix.Initializer"></a>

```typescript
import { S3OutputFilePrefix } from 'appflow-cdk'

const s3OutputFilePrefix: S3OutputFilePrefix = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.S3OutputFilePrefix.property.format">format</a></code> | <code><a href="#appflow-cdk.S3OutputFilePrefixFormat">S3OutputFilePrefixFormat</a></code> | *No description.* |
| <code><a href="#appflow-cdk.S3OutputFilePrefix.property.hierarchy">hierarchy</a></code> | <code><a href="#appflow-cdk.S3OutputFilePrefixHierarchy">S3OutputFilePrefixHierarchy</a>[]</code> | *No description.* |
| <code><a href="#appflow-cdk.S3OutputFilePrefix.property.type">type</a></code> | <code><a href="#appflow-cdk.S3OutputFilePrefixType">S3OutputFilePrefixType</a></code> | *No description.* |

---

##### `format`<sup>Optional</sup> <a name="format" id="appflow-cdk.S3OutputFilePrefix.property.format"></a>

```typescript
public readonly format: S3OutputFilePrefixFormat;
```

- *Type:* <a href="#appflow-cdk.S3OutputFilePrefixFormat">S3OutputFilePrefixFormat</a>

---

##### `hierarchy`<sup>Optional</sup> <a name="hierarchy" id="appflow-cdk.S3OutputFilePrefix.property.hierarchy"></a>

```typescript
public readonly hierarchy: S3OutputFilePrefixHierarchy[];
```

- *Type:* <a href="#appflow-cdk.S3OutputFilePrefixHierarchy">S3OutputFilePrefixHierarchy</a>[]

---

##### `type`<sup>Optional</sup> <a name="type" id="appflow-cdk.S3OutputFilePrefix.property.type"></a>

```typescript
public readonly type: S3OutputFilePrefixType;
```

- *Type:* <a href="#appflow-cdk.S3OutputFilePrefixType">S3OutputFilePrefixType</a>

---

### S3OutputFormatting <a name="S3OutputFormatting" id="appflow-cdk.S3OutputFormatting"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.S3OutputFormatting.Initializer"></a>

```typescript
import { S3OutputFormatting } from 'appflow-cdk'

const s3OutputFormatting: S3OutputFormatting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.S3OutputFormatting.property.aggregation">aggregation</a></code> | <code><a href="#appflow-cdk.S3FileAggregation">S3FileAggregation</a></code> | *No description.* |
| <code><a href="#appflow-cdk.S3OutputFormatting.property.filePrefix">filePrefix</a></code> | <code><a href="#appflow-cdk.S3OutputFilePrefix">S3OutputFilePrefix</a></code> | *No description.* |
| <code><a href="#appflow-cdk.S3OutputFormatting.property.fileType">fileType</a></code> | <code><a href="#appflow-cdk.S3OutputFileType">S3OutputFileType</a></code> | *No description.* |
| <code><a href="#appflow-cdk.S3OutputFormatting.property.preserveSourceDataTypes">preserveSourceDataTypes</a></code> | <code>boolean</code> | *No description.* |

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="appflow-cdk.S3OutputFormatting.property.aggregation"></a>

```typescript
public readonly aggregation: S3FileAggregation;
```

- *Type:* <a href="#appflow-cdk.S3FileAggregation">S3FileAggregation</a>

---

##### `filePrefix`<sup>Optional</sup> <a name="filePrefix" id="appflow-cdk.S3OutputFormatting.property.filePrefix"></a>

```typescript
public readonly filePrefix: S3OutputFilePrefix;
```

- *Type:* <a href="#appflow-cdk.S3OutputFilePrefix">S3OutputFilePrefix</a>

---

##### `fileType`<sup>Optional</sup> <a name="fileType" id="appflow-cdk.S3OutputFormatting.property.fileType"></a>

```typescript
public readonly fileType: S3OutputFileType;
```

- *Type:* <a href="#appflow-cdk.S3OutputFileType">S3OutputFileType</a>

---

##### `preserveSourceDataTypes`<sup>Optional</sup> <a name="preserveSourceDataTypes" id="appflow-cdk.S3OutputFormatting.property.preserveSourceDataTypes"></a>

```typescript
public readonly preserveSourceDataTypes: boolean;
```

- *Type:* boolean

---

### S3SourceProps <a name="S3SourceProps" id="appflow-cdk.S3SourceProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.S3SourceProps.Initializer"></a>

```typescript
import { S3SourceProps } from 'appflow-cdk'

const s3SourceProps: S3SourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.S3SourceProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#appflow-cdk.S3SourceProps.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.S3SourceProps.property.format">format</a></code> | <code><a href="#appflow-cdk.S3InputFormat">S3InputFormat</a></code> | *No description.* |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="appflow-cdk.S3SourceProps.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="appflow-cdk.S3SourceProps.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `format`<sup>Optional</sup> <a name="format" id="appflow-cdk.S3SourceProps.property.format"></a>

```typescript
public readonly format: S3InputFormat;
```

- *Type:* <a href="#appflow-cdk.S3InputFormat">S3InputFormat</a>

---

### SalesforceConnectorProfileProps <a name="SalesforceConnectorProfileProps" id="appflow-cdk.SalesforceConnectorProfileProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SalesforceConnectorProfileProps.Initializer"></a>

```typescript
import { SalesforceConnectorProfileProps } from 'appflow-cdk'

const salesforceConnectorProfileProps: SalesforceConnectorProfileProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SalesforceConnectorProfileProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | TODO: think if this should be here as not all connector profiles have that. |
| <code><a href="#appflow-cdk.SalesforceConnectorProfileProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceConnectorProfileProps.property.instanceUrl">instanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceConnectorProfileProps.property.isSandbox">isSandbox</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceConnectorProfileProps.property.oAuth">oAuth</a></code> | <code><a href="#appflow-cdk.SalesforceOAuthSettings">SalesforceOAuthSettings</a></code> | *No description.* |

---

##### `key`<sup>Optional</sup> <a name="key" id="appflow-cdk.SalesforceConnectorProfileProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

TODO: think if this should be here as not all connector profiles have that.

---

##### `name`<sup>Optional</sup> <a name="name" id="appflow-cdk.SalesforceConnectorProfileProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="appflow-cdk.SalesforceConnectorProfileProps.property.instanceUrl"></a>

```typescript
public readonly instanceUrl: string;
```

- *Type:* string

---

##### `isSandbox`<sup>Required</sup> <a name="isSandbox" id="appflow-cdk.SalesforceConnectorProfileProps.property.isSandbox"></a>

```typescript
public readonly isSandbox: boolean;
```

- *Type:* boolean

---

##### `oAuth`<sup>Required</sup> <a name="oAuth" id="appflow-cdk.SalesforceConnectorProfileProps.property.oAuth"></a>

```typescript
public readonly oAuth: SalesforceOAuthSettings;
```

- *Type:* <a href="#appflow-cdk.SalesforceOAuthSettings">SalesforceOAuthSettings</a>

---

### SalesforceDestinationProps <a name="SalesforceDestinationProps" id="appflow-cdk.SalesforceDestinationProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SalesforceDestinationProps.Initializer"></a>

```typescript
import { SalesforceDestinationProps } from 'appflow-cdk'

const salesforceDestinationProps: SalesforceDestinationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SalesforceDestinationProps.property.object">object</a></code> | <code>string</code> | The Salesforce object for which the operation is to be set. |
| <code><a href="#appflow-cdk.SalesforceDestinationProps.property.operation">operation</a></code> | <code><a href="#appflow-cdk.WriteOperation">WriteOperation</a></code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceDestinationProps.property.profile">profile</a></code> | <code><a href="#appflow-cdk.SalesforceConnectorProfile">SalesforceConnectorProfile</a></code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceDestinationProps.property.dataTransferApi">dataTransferApi</a></code> | <code><a href="#appflow-cdk.SalesforceDataTransferApi">SalesforceDataTransferApi</a></code> | Specifies which Salesforce API is used by Amazon AppFlow when your flow transfers data to Salesforce. |
| <code><a href="#appflow-cdk.SalesforceDestinationProps.property.errorHandling">errorHandling</a></code> | <code><a href="#appflow-cdk.ErrorHandlingConfiguration">ErrorHandlingConfiguration</a></code> | The settings that determine how Amazon AppFlow handles an error when placing data in the Salesforce destination. |

---

##### `object`<sup>Required</sup> <a name="object" id="appflow-cdk.SalesforceDestinationProps.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

The Salesforce object for which the operation is to be set.

---

##### `operation`<sup>Required</sup> <a name="operation" id="appflow-cdk.SalesforceDestinationProps.property.operation"></a>

```typescript
public readonly operation: WriteOperation;
```

- *Type:* <a href="#appflow-cdk.WriteOperation">WriteOperation</a>

---

##### `profile`<sup>Required</sup> <a name="profile" id="appflow-cdk.SalesforceDestinationProps.property.profile"></a>

```typescript
public readonly profile: SalesforceConnectorProfile;
```

- *Type:* <a href="#appflow-cdk.SalesforceConnectorProfile">SalesforceConnectorProfile</a>

---

##### `dataTransferApi`<sup>Optional</sup> <a name="dataTransferApi" id="appflow-cdk.SalesforceDestinationProps.property.dataTransferApi"></a>

```typescript
public readonly dataTransferApi: SalesforceDataTransferApi;
```

- *Type:* <a href="#appflow-cdk.SalesforceDataTransferApi">SalesforceDataTransferApi</a>

Specifies which Salesforce API is used by Amazon AppFlow when your flow transfers data to Salesforce.

---

##### `errorHandling`<sup>Optional</sup> <a name="errorHandling" id="appflow-cdk.SalesforceDestinationProps.property.errorHandling"></a>

```typescript
public readonly errorHandling: ErrorHandlingConfiguration;
```

- *Type:* <a href="#appflow-cdk.ErrorHandlingConfiguration">ErrorHandlingConfiguration</a>

The settings that determine how Amazon AppFlow handles an error when placing data in the Salesforce destination.

For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure.

---

### SalesforceMarketingCloudConnectorCredentials <a name="SalesforceMarketingCloudConnectorCredentials" id="appflow-cdk.SalesforceMarketingCloudConnectorCredentials"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SalesforceMarketingCloudConnectorCredentials.Initializer"></a>

```typescript
import { SalesforceMarketingCloudConnectorCredentials } from 'appflow-cdk'

const salesforceMarketingCloudConnectorCredentials: SalesforceMarketingCloudConnectorCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorCredentials.property.oAuth">oAuth</a></code> | <code><a href="#appflow-cdk.SalesforceMarketingCloudOAuthSettings">SalesforceMarketingCloudOAuthSettings</a></code> | *No description.* |

---

##### `oAuth`<sup>Required</sup> <a name="oAuth" id="appflow-cdk.SalesforceMarketingCloudConnectorCredentials.property.oAuth"></a>

```typescript
public readonly oAuth: SalesforceMarketingCloudOAuthSettings;
```

- *Type:* <a href="#appflow-cdk.SalesforceMarketingCloudOAuthSettings">SalesforceMarketingCloudOAuthSettings</a>

---

### SalesforceMarketingCloudConnectorProfileProps <a name="SalesforceMarketingCloudConnectorProfileProps" id="appflow-cdk.SalesforceMarketingCloudConnectorProfileProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SalesforceMarketingCloudConnectorProfileProps.Initializer"></a>

```typescript
import { SalesforceMarketingCloudConnectorProfileProps } from 'appflow-cdk'

const salesforceMarketingCloudConnectorProfileProps: SalesforceMarketingCloudConnectorProfileProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfileProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | TODO: think if this should be here as not all connector profiles have that. |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfileProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfileProps.property.credentials">credentials</a></code> | <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorCredentials">SalesforceMarketingCloudConnectorCredentials</a></code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfileProps.property.properties">properties</a></code> | <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProperties">SalesforceMarketingCloudConnectorProperties</a></code> | *No description.* |

---

##### `key`<sup>Optional</sup> <a name="key" id="appflow-cdk.SalesforceMarketingCloudConnectorProfileProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

TODO: think if this should be here as not all connector profiles have that.

---

##### `name`<sup>Optional</sup> <a name="name" id="appflow-cdk.SalesforceMarketingCloudConnectorProfileProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="appflow-cdk.SalesforceMarketingCloudConnectorProfileProps.property.credentials"></a>

```typescript
public readonly credentials: SalesforceMarketingCloudConnectorCredentials;
```

- *Type:* <a href="#appflow-cdk.SalesforceMarketingCloudConnectorCredentials">SalesforceMarketingCloudConnectorCredentials</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="appflow-cdk.SalesforceMarketingCloudConnectorProfileProps.property.properties"></a>

```typescript
public readonly properties: SalesforceMarketingCloudConnectorProperties;
```

- *Type:* <a href="#appflow-cdk.SalesforceMarketingCloudConnectorProperties">SalesforceMarketingCloudConnectorProperties</a>

---

### SalesforceMarketingCloudConnectorProperties <a name="SalesforceMarketingCloudConnectorProperties" id="appflow-cdk.SalesforceMarketingCloudConnectorProperties"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SalesforceMarketingCloudConnectorProperties.Initializer"></a>

```typescript
import { SalesforceMarketingCloudConnectorProperties } from 'appflow-cdk'

const salesforceMarketingCloudConnectorProperties: SalesforceMarketingCloudConnectorProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProperties.property.instanceUrl">instanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProperties.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | *No description.* |

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="appflow-cdk.SalesforceMarketingCloudConnectorProperties.property.instanceUrl"></a>

```typescript
public readonly instanceUrl: string;
```

- *Type:* string

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="appflow-cdk.SalesforceMarketingCloudConnectorProperties.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

---

### SalesforceMarketingCloudOAuthFlows <a name="SalesforceMarketingCloudOAuthFlows" id="appflow-cdk.SalesforceMarketingCloudOAuthFlows"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SalesforceMarketingCloudOAuthFlows.Initializer"></a>

```typescript
import { SalesforceMarketingCloudOAuthFlows } from 'appflow-cdk'

const salesforceMarketingCloudOAuthFlows: SalesforceMarketingCloudOAuthFlows = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudOAuthFlows.property.refreshTokenGrant">refreshTokenGrant</a></code> | <code><a href="#appflow-cdk.SalesforceMarketingCloudOAuthRefreshTokenGrantFlowSettings">SalesforceMarketingCloudOAuthRefreshTokenGrantFlowSettings</a></code> | *No description.* |

---

##### `refreshTokenGrant`<sup>Required</sup> <a name="refreshTokenGrant" id="appflow-cdk.SalesforceMarketingCloudOAuthFlows.property.refreshTokenGrant"></a>

```typescript
public readonly refreshTokenGrant: SalesforceMarketingCloudOAuthRefreshTokenGrantFlowSettings;
```

- *Type:* <a href="#appflow-cdk.SalesforceMarketingCloudOAuthRefreshTokenGrantFlowSettings">SalesforceMarketingCloudOAuthRefreshTokenGrantFlowSettings</a>

---

### SalesforceMarketingCloudOAuthRefreshTokenGrantFlowSettings <a name="SalesforceMarketingCloudOAuthRefreshTokenGrantFlowSettings" id="appflow-cdk.SalesforceMarketingCloudOAuthRefreshTokenGrantFlowSettings"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SalesforceMarketingCloudOAuthRefreshTokenGrantFlowSettings.Initializer"></a>

```typescript
import { SalesforceMarketingCloudOAuthRefreshTokenGrantFlowSettings } from 'appflow-cdk'

const salesforceMarketingCloudOAuthRefreshTokenGrantFlowSettings: SalesforceMarketingCloudOAuthRefreshTokenGrantFlowSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudOAuthRefreshTokenGrantFlowSettings.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudOAuthRefreshTokenGrantFlowSettings.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudOAuthRefreshTokenGrantFlowSettings.property.refreshToken">refreshToken</a></code> | <code>string</code> | *No description.* |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="appflow-cdk.SalesforceMarketingCloudOAuthRefreshTokenGrantFlowSettings.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="appflow-cdk.SalesforceMarketingCloudOAuthRefreshTokenGrantFlowSettings.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `refreshToken`<sup>Optional</sup> <a name="refreshToken" id="appflow-cdk.SalesforceMarketingCloudOAuthRefreshTokenGrantFlowSettings.property.refreshToken"></a>

```typescript
public readonly refreshToken: string;
```

- *Type:* string

---

### SalesforceMarketingCloudOAuthSettings <a name="SalesforceMarketingCloudOAuthSettings" id="appflow-cdk.SalesforceMarketingCloudOAuthSettings"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SalesforceMarketingCloudOAuthSettings.Initializer"></a>

```typescript
import { SalesforceMarketingCloudOAuthSettings } from 'appflow-cdk'

const salesforceMarketingCloudOAuthSettings: SalesforceMarketingCloudOAuthSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudOAuthSettings.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudOAuthSettings.property.flows">flows</a></code> | <code><a href="#appflow-cdk.SalesforceMarketingCloudOAuthFlows">SalesforceMarketingCloudOAuthFlows</a></code> | *No description.* |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="appflow-cdk.SalesforceMarketingCloudOAuthSettings.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `flows`<sup>Optional</sup> <a name="flows" id="appflow-cdk.SalesforceMarketingCloudOAuthSettings.property.flows"></a>

```typescript
public readonly flows: SalesforceMarketingCloudOAuthFlows;
```

- *Type:* <a href="#appflow-cdk.SalesforceMarketingCloudOAuthFlows">SalesforceMarketingCloudOAuthFlows</a>

---

### SalesforceMarketingCloudSourceProps <a name="SalesforceMarketingCloudSourceProps" id="appflow-cdk.SalesforceMarketingCloudSourceProps"></a>

Properties of a Salesforce Marketing Cloud Source.

#### Initializer <a name="Initializer" id="appflow-cdk.SalesforceMarketingCloudSourceProps.Initializer"></a>

```typescript
import { SalesforceMarketingCloudSourceProps } from 'appflow-cdk'

const salesforceMarketingCloudSourceProps: SalesforceMarketingCloudSourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudSourceProps.property.apiVersion">apiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudSourceProps.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudSourceProps.property.profile">profile</a></code> | <code><a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfile">SalesforceMarketingCloudConnectorProfile</a></code> | *No description.* |

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="appflow-cdk.SalesforceMarketingCloudSourceProps.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="appflow-cdk.SalesforceMarketingCloudSourceProps.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `profile`<sup>Required</sup> <a name="profile" id="appflow-cdk.SalesforceMarketingCloudSourceProps.property.profile"></a>

```typescript
public readonly profile: SalesforceMarketingCloudConnectorProfile;
```

- *Type:* <a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfile">SalesforceMarketingCloudConnectorProfile</a>

---

### SalesforceOAuthFlows <a name="SalesforceOAuthFlows" id="appflow-cdk.SalesforceOAuthFlows"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SalesforceOAuthFlows.Initializer"></a>

```typescript
import { SalesforceOAuthFlows } from 'appflow-cdk'

const salesforceOAuthFlows: SalesforceOAuthFlows = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SalesforceOAuthFlows.property.refreshTokenGrant">refreshTokenGrant</a></code> | <code><a href="#appflow-cdk.SalesforceOAuthRefreshTokenGrantFlowSettings">SalesforceOAuthRefreshTokenGrantFlowSettings</a></code> | *No description.* |

---

##### `refreshTokenGrant`<sup>Required</sup> <a name="refreshTokenGrant" id="appflow-cdk.SalesforceOAuthFlows.property.refreshTokenGrant"></a>

```typescript
public readonly refreshTokenGrant: SalesforceOAuthRefreshTokenGrantFlowSettings;
```

- *Type:* <a href="#appflow-cdk.SalesforceOAuthRefreshTokenGrantFlowSettings">SalesforceOAuthRefreshTokenGrantFlowSettings</a>

---

### SalesforceOAuthRefreshTokenGrantFlowSettings <a name="SalesforceOAuthRefreshTokenGrantFlowSettings" id="appflow-cdk.SalesforceOAuthRefreshTokenGrantFlowSettings"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SalesforceOAuthRefreshTokenGrantFlowSettings.Initializer"></a>

```typescript
import { SalesforceOAuthRefreshTokenGrantFlowSettings } from 'appflow-cdk'

const salesforceOAuthRefreshTokenGrantFlowSettings: SalesforceOAuthRefreshTokenGrantFlowSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SalesforceOAuthRefreshTokenGrantFlowSettings.property.client">client</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceOAuthRefreshTokenGrantFlowSettings.property.refreshToken">refreshToken</a></code> | <code>string</code> | *No description.* |

---

##### `client`<sup>Optional</sup> <a name="client" id="appflow-cdk.SalesforceOAuthRefreshTokenGrantFlowSettings.property.client"></a>

```typescript
public readonly client: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---

##### `refreshToken`<sup>Optional</sup> <a name="refreshToken" id="appflow-cdk.SalesforceOAuthRefreshTokenGrantFlowSettings.property.refreshToken"></a>

```typescript
public readonly refreshToken: string;
```

- *Type:* string

---

### SalesforceOAuthSettings <a name="SalesforceOAuthSettings" id="appflow-cdk.SalesforceOAuthSettings"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SalesforceOAuthSettings.Initializer"></a>

```typescript
import { SalesforceOAuthSettings } from 'appflow-cdk'

const salesforceOAuthSettings: SalesforceOAuthSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SalesforceOAuthSettings.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceOAuthSettings.property.flows">flows</a></code> | <code><a href="#appflow-cdk.SalesforceOAuthFlows">SalesforceOAuthFlows</a></code> | *No description.* |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="appflow-cdk.SalesforceOAuthSettings.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `flows`<sup>Optional</sup> <a name="flows" id="appflow-cdk.SalesforceOAuthSettings.property.flows"></a>

```typescript
public readonly flows: SalesforceOAuthFlows;
```

- *Type:* <a href="#appflow-cdk.SalesforceOAuthFlows">SalesforceOAuthFlows</a>

---

### SalesforceSourceProps <a name="SalesforceSourceProps" id="appflow-cdk.SalesforceSourceProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SalesforceSourceProps.Initializer"></a>

```typescript
import { SalesforceSourceProps } from 'appflow-cdk'

const salesforceSourceProps: SalesforceSourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SalesforceSourceProps.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceSourceProps.property.profile">profile</a></code> | <code><a href="#appflow-cdk.SalesforceConnectorProfile">SalesforceConnectorProfile</a></code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceSourceProps.property.apiVersion">apiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceSourceProps.property.enableDynamicFieldUpdate">enableDynamicFieldUpdate</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceSourceProps.property.includeDeletedRecords">includeDeletedRecords</a></code> | <code>boolean</code> | *No description.* |

---

##### `object`<sup>Required</sup> <a name="object" id="appflow-cdk.SalesforceSourceProps.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `profile`<sup>Required</sup> <a name="profile" id="appflow-cdk.SalesforceSourceProps.property.profile"></a>

```typescript
public readonly profile: SalesforceConnectorProfile;
```

- *Type:* <a href="#appflow-cdk.SalesforceConnectorProfile">SalesforceConnectorProfile</a>

---

##### `apiVersion`<sup>Optional</sup> <a name="apiVersion" id="appflow-cdk.SalesforceSourceProps.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

---

##### `enableDynamicFieldUpdate`<sup>Optional</sup> <a name="enableDynamicFieldUpdate" id="appflow-cdk.SalesforceSourceProps.property.enableDynamicFieldUpdate"></a>

```typescript
public readonly enableDynamicFieldUpdate: boolean;
```

- *Type:* boolean

---

##### `includeDeletedRecords`<sup>Optional</sup> <a name="includeDeletedRecords" id="appflow-cdk.SalesforceSourceProps.property.includeDeletedRecords"></a>

```typescript
public readonly includeDeletedRecords: boolean;
```

- *Type:* boolean

---

### SAPOdataBasicSettings <a name="SAPOdataBasicSettings" id="appflow-cdk.SAPOdataBasicSettings"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SAPOdataBasicSettings.Initializer"></a>

```typescript
import { SAPOdataBasicSettings } from 'appflow-cdk'

const sAPOdataBasicSettings: SAPOdataBasicSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SAPOdataBasicSettings.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SAPOdataBasicSettings.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `password`<sup>Required</sup> <a name="password" id="appflow-cdk.SAPOdataBasicSettings.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="appflow-cdk.SAPOdataBasicSettings.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

### SAPOdataConnectorCredentials <a name="SAPOdataConnectorCredentials" id="appflow-cdk.SAPOdataConnectorCredentials"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SAPOdataConnectorCredentials.Initializer"></a>

```typescript
import { SAPOdataConnectorCredentials } from 'appflow-cdk'

const sAPOdataConnectorCredentials: SAPOdataConnectorCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SAPOdataConnectorCredentials.property.basic">basic</a></code> | <code><a href="#appflow-cdk.SAPOdataBasicSettings">SAPOdataBasicSettings</a></code> | *No description.* |
| <code><a href="#appflow-cdk.SAPOdataConnectorCredentials.property.oAuth">oAuth</a></code> | <code><a href="#appflow-cdk.SAPOdataOAuthSettings">SAPOdataOAuthSettings</a></code> | *No description.* |

---

##### `basic`<sup>Optional</sup> <a name="basic" id="appflow-cdk.SAPOdataConnectorCredentials.property.basic"></a>

```typescript
public readonly basic: SAPOdataBasicSettings;
```

- *Type:* <a href="#appflow-cdk.SAPOdataBasicSettings">SAPOdataBasicSettings</a>

---

##### `oAuth`<sup>Optional</sup> <a name="oAuth" id="appflow-cdk.SAPOdataConnectorCredentials.property.oAuth"></a>

```typescript
public readonly oAuth: SAPOdataOAuthSettings;
```

- *Type:* <a href="#appflow-cdk.SAPOdataOAuthSettings">SAPOdataOAuthSettings</a>

---

### SAPOdataConnectorProfileProps <a name="SAPOdataConnectorProfileProps" id="appflow-cdk.SAPOdataConnectorProfileProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SAPOdataConnectorProfileProps.Initializer"></a>

```typescript
import { SAPOdataConnectorProfileProps } from 'appflow-cdk'

const sAPOdataConnectorProfileProps: SAPOdataConnectorProfileProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SAPOdataConnectorProfileProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | TODO: think if this should be here as not all connector profiles have that. |
| <code><a href="#appflow-cdk.SAPOdataConnectorProfileProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SAPOdataConnectorProfileProps.property.credentials">credentials</a></code> | <code><a href="#appflow-cdk.SAPOdataConnectorCredentials">SAPOdataConnectorCredentials</a></code> | *No description.* |
| <code><a href="#appflow-cdk.SAPOdataConnectorProfileProps.property.properties">properties</a></code> | <code><a href="#appflow-cdk.SAPOdataConnectorProperties">SAPOdataConnectorProperties</a></code> | *No description.* |

---

##### `key`<sup>Optional</sup> <a name="key" id="appflow-cdk.SAPOdataConnectorProfileProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

TODO: think if this should be here as not all connector profiles have that.

---

##### `name`<sup>Optional</sup> <a name="name" id="appflow-cdk.SAPOdataConnectorProfileProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="appflow-cdk.SAPOdataConnectorProfileProps.property.credentials"></a>

```typescript
public readonly credentials: SAPOdataConnectorCredentials;
```

- *Type:* <a href="#appflow-cdk.SAPOdataConnectorCredentials">SAPOdataConnectorCredentials</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="appflow-cdk.SAPOdataConnectorProfileProps.property.properties"></a>

```typescript
public readonly properties: SAPOdataConnectorProperties;
```

- *Type:* <a href="#appflow-cdk.SAPOdataConnectorProperties">SAPOdataConnectorProperties</a>

---

### SAPOdataConnectorProperties <a name="SAPOdataConnectorProperties" id="appflow-cdk.SAPOdataConnectorProperties"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SAPOdataConnectorProperties.Initializer"></a>

```typescript
import { SAPOdataConnectorProperties } from 'appflow-cdk'

const sAPOdataConnectorProperties: SAPOdataConnectorProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SAPOdataConnectorProperties.property.applicationHostUrl">applicationHostUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SAPOdataConnectorProperties.property.applicationServicePath">applicationServicePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SAPOdataConnectorProperties.property.clientNumber">clientNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SAPOdataConnectorProperties.property.logonLanguage">logonLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SAPOdataConnectorProperties.property.portNumber">portNumber</a></code> | <code>number</code> | *No description.* |

---

##### `applicationHostUrl`<sup>Required</sup> <a name="applicationHostUrl" id="appflow-cdk.SAPOdataConnectorProperties.property.applicationHostUrl"></a>

```typescript
public readonly applicationHostUrl: string;
```

- *Type:* string

---

##### `applicationServicePath`<sup>Required</sup> <a name="applicationServicePath" id="appflow-cdk.SAPOdataConnectorProperties.property.applicationServicePath"></a>

```typescript
public readonly applicationServicePath: string;
```

- *Type:* string

---

##### `clientNumber`<sup>Required</sup> <a name="clientNumber" id="appflow-cdk.SAPOdataConnectorProperties.property.clientNumber"></a>

```typescript
public readonly clientNumber: string;
```

- *Type:* string

---

##### `logonLanguage`<sup>Required</sup> <a name="logonLanguage" id="appflow-cdk.SAPOdataConnectorProperties.property.logonLanguage"></a>

```typescript
public readonly logonLanguage: string;
```

- *Type:* string

---

##### `portNumber`<sup>Optional</sup> <a name="portNumber" id="appflow-cdk.SAPOdataConnectorProperties.property.portNumber"></a>

```typescript
public readonly portNumber: number;
```

- *Type:* number

---

### SAPOdataDestinationProps <a name="SAPOdataDestinationProps" id="appflow-cdk.SAPOdataDestinationProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SAPOdataDestinationProps.Initializer"></a>

```typescript
import { SAPOdataDestinationProps } from 'appflow-cdk'

const sAPOdataDestinationProps: SAPOdataDestinationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SAPOdataDestinationProps.property.object">object</a></code> | <code>string</code> | The SAPOdata object for which the operation is to be set. |
| <code><a href="#appflow-cdk.SAPOdataDestinationProps.property.operation">operation</a></code> | <code><a href="#appflow-cdk.WriteOperation">WriteOperation</a></code> | *No description.* |
| <code><a href="#appflow-cdk.SAPOdataDestinationProps.property.profile">profile</a></code> | <code><a href="#appflow-cdk.SAPOdataConnectorProfile">SAPOdataConnectorProfile</a></code> | *No description.* |
| <code><a href="#appflow-cdk.SAPOdataDestinationProps.property.errorHandling">errorHandling</a></code> | <code><a href="#appflow-cdk.ErrorHandlingConfiguration">ErrorHandlingConfiguration</a></code> | The settings that determine how Amazon AppFlow handles an error when placing data in the SAPOdata destination. |
| <code><a href="#appflow-cdk.SAPOdataDestinationProps.property.successResponseHandling">successResponseHandling</a></code> | <code><a href="#appflow-cdk.SAPOdataSuccessResponseHandlingConfiguration">SAPOdataSuccessResponseHandlingConfiguration</a></code> | *No description.* |

---

##### `object`<sup>Required</sup> <a name="object" id="appflow-cdk.SAPOdataDestinationProps.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

The SAPOdata object for which the operation is to be set.

---

##### `operation`<sup>Required</sup> <a name="operation" id="appflow-cdk.SAPOdataDestinationProps.property.operation"></a>

```typescript
public readonly operation: WriteOperation;
```

- *Type:* <a href="#appflow-cdk.WriteOperation">WriteOperation</a>

---

##### `profile`<sup>Required</sup> <a name="profile" id="appflow-cdk.SAPOdataDestinationProps.property.profile"></a>

```typescript
public readonly profile: SAPOdataConnectorProfile;
```

- *Type:* <a href="#appflow-cdk.SAPOdataConnectorProfile">SAPOdataConnectorProfile</a>

---

##### `errorHandling`<sup>Optional</sup> <a name="errorHandling" id="appflow-cdk.SAPOdataDestinationProps.property.errorHandling"></a>

```typescript
public readonly errorHandling: ErrorHandlingConfiguration;
```

- *Type:* <a href="#appflow-cdk.ErrorHandlingConfiguration">ErrorHandlingConfiguration</a>

The settings that determine how Amazon AppFlow handles an error when placing data in the SAPOdata destination.

For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure.

---

##### `successResponseHandling`<sup>Optional</sup> <a name="successResponseHandling" id="appflow-cdk.SAPOdataDestinationProps.property.successResponseHandling"></a>

```typescript
public readonly successResponseHandling: SAPOdataSuccessResponseHandlingConfiguration;
```

- *Type:* <a href="#appflow-cdk.SAPOdataSuccessResponseHandlingConfiguration">SAPOdataSuccessResponseHandlingConfiguration</a>

---

### SAPOdataOauthRefreshTokenGrantFlowSettings <a name="SAPOdataOauthRefreshTokenGrantFlowSettings" id="appflow-cdk.SAPOdataOauthRefreshTokenGrantFlowSettings"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SAPOdataOauthRefreshTokenGrantFlowSettings.Initializer"></a>

```typescript
import { SAPOdataOauthRefreshTokenGrantFlowSettings } from 'appflow-cdk'

const sAPOdataOauthRefreshTokenGrantFlowSettings: SAPOdataOauthRefreshTokenGrantFlowSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SAPOdataOauthRefreshTokenGrantFlowSettings.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SAPOdataOauthRefreshTokenGrantFlowSettings.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SAPOdataOauthRefreshTokenGrantFlowSettings.property.refreshToken">refreshToken</a></code> | <code>string</code> | *No description.* |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="appflow-cdk.SAPOdataOauthRefreshTokenGrantFlowSettings.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="appflow-cdk.SAPOdataOauthRefreshTokenGrantFlowSettings.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `refreshToken`<sup>Optional</sup> <a name="refreshToken" id="appflow-cdk.SAPOdataOauthRefreshTokenGrantFlowSettings.property.refreshToken"></a>

```typescript
public readonly refreshToken: string;
```

- *Type:* string

---

### SAPOdataOAuthSettings <a name="SAPOdataOAuthSettings" id="appflow-cdk.SAPOdataOAuthSettings"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SAPOdataOAuthSettings.Initializer"></a>

```typescript
import { SAPOdataOAuthSettings } from 'appflow-cdk'

const sAPOdataOAuthSettings: SAPOdataOAuthSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SAPOdataOAuthSettings.property.refreshToken">refreshToken</a></code> | <code><a href="#appflow-cdk.SAPOdataOauthRefreshTokenGrantFlowSettings">SAPOdataOauthRefreshTokenGrantFlowSettings</a></code> | *No description.* |
| <code><a href="#appflow-cdk.SAPOdataOAuthSettings.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |

---

##### `refreshToken`<sup>Required</sup> <a name="refreshToken" id="appflow-cdk.SAPOdataOAuthSettings.property.refreshToken"></a>

```typescript
public readonly refreshToken: SAPOdataOauthRefreshTokenGrantFlowSettings;
```

- *Type:* <a href="#appflow-cdk.SAPOdataOauthRefreshTokenGrantFlowSettings">SAPOdataOauthRefreshTokenGrantFlowSettings</a>

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="appflow-cdk.SAPOdataOAuthSettings.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

### SAPOdataSourceProps <a name="SAPOdataSourceProps" id="appflow-cdk.SAPOdataSourceProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SAPOdataSourceProps.Initializer"></a>

```typescript
import { SAPOdataSourceProps } from 'appflow-cdk'

const sAPOdataSourceProps: SAPOdataSourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SAPOdataSourceProps.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SAPOdataSourceProps.property.profile">profile</a></code> | <code><a href="#appflow-cdk.SAPOdataConnectorProfile">SAPOdataConnectorProfile</a></code> | *No description.* |

---

##### `object`<sup>Required</sup> <a name="object" id="appflow-cdk.SAPOdataSourceProps.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `profile`<sup>Required</sup> <a name="profile" id="appflow-cdk.SAPOdataSourceProps.property.profile"></a>

```typescript
public readonly profile: SAPOdataConnectorProfile;
```

- *Type:* <a href="#appflow-cdk.SAPOdataConnectorProfile">SAPOdataConnectorProfile</a>

---

### SAPOdataSuccessResponseHandlingConfiguration <a name="SAPOdataSuccessResponseHandlingConfiguration" id="appflow-cdk.SAPOdataSuccessResponseHandlingConfiguration"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SAPOdataSuccessResponseHandlingConfiguration.Initializer"></a>

```typescript
import { SAPOdataSuccessResponseHandlingConfiguration } from 'appflow-cdk'

const sAPOdataSuccessResponseHandlingConfiguration: SAPOdataSuccessResponseHandlingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SAPOdataSuccessResponseHandlingConfiguration.property.location">location</a></code> | <code><a href="#appflow-cdk.S3Location">S3Location</a></code> | *No description.* |

---

##### `location`<sup>Required</sup> <a name="location" id="appflow-cdk.SAPOdataSuccessResponseHandlingConfiguration.property.location"></a>

```typescript
public readonly location: S3Location;
```

- *Type:* <a href="#appflow-cdk.S3Location">S3Location</a>

---

### ScheduleProperties <a name="ScheduleProperties" id="appflow-cdk.ScheduleProperties"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.ScheduleProperties.Initializer"></a>

```typescript
import { ScheduleProperties } from 'appflow-cdk'

const scheduleProperties: ScheduleProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ScheduleProperties.property.endTime">endTime</a></code> | <code>Date</code> | *No description.* |
| <code><a href="#appflow-cdk.ScheduleProperties.property.firstExecutionFrom">firstExecutionFrom</a></code> | <code>Date</code> | Timestamp for the records to import from the connector in the first flow run. |
| <code><a href="#appflow-cdk.ScheduleProperties.property.offset">offset</a></code> | <code>aws-cdk-lib.Duration</code> | *No description.* |
| <code><a href="#appflow-cdk.ScheduleProperties.property.startTime">startTime</a></code> | <code>Date</code> | *No description.* |
| <code><a href="#appflow-cdk.ScheduleProperties.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="appflow-cdk.ScheduleProperties.property.endTime"></a>

```typescript
public readonly endTime: Date;
```

- *Type:* Date

---

##### `firstExecutionFrom`<sup>Optional</sup> <a name="firstExecutionFrom" id="appflow-cdk.ScheduleProperties.property.firstExecutionFrom"></a>

```typescript
public readonly firstExecutionFrom: Date;
```

- *Type:* Date
- *Default:* 30 days back from the initial frow run

Timestamp for the records to import from the connector in the first flow run.

---

##### `offset`<sup>Optional</sup> <a name="offset" id="appflow-cdk.ScheduleProperties.property.offset"></a>

```typescript
public readonly offset: Duration;
```

- *Type:* aws-cdk-lib.Duration

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="appflow-cdk.ScheduleProperties.property.startTime"></a>

```typescript
public readonly startTime: Date;
```

- *Type:* Date

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="appflow-cdk.ScheduleProperties.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

### ServiceNowBasicSettings <a name="ServiceNowBasicSettings" id="appflow-cdk.ServiceNowBasicSettings"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.ServiceNowBasicSettings.Initializer"></a>

```typescript
import { ServiceNowBasicSettings } from 'appflow-cdk'

const serviceNowBasicSettings: ServiceNowBasicSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ServiceNowBasicSettings.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.ServiceNowBasicSettings.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `password`<sup>Required</sup> <a name="password" id="appflow-cdk.ServiceNowBasicSettings.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="appflow-cdk.ServiceNowBasicSettings.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

### ServiceNowConnectorCredentials <a name="ServiceNowConnectorCredentials" id="appflow-cdk.ServiceNowConnectorCredentials"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.ServiceNowConnectorCredentials.Initializer"></a>

```typescript
import { ServiceNowConnectorCredentials } from 'appflow-cdk'

const serviceNowConnectorCredentials: ServiceNowConnectorCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ServiceNowConnectorCredentials.property.basic">basic</a></code> | <code><a href="#appflow-cdk.ServiceNowBasicSettings">ServiceNowBasicSettings</a></code> | *No description.* |

---

##### `basic`<sup>Required</sup> <a name="basic" id="appflow-cdk.ServiceNowConnectorCredentials.property.basic"></a>

```typescript
public readonly basic: ServiceNowBasicSettings;
```

- *Type:* <a href="#appflow-cdk.ServiceNowBasicSettings">ServiceNowBasicSettings</a>

---

### ServiceNowConnectorProfileProps <a name="ServiceNowConnectorProfileProps" id="appflow-cdk.ServiceNowConnectorProfileProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.ServiceNowConnectorProfileProps.Initializer"></a>

```typescript
import { ServiceNowConnectorProfileProps } from 'appflow-cdk'

const serviceNowConnectorProfileProps: ServiceNowConnectorProfileProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ServiceNowConnectorProfileProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | TODO: think if this should be here as not all connector profiles have that. |
| <code><a href="#appflow-cdk.ServiceNowConnectorProfileProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.ServiceNowConnectorProfileProps.property.credentials">credentials</a></code> | <code><a href="#appflow-cdk.ServiceNowConnectorCredentials">ServiceNowConnectorCredentials</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ServiceNowConnectorProfileProps.property.properties">properties</a></code> | <code><a href="#appflow-cdk.ServiceNowConnectorProperties">ServiceNowConnectorProperties</a></code> | *No description.* |

---

##### `key`<sup>Optional</sup> <a name="key" id="appflow-cdk.ServiceNowConnectorProfileProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

TODO: think if this should be here as not all connector profiles have that.

---

##### `name`<sup>Optional</sup> <a name="name" id="appflow-cdk.ServiceNowConnectorProfileProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="appflow-cdk.ServiceNowConnectorProfileProps.property.credentials"></a>

```typescript
public readonly credentials: ServiceNowConnectorCredentials;
```

- *Type:* <a href="#appflow-cdk.ServiceNowConnectorCredentials">ServiceNowConnectorCredentials</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="appflow-cdk.ServiceNowConnectorProfileProps.property.properties"></a>

```typescript
public readonly properties: ServiceNowConnectorProperties;
```

- *Type:* <a href="#appflow-cdk.ServiceNowConnectorProperties">ServiceNowConnectorProperties</a>

---

### ServiceNowConnectorProperties <a name="ServiceNowConnectorProperties" id="appflow-cdk.ServiceNowConnectorProperties"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.ServiceNowConnectorProperties.Initializer"></a>

```typescript
import { ServiceNowConnectorProperties } from 'appflow-cdk'

const serviceNowConnectorProperties: ServiceNowConnectorProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ServiceNowConnectorProperties.property.instanceUrl">instanceUrl</a></code> | <code>string</code> | *No description.* |

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="appflow-cdk.ServiceNowConnectorProperties.property.instanceUrl"></a>

```typescript
public readonly instanceUrl: string;
```

- *Type:* string

---

### ServiceNowSourceProps <a name="ServiceNowSourceProps" id="appflow-cdk.ServiceNowSourceProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.ServiceNowSourceProps.Initializer"></a>

```typescript
import { ServiceNowSourceProps } from 'appflow-cdk'

const serviceNowSourceProps: ServiceNowSourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ServiceNowSourceProps.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.ServiceNowSourceProps.property.profile">profile</a></code> | <code><a href="#appflow-cdk.ServiceNowConnectorProfile">ServiceNowConnectorProfile</a></code> | *No description.* |

---

##### `object`<sup>Required</sup> <a name="object" id="appflow-cdk.ServiceNowSourceProps.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `profile`<sup>Required</sup> <a name="profile" id="appflow-cdk.ServiceNowSourceProps.property.profile"></a>

```typescript
public readonly profile: ServiceNowConnectorProfile;
```

- *Type:* <a href="#appflow-cdk.ServiceNowConnectorProfile">ServiceNowConnectorProfile</a>

---

### SlackConnectorCredentials <a name="SlackConnectorCredentials" id="appflow-cdk.SlackConnectorCredentials"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SlackConnectorCredentials.Initializer"></a>

```typescript
import { SlackConnectorCredentials } from 'appflow-cdk'

const slackConnectorCredentials: SlackConnectorCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SlackConnectorCredentials.property.oAuth">oAuth</a></code> | <code><a href="#appflow-cdk.SlackOAuthSettings">SlackOAuthSettings</a></code> | *No description.* |

---

##### `oAuth`<sup>Required</sup> <a name="oAuth" id="appflow-cdk.SlackConnectorCredentials.property.oAuth"></a>

```typescript
public readonly oAuth: SlackOAuthSettings;
```

- *Type:* <a href="#appflow-cdk.SlackOAuthSettings">SlackOAuthSettings</a>

---

### SlackConnectorProfileProps <a name="SlackConnectorProfileProps" id="appflow-cdk.SlackConnectorProfileProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SlackConnectorProfileProps.Initializer"></a>

```typescript
import { SlackConnectorProfileProps } from 'appflow-cdk'

const slackConnectorProfileProps: SlackConnectorProfileProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SlackConnectorProfileProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | TODO: think if this should be here as not all connector profiles have that. |
| <code><a href="#appflow-cdk.SlackConnectorProfileProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SlackConnectorProfileProps.property.credentials">credentials</a></code> | <code><a href="#appflow-cdk.SlackConnectorCredentials">SlackConnectorCredentials</a></code> | *No description.* |
| <code><a href="#appflow-cdk.SlackConnectorProfileProps.property.properties">properties</a></code> | <code><a href="#appflow-cdk.SlackConnectorProperties">SlackConnectorProperties</a></code> | *No description.* |

---

##### `key`<sup>Optional</sup> <a name="key" id="appflow-cdk.SlackConnectorProfileProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

TODO: think if this should be here as not all connector profiles have that.

---

##### `name`<sup>Optional</sup> <a name="name" id="appflow-cdk.SlackConnectorProfileProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="appflow-cdk.SlackConnectorProfileProps.property.credentials"></a>

```typescript
public readonly credentials: SlackConnectorCredentials;
```

- *Type:* <a href="#appflow-cdk.SlackConnectorCredentials">SlackConnectorCredentials</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="appflow-cdk.SlackConnectorProfileProps.property.properties"></a>

```typescript
public readonly properties: SlackConnectorProperties;
```

- *Type:* <a href="#appflow-cdk.SlackConnectorProperties">SlackConnectorProperties</a>

---

### SlackConnectorProperties <a name="SlackConnectorProperties" id="appflow-cdk.SlackConnectorProperties"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SlackConnectorProperties.Initializer"></a>

```typescript
import { SlackConnectorProperties } from 'appflow-cdk'

const slackConnectorProperties: SlackConnectorProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SlackConnectorProperties.property.instanceUrl">instanceUrl</a></code> | <code>string</code> | *No description.* |

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="appflow-cdk.SlackConnectorProperties.property.instanceUrl"></a>

```typescript
public readonly instanceUrl: string;
```

- *Type:* string

---

### SlackOAuthSettings <a name="SlackOAuthSettings" id="appflow-cdk.SlackOAuthSettings"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SlackOAuthSettings.Initializer"></a>

```typescript
import { SlackOAuthSettings } from 'appflow-cdk'

const slackOAuthSettings: SlackOAuthSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SlackOAuthSettings.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SlackOAuthSettings.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SlackOAuthSettings.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="appflow-cdk.SlackOAuthSettings.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="appflow-cdk.SlackOAuthSettings.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="appflow-cdk.SlackOAuthSettings.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

### SlackSourceProps <a name="SlackSourceProps" id="appflow-cdk.SlackSourceProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SlackSourceProps.Initializer"></a>

```typescript
import { SlackSourceProps } from 'appflow-cdk'

const slackSourceProps: SlackSourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SlackSourceProps.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SlackSourceProps.property.profile">profile</a></code> | <code><a href="#appflow-cdk.SlackConnectorProfile">SlackConnectorProfile</a></code> | *No description.* |
| <code><a href="#appflow-cdk.SlackSourceProps.property.apiVersion">apiVersion</a></code> | <code>string</code> | *No description.* |

---

##### `object`<sup>Required</sup> <a name="object" id="appflow-cdk.SlackSourceProps.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `profile`<sup>Required</sup> <a name="profile" id="appflow-cdk.SlackSourceProps.property.profile"></a>

```typescript
public readonly profile: SlackConnectorProfile;
```

- *Type:* <a href="#appflow-cdk.SlackConnectorProfile">SlackConnectorProfile</a>

---

##### `apiVersion`<sup>Optional</sup> <a name="apiVersion" id="appflow-cdk.SlackSourceProps.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

---

### SnowflakeBasicSettings <a name="SnowflakeBasicSettings" id="appflow-cdk.SnowflakeBasicSettings"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SnowflakeBasicSettings.Initializer"></a>

```typescript
import { SnowflakeBasicSettings } from 'appflow-cdk'

const snowflakeBasicSettings: SnowflakeBasicSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SnowflakeBasicSettings.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SnowflakeBasicSettings.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `password`<sup>Required</sup> <a name="password" id="appflow-cdk.SnowflakeBasicSettings.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="appflow-cdk.SnowflakeBasicSettings.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

### SnowflakeConnectorCredentials <a name="SnowflakeConnectorCredentials" id="appflow-cdk.SnowflakeConnectorCredentials"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SnowflakeConnectorCredentials.Initializer"></a>

```typescript
import { SnowflakeConnectorCredentials } from 'appflow-cdk'

const snowflakeConnectorCredentials: SnowflakeConnectorCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SnowflakeConnectorCredentials.property.basic">basic</a></code> | <code><a href="#appflow-cdk.SnowflakeBasicSettings">SnowflakeBasicSettings</a></code> | *No description.* |

---

##### `basic`<sup>Required</sup> <a name="basic" id="appflow-cdk.SnowflakeConnectorCredentials.property.basic"></a>

```typescript
public readonly basic: SnowflakeBasicSettings;
```

- *Type:* <a href="#appflow-cdk.SnowflakeBasicSettings">SnowflakeBasicSettings</a>

---

### SnowflakeConnectorProfileProps <a name="SnowflakeConnectorProfileProps" id="appflow-cdk.SnowflakeConnectorProfileProps"></a>

1.

make sure to understand the steps here: https://docs.snowflake.com/en/user-guide/data-load-s3-config-storage-integration
2. think if we can set up the role here somehow.

#### Initializer <a name="Initializer" id="appflow-cdk.SnowflakeConnectorProfileProps.Initializer"></a>

```typescript
import { SnowflakeConnectorProfileProps } from 'appflow-cdk'

const snowflakeConnectorProfileProps: SnowflakeConnectorProfileProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SnowflakeConnectorProfileProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | TODO: think if this should be here as not all connector profiles have that. |
| <code><a href="#appflow-cdk.SnowflakeConnectorProfileProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SnowflakeConnectorProfileProps.property.credentials">credentials</a></code> | <code><a href="#appflow-cdk.SnowflakeConnectorCredentials">SnowflakeConnectorCredentials</a></code> | *No description.* |
| <code><a href="#appflow-cdk.SnowflakeConnectorProfileProps.property.properties">properties</a></code> | <code><a href="#appflow-cdk.SnowflakeConnectorProperties">SnowflakeConnectorProperties</a></code> | *No description.* |

---

##### `key`<sup>Optional</sup> <a name="key" id="appflow-cdk.SnowflakeConnectorProfileProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

TODO: think if this should be here as not all connector profiles have that.

---

##### `name`<sup>Optional</sup> <a name="name" id="appflow-cdk.SnowflakeConnectorProfileProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="appflow-cdk.SnowflakeConnectorProfileProps.property.credentials"></a>

```typescript
public readonly credentials: SnowflakeConnectorCredentials;
```

- *Type:* <a href="#appflow-cdk.SnowflakeConnectorCredentials">SnowflakeConnectorCredentials</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="appflow-cdk.SnowflakeConnectorProfileProps.property.properties"></a>

```typescript
public readonly properties: SnowflakeConnectorProperties;
```

- *Type:* <a href="#appflow-cdk.SnowflakeConnectorProperties">SnowflakeConnectorProperties</a>

---

### SnowflakeConnectorProperties <a name="SnowflakeConnectorProperties" id="appflow-cdk.SnowflakeConnectorProperties"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SnowflakeConnectorProperties.Initializer"></a>

```typescript
import { SnowflakeConnectorProperties } from 'appflow-cdk'

const snowflakeConnectorProperties: SnowflakeConnectorProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SnowflakeConnectorProperties.property.associatedLocation">associatedLocation</a></code> | <code><a href="#appflow-cdk.S3Location">S3Location</a></code> | *No description.* |
| <code><a href="#appflow-cdk.SnowflakeConnectorProperties.property.location">location</a></code> | <code><a href="#appflow-cdk.SnowflakeLocation">SnowflakeLocation</a></code> | *No description.* |
| <code><a href="#appflow-cdk.SnowflakeConnectorProperties.property.integration">integration</a></code> | <code><a href="#appflow-cdk.SnowflakeStorageIntegration">SnowflakeStorageIntegration</a></code> | *No description.* |

---

##### `associatedLocation`<sup>Required</sup> <a name="associatedLocation" id="appflow-cdk.SnowflakeConnectorProperties.property.associatedLocation"></a>

```typescript
public readonly associatedLocation: S3Location;
```

- *Type:* <a href="#appflow-cdk.S3Location">S3Location</a>

---

##### `location`<sup>Required</sup> <a name="location" id="appflow-cdk.SnowflakeConnectorProperties.property.location"></a>

```typescript
public readonly location: SnowflakeLocation;
```

- *Type:* <a href="#appflow-cdk.SnowflakeLocation">SnowflakeLocation</a>

---

##### `integration`<sup>Optional</sup> <a name="integration" id="appflow-cdk.SnowflakeConnectorProperties.property.integration"></a>

```typescript
public readonly integration: SnowflakeStorageIntegration;
```

- *Type:* <a href="#appflow-cdk.SnowflakeStorageIntegration">SnowflakeStorageIntegration</a>

---

### SnowflakeDestinationObject <a name="SnowflakeDestinationObject" id="appflow-cdk.SnowflakeDestinationObject"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SnowflakeDestinationObject.Initializer"></a>

```typescript
import { SnowflakeDestinationObject } from 'appflow-cdk'

const snowflakeDestinationObject: SnowflakeDestinationObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SnowflakeDestinationObject.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SnowflakeDestinationObject.property.table">table</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SnowflakeDestinationObject.property.schema">schema</a></code> | <code>string</code> | *No description.* |

---

##### `database`<sup>Required</sup> <a name="database" id="appflow-cdk.SnowflakeDestinationObject.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `table`<sup>Required</sup> <a name="table" id="appflow-cdk.SnowflakeDestinationObject.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

---

##### `schema`<sup>Optional</sup> <a name="schema" id="appflow-cdk.SnowflakeDestinationObject.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string
- *Default:* PUBLIC

---

### SnowflakeDestinationProps <a name="SnowflakeDestinationProps" id="appflow-cdk.SnowflakeDestinationProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SnowflakeDestinationProps.Initializer"></a>

```typescript
import { SnowflakeDestinationProps } from 'appflow-cdk'

const snowflakeDestinationProps: SnowflakeDestinationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SnowflakeDestinationProps.property.object">object</a></code> | <code><a href="#appflow-cdk.SnowflakeDestinationObject">SnowflakeDestinationObject</a></code> | A Snowflake table object (optionally with the schema). |
| <code><a href="#appflow-cdk.SnowflakeDestinationProps.property.profile">profile</a></code> | <code><a href="#appflow-cdk.SnowflakeConnectorProfile">SnowflakeConnectorProfile</a></code> | An instance of the @type SnowflakeConnectorProfile. |
| <code><a href="#appflow-cdk.SnowflakeDestinationProps.property.errorHandling">errorHandling</a></code> | <code><a href="#appflow-cdk.ErrorHandlingConfiguration">ErrorHandlingConfiguration</a></code> | The settings that determine how Amazon AppFlow handles an error when placing data in the Salesforce destination. |

---

##### `object`<sup>Required</sup> <a name="object" id="appflow-cdk.SnowflakeDestinationProps.property.object"></a>

```typescript
public readonly object: SnowflakeDestinationObject;
```

- *Type:* <a href="#appflow-cdk.SnowflakeDestinationObject">SnowflakeDestinationObject</a>

A Snowflake table object (optionally with the schema).

---

##### `profile`<sup>Required</sup> <a name="profile" id="appflow-cdk.SnowflakeDestinationProps.property.profile"></a>

```typescript
public readonly profile: SnowflakeConnectorProfile;
```

- *Type:* <a href="#appflow-cdk.SnowflakeConnectorProfile">SnowflakeConnectorProfile</a>

An instance of the @type SnowflakeConnectorProfile.

---

##### `errorHandling`<sup>Optional</sup> <a name="errorHandling" id="appflow-cdk.SnowflakeDestinationProps.property.errorHandling"></a>

```typescript
public readonly errorHandling: ErrorHandlingConfiguration;
```

- *Type:* <a href="#appflow-cdk.ErrorHandlingConfiguration">ErrorHandlingConfiguration</a>

The settings that determine how Amazon AppFlow handles an error when placing data in the Salesforce destination.

For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure.

---

### SnowflakeLocation <a name="SnowflakeLocation" id="appflow-cdk.SnowflakeLocation"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SnowflakeLocation.Initializer"></a>

```typescript
import { SnowflakeLocation } from 'appflow-cdk'

const snowflakeLocation: SnowflakeLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SnowflakeLocation.property.account">account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SnowflakeLocation.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SnowflakeLocation.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SnowflakeLocation.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SnowflakeLocation.property.warehouse">warehouse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SnowflakeLocation.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `account`<sup>Required</sup> <a name="account" id="appflow-cdk.SnowflakeLocation.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="appflow-cdk.SnowflakeLocation.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="appflow-cdk.SnowflakeLocation.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `stage`<sup>Required</sup> <a name="stage" id="appflow-cdk.SnowflakeLocation.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="appflow-cdk.SnowflakeLocation.property.warehouse"></a>

```typescript
public readonly warehouse: string;
```

- *Type:* string

---

##### `region`<sup>Optional</sup> <a name="region" id="appflow-cdk.SnowflakeLocation.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

### SnowflakeStorageIntegration <a name="SnowflakeStorageIntegration" id="appflow-cdk.SnowflakeStorageIntegration"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.SnowflakeStorageIntegration.Initializer"></a>

```typescript
import { SnowflakeStorageIntegration } from 'appflow-cdk'

const snowflakeStorageIntegration: SnowflakeStorageIntegration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SnowflakeStorageIntegration.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.SnowflakeStorageIntegration.property.storageUserArn">storageUserArn</a></code> | <code>string</code> | *No description.* |

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="appflow-cdk.SnowflakeStorageIntegration.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `storageUserArn`<sup>Required</sup> <a name="storageUserArn" id="appflow-cdk.SnowflakeStorageIntegration.property.storageUserArn"></a>

```typescript
public readonly storageUserArn: string;
```

- *Type:* string

---

### TaskConnectorOperator <a name="TaskConnectorOperator" id="appflow-cdk.TaskConnectorOperator"></a>

A pair that represents the (typically source) connector, and a task operation to be performed in the context of the connector.

#### Initializer <a name="Initializer" id="appflow-cdk.TaskConnectorOperator.Initializer"></a>

```typescript
import { TaskConnectorOperator } from 'appflow-cdk'

const taskConnectorOperator: TaskConnectorOperator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.TaskConnectorOperator.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.TaskConnectorOperator.property.type">type</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | *No description.* |

---

##### `operation`<sup>Required</sup> <a name="operation" id="appflow-cdk.TaskConnectorOperator.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `type`<sup>Optional</sup> <a name="type" id="appflow-cdk.TaskConnectorOperator.property.type"></a>

```typescript
public readonly type: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

---

### TaskProperties <a name="TaskProperties" id="appflow-cdk.TaskProperties"></a>

A generic bucket for the task properties.

#### Initializer <a name="Initializer" id="appflow-cdk.TaskProperties.Initializer"></a>

```typescript
import { TaskProperties } from 'appflow-cdk'

const taskProperties: TaskProperties = { ... }
```


### TriggerConfig <a name="TriggerConfig" id="appflow-cdk.TriggerConfig"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.TriggerConfig.Initializer"></a>

```typescript
import { TriggerConfig } from 'appflow-cdk'

const triggerConfig: TriggerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.TriggerConfig.property.properties">properties</a></code> | <code><a href="#appflow-cdk.TriggerProperties">TriggerProperties</a></code> | *No description.* |

---

##### `properties`<sup>Optional</sup> <a name="properties" id="appflow-cdk.TriggerConfig.property.properties"></a>

```typescript
public readonly properties: TriggerProperties;
```

- *Type:* <a href="#appflow-cdk.TriggerProperties">TriggerProperties</a>

---

### TriggeredFlowBaseProps <a name="TriggeredFlowBaseProps" id="appflow-cdk.TriggeredFlowBaseProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.TriggeredFlowBaseProps.Initializer"></a>

```typescript
import { TriggeredFlowBaseProps } from 'appflow-cdk'

const triggeredFlowBaseProps: TriggeredFlowBaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.TriggeredFlowBaseProps.property.destination">destination</a></code> | <code><a href="#appflow-cdk.IDestination">IDestination</a></code> | *No description.* |
| <code><a href="#appflow-cdk.TriggeredFlowBaseProps.property.mappings">mappings</a></code> | <code><a href="#appflow-cdk.IMapping">IMapping</a>[]</code> | *No description.* |
| <code><a href="#appflow-cdk.TriggeredFlowBaseProps.property.source">source</a></code> | <code><a href="#appflow-cdk.ISource">ISource</a></code> | *No description.* |
| <code><a href="#appflow-cdk.TriggeredFlowBaseProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.TriggeredFlowBaseProps.property.filters">filters</a></code> | <code><a href="#appflow-cdk.IFilter">IFilter</a>[]</code> | *No description.* |
| <code><a href="#appflow-cdk.TriggeredFlowBaseProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#appflow-cdk.TriggeredFlowBaseProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.TriggeredFlowBaseProps.property.transforms">transforms</a></code> | <code><a href="#appflow-cdk.ITransform">ITransform</a>[]</code> | *No description.* |
| <code><a href="#appflow-cdk.TriggeredFlowBaseProps.property.validations">validations</a></code> | <code><a href="#appflow-cdk.IValidation">IValidation</a>[]</code> | *No description.* |
| <code><a href="#appflow-cdk.TriggeredFlowBaseProps.property.autoActivate">autoActivate</a></code> | <code>boolean</code> | *No description.* |

---

##### `destination`<sup>Required</sup> <a name="destination" id="appflow-cdk.TriggeredFlowBaseProps.property.destination"></a>

```typescript
public readonly destination: IDestination;
```

- *Type:* <a href="#appflow-cdk.IDestination">IDestination</a>

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="appflow-cdk.TriggeredFlowBaseProps.property.mappings"></a>

```typescript
public readonly mappings: IMapping[];
```

- *Type:* <a href="#appflow-cdk.IMapping">IMapping</a>[]

---

##### `source`<sup>Required</sup> <a name="source" id="appflow-cdk.TriggeredFlowBaseProps.property.source"></a>

```typescript
public readonly source: ISource;
```

- *Type:* <a href="#appflow-cdk.ISource">ISource</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="appflow-cdk.TriggeredFlowBaseProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `filters`<sup>Optional</sup> <a name="filters" id="appflow-cdk.TriggeredFlowBaseProps.property.filters"></a>

```typescript
public readonly filters: IFilter[];
```

- *Type:* <a href="#appflow-cdk.IFilter">IFilter</a>[]

---

##### `key`<sup>Optional</sup> <a name="key" id="appflow-cdk.TriggeredFlowBaseProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `name`<sup>Optional</sup> <a name="name" id="appflow-cdk.TriggeredFlowBaseProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="appflow-cdk.TriggeredFlowBaseProps.property.transforms"></a>

```typescript
public readonly transforms: ITransform[];
```

- *Type:* <a href="#appflow-cdk.ITransform">ITransform</a>[]

---

##### `validations`<sup>Optional</sup> <a name="validations" id="appflow-cdk.TriggeredFlowBaseProps.property.validations"></a>

```typescript
public readonly validations: IValidation[];
```

- *Type:* <a href="#appflow-cdk.IValidation">IValidation</a>[]

---

##### `autoActivate`<sup>Optional</sup> <a name="autoActivate" id="appflow-cdk.TriggeredFlowBaseProps.property.autoActivate"></a>

```typescript
public readonly autoActivate: boolean;
```

- *Type:* boolean

---

### TriggerProperties <a name="TriggerProperties" id="appflow-cdk.TriggerProperties"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.TriggerProperties.Initializer"></a>

```typescript
import { TriggerProperties } from 'appflow-cdk'

const triggerProperties: TriggerProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.TriggerProperties.property.dataPullConfig">dataPullConfig</a></code> | <code><a href="#appflow-cdk.DataPullConfig">DataPullConfig</a></code> | *No description.* |
| <code><a href="#appflow-cdk.TriggerProperties.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | *No description.* |
| <code><a href="#appflow-cdk.TriggerProperties.property.flowErrorDeactivationThreshold">flowErrorDeactivationThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#appflow-cdk.TriggerProperties.property.properties">properties</a></code> | <code><a href="#appflow-cdk.ScheduleProperties">ScheduleProperties</a></code> | *No description.* |

---

##### `dataPullConfig`<sup>Required</sup> <a name="dataPullConfig" id="appflow-cdk.TriggerProperties.property.dataPullConfig"></a>

```typescript
public readonly dataPullConfig: DataPullConfig;
```

- *Type:* <a href="#appflow-cdk.DataPullConfig">DataPullConfig</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="appflow-cdk.TriggerProperties.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

---

##### `flowErrorDeactivationThreshold`<sup>Optional</sup> <a name="flowErrorDeactivationThreshold" id="appflow-cdk.TriggerProperties.property.flowErrorDeactivationThreshold"></a>

```typescript
public readonly flowErrorDeactivationThreshold: number;
```

- *Type:* number

---

##### `properties`<sup>Optional</sup> <a name="properties" id="appflow-cdk.TriggerProperties.property.properties"></a>

```typescript
public readonly properties: ScheduleProperties;
```

- *Type:* <a href="#appflow-cdk.ScheduleProperties">ScheduleProperties</a>

---

### ZendeskConnectorCredentials <a name="ZendeskConnectorCredentials" id="appflow-cdk.ZendeskConnectorCredentials"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.ZendeskConnectorCredentials.Initializer"></a>

```typescript
import { ZendeskConnectorCredentials } from 'appflow-cdk'

const zendeskConnectorCredentials: ZendeskConnectorCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ZendeskConnectorCredentials.property.oAuth">oAuth</a></code> | <code><a href="#appflow-cdk.ZendeskOAuthSettings">ZendeskOAuthSettings</a></code> | *No description.* |

---

##### `oAuth`<sup>Required</sup> <a name="oAuth" id="appflow-cdk.ZendeskConnectorCredentials.property.oAuth"></a>

```typescript
public readonly oAuth: ZendeskOAuthSettings;
```

- *Type:* <a href="#appflow-cdk.ZendeskOAuthSettings">ZendeskOAuthSettings</a>

---

### ZendeskConnectorProfileProps <a name="ZendeskConnectorProfileProps" id="appflow-cdk.ZendeskConnectorProfileProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.ZendeskConnectorProfileProps.Initializer"></a>

```typescript
import { ZendeskConnectorProfileProps } from 'appflow-cdk'

const zendeskConnectorProfileProps: ZendeskConnectorProfileProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ZendeskConnectorProfileProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | TODO: think if this should be here as not all connector profiles have that. |
| <code><a href="#appflow-cdk.ZendeskConnectorProfileProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.ZendeskConnectorProfileProps.property.credentials">credentials</a></code> | <code><a href="#appflow-cdk.ZendeskConnectorCredentials">ZendeskConnectorCredentials</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ZendeskConnectorProfileProps.property.properties">properties</a></code> | <code><a href="#appflow-cdk.ZendeskConnectorProperties">ZendeskConnectorProperties</a></code> | *No description.* |

---

##### `key`<sup>Optional</sup> <a name="key" id="appflow-cdk.ZendeskConnectorProfileProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

TODO: think if this should be here as not all connector profiles have that.

---

##### `name`<sup>Optional</sup> <a name="name" id="appflow-cdk.ZendeskConnectorProfileProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="appflow-cdk.ZendeskConnectorProfileProps.property.credentials"></a>

```typescript
public readonly credentials: ZendeskConnectorCredentials;
```

- *Type:* <a href="#appflow-cdk.ZendeskConnectorCredentials">ZendeskConnectorCredentials</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="appflow-cdk.ZendeskConnectorProfileProps.property.properties"></a>

```typescript
public readonly properties: ZendeskConnectorProperties;
```

- *Type:* <a href="#appflow-cdk.ZendeskConnectorProperties">ZendeskConnectorProperties</a>

---

### ZendeskConnectorProperties <a name="ZendeskConnectorProperties" id="appflow-cdk.ZendeskConnectorProperties"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.ZendeskConnectorProperties.Initializer"></a>

```typescript
import { ZendeskConnectorProperties } from 'appflow-cdk'

const zendeskConnectorProperties: ZendeskConnectorProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ZendeskConnectorProperties.property.instanceUrl">instanceUrl</a></code> | <code>string</code> | *No description.* |

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="appflow-cdk.ZendeskConnectorProperties.property.instanceUrl"></a>

```typescript
public readonly instanceUrl: string;
```

- *Type:* string

---

### ZendeskOAuthSettings <a name="ZendeskOAuthSettings" id="appflow-cdk.ZendeskOAuthSettings"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.ZendeskOAuthSettings.Initializer"></a>

```typescript
import { ZendeskOAuthSettings } from 'appflow-cdk'

const zendeskOAuthSettings: ZendeskOAuthSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ZendeskOAuthSettings.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.ZendeskOAuthSettings.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.ZendeskOAuthSettings.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="appflow-cdk.ZendeskOAuthSettings.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="appflow-cdk.ZendeskOAuthSettings.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="appflow-cdk.ZendeskOAuthSettings.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

### ZendeskSourceProps <a name="ZendeskSourceProps" id="appflow-cdk.ZendeskSourceProps"></a>

#### Initializer <a name="Initializer" id="appflow-cdk.ZendeskSourceProps.Initializer"></a>

```typescript
import { ZendeskSourceProps } from 'appflow-cdk'

const zendeskSourceProps: ZendeskSourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ZendeskSourceProps.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.ZendeskSourceProps.property.profile">profile</a></code> | <code><a href="#appflow-cdk.ZendeskConnectorProfile">ZendeskConnectorProfile</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ZendeskSourceProps.property.apiVersion">apiVersion</a></code> | <code>string</code> | *No description.* |

---

##### `object`<sup>Required</sup> <a name="object" id="appflow-cdk.ZendeskSourceProps.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `profile`<sup>Required</sup> <a name="profile" id="appflow-cdk.ZendeskSourceProps.property.profile"></a>

```typescript
public readonly profile: ZendeskConnectorProfile;
```

- *Type:* <a href="#appflow-cdk.ZendeskConnectorProfile">ZendeskConnectorProfile</a>

---

##### `apiVersion`<sup>Optional</sup> <a name="apiVersion" id="appflow-cdk.ZendeskSourceProps.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectorType <a name="ConnectorType" id="appflow-cdk.ConnectorType"></a>

#### Initializers <a name="Initializers" id="appflow-cdk.ConnectorType.Initializer"></a>

```typescript
import { ConnectorType } from 'appflow-cdk'

new ConnectorType(name: string, isCustom: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ConnectorType.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectorType.Initializer.parameter.isCustom">isCustom</a></code> | <code>boolean</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.ConnectorType.Initializer.parameter.name"></a>

- *Type:* string

---

##### `isCustom`<sup>Required</sup> <a name="isCustom" id="appflow-cdk.ConnectorType.Initializer.parameter.isCustom"></a>

- *Type:* boolean

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.ConnectorType.custom">custom</a></code> | *No description.* |

---

##### `custom` <a name="custom" id="appflow-cdk.ConnectorType.custom"></a>

```typescript
import { ConnectorType } from 'appflow-cdk'

ConnectorType.custom(name: string)
```

###### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.ConnectorType.custom.parameter.name"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ConnectorType.property.eventbridge">eventbridge</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectorType.property.googleanalytics4">googleanalytics4</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectorType.property.marketo">marketo</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectorType.property.redshift">redshift</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectorType.property.s3">s3</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectorType.property.salesforce">salesforce</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectorType.property.salesforcemarketingcloud">salesforcemarketingcloud</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectorType.property.sapodata">sapodata</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectorType.property.servicenow">servicenow</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectorType.property.slack">slack</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectorType.property.snowflake">snowflake</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectorType.property.zendesk">zendesk</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectorType.property.asProfileConnectorType">asProfileConnectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectorType.property.asTaskConnectorOperatorOrigin">asTaskConnectorOperatorOrigin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectorType.property.isCustom">isCustom</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectorType.property.asProfileConnectorLabel">asProfileConnectorLabel</a></code> | <code>string</code> | *No description.* |

---

##### `eventbridge`<sup>Required</sup> <a name="eventbridge" id="appflow-cdk.ConnectorType.property.eventbridge"></a>

```typescript
public readonly eventbridge: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

---

##### `googleanalytics4`<sup>Required</sup> <a name="googleanalytics4" id="appflow-cdk.ConnectorType.property.googleanalytics4"></a>

```typescript
public readonly googleanalytics4: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

---

##### `marketo`<sup>Required</sup> <a name="marketo" id="appflow-cdk.ConnectorType.property.marketo"></a>

```typescript
public readonly marketo: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

---

##### `redshift`<sup>Required</sup> <a name="redshift" id="appflow-cdk.ConnectorType.property.redshift"></a>

```typescript
public readonly redshift: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="appflow-cdk.ConnectorType.property.s3"></a>

```typescript
public readonly s3: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

---

##### `salesforce`<sup>Required</sup> <a name="salesforce" id="appflow-cdk.ConnectorType.property.salesforce"></a>

```typescript
public readonly salesforce: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

---

##### `salesforcemarketingcloud`<sup>Required</sup> <a name="salesforcemarketingcloud" id="appflow-cdk.ConnectorType.property.salesforcemarketingcloud"></a>

```typescript
public readonly salesforcemarketingcloud: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

---

##### `sapodata`<sup>Required</sup> <a name="sapodata" id="appflow-cdk.ConnectorType.property.sapodata"></a>

```typescript
public readonly sapodata: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

---

##### `servicenow`<sup>Required</sup> <a name="servicenow" id="appflow-cdk.ConnectorType.property.servicenow"></a>

```typescript
public readonly servicenow: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="appflow-cdk.ConnectorType.property.slack"></a>

```typescript
public readonly slack: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

---

##### `snowflake`<sup>Required</sup> <a name="snowflake" id="appflow-cdk.ConnectorType.property.snowflake"></a>

```typescript
public readonly snowflake: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

---

##### `zendesk`<sup>Required</sup> <a name="zendesk" id="appflow-cdk.ConnectorType.property.zendesk"></a>

```typescript
public readonly zendesk: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

---

##### `asProfileConnectorType`<sup>Required</sup> <a name="asProfileConnectorType" id="appflow-cdk.ConnectorType.property.asProfileConnectorType"></a>

```typescript
public readonly asProfileConnectorType: string;
```

- *Type:* string

---

##### `asTaskConnectorOperatorOrigin`<sup>Required</sup> <a name="asTaskConnectorOperatorOrigin" id="appflow-cdk.ConnectorType.property.asTaskConnectorOperatorOrigin"></a>

```typescript
public readonly asTaskConnectorOperatorOrigin: string;
```

- *Type:* string

---

##### `isCustom`<sup>Required</sup> <a name="isCustom" id="appflow-cdk.ConnectorType.property.isCustom"></a>

```typescript
public readonly isCustom: boolean;
```

- *Type:* boolean

---

##### `asProfileConnectorLabel`<sup>Optional</sup> <a name="asProfileConnectorLabel" id="appflow-cdk.ConnectorType.property.asProfileConnectorLabel"></a>

```typescript
public readonly asProfileConnectorLabel: string;
```

- *Type:* string

---


### EventBridgeDestination <a name="EventBridgeDestination" id="appflow-cdk.EventBridgeDestination"></a>

- *Implements:* <a href="#appflow-cdk.IDestination">IDestination</a>

#### Initializers <a name="Initializers" id="appflow-cdk.EventBridgeDestination.Initializer"></a>

```typescript
import { EventBridgeDestination } from 'appflow-cdk'

new EventBridgeDestination(props: EventBridgeDestinationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.EventBridgeDestination.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.EventBridgeDestinationProps">EventBridgeDestinationProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.EventBridgeDestination.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.EventBridgeDestinationProps">EventBridgeDestinationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.EventBridgeDestination.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.EventBridgeDestination.bind"></a>

```typescript
public bind(flow: IFlow): DestinationFlowConfigProperty
```

###### `flow`<sup>Required</sup> <a name="flow" id="appflow-cdk.EventBridgeDestination.bind.parameter.flow"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.EventBridgeDestination.property.connectorType">connectorType</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | The AppFlow type of the connector that this source is implemented for. |

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="appflow-cdk.EventBridgeDestination.property.connectorType"></a>

```typescript
public readonly connectorType: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

The AppFlow type of the connector that this source is implemented for.

---


### EventSources <a name="EventSources" id="appflow-cdk.EventSources"></a>

#### Initializers <a name="Initializers" id="appflow-cdk.EventSources.Initializer"></a>

```typescript
import { EventSources } from 'appflow-cdk'

new EventSources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.EventSources.salesforceEventSource">salesforceEventSource</a></code> | *No description.* |

---

##### `salesforceEventSource` <a name="salesforceEventSource" id="appflow-cdk.EventSources.salesforceEventSource"></a>

```typescript
import { EventSources } from 'appflow-cdk'

EventSources.salesforceEventSource(suffix?: string)
```

###### `suffix`<sup>Optional</sup> <a name="suffix" id="appflow-cdk.EventSources.salesforceEventSource.parameter.suffix"></a>

- *Type:* string

---



### Filter <a name="Filter" id="appflow-cdk.Filter"></a>

- *Implements:* <a href="#appflow-cdk.IFilter">IFilter</a>

A representation of a mapping operation, that is an operation filtering records at the source.

#### Initializers <a name="Initializers" id="appflow-cdk.Filter.Initializer"></a>

```typescript
import { Filter } from 'appflow-cdk'

new Filter(condition: FilterCondition)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.Filter.Initializer.parameter.condition">condition</a></code> | <code><a href="#appflow-cdk.FilterCondition">FilterCondition</a></code> | *No description.* |

---

##### `condition`<sup>Required</sup> <a name="condition" id="appflow-cdk.Filter.Initializer.parameter.condition"></a>

- *Type:* <a href="#appflow-cdk.FilterCondition">FilterCondition</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.Filter.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.Filter.bind"></a>

```typescript
public bind(flow: IFlow, source: ISource): TaskProperty[]
```

###### `flow`<sup>Required</sup> <a name="flow" id="appflow-cdk.Filter.bind.parameter.flow"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---

###### `source`<sup>Required</sup> <a name="source" id="appflow-cdk.Filter.bind.parameter.source"></a>

- *Type:* <a href="#appflow-cdk.ISource">ISource</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.Filter.when">when</a></code> | Builds a filter operation on source. |

---

##### `when` <a name="when" id="appflow-cdk.Filter.when"></a>

```typescript
import { Filter } from 'appflow-cdk'

Filter.when(condition: FilterCondition)
```

Builds a filter operation on source.

> [FilterCondition instance](FilterCondition instance)

###### `condition`<sup>Required</sup> <a name="condition" id="appflow-cdk.Filter.when.parameter.condition"></a>

- *Type:* <a href="#appflow-cdk.FilterCondition">FilterCondition</a>

a.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.Filter.property.condition">condition</a></code> | <code><a href="#appflow-cdk.FilterCondition">FilterCondition</a></code> | *No description.* |

---

##### `condition`<sup>Required</sup> <a name="condition" id="appflow-cdk.Filter.property.condition"></a>

```typescript
public readonly condition: FilterCondition;
```

- *Type:* <a href="#appflow-cdk.FilterCondition">FilterCondition</a>

---


### FilterCondition <a name="FilterCondition" id="appflow-cdk.FilterCondition"></a>

A representation of a filter operation condtiion on a source record field.

#### Initializers <a name="Initializers" id="appflow-cdk.FilterCondition.Initializer"></a>

```typescript
import { FilterCondition } from 'appflow-cdk'

new FilterCondition(field: Field, filter: string, properties: TaskProperties)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.FilterCondition.Initializer.parameter.field">field</a></code> | <code><a href="#appflow-cdk.Field">Field</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FilterCondition.Initializer.parameter.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.FilterCondition.Initializer.parameter.properties">properties</a></code> | <code><a href="#appflow-cdk.TaskProperties">TaskProperties</a></code> | *No description.* |

---

##### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.FilterCondition.Initializer.parameter.field"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="appflow-cdk.FilterCondition.Initializer.parameter.filter"></a>

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="appflow-cdk.FilterCondition.Initializer.parameter.properties"></a>

- *Type:* <a href="#appflow-cdk.TaskProperties">TaskProperties</a>

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.FilterCondition.booleanEquals">booleanEquals</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FilterCondition.booleanNotEquals">booleanNotEquals</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FilterCondition.numberEquals">numberEquals</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FilterCondition.numberGreaterThan">numberGreaterThan</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FilterCondition.numberGreaterThanEquals">numberGreaterThanEquals</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FilterCondition.numberLessThan">numberLessThan</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FilterCondition.numberLessThanEquals">numberLessThanEquals</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FilterCondition.numberNotEquals">numberNotEquals</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FilterCondition.stringContains">stringContains</a></code> | A condition testing whether a string-type source field contains the given value(s). |
| <code><a href="#appflow-cdk.FilterCondition.stringEquals">stringEquals</a></code> | A condition testing whether a string-type source field equals the given value(s). |
| <code><a href="#appflow-cdk.FilterCondition.stringNotEquals">stringNotEquals</a></code> | A condition testing whether a string-type source field does not equal the given value(s). |
| <code><a href="#appflow-cdk.FilterCondition.timestampBetween">timestampBetween</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FilterCondition.timestampEquals">timestampEquals</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FilterCondition.timestampGreaterThan">timestampGreaterThan</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FilterCondition.timestampGreaterThanEquals">timestampGreaterThanEquals</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FilterCondition.timestampLessThan">timestampLessThan</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FilterCondition.timestampLessThanEquals">timestampLessThanEquals</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FilterCondition.timestampNotEquals">timestampNotEquals</a></code> | *No description.* |

---

##### `booleanEquals` <a name="booleanEquals" id="appflow-cdk.FilterCondition.booleanEquals"></a>

```typescript
import { FilterCondition } from 'appflow-cdk'

FilterCondition.booleanEquals(field: Field, val: boolean | boolean[])
```

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.FilterCondition.booleanEquals.parameter.field"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

---

###### `val`<sup>Required</sup> <a name="val" id="appflow-cdk.FilterCondition.booleanEquals.parameter.val"></a>

- *Type:* boolean | boolean[]

---

##### `booleanNotEquals` <a name="booleanNotEquals" id="appflow-cdk.FilterCondition.booleanNotEquals"></a>

```typescript
import { FilterCondition } from 'appflow-cdk'

FilterCondition.booleanNotEquals(field: Field, val: boolean | boolean[])
```

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.FilterCondition.booleanNotEquals.parameter.field"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

---

###### `val`<sup>Required</sup> <a name="val" id="appflow-cdk.FilterCondition.booleanNotEquals.parameter.val"></a>

- *Type:* boolean | boolean[]

---

##### `numberEquals` <a name="numberEquals" id="appflow-cdk.FilterCondition.numberEquals"></a>

```typescript
import { FilterCondition } from 'appflow-cdk'

FilterCondition.numberEquals(field: Field, val: number | number[])
```

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.FilterCondition.numberEquals.parameter.field"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

---

###### `val`<sup>Required</sup> <a name="val" id="appflow-cdk.FilterCondition.numberEquals.parameter.val"></a>

- *Type:* number | number[]

---

##### `numberGreaterThan` <a name="numberGreaterThan" id="appflow-cdk.FilterCondition.numberGreaterThan"></a>

```typescript
import { FilterCondition } from 'appflow-cdk'

FilterCondition.numberGreaterThan(field: Field, val: number)
```

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.FilterCondition.numberGreaterThan.parameter.field"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

---

###### `val`<sup>Required</sup> <a name="val" id="appflow-cdk.FilterCondition.numberGreaterThan.parameter.val"></a>

- *Type:* number

---

##### `numberGreaterThanEquals` <a name="numberGreaterThanEquals" id="appflow-cdk.FilterCondition.numberGreaterThanEquals"></a>

```typescript
import { FilterCondition } from 'appflow-cdk'

FilterCondition.numberGreaterThanEquals(field: Field, val: number)
```

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.FilterCondition.numberGreaterThanEquals.parameter.field"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

---

###### `val`<sup>Required</sup> <a name="val" id="appflow-cdk.FilterCondition.numberGreaterThanEquals.parameter.val"></a>

- *Type:* number

---

##### `numberLessThan` <a name="numberLessThan" id="appflow-cdk.FilterCondition.numberLessThan"></a>

```typescript
import { FilterCondition } from 'appflow-cdk'

FilterCondition.numberLessThan(field: Field, val: number)
```

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.FilterCondition.numberLessThan.parameter.field"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

---

###### `val`<sup>Required</sup> <a name="val" id="appflow-cdk.FilterCondition.numberLessThan.parameter.val"></a>

- *Type:* number

---

##### `numberLessThanEquals` <a name="numberLessThanEquals" id="appflow-cdk.FilterCondition.numberLessThanEquals"></a>

```typescript
import { FilterCondition } from 'appflow-cdk'

FilterCondition.numberLessThanEquals(field: Field, val: number)
```

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.FilterCondition.numberLessThanEquals.parameter.field"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

---

###### `val`<sup>Required</sup> <a name="val" id="appflow-cdk.FilterCondition.numberLessThanEquals.parameter.val"></a>

- *Type:* number

---

##### `numberNotEquals` <a name="numberNotEquals" id="appflow-cdk.FilterCondition.numberNotEquals"></a>

```typescript
import { FilterCondition } from 'appflow-cdk'

FilterCondition.numberNotEquals(field: Field, val: number | number[])
```

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.FilterCondition.numberNotEquals.parameter.field"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

---

###### `val`<sup>Required</sup> <a name="val" id="appflow-cdk.FilterCondition.numberNotEquals.parameter.val"></a>

- *Type:* number | number[]

---

##### `stringContains` <a name="stringContains" id="appflow-cdk.FilterCondition.stringContains"></a>

```typescript
import { FilterCondition } from 'appflow-cdk'

FilterCondition.stringContains(field: Field, val: string | string[])
```

A condition testing whether a string-type source field contains the given value(s).

NOTE: When multiple values are passed the evaluation is resolved as logical OR

> [FilterCondition](FilterCondition)

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.FilterCondition.stringContains.parameter.field"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

a source field of a string type.

---

###### `val`<sup>Required</sup> <a name="val" id="appflow-cdk.FilterCondition.stringContains.parameter.val"></a>

- *Type:* string | string[]

a value (or values) to be contained by the field value.

---

##### `stringEquals` <a name="stringEquals" id="appflow-cdk.FilterCondition.stringEquals"></a>

```typescript
import { FilterCondition } from 'appflow-cdk'

FilterCondition.stringEquals(field: Field, val: string | string[])
```

A condition testing whether a string-type source field equals the given value(s).

NOTE: When multiple values are passed the evaluation is resolved as logical OR

> [FilterCondition](FilterCondition)

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.FilterCondition.stringEquals.parameter.field"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

a source field of a string type.

---

###### `val`<sup>Required</sup> <a name="val" id="appflow-cdk.FilterCondition.stringEquals.parameter.val"></a>

- *Type:* string | string[]

a value (or values) to be contained by the field value.

---

##### `stringNotEquals` <a name="stringNotEquals" id="appflow-cdk.FilterCondition.stringNotEquals"></a>

```typescript
import { FilterCondition } from 'appflow-cdk'

FilterCondition.stringNotEquals(field: Field, val: string | string[])
```

A condition testing whether a string-type source field does not equal the given value(s).

NOTE: When multiple values are passed the evaluation is resolved as logical OR

> [FilterCondition](FilterCondition)

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.FilterCondition.stringNotEquals.parameter.field"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

a source field of a string type.

---

###### `val`<sup>Required</sup> <a name="val" id="appflow-cdk.FilterCondition.stringNotEquals.parameter.val"></a>

- *Type:* string | string[]

a value (or values) to be contained by the field value.

---

##### `timestampBetween` <a name="timestampBetween" id="appflow-cdk.FilterCondition.timestampBetween"></a>

```typescript
import { FilterCondition } from 'appflow-cdk'

FilterCondition.timestampBetween(field: Field, lower: Date, upper: Date)
```

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.FilterCondition.timestampBetween.parameter.field"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

---

###### `lower`<sup>Required</sup> <a name="lower" id="appflow-cdk.FilterCondition.timestampBetween.parameter.lower"></a>

- *Type:* Date

---

###### `upper`<sup>Required</sup> <a name="upper" id="appflow-cdk.FilterCondition.timestampBetween.parameter.upper"></a>

- *Type:* Date

---

##### `timestampEquals` <a name="timestampEquals" id="appflow-cdk.FilterCondition.timestampEquals"></a>

```typescript
import { FilterCondition } from 'appflow-cdk'

FilterCondition.timestampEquals(field: Field, val: Date | Date[])
```

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.FilterCondition.timestampEquals.parameter.field"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

---

###### `val`<sup>Required</sup> <a name="val" id="appflow-cdk.FilterCondition.timestampEquals.parameter.val"></a>

- *Type:* Date | Date[]

---

##### `timestampGreaterThan` <a name="timestampGreaterThan" id="appflow-cdk.FilterCondition.timestampGreaterThan"></a>

```typescript
import { FilterCondition } from 'appflow-cdk'

FilterCondition.timestampGreaterThan(field: Field, val: Date | Date[])
```

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.FilterCondition.timestampGreaterThan.parameter.field"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

---

###### `val`<sup>Required</sup> <a name="val" id="appflow-cdk.FilterCondition.timestampGreaterThan.parameter.val"></a>

- *Type:* Date | Date[]

---

##### `timestampGreaterThanEquals` <a name="timestampGreaterThanEquals" id="appflow-cdk.FilterCondition.timestampGreaterThanEquals"></a>

```typescript
import { FilterCondition } from 'appflow-cdk'

FilterCondition.timestampGreaterThanEquals(field: Field, val: Date | Date[])
```

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.FilterCondition.timestampGreaterThanEquals.parameter.field"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

---

###### `val`<sup>Required</sup> <a name="val" id="appflow-cdk.FilterCondition.timestampGreaterThanEquals.parameter.val"></a>

- *Type:* Date | Date[]

---

##### `timestampLessThan` <a name="timestampLessThan" id="appflow-cdk.FilterCondition.timestampLessThan"></a>

```typescript
import { FilterCondition } from 'appflow-cdk'

FilterCondition.timestampLessThan(field: Field, val: Date | Date[])
```

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.FilterCondition.timestampLessThan.parameter.field"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

---

###### `val`<sup>Required</sup> <a name="val" id="appflow-cdk.FilterCondition.timestampLessThan.parameter.val"></a>

- *Type:* Date | Date[]

---

##### `timestampLessThanEquals` <a name="timestampLessThanEquals" id="appflow-cdk.FilterCondition.timestampLessThanEquals"></a>

```typescript
import { FilterCondition } from 'appflow-cdk'

FilterCondition.timestampLessThanEquals(field: Field, val: Date | Date[])
```

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.FilterCondition.timestampLessThanEquals.parameter.field"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

---

###### `val`<sup>Required</sup> <a name="val" id="appflow-cdk.FilterCondition.timestampLessThanEquals.parameter.val"></a>

- *Type:* Date | Date[]

---

##### `timestampNotEquals` <a name="timestampNotEquals" id="appflow-cdk.FilterCondition.timestampNotEquals"></a>

```typescript
import { FilterCondition } from 'appflow-cdk'

FilterCondition.timestampNotEquals(field: Field, val: Date | Date[])
```

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.FilterCondition.timestampNotEquals.parameter.field"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

---

###### `val`<sup>Required</sup> <a name="val" id="appflow-cdk.FilterCondition.timestampNotEquals.parameter.val"></a>

- *Type:* Date | Date[]

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.FilterCondition.property.field">field</a></code> | <code><a href="#appflow-cdk.Field">Field</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FilterCondition.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.FilterCondition.property.properties">properties</a></code> | <code><a href="#appflow-cdk.TaskProperties">TaskProperties</a></code> | *No description.* |

---

##### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.FilterCondition.property.field"></a>

```typescript
public readonly field: Field;
```

- *Type:* <a href="#appflow-cdk.Field">Field</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="appflow-cdk.FilterCondition.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="appflow-cdk.FilterCondition.property.properties"></a>

```typescript
public readonly properties: TaskProperties;
```

- *Type:* <a href="#appflow-cdk.TaskProperties">TaskProperties</a>

---


### GoogleAnalytics4Source <a name="GoogleAnalytics4Source" id="appflow-cdk.GoogleAnalytics4Source"></a>

- *Implements:* <a href="#appflow-cdk.ISource">ISource</a>

A class that represents a Google Analytics v4 Source.

#### Initializers <a name="Initializers" id="appflow-cdk.GoogleAnalytics4Source.Initializer"></a>

```typescript
import { GoogleAnalytics4Source } from 'appflow-cdk'

new GoogleAnalytics4Source(props: GoogleAnalytics4SourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.GoogleAnalytics4Source.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.GoogleAnalytics4SourceProps">GoogleAnalytics4SourceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.GoogleAnalytics4Source.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.GoogleAnalytics4SourceProps">GoogleAnalytics4SourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.GoogleAnalytics4Source.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.GoogleAnalytics4Source.bind"></a>

```typescript
public bind(scope: IFlow): SourceFlowConfigProperty
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.GoogleAnalytics4Source.bind.parameter.scope"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.GoogleAnalytics4Source.property.connectorType">connectorType</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | The AppFlow type of the connector that this source is implemented for. |

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="appflow-cdk.GoogleAnalytics4Source.property.connectorType"></a>

```typescript
public readonly connectorType: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

The AppFlow type of the connector that this source is implemented for.

---


### Mapping <a name="Mapping" id="appflow-cdk.Mapping"></a>

- *Implements:* <a href="#appflow-cdk.IMapping">IMapping</a>

A representation of an instance of a mapping operation, that is an operation translating source to destination fields.

#### Initializers <a name="Initializers" id="appflow-cdk.Mapping.Initializer"></a>

```typescript
import { Mapping } from 'appflow-cdk'

new Mapping(tasks: ITask[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.Mapping.Initializer.parameter.tasks">tasks</a></code> | <code><a href="#appflow-cdk.ITask">ITask</a>[]</code> | *No description.* |

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="appflow-cdk.Mapping.Initializer.parameter.tasks"></a>

- *Type:* <a href="#appflow-cdk.ITask">ITask</a>[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.Mapping.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.Mapping.bind"></a>

```typescript
public bind(flow: IFlow, source: ISource): TaskProperty[]
```

###### `flow`<sup>Required</sup> <a name="flow" id="appflow-cdk.Mapping.bind.parameter.flow"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---

###### `source`<sup>Required</sup> <a name="source" id="appflow-cdk.Mapping.bind.parameter.source"></a>

- *Type:* <a href="#appflow-cdk.ISource">ISource</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.Mapping.add">add</a></code> | Specifies an addition mapping of two numeric values from asource to a destination. |
| <code><a href="#appflow-cdk.Mapping.concat">concat</a></code> | A mapping definition building concatenation of source fields into a destination field. |
| <code><a href="#appflow-cdk.Mapping.divide">divide</a></code> | Specifies a division mapping of two numeric values from a source to a destination. |
| <code><a href="#appflow-cdk.Mapping.map">map</a></code> | *No description.* |
| <code><a href="#appflow-cdk.Mapping.mapAll">mapAll</a></code> | *No description.* |
| <code><a href="#appflow-cdk.Mapping.multiply">multiply</a></code> | Specifies a multiplication mapping of two numeric values from a source to a destination. |
| <code><a href="#appflow-cdk.Mapping.subtract">subtract</a></code> | Specifies a subtraction mapping of two numeric values from a source to a destination. |

---

##### `add` <a name="add" id="appflow-cdk.Mapping.add"></a>

```typescript
import { Mapping } from 'appflow-cdk'

Mapping.add(sourceField1: Field, sourceField2: Field, to: Field)
```

Specifies an addition mapping of two numeric values from asource to a destination.

###### `sourceField1`<sup>Required</sup> <a name="sourceField1" id="appflow-cdk.Mapping.add.parameter.sourceField1"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

a numeric value.

---

###### `sourceField2`<sup>Required</sup> <a name="sourceField2" id="appflow-cdk.Mapping.add.parameter.sourceField2"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

a numeric value.

---

###### `to`<sup>Required</sup> <a name="to" id="appflow-cdk.Mapping.add.parameter.to"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

a numeric value.

---

##### `concat` <a name="concat" id="appflow-cdk.Mapping.concat"></a>

```typescript
import { Mapping } from 'appflow-cdk'

Mapping.concat(from: Field[], to: Field, format: string)
```

A mapping definition building concatenation of source fields into a destination field.

###### `from`<sup>Required</sup> <a name="from" id="appflow-cdk.Mapping.concat.parameter.from"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>[]

an array of source fields.

---

###### `to`<sup>Required</sup> <a name="to" id="appflow-cdk.Mapping.concat.parameter.to"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

a desintation field.

---

###### `format`<sup>Required</sup> <a name="format" id="appflow-cdk.Mapping.concat.parameter.format"></a>

- *Type:* string

a format.

---

##### `divide` <a name="divide" id="appflow-cdk.Mapping.divide"></a>

```typescript
import { Mapping } from 'appflow-cdk'

Mapping.divide(sourceField1: Field, sourceField2: Field, to: Field)
```

Specifies a division mapping of two numeric values from a source to a destination.

###### `sourceField1`<sup>Required</sup> <a name="sourceField1" id="appflow-cdk.Mapping.divide.parameter.sourceField1"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

a numeric value.

---

###### `sourceField2`<sup>Required</sup> <a name="sourceField2" id="appflow-cdk.Mapping.divide.parameter.sourceField2"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

a numeric value.

---

###### `to`<sup>Required</sup> <a name="to" id="appflow-cdk.Mapping.divide.parameter.to"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

a numeric value.

---

##### `map` <a name="map" id="appflow-cdk.Mapping.map"></a>

```typescript
import { Mapping } from 'appflow-cdk'

Mapping.map(from: Field, to: Field)
```

###### `from`<sup>Required</sup> <a name="from" id="appflow-cdk.Mapping.map.parameter.from"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

---

###### `to`<sup>Required</sup> <a name="to" id="appflow-cdk.Mapping.map.parameter.to"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

---

##### `mapAll` <a name="mapAll" id="appflow-cdk.Mapping.mapAll"></a>

```typescript
import { Mapping } from 'appflow-cdk'

Mapping.mapAll(config?: MapAllConfig)
```

###### `config`<sup>Optional</sup> <a name="config" id="appflow-cdk.Mapping.mapAll.parameter.config"></a>

- *Type:* <a href="#appflow-cdk.MapAllConfig">MapAllConfig</a>

---

##### `multiply` <a name="multiply" id="appflow-cdk.Mapping.multiply"></a>

```typescript
import { Mapping } from 'appflow-cdk'

Mapping.multiply(sourceField1: Field, sourceField2: Field, to: Field)
```

Specifies a multiplication mapping of two numeric values from a source to a destination.

###### `sourceField1`<sup>Required</sup> <a name="sourceField1" id="appflow-cdk.Mapping.multiply.parameter.sourceField1"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

a numeric value.

---

###### `sourceField2`<sup>Required</sup> <a name="sourceField2" id="appflow-cdk.Mapping.multiply.parameter.sourceField2"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

a numeric value.

---

###### `to`<sup>Required</sup> <a name="to" id="appflow-cdk.Mapping.multiply.parameter.to"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

a numeric value.

---

##### `subtract` <a name="subtract" id="appflow-cdk.Mapping.subtract"></a>

```typescript
import { Mapping } from 'appflow-cdk'

Mapping.subtract(sourceField1: Field, sourceField2: Field, to: Field)
```

Specifies a subtraction mapping of two numeric values from a source to a destination.

###### `sourceField1`<sup>Required</sup> <a name="sourceField1" id="appflow-cdk.Mapping.subtract.parameter.sourceField1"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

a numeric value.

---

###### `sourceField2`<sup>Required</sup> <a name="sourceField2" id="appflow-cdk.Mapping.subtract.parameter.sourceField2"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

a numeric value.

---

###### `to`<sup>Required</sup> <a name="to" id="appflow-cdk.Mapping.subtract.parameter.to"></a>

- *Type:* <a href="#appflow-cdk.Field">Field</a>

a numeric value.

---



### MarketoInstanceUrlBuilder <a name="MarketoInstanceUrlBuilder" id="appflow-cdk.MarketoInstanceUrlBuilder"></a>

#### Initializers <a name="Initializers" id="appflow-cdk.MarketoInstanceUrlBuilder.Initializer"></a>

```typescript
import { MarketoInstanceUrlBuilder } from 'appflow-cdk'

new MarketoInstanceUrlBuilder()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.MarketoInstanceUrlBuilder.buildFromAccount">buildFromAccount</a></code> | *No description.* |

---

##### `buildFromAccount` <a name="buildFromAccount" id="appflow-cdk.MarketoInstanceUrlBuilder.buildFromAccount"></a>

```typescript
import { MarketoInstanceUrlBuilder } from 'appflow-cdk'

MarketoInstanceUrlBuilder.buildFromAccount(account: string)
```

###### `account`<sup>Required</sup> <a name="account" id="appflow-cdk.MarketoInstanceUrlBuilder.buildFromAccount.parameter.account"></a>

- *Type:* string

---



### MarketoSource <a name="MarketoSource" id="appflow-cdk.MarketoSource"></a>

- *Implements:* <a href="#appflow-cdk.ISource">ISource</a>

#### Initializers <a name="Initializers" id="appflow-cdk.MarketoSource.Initializer"></a>

```typescript
import { MarketoSource } from 'appflow-cdk'

new MarketoSource(props: MarketoSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.MarketoSource.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.MarketoSourceProps">MarketoSourceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.MarketoSource.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.MarketoSourceProps">MarketoSourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.MarketoSource.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.MarketoSource.bind"></a>

```typescript
public bind(flow: IFlow): SourceFlowConfigProperty
```

###### `flow`<sup>Required</sup> <a name="flow" id="appflow-cdk.MarketoSource.bind.parameter.flow"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.MarketoSource.property.connectorType">connectorType</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | The AppFlow type of the connector that this source is implemented for. |

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="appflow-cdk.MarketoSource.property.connectorType"></a>

```typescript
public readonly connectorType: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

The AppFlow type of the connector that this source is implemented for.

---


### OperationBase <a name="OperationBase" id="appflow-cdk.OperationBase"></a>

- *Implements:* <a href="#appflow-cdk.IOperation">IOperation</a>

A base class for all operations.

#### Initializers <a name="Initializers" id="appflow-cdk.OperationBase.Initializer"></a>

```typescript
import { OperationBase } from 'appflow-cdk'

new OperationBase(tasks: ITask[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.OperationBase.Initializer.parameter.tasks">tasks</a></code> | <code><a href="#appflow-cdk.ITask">ITask</a>[]</code> | *No description.* |

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="appflow-cdk.OperationBase.Initializer.parameter.tasks"></a>

- *Type:* <a href="#appflow-cdk.ITask">ITask</a>[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.OperationBase.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.OperationBase.bind"></a>

```typescript
public bind(flow: IFlow, source: ISource): TaskProperty[]
```

###### `flow`<sup>Required</sup> <a name="flow" id="appflow-cdk.OperationBase.bind.parameter.flow"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---

###### `source`<sup>Required</sup> <a name="source" id="appflow-cdk.OperationBase.bind.parameter.source"></a>

- *Type:* <a href="#appflow-cdk.ISource">ISource</a>

---




### RedshiftDestination <a name="RedshiftDestination" id="appflow-cdk.RedshiftDestination"></a>

- *Implements:* <a href="#appflow-cdk.IDestination">IDestination</a>

#### Initializers <a name="Initializers" id="appflow-cdk.RedshiftDestination.Initializer"></a>

```typescript
import { RedshiftDestination } from 'appflow-cdk'

new RedshiftDestination(props: RedshiftDestinationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.RedshiftDestination.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.RedshiftDestinationProps">RedshiftDestinationProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.RedshiftDestination.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.RedshiftDestinationProps">RedshiftDestinationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.RedshiftDestination.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.RedshiftDestination.bind"></a>

```typescript
public bind(scope: IFlow): DestinationFlowConfigProperty
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.RedshiftDestination.bind.parameter.scope"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.RedshiftDestination.property.connectorType">connectorType</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | The AppFlow type of the connector that this source is implemented for. |

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="appflow-cdk.RedshiftDestination.property.connectorType"></a>

```typescript
public readonly connectorType: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

The AppFlow type of the connector that this source is implemented for.

---


### S3Destination <a name="S3Destination" id="appflow-cdk.S3Destination"></a>

- *Implements:* <a href="#appflow-cdk.IDestination">IDestination</a>

#### Initializers <a name="Initializers" id="appflow-cdk.S3Destination.Initializer"></a>

```typescript
import { S3Destination } from 'appflow-cdk'

new S3Destination(props: S3DestinationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.S3Destination.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.S3DestinationProps">S3DestinationProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.S3Destination.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.S3DestinationProps">S3DestinationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.S3Destination.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.S3Destination.bind"></a>

```typescript
public bind(flow: IFlow): DestinationFlowConfigProperty
```

###### `flow`<sup>Required</sup> <a name="flow" id="appflow-cdk.S3Destination.bind.parameter.flow"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.S3Destination.property.connectorType">connectorType</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | The AppFlow type of the connector that this source is implemented for. |

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="appflow-cdk.S3Destination.property.connectorType"></a>

```typescript
public readonly connectorType: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

The AppFlow type of the connector that this source is implemented for.

---


### S3Source <a name="S3Source" id="appflow-cdk.S3Source"></a>

- *Implements:* <a href="#appflow-cdk.ISource">ISource</a>

#### Initializers <a name="Initializers" id="appflow-cdk.S3Source.Initializer"></a>

```typescript
import { S3Source } from 'appflow-cdk'

new S3Source(props: S3SourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.S3Source.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.S3SourceProps">S3SourceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.S3Source.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.S3SourceProps">S3SourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.S3Source.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.S3Source.bind"></a>

```typescript
public bind(scope: IFlow): SourceFlowConfigProperty
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.S3Source.bind.parameter.scope"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.S3Source.property.connectorType">connectorType</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | The AppFlow type of the connector that this source is implemented for. |

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="appflow-cdk.S3Source.property.connectorType"></a>

```typescript
public readonly connectorType: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

The AppFlow type of the connector that this source is implemented for.

---


### SalesforceDestination <a name="SalesforceDestination" id="appflow-cdk.SalesforceDestination"></a>

- *Implements:* <a href="#appflow-cdk.IDestination">IDestination</a>

#### Initializers <a name="Initializers" id="appflow-cdk.SalesforceDestination.Initializer"></a>

```typescript
import { SalesforceDestination } from 'appflow-cdk'

new SalesforceDestination(props: SalesforceDestinationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SalesforceDestination.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.SalesforceDestinationProps">SalesforceDestinationProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.SalesforceDestination.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.SalesforceDestinationProps">SalesforceDestinationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.SalesforceDestination.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.SalesforceDestination.bind"></a>

```typescript
public bind(flow: IFlow): DestinationFlowConfigProperty
```

###### `flow`<sup>Required</sup> <a name="flow" id="appflow-cdk.SalesforceDestination.bind.parameter.flow"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SalesforceDestination.property.connectorType">connectorType</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | The AppFlow type of the connector that this source is implemented for. |

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="appflow-cdk.SalesforceDestination.property.connectorType"></a>

```typescript
public readonly connectorType: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

The AppFlow type of the connector that this source is implemented for.

---


### SalesforceMarketingCloudSource <a name="SalesforceMarketingCloudSource" id="appflow-cdk.SalesforceMarketingCloudSource"></a>

- *Implements:* <a href="#appflow-cdk.ISource">ISource</a>

A class that represents a Salesforce Marketing Cloud Source.

#### Initializers <a name="Initializers" id="appflow-cdk.SalesforceMarketingCloudSource.Initializer"></a>

```typescript
import { SalesforceMarketingCloudSource } from 'appflow-cdk'

new SalesforceMarketingCloudSource(props: SalesforceMarketingCloudSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudSource.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.SalesforceMarketingCloudSourceProps">SalesforceMarketingCloudSourceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.SalesforceMarketingCloudSource.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.SalesforceMarketingCloudSourceProps">SalesforceMarketingCloudSourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudSource.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.SalesforceMarketingCloudSource.bind"></a>

```typescript
public bind(scope: IFlow): SourceFlowConfigProperty
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.SalesforceMarketingCloudSource.bind.parameter.scope"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudSource.property.connectorType">connectorType</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | The AppFlow type of the connector that this source is implemented for. |

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="appflow-cdk.SalesforceMarketingCloudSource.property.connectorType"></a>

```typescript
public readonly connectorType: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

The AppFlow type of the connector that this source is implemented for.

---


### SalesforceSource <a name="SalesforceSource" id="appflow-cdk.SalesforceSource"></a>

- *Implements:* <a href="#appflow-cdk.ISource">ISource</a>

#### Initializers <a name="Initializers" id="appflow-cdk.SalesforceSource.Initializer"></a>

```typescript
import { SalesforceSource } from 'appflow-cdk'

new SalesforceSource(props: SalesforceSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SalesforceSource.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.SalesforceSourceProps">SalesforceSourceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.SalesforceSource.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.SalesforceSourceProps">SalesforceSourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.SalesforceSource.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.SalesforceSource.bind"></a>

```typescript
public bind(flow: IFlow): SourceFlowConfigProperty
```

###### `flow`<sup>Required</sup> <a name="flow" id="appflow-cdk.SalesforceSource.bind.parameter.flow"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SalesforceSource.property.connectorType">connectorType</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | The AppFlow type of the connector that this source is implemented for. |

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="appflow-cdk.SalesforceSource.property.connectorType"></a>

```typescript
public readonly connectorType: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

The AppFlow type of the connector that this source is implemented for.

---


### SAPOdataDestination <a name="SAPOdataDestination" id="appflow-cdk.SAPOdataDestination"></a>

- *Implements:* <a href="#appflow-cdk.IDestination">IDestination</a>

#### Initializers <a name="Initializers" id="appflow-cdk.SAPOdataDestination.Initializer"></a>

```typescript
import { SAPOdataDestination } from 'appflow-cdk'

new SAPOdataDestination(props: SAPOdataDestinationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SAPOdataDestination.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.SAPOdataDestinationProps">SAPOdataDestinationProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.SAPOdataDestination.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.SAPOdataDestinationProps">SAPOdataDestinationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.SAPOdataDestination.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.SAPOdataDestination.bind"></a>

```typescript
public bind(flow: IFlow): DestinationFlowConfigProperty
```

###### `flow`<sup>Required</sup> <a name="flow" id="appflow-cdk.SAPOdataDestination.bind.parameter.flow"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SAPOdataDestination.property.connectorType">connectorType</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | The AppFlow type of the connector that this source is implemented for. |

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="appflow-cdk.SAPOdataDestination.property.connectorType"></a>

```typescript
public readonly connectorType: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

The AppFlow type of the connector that this source is implemented for.

---


### SAPOdataSource <a name="SAPOdataSource" id="appflow-cdk.SAPOdataSource"></a>

- *Implements:* <a href="#appflow-cdk.ISource">ISource</a>

#### Initializers <a name="Initializers" id="appflow-cdk.SAPOdataSource.Initializer"></a>

```typescript
import { SAPOdataSource } from 'appflow-cdk'

new SAPOdataSource(props: SAPOdataSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SAPOdataSource.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.SAPOdataSourceProps">SAPOdataSourceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.SAPOdataSource.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.SAPOdataSourceProps">SAPOdataSourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.SAPOdataSource.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.SAPOdataSource.bind"></a>

```typescript
public bind(flow: IFlow): SourceFlowConfigProperty
```

###### `flow`<sup>Required</sup> <a name="flow" id="appflow-cdk.SAPOdataSource.bind.parameter.flow"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SAPOdataSource.property.connectorType">connectorType</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | The AppFlow type of the connector that this source is implemented for. |

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="appflow-cdk.SAPOdataSource.property.connectorType"></a>

```typescript
public readonly connectorType: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

The AppFlow type of the connector that this source is implemented for.

---


### ServiceNowInstanceUrlBuilder <a name="ServiceNowInstanceUrlBuilder" id="appflow-cdk.ServiceNowInstanceUrlBuilder"></a>

#### Initializers <a name="Initializers" id="appflow-cdk.ServiceNowInstanceUrlBuilder.Initializer"></a>

```typescript
import { ServiceNowInstanceUrlBuilder } from 'appflow-cdk'

new ServiceNowInstanceUrlBuilder()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.ServiceNowInstanceUrlBuilder.buildFromDomain">buildFromDomain</a></code> | *No description.* |

---

##### `buildFromDomain` <a name="buildFromDomain" id="appflow-cdk.ServiceNowInstanceUrlBuilder.buildFromDomain"></a>

```typescript
import { ServiceNowInstanceUrlBuilder } from 'appflow-cdk'

ServiceNowInstanceUrlBuilder.buildFromDomain(domain: string)
```

###### `domain`<sup>Required</sup> <a name="domain" id="appflow-cdk.ServiceNowInstanceUrlBuilder.buildFromDomain.parameter.domain"></a>

- *Type:* string

---



### ServiceNowSource <a name="ServiceNowSource" id="appflow-cdk.ServiceNowSource"></a>

- *Implements:* <a href="#appflow-cdk.ISource">ISource</a>

#### Initializers <a name="Initializers" id="appflow-cdk.ServiceNowSource.Initializer"></a>

```typescript
import { ServiceNowSource } from 'appflow-cdk'

new ServiceNowSource(props: ServiceNowSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ServiceNowSource.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.ServiceNowSourceProps">ServiceNowSourceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.ServiceNowSource.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.ServiceNowSourceProps">ServiceNowSourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.ServiceNowSource.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.ServiceNowSource.bind"></a>

```typescript
public bind(flow: IFlow): SourceFlowConfigProperty
```

###### `flow`<sup>Required</sup> <a name="flow" id="appflow-cdk.ServiceNowSource.bind.parameter.flow"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ServiceNowSource.property.connectorType">connectorType</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | The AppFlow type of the connector that this source is implemented for. |

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="appflow-cdk.ServiceNowSource.property.connectorType"></a>

```typescript
public readonly connectorType: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

The AppFlow type of the connector that this source is implemented for.

---


### SlackInstanceUrlBuilder <a name="SlackInstanceUrlBuilder" id="appflow-cdk.SlackInstanceUrlBuilder"></a>

#### Initializers <a name="Initializers" id="appflow-cdk.SlackInstanceUrlBuilder.Initializer"></a>

```typescript
import { SlackInstanceUrlBuilder } from 'appflow-cdk'

new SlackInstanceUrlBuilder()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.SlackInstanceUrlBuilder.buildFromWorkspace">buildFromWorkspace</a></code> | *No description.* |

---

##### `buildFromWorkspace` <a name="buildFromWorkspace" id="appflow-cdk.SlackInstanceUrlBuilder.buildFromWorkspace"></a>

```typescript
import { SlackInstanceUrlBuilder } from 'appflow-cdk'

SlackInstanceUrlBuilder.buildFromWorkspace(workspace: string)
```

###### `workspace`<sup>Required</sup> <a name="workspace" id="appflow-cdk.SlackInstanceUrlBuilder.buildFromWorkspace.parameter.workspace"></a>

- *Type:* string

---



### SlackSource <a name="SlackSource" id="appflow-cdk.SlackSource"></a>

- *Implements:* <a href="#appflow-cdk.ISource">ISource</a>

#### Initializers <a name="Initializers" id="appflow-cdk.SlackSource.Initializer"></a>

```typescript
import { SlackSource } from 'appflow-cdk'

new SlackSource(props: SlackSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SlackSource.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.SlackSourceProps">SlackSourceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.SlackSource.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.SlackSourceProps">SlackSourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.SlackSource.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.SlackSource.bind"></a>

```typescript
public bind(flow: IFlow): SourceFlowConfigProperty
```

###### `flow`<sup>Required</sup> <a name="flow" id="appflow-cdk.SlackSource.bind.parameter.flow"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SlackSource.property.connectorType">connectorType</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | The AppFlow type of the connector that this source is implemented for. |

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="appflow-cdk.SlackSource.property.connectorType"></a>

```typescript
public readonly connectorType: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

The AppFlow type of the connector that this source is implemented for.

---


### SnowflakeDestination <a name="SnowflakeDestination" id="appflow-cdk.SnowflakeDestination"></a>

- *Implements:* <a href="#appflow-cdk.IDestination">IDestination</a>

#### Initializers <a name="Initializers" id="appflow-cdk.SnowflakeDestination.Initializer"></a>

```typescript
import { SnowflakeDestination } from 'appflow-cdk'

new SnowflakeDestination(props: SnowflakeDestinationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SnowflakeDestination.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.SnowflakeDestinationProps">SnowflakeDestinationProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.SnowflakeDestination.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.SnowflakeDestinationProps">SnowflakeDestinationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.SnowflakeDestination.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.SnowflakeDestination.bind"></a>

```typescript
public bind(scope: IFlow): DestinationFlowConfigProperty
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.SnowflakeDestination.bind.parameter.scope"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.SnowflakeDestination.property.connectorType">connectorType</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | The AppFlow type of the connector that this source is implemented for. |

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="appflow-cdk.SnowflakeDestination.property.connectorType"></a>

```typescript
public readonly connectorType: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

The AppFlow type of the connector that this source is implemented for.

---


### Task <a name="Task" id="appflow-cdk.Task"></a>

- *Implements:* <a href="#appflow-cdk.ITask">ITask</a>

A representation of a unitary action on the record fields.

#### Initializers <a name="Initializers" id="appflow-cdk.Task.Initializer"></a>

```typescript
import { Task } from 'appflow-cdk'

new Task(type: string, sourceFields: string[], connectorOperator: TaskConnectorOperator, properties: TaskProperties, destinationField?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.Task.Initializer.parameter.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.Task.Initializer.parameter.sourceFields">sourceFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#appflow-cdk.Task.Initializer.parameter.connectorOperator">connectorOperator</a></code> | <code><a href="#appflow-cdk.TaskConnectorOperator">TaskConnectorOperator</a></code> | *No description.* |
| <code><a href="#appflow-cdk.Task.Initializer.parameter.properties">properties</a></code> | <code><a href="#appflow-cdk.TaskProperties">TaskProperties</a></code> | *No description.* |
| <code><a href="#appflow-cdk.Task.Initializer.parameter.destinationField">destinationField</a></code> | <code>string</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="appflow-cdk.Task.Initializer.parameter.type"></a>

- *Type:* string

---

##### `sourceFields`<sup>Required</sup> <a name="sourceFields" id="appflow-cdk.Task.Initializer.parameter.sourceFields"></a>

- *Type:* string[]

---

##### `connectorOperator`<sup>Required</sup> <a name="connectorOperator" id="appflow-cdk.Task.Initializer.parameter.connectorOperator"></a>

- *Type:* <a href="#appflow-cdk.TaskConnectorOperator">TaskConnectorOperator</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="appflow-cdk.Task.Initializer.parameter.properties"></a>

- *Type:* <a href="#appflow-cdk.TaskProperties">TaskProperties</a>

---

##### `destinationField`<sup>Optional</sup> <a name="destinationField" id="appflow-cdk.Task.Initializer.parameter.destinationField"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.Task.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.Task.bind"></a>

```typescript
public bind(_flow: IFlow, source: ISource): TaskProperty
```

###### `_flow`<sup>Required</sup> <a name="_flow" id="appflow-cdk.Task.bind.parameter._flow"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---

###### `source`<sup>Required</sup> <a name="source" id="appflow-cdk.Task.bind.parameter.source"></a>

- *Type:* <a href="#appflow-cdk.ISource">ISource</a>

---




### Transform <a name="Transform" id="appflow-cdk.Transform"></a>

- *Implements:* <a href="#appflow-cdk.ITransform">ITransform</a>

A representation of a transform operation, that is an operation modifying source fields.

#### Initializers <a name="Initializers" id="appflow-cdk.Transform.Initializer"></a>

```typescript
import { Transform } from 'appflow-cdk'

new Transform(tasks: ITask[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.Transform.Initializer.parameter.tasks">tasks</a></code> | <code><a href="#appflow-cdk.ITask">ITask</a>[]</code> | *No description.* |

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="appflow-cdk.Transform.Initializer.parameter.tasks"></a>

- *Type:* <a href="#appflow-cdk.ITask">ITask</a>[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.Transform.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.Transform.bind"></a>

```typescript
public bind(flow: IFlow, source: ISource): TaskProperty[]
```

###### `flow`<sup>Required</sup> <a name="flow" id="appflow-cdk.Transform.bind.parameter.flow"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---

###### `source`<sup>Required</sup> <a name="source" id="appflow-cdk.Transform.bind.parameter.source"></a>

- *Type:* <a href="#appflow-cdk.ISource">ISource</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.Transform.mask">mask</a></code> | Masks the field with a specified mask. |
| <code><a href="#appflow-cdk.Transform.maskEnd">maskEnd</a></code> | *No description.* |
| <code><a href="#appflow-cdk.Transform.maskStart">maskStart</a></code> | *No description.* |
| <code><a href="#appflow-cdk.Transform.truncate">truncate</a></code> | Truncates the field to a specified length. |

---

##### `mask` <a name="mask" id="appflow-cdk.Transform.mask"></a>

```typescript
import { Transform } from 'appflow-cdk'

Transform.mask(field: string | Field, mask?: string)
```

Masks the field with a specified mask.

> [Transform instance](Transform instance)

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.Transform.mask.parameter.field"></a>

- *Type:* string | <a href="#appflow-cdk.Field">Field</a>

a source field to mask.

---

###### `mask`<sup>Optional</sup> <a name="mask" id="appflow-cdk.Transform.mask.parameter.mask"></a>

- *Type:* string

a mask character.

---

##### `maskEnd` <a name="maskEnd" id="appflow-cdk.Transform.maskEnd"></a>

```typescript
import { Transform } from 'appflow-cdk'

Transform.maskEnd(field: string | Field, length: number, mask?: string)
```

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.Transform.maskEnd.parameter.field"></a>

- *Type:* string | <a href="#appflow-cdk.Field">Field</a>

---

###### `length`<sup>Required</sup> <a name="length" id="appflow-cdk.Transform.maskEnd.parameter.length"></a>

- *Type:* number

---

###### `mask`<sup>Optional</sup> <a name="mask" id="appflow-cdk.Transform.maskEnd.parameter.mask"></a>

- *Type:* string

---

##### `maskStart` <a name="maskStart" id="appflow-cdk.Transform.maskStart"></a>

```typescript
import { Transform } from 'appflow-cdk'

Transform.maskStart(field: string | Field, length: number, mask?: string)
```

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.Transform.maskStart.parameter.field"></a>

- *Type:* string | <a href="#appflow-cdk.Field">Field</a>

---

###### `length`<sup>Required</sup> <a name="length" id="appflow-cdk.Transform.maskStart.parameter.length"></a>

- *Type:* number

---

###### `mask`<sup>Optional</sup> <a name="mask" id="appflow-cdk.Transform.maskStart.parameter.mask"></a>

- *Type:* string

---

##### `truncate` <a name="truncate" id="appflow-cdk.Transform.truncate"></a>

```typescript
import { Transform } from 'appflow-cdk'

Transform.truncate(field: string | Field, length: number)
```

Truncates the field to a specified length.

> [Transform instance](Transform instance)

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.Transform.truncate.parameter.field"></a>

- *Type:* string | <a href="#appflow-cdk.Field">Field</a>

a source field to truncate.

---

###### `length`<sup>Required</sup> <a name="length" id="appflow-cdk.Transform.truncate.parameter.length"></a>

- *Type:* number

the maximum length after truncation.

---



### Validation <a name="Validation" id="appflow-cdk.Validation"></a>

- *Implements:* <a href="#appflow-cdk.IValidation">IValidation</a>

A representation of a validation operation, that is an operation testing records and acting on the test results.

#### Initializers <a name="Initializers" id="appflow-cdk.Validation.Initializer"></a>

```typescript
import { Validation } from 'appflow-cdk'

new Validation(condition: ValidationCondition, action: ValidationAction)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.Validation.Initializer.parameter.condition">condition</a></code> | <code><a href="#appflow-cdk.ValidationCondition">ValidationCondition</a></code> | *No description.* |
| <code><a href="#appflow-cdk.Validation.Initializer.parameter.action">action</a></code> | <code><a href="#appflow-cdk.ValidationAction">ValidationAction</a></code> | *No description.* |

---

##### `condition`<sup>Required</sup> <a name="condition" id="appflow-cdk.Validation.Initializer.parameter.condition"></a>

- *Type:* <a href="#appflow-cdk.ValidationCondition">ValidationCondition</a>

---

##### `action`<sup>Required</sup> <a name="action" id="appflow-cdk.Validation.Initializer.parameter.action"></a>

- *Type:* <a href="#appflow-cdk.ValidationAction">ValidationAction</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.Validation.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.Validation.bind"></a>

```typescript
public bind(flow: IFlow, source: ISource): TaskProperty[]
```

###### `flow`<sup>Required</sup> <a name="flow" id="appflow-cdk.Validation.bind.parameter.flow"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---

###### `source`<sup>Required</sup> <a name="source" id="appflow-cdk.Validation.bind.parameter.source"></a>

- *Type:* <a href="#appflow-cdk.ISource">ISource</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.Validation.when">when</a></code> | *No description.* |

---

##### `when` <a name="when" id="appflow-cdk.Validation.when"></a>

```typescript
import { Validation } from 'appflow-cdk'

Validation.when(condition: ValidationCondition, action: ValidationAction)
```

> [ValidationAction for the validation](ValidationAction for the validation)

###### `condition`<sup>Required</sup> <a name="condition" id="appflow-cdk.Validation.when.parameter.condition"></a>

- *Type:* <a href="#appflow-cdk.ValidationCondition">ValidationCondition</a>

a.

---

###### `action`<sup>Required</sup> <a name="action" id="appflow-cdk.Validation.when.parameter.action"></a>

- *Type:* <a href="#appflow-cdk.ValidationAction">ValidationAction</a>

a.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.Validation.property.action">action</a></code> | <code><a href="#appflow-cdk.ValidationAction">ValidationAction</a></code> | *No description.* |
| <code><a href="#appflow-cdk.Validation.property.condition">condition</a></code> | <code><a href="#appflow-cdk.ValidationCondition">ValidationCondition</a></code> | *No description.* |

---

##### `action`<sup>Required</sup> <a name="action" id="appflow-cdk.Validation.property.action"></a>

```typescript
public readonly action: ValidationAction;
```

- *Type:* <a href="#appflow-cdk.ValidationAction">ValidationAction</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="appflow-cdk.Validation.property.condition"></a>

```typescript
public readonly condition: ValidationCondition;
```

- *Type:* <a href="#appflow-cdk.ValidationCondition">ValidationCondition</a>

---


### ValidationAction <a name="ValidationAction" id="appflow-cdk.ValidationAction"></a>

#### Initializers <a name="Initializers" id="appflow-cdk.ValidationAction.Initializer"></a>

```typescript
import { ValidationAction } from 'appflow-cdk'

new ValidationAction(action: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ValidationAction.Initializer.parameter.action">action</a></code> | <code>string</code> | *No description.* |

---

##### `action`<sup>Required</sup> <a name="action" id="appflow-cdk.ValidationAction.Initializer.parameter.action"></a>

- *Type:* string

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.ValidationAction.ignoreRecord">ignoreRecord</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ValidationAction.terminateFlow">terminateFlow</a></code> | *No description.* |

---

##### `ignoreRecord` <a name="ignoreRecord" id="appflow-cdk.ValidationAction.ignoreRecord"></a>

```typescript
import { ValidationAction } from 'appflow-cdk'

ValidationAction.ignoreRecord()
```

> [ValidationAction that removes a record from the flow execution result](ValidationAction that removes a record from the flow execution result)

##### `terminateFlow` <a name="terminateFlow" id="appflow-cdk.ValidationAction.terminateFlow"></a>

```typescript
import { ValidationAction } from 'appflow-cdk'

ValidationAction.terminateFlow()
```

> [ValidationAction that terminates the whole flow execution](ValidationAction that terminates the whole flow execution)

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ValidationAction.property.action">action</a></code> | <code>string</code> | *No description.* |

---

##### `action`<sup>Required</sup> <a name="action" id="appflow-cdk.ValidationAction.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---


### ValidationCondition <a name="ValidationCondition" id="appflow-cdk.ValidationCondition"></a>

A representation of a validation condition on a particular field in a flow execution.

#### Initializers <a name="Initializers" id="appflow-cdk.ValidationCondition.Initializer"></a>

```typescript
import { ValidationCondition } from 'appflow-cdk'

new ValidationCondition(field: string, validation: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ValidationCondition.Initializer.parameter.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.ValidationCondition.Initializer.parameter.validation">validation</a></code> | <code>string</code> | *No description.* |

---

##### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.ValidationCondition.Initializer.parameter.field"></a>

- *Type:* string

---

##### `validation`<sup>Required</sup> <a name="validation" id="appflow-cdk.ValidationCondition.Initializer.parameter.validation"></a>

- *Type:* string

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.ValidationCondition.isDefault">isDefault</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ValidationCondition.isNegative">isNegative</a></code> | Validates whether a particular field in an execution is negative. |
| <code><a href="#appflow-cdk.ValidationCondition.isNotNull">isNotNull</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ValidationCondition.isNull">isNull</a></code> | Validates whether a particular field has no value. |

---

##### `isDefault` <a name="isDefault" id="appflow-cdk.ValidationCondition.isDefault"></a>

```typescript
import { ValidationCondition } from 'appflow-cdk'

ValidationCondition.isDefault(field: string | Field)
```

> [ValidationCondition instance](ValidationCondition instance)

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.ValidationCondition.isDefault.parameter.field"></a>

- *Type:* string | <a href="#appflow-cdk.Field">Field</a>

a field for which the validation will be performed.

---

##### `isNegative` <a name="isNegative" id="appflow-cdk.ValidationCondition.isNegative"></a>

```typescript
import { ValidationCondition } from 'appflow-cdk'

ValidationCondition.isNegative(field: string | Field)
```

Validates whether a particular field in an execution is negative.

> [ValidationCondition instance](ValidationCondition instance)

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.ValidationCondition.isNegative.parameter.field"></a>

- *Type:* string | <a href="#appflow-cdk.Field">Field</a>

a field for which the validation will be performed.

---

##### `isNotNull` <a name="isNotNull" id="appflow-cdk.ValidationCondition.isNotNull"></a>

```typescript
import { ValidationCondition } from 'appflow-cdk'

ValidationCondition.isNotNull(field: string | Field)
```

> [ValidationCondition instance](ValidationCondition instance)

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.ValidationCondition.isNotNull.parameter.field"></a>

- *Type:* string | <a href="#appflow-cdk.Field">Field</a>

a field for which the validation will be performed.

---

##### `isNull` <a name="isNull" id="appflow-cdk.ValidationCondition.isNull"></a>

```typescript
import { ValidationCondition } from 'appflow-cdk'

ValidationCondition.isNull(field: string | Field)
```

Validates whether a particular field has no value.

> [ValidationCondition instance](ValidationCondition instance)

###### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.ValidationCondition.isNull.parameter.field"></a>

- *Type:* string | <a href="#appflow-cdk.Field">Field</a>

a field for which the validation will be performed.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ValidationCondition.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.ValidationCondition.property.validation">validation</a></code> | <code>string</code> | *No description.* |

---

##### `field`<sup>Required</sup> <a name="field" id="appflow-cdk.ValidationCondition.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `validation`<sup>Required</sup> <a name="validation" id="appflow-cdk.ValidationCondition.property.validation"></a>

```typescript
public readonly validation: string;
```

- *Type:* string

---


### WriteOperation <a name="WriteOperation" id="appflow-cdk.WriteOperation"></a>

#### Initializers <a name="Initializers" id="appflow-cdk.WriteOperation.Initializer"></a>

```typescript
import { WriteOperation } from 'appflow-cdk'

new WriteOperation(type: WriteOperationType, ids?: string[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.WriteOperation.Initializer.parameter.type">type</a></code> | <code><a href="#appflow-cdk.WriteOperationType">WriteOperationType</a></code> | *No description.* |
| <code><a href="#appflow-cdk.WriteOperation.Initializer.parameter.ids">ids</a></code> | <code>string[]</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="appflow-cdk.WriteOperation.Initializer.parameter.type"></a>

- *Type:* <a href="#appflow-cdk.WriteOperationType">WriteOperationType</a>

---

##### `ids`<sup>Optional</sup> <a name="ids" id="appflow-cdk.WriteOperation.Initializer.parameter.ids"></a>

- *Type:* string[]

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.WriteOperation.delete">delete</a></code> | *No description.* |
| <code><a href="#appflow-cdk.WriteOperation.insert">insert</a></code> | *No description.* |
| <code><a href="#appflow-cdk.WriteOperation.update">update</a></code> | *No description.* |
| <code><a href="#appflow-cdk.WriteOperation.upsert">upsert</a></code> | *No description.* |

---

##### `delete` <a name="delete" id="appflow-cdk.WriteOperation.delete"></a>

```typescript
import { WriteOperation } from 'appflow-cdk'

WriteOperation.delete(ids?: string[])
```

###### `ids`<sup>Optional</sup> <a name="ids" id="appflow-cdk.WriteOperation.delete.parameter.ids"></a>

- *Type:* string[]

---

##### `insert` <a name="insert" id="appflow-cdk.WriteOperation.insert"></a>

```typescript
import { WriteOperation } from 'appflow-cdk'

WriteOperation.insert(ids?: string[])
```

###### `ids`<sup>Optional</sup> <a name="ids" id="appflow-cdk.WriteOperation.insert.parameter.ids"></a>

- *Type:* string[]

---

##### `update` <a name="update" id="appflow-cdk.WriteOperation.update"></a>

```typescript
import { WriteOperation } from 'appflow-cdk'

WriteOperation.update(ids?: string[])
```

###### `ids`<sup>Optional</sup> <a name="ids" id="appflow-cdk.WriteOperation.update.parameter.ids"></a>

- *Type:* string[]

---

##### `upsert` <a name="upsert" id="appflow-cdk.WriteOperation.upsert"></a>

```typescript
import { WriteOperation } from 'appflow-cdk'

WriteOperation.upsert(ids?: string[])
```

###### `ids`<sup>Optional</sup> <a name="ids" id="appflow-cdk.WriteOperation.upsert.parameter.ids"></a>

- *Type:* string[]

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.WriteOperation.property.type">type</a></code> | <code><a href="#appflow-cdk.WriteOperationType">WriteOperationType</a></code> | *No description.* |
| <code><a href="#appflow-cdk.WriteOperation.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="appflow-cdk.WriteOperation.property.type"></a>

```typescript
public readonly type: WriteOperationType;
```

- *Type:* <a href="#appflow-cdk.WriteOperationType">WriteOperationType</a>

---

##### `ids`<sup>Optional</sup> <a name="ids" id="appflow-cdk.WriteOperation.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---


### ZendeskInstanceUrlBuilder <a name="ZendeskInstanceUrlBuilder" id="appflow-cdk.ZendeskInstanceUrlBuilder"></a>

#### Initializers <a name="Initializers" id="appflow-cdk.ZendeskInstanceUrlBuilder.Initializer"></a>

```typescript
import { ZendeskInstanceUrlBuilder } from 'appflow-cdk'

new ZendeskInstanceUrlBuilder()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.ZendeskInstanceUrlBuilder.buildFromAccount">buildFromAccount</a></code> | *No description.* |

---

##### `buildFromAccount` <a name="buildFromAccount" id="appflow-cdk.ZendeskInstanceUrlBuilder.buildFromAccount"></a>

```typescript
import { ZendeskInstanceUrlBuilder } from 'appflow-cdk'

ZendeskInstanceUrlBuilder.buildFromAccount(account: string)
```

###### `account`<sup>Required</sup> <a name="account" id="appflow-cdk.ZendeskInstanceUrlBuilder.buildFromAccount.parameter.account"></a>

- *Type:* string

---



### ZendeskSource <a name="ZendeskSource" id="appflow-cdk.ZendeskSource"></a>

- *Implements:* <a href="#appflow-cdk.ISource">ISource</a>

#### Initializers <a name="Initializers" id="appflow-cdk.ZendeskSource.Initializer"></a>

```typescript
import { ZendeskSource } from 'appflow-cdk'

new ZendeskSource(props: ZendeskSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ZendeskSource.Initializer.parameter.props">props</a></code> | <code><a href="#appflow-cdk.ZendeskSourceProps">ZendeskSourceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="appflow-cdk.ZendeskSource.Initializer.parameter.props"></a>

- *Type:* <a href="#appflow-cdk.ZendeskSourceProps">ZendeskSourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.ZendeskSource.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.ZendeskSource.bind"></a>

```typescript
public bind(flow: IFlow): SourceFlowConfigProperty
```

###### `flow`<sup>Required</sup> <a name="flow" id="appflow-cdk.ZendeskSource.bind.parameter.flow"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ZendeskSource.property.connectorType">connectorType</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | The AppFlow type of the connector that this source is implemented for. |

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="appflow-cdk.ZendeskSource.property.connectorType"></a>

```typescript
public readonly connectorType: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

The AppFlow type of the connector that this source is implemented for.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IConnectorProfile <a name="IConnectorProfile" id="appflow-cdk.IConnectorProfile"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#appflow-cdk.ConnectorProfileBase">ConnectorProfileBase</a>, <a href="#appflow-cdk.GoogleAnalytics4ConnectorProfile">GoogleAnalytics4ConnectorProfile</a>, <a href="#appflow-cdk.MarketoConnectorProfile">MarketoConnectorProfile</a>, <a href="#appflow-cdk.RedshiftConnectorProfile">RedshiftConnectorProfile</a>, <a href="#appflow-cdk.SAPOdataConnectorProfile">SAPOdataConnectorProfile</a>, <a href="#appflow-cdk.SalesforceConnectorProfile">SalesforceConnectorProfile</a>, <a href="#appflow-cdk.SalesforceMarketingCloudConnectorProfile">SalesforceMarketingCloudConnectorProfile</a>, <a href="#appflow-cdk.ServiceNowConnectorProfile">ServiceNowConnectorProfile</a>, <a href="#appflow-cdk.SlackConnectorProfile">SlackConnectorProfile</a>, <a href="#appflow-cdk.SnowflakeConnectorProfile">SnowflakeConnectorProfile</a>, <a href="#appflow-cdk.ZendeskConnectorProfile">ZendeskConnectorProfile</a>, <a href="#appflow-cdk.IConnectorProfile">IConnectorProfile</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.IConnectorProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#appflow-cdk.IConnectorProfile.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#appflow-cdk.IConnectorProfile.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#appflow-cdk.IConnectorProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.IConnectorProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.IConnectorProfile.property.credentials">credentials</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="appflow-cdk.IConnectorProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="appflow-cdk.IConnectorProfile.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="appflow-cdk.IConnectorProfile.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.IConnectorProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="appflow-cdk.IConnectorProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="appflow-cdk.IConnectorProfile.property.credentials"></a>

```typescript
public readonly credentials: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---

### IDestination <a name="IDestination" id="appflow-cdk.IDestination"></a>

- *Extends:* <a href="#appflow-cdk.IVertex">IVertex</a>

- *Implemented By:* <a href="#appflow-cdk.EventBridgeDestination">EventBridgeDestination</a>, <a href="#appflow-cdk.RedshiftDestination">RedshiftDestination</a>, <a href="#appflow-cdk.S3Destination">S3Destination</a>, <a href="#appflow-cdk.SAPOdataDestination">SAPOdataDestination</a>, <a href="#appflow-cdk.SalesforceDestination">SalesforceDestination</a>, <a href="#appflow-cdk.SnowflakeDestination">SnowflakeDestination</a>, <a href="#appflow-cdk.IDestination">IDestination</a>

A destination of an AppFlow flow.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.IDestination.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.IDestination.bind"></a>

```typescript
public bind(scope: IFlow): DestinationFlowConfigProperty
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.IDestination.bind.parameter.scope"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.IDestination.property.connectorType">connectorType</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | The AppFlow type of the connector that this source is implemented for. |

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="appflow-cdk.IDestination.property.connectorType"></a>

```typescript
public readonly connectorType: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

The AppFlow type of the connector that this source is implemented for.

---

### IFilter <a name="IFilter" id="appflow-cdk.IFilter"></a>

- *Extends:* <a href="#appflow-cdk.IOperation">IOperation</a>

- *Implemented By:* <a href="#appflow-cdk.Filter">Filter</a>, <a href="#appflow-cdk.IFilter">IFilter</a>

A representation of a mapping operation, that is an operation filtering records at the source.



### IFlow <a name="IFlow" id="appflow-cdk.IFlow"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#appflow-cdk.FlowBase">FlowBase</a>, <a href="#appflow-cdk.OnDemandFlow">OnDemandFlow</a>, <a href="#appflow-cdk.OnEventFlow">OnEventFlow</a>, <a href="#appflow-cdk.OnScheduleFlow">OnScheduleFlow</a>, <a href="#appflow-cdk.TriggeredFlowBase">TriggeredFlowBase</a>, <a href="#appflow-cdk.IFlow">IFlow</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.IFlow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#appflow-cdk.IFlow.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#appflow-cdk.IFlow.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#appflow-cdk.IFlow.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appflow-cdk.IFlow.property.type">type</a></code> | <code><a href="#appflow-cdk.FlowType">FlowType</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="appflow-cdk.IFlow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="appflow-cdk.IFlow.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="appflow-cdk.IFlow.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="appflow-cdk.IFlow.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="appflow-cdk.IFlow.property.type"></a>

```typescript
public readonly type: FlowType;
```

- *Type:* <a href="#appflow-cdk.FlowType">FlowType</a>

---

### IMapping <a name="IMapping" id="appflow-cdk.IMapping"></a>

- *Extends:* <a href="#appflow-cdk.IOperation">IOperation</a>

- *Implemented By:* <a href="#appflow-cdk.Mapping">Mapping</a>, <a href="#appflow-cdk.IMapping">IMapping</a>

A representation of a mapping operation, that is an operation translating source to destination fields.



### IOperation <a name="IOperation" id="appflow-cdk.IOperation"></a>

- *Implemented By:* <a href="#appflow-cdk.Filter">Filter</a>, <a href="#appflow-cdk.Mapping">Mapping</a>, <a href="#appflow-cdk.OperationBase">OperationBase</a>, <a href="#appflow-cdk.Transform">Transform</a>, <a href="#appflow-cdk.Validation">Validation</a>, <a href="#appflow-cdk.IFilter">IFilter</a>, <a href="#appflow-cdk.IMapping">IMapping</a>, <a href="#appflow-cdk.IOperation">IOperation</a>, <a href="#appflow-cdk.ITransform">ITransform</a>, <a href="#appflow-cdk.IValidation">IValidation</a>

A representation of a set of tasks that deliver complete operation.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.IOperation.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.IOperation.bind"></a>

```typescript
public bind(flow: IFlow, source: ISource): TaskProperty[]
```

###### `flow`<sup>Required</sup> <a name="flow" id="appflow-cdk.IOperation.bind.parameter.flow"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---

###### `source`<sup>Required</sup> <a name="source" id="appflow-cdk.IOperation.bind.parameter.source"></a>

- *Type:* <a href="#appflow-cdk.ISource">ISource</a>

---


### ISource <a name="ISource" id="appflow-cdk.ISource"></a>

- *Extends:* <a href="#appflow-cdk.IVertex">IVertex</a>

- *Implemented By:* <a href="#appflow-cdk.GoogleAnalytics4Source">GoogleAnalytics4Source</a>, <a href="#appflow-cdk.MarketoSource">MarketoSource</a>, <a href="#appflow-cdk.S3Source">S3Source</a>, <a href="#appflow-cdk.SAPOdataSource">SAPOdataSource</a>, <a href="#appflow-cdk.SalesforceMarketingCloudSource">SalesforceMarketingCloudSource</a>, <a href="#appflow-cdk.SalesforceSource">SalesforceSource</a>, <a href="#appflow-cdk.ServiceNowSource">ServiceNowSource</a>, <a href="#appflow-cdk.SlackSource">SlackSource</a>, <a href="#appflow-cdk.ZendeskSource">ZendeskSource</a>, <a href="#appflow-cdk.ISource">ISource</a>

A source of an AppFlow flow.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.ISource.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.ISource.bind"></a>

```typescript
public bind(scope: IFlow): SourceFlowConfigProperty
```

###### `scope`<sup>Required</sup> <a name="scope" id="appflow-cdk.ISource.bind.parameter.scope"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.ISource.property.connectorType">connectorType</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | The AppFlow type of the connector that this source is implemented for. |

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="appflow-cdk.ISource.property.connectorType"></a>

```typescript
public readonly connectorType: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

The AppFlow type of the connector that this source is implemented for.

---

### ITask <a name="ITask" id="appflow-cdk.ITask"></a>

- *Implemented By:* <a href="#appflow-cdk.Task">Task</a>, <a href="#appflow-cdk.ITask">ITask</a>

A representation of a unitary action on the record fields.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.ITask.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="appflow-cdk.ITask.bind"></a>

```typescript
public bind(flow: IFlow, source: ISource): TaskProperty
```

###### `flow`<sup>Required</sup> <a name="flow" id="appflow-cdk.ITask.bind.parameter.flow"></a>

- *Type:* <a href="#appflow-cdk.IFlow">IFlow</a>

---

###### `source`<sup>Required</sup> <a name="source" id="appflow-cdk.ITask.bind.parameter.source"></a>

- *Type:* <a href="#appflow-cdk.ISource">ISource</a>

---


### ITransform <a name="ITransform" id="appflow-cdk.ITransform"></a>

- *Extends:* <a href="#appflow-cdk.IOperation">IOperation</a>

- *Implemented By:* <a href="#appflow-cdk.Transform">Transform</a>, <a href="#appflow-cdk.ITransform">ITransform</a>

A representation of a transform operation, that is an operation modifying source fields.



### IValidation <a name="IValidation" id="appflow-cdk.IValidation"></a>

- *Extends:* <a href="#appflow-cdk.IOperation">IOperation</a>

- *Implemented By:* <a href="#appflow-cdk.Validation">Validation</a>, <a href="#appflow-cdk.IValidation">IValidation</a>

A representation of a validation operation, that is an operation testing records and acting on the test results.



### IVertex <a name="IVertex" id="appflow-cdk.IVertex"></a>

- *Implemented By:* <a href="#appflow-cdk.EventBridgeDestination">EventBridgeDestination</a>, <a href="#appflow-cdk.GoogleAnalytics4Source">GoogleAnalytics4Source</a>, <a href="#appflow-cdk.MarketoSource">MarketoSource</a>, <a href="#appflow-cdk.RedshiftDestination">RedshiftDestination</a>, <a href="#appflow-cdk.S3Destination">S3Destination</a>, <a href="#appflow-cdk.S3Source">S3Source</a>, <a href="#appflow-cdk.SAPOdataDestination">SAPOdataDestination</a>, <a href="#appflow-cdk.SAPOdataSource">SAPOdataSource</a>, <a href="#appflow-cdk.SalesforceDestination">SalesforceDestination</a>, <a href="#appflow-cdk.SalesforceMarketingCloudSource">SalesforceMarketingCloudSource</a>, <a href="#appflow-cdk.SalesforceSource">SalesforceSource</a>, <a href="#appflow-cdk.ServiceNowSource">ServiceNowSource</a>, <a href="#appflow-cdk.SlackSource">SlackSource</a>, <a href="#appflow-cdk.SnowflakeDestination">SnowflakeDestination</a>, <a href="#appflow-cdk.ZendeskSource">ZendeskSource</a>, <a href="#appflow-cdk.IDestination">IDestination</a>, <a href="#appflow-cdk.ISource">ISource</a>, <a href="#appflow-cdk.IVertex">IVertex</a>

An interface representing a vertex, i.e. a source or a destination of an AppFlow flow.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appflow-cdk.IVertex.property.connectorType">connectorType</a></code> | <code><a href="#appflow-cdk.ConnectorType">ConnectorType</a></code> | The AppFlow type of the connector that this source is implemented for. |

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="appflow-cdk.IVertex.property.connectorType"></a>

```typescript
public readonly connectorType: ConnectorType;
```

- *Type:* <a href="#appflow-cdk.ConnectorType">ConnectorType</a>

The AppFlow type of the connector that this source is implemented for.

---

## Enums <a name="Enums" id="Enums"></a>

### ConnectionMode <a name="ConnectionMode" id="appflow-cdk.ConnectionMode"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.ConnectionMode.PUBLIC">PUBLIC</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectionMode.PRIVATE">PRIVATE</a></code> | *No description.* |

---

##### `PUBLIC` <a name="PUBLIC" id="appflow-cdk.ConnectionMode.PUBLIC"></a>

---


##### `PRIVATE` <a name="PRIVATE" id="appflow-cdk.ConnectionMode.PRIVATE"></a>

---


### ConnectorAuthenticationType <a name="ConnectorAuthenticationType" id="appflow-cdk.ConnectorAuthenticationType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.ConnectorAuthenticationType.APIKEY">APIKEY</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectorAuthenticationType.BASIC">BASIC</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectorAuthenticationType.CUSTOM">CUSTOM</a></code> | *No description.* |
| <code><a href="#appflow-cdk.ConnectorAuthenticationType.OAUTH2">OAUTH2</a></code> | *No description.* |

---

##### `APIKEY` <a name="APIKEY" id="appflow-cdk.ConnectorAuthenticationType.APIKEY"></a>

---


##### `BASIC` <a name="BASIC" id="appflow-cdk.ConnectorAuthenticationType.BASIC"></a>

---


##### `CUSTOM` <a name="CUSTOM" id="appflow-cdk.ConnectorAuthenticationType.CUSTOM"></a>

---


##### `OAUTH2` <a name="OAUTH2" id="appflow-cdk.ConnectorAuthenticationType.OAUTH2"></a>

---


### DataPullMode <a name="DataPullMode" id="appflow-cdk.DataPullMode"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.DataPullMode.COMPLETE">COMPLETE</a></code> | *No description.* |
| <code><a href="#appflow-cdk.DataPullMode.INCREMENTAL">INCREMENTAL</a></code> | *No description.* |

---

##### `COMPLETE` <a name="COMPLETE" id="appflow-cdk.DataPullMode.COMPLETE"></a>

---


##### `INCREMENTAL` <a name="INCREMENTAL" id="appflow-cdk.DataPullMode.INCREMENTAL"></a>

---


### FlowType <a name="FlowType" id="appflow-cdk.FlowType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.FlowType.EVENT">EVENT</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FlowType.ON_DEMAND">ON_DEMAND</a></code> | *No description.* |
| <code><a href="#appflow-cdk.FlowType.SCHEDULED">SCHEDULED</a></code> | *No description.* |

---

##### `EVENT` <a name="EVENT" id="appflow-cdk.FlowType.EVENT"></a>

---


##### `ON_DEMAND` <a name="ON_DEMAND" id="appflow-cdk.FlowType.ON_DEMAND"></a>

---


##### `SCHEDULED` <a name="SCHEDULED" id="appflow-cdk.FlowType.SCHEDULED"></a>

---


### GoogleAnalytics4ApiVersion <a name="GoogleAnalytics4ApiVersion" id="appflow-cdk.GoogleAnalytics4ApiVersion"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.GoogleAnalytics4ApiVersion.V1BETA">V1BETA</a></code> | *No description.* |

---

##### `V1BETA` <a name="V1BETA" id="appflow-cdk.GoogleAnalytics4ApiVersion.V1BETA"></a>

---


### OAuth2GrantType <a name="OAuth2GrantType" id="appflow-cdk.OAuth2GrantType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.OAuth2GrantType.CLIENT_CREDENTIALS">CLIENT_CREDENTIALS</a></code> | *No description.* |
| <code><a href="#appflow-cdk.OAuth2GrantType.AUTHORIZATION_CODE">AUTHORIZATION_CODE</a></code> | *No description.* |

---

##### `CLIENT_CREDENTIALS` <a name="CLIENT_CREDENTIALS" id="appflow-cdk.OAuth2GrantType.CLIENT_CREDENTIALS"></a>

---


##### `AUTHORIZATION_CODE` <a name="AUTHORIZATION_CODE" id="appflow-cdk.OAuth2GrantType.AUTHORIZATION_CODE"></a>

---


### S3InputFileType <a name="S3InputFileType" id="appflow-cdk.S3InputFileType"></a>

The file type that Amazon AppFlow gets from your Amazon S3 bucket.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.S3InputFileType.CSV">CSV</a></code> | *No description.* |
| <code><a href="#appflow-cdk.S3InputFileType.JSON">JSON</a></code> | *No description.* |

---

##### `CSV` <a name="CSV" id="appflow-cdk.S3InputFileType.CSV"></a>

---


##### `JSON` <a name="JSON" id="appflow-cdk.S3InputFileType.JSON"></a>

---


### S3OutputAggregationType <a name="S3OutputAggregationType" id="appflow-cdk.S3OutputAggregationType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.S3OutputAggregationType.NONE">NONE</a></code> | *No description.* |
| <code><a href="#appflow-cdk.S3OutputAggregationType.SINGLE_FILE">SINGLE_FILE</a></code> | *No description.* |

---

##### `NONE` <a name="NONE" id="appflow-cdk.S3OutputAggregationType.NONE"></a>

---


##### `SINGLE_FILE` <a name="SINGLE_FILE" id="appflow-cdk.S3OutputAggregationType.SINGLE_FILE"></a>

---


### S3OutputFilePrefixFormat <a name="S3OutputFilePrefixFormat" id="appflow-cdk.S3OutputFilePrefixFormat"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.S3OutputFilePrefixFormat.DAY">DAY</a></code> | *No description.* |
| <code><a href="#appflow-cdk.S3OutputFilePrefixFormat.HOUR">HOUR</a></code> | *No description.* |
| <code><a href="#appflow-cdk.S3OutputFilePrefixFormat.MINUTE">MINUTE</a></code> | *No description.* |
| <code><a href="#appflow-cdk.S3OutputFilePrefixFormat.MONTH">MONTH</a></code> | *No description.* |
| <code><a href="#appflow-cdk.S3OutputFilePrefixFormat.YEAR">YEAR</a></code> | *No description.* |

---

##### `DAY` <a name="DAY" id="appflow-cdk.S3OutputFilePrefixFormat.DAY"></a>

---


##### `HOUR` <a name="HOUR" id="appflow-cdk.S3OutputFilePrefixFormat.HOUR"></a>

---


##### `MINUTE` <a name="MINUTE" id="appflow-cdk.S3OutputFilePrefixFormat.MINUTE"></a>

---


##### `MONTH` <a name="MONTH" id="appflow-cdk.S3OutputFilePrefixFormat.MONTH"></a>

---


##### `YEAR` <a name="YEAR" id="appflow-cdk.S3OutputFilePrefixFormat.YEAR"></a>

---


### S3OutputFilePrefixHierarchy <a name="S3OutputFilePrefixHierarchy" id="appflow-cdk.S3OutputFilePrefixHierarchy"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.S3OutputFilePrefixHierarchy.EXECUTION_ID">EXECUTION_ID</a></code> | *No description.* |
| <code><a href="#appflow-cdk.S3OutputFilePrefixHierarchy.SCHEMA_VERSION">SCHEMA_VERSION</a></code> | *No description.* |

---

##### `EXECUTION_ID` <a name="EXECUTION_ID" id="appflow-cdk.S3OutputFilePrefixHierarchy.EXECUTION_ID"></a>

---


##### `SCHEMA_VERSION` <a name="SCHEMA_VERSION" id="appflow-cdk.S3OutputFilePrefixHierarchy.SCHEMA_VERSION"></a>

---


### S3OutputFilePrefixType <a name="S3OutputFilePrefixType" id="appflow-cdk.S3OutputFilePrefixType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.S3OutputFilePrefixType.FILENAME">FILENAME</a></code> | *No description.* |
| <code><a href="#appflow-cdk.S3OutputFilePrefixType.PATH">PATH</a></code> | *No description.* |
| <code><a href="#appflow-cdk.S3OutputFilePrefixType.PATH_AND_FILE">PATH_AND_FILE</a></code> | *No description.* |

---

##### `FILENAME` <a name="FILENAME" id="appflow-cdk.S3OutputFilePrefixType.FILENAME"></a>

---


##### `PATH` <a name="PATH" id="appflow-cdk.S3OutputFilePrefixType.PATH"></a>

---


##### `PATH_AND_FILE` <a name="PATH_AND_FILE" id="appflow-cdk.S3OutputFilePrefixType.PATH_AND_FILE"></a>

---


### S3OutputFileType <a name="S3OutputFileType" id="appflow-cdk.S3OutputFileType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.S3OutputFileType.CSV">CSV</a></code> | *No description.* |
| <code><a href="#appflow-cdk.S3OutputFileType.JSON">JSON</a></code> | *No description.* |
| <code><a href="#appflow-cdk.S3OutputFileType.PARQUET">PARQUET</a></code> | *No description.* |

---

##### `CSV` <a name="CSV" id="appflow-cdk.S3OutputFileType.CSV"></a>

---


##### `JSON` <a name="JSON" id="appflow-cdk.S3OutputFileType.JSON"></a>

---


##### `PARQUET` <a name="PARQUET" id="appflow-cdk.S3OutputFileType.PARQUET"></a>

---


### SalesforceDataTransferApi <a name="SalesforceDataTransferApi" id="appflow-cdk.SalesforceDataTransferApi"></a>

The default.

Amazon AppFlow selects which API to use based on the number of records that your flow transfers to Salesforce. If your flow transfers fewer than 1,000 records, Amazon AppFlow uses Salesforce REST API. If your flow transfers 1,000 records or more, Amazon AppFlow uses Salesforce Bulk API 2.0.

Each of these Salesforce APIs structures data differently. If Amazon AppFlow selects the API automatically, be aware that, for recurring flows, the data output might vary from one flow run to the next. For example, if a flow runs daily, it might use REST API on one day to transfer 900 records, and it might use Bulk API 2.0 on the next day to transfer 1,100 records. For each of these flow runs, the respective Salesforce API formats the data differently. Some of the differences include how dates are formatted and null values are represented. Also, Bulk API 2.0 doesn't transfer Salesforce compound fields.

By choosing this option, you optimize flow performance for both small and large data transfers, but the tradeoff is inconsistent formatting in the output.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.SalesforceDataTransferApi.AUTOMATIC">AUTOMATIC</a></code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceDataTransferApi.BULKV2">BULKV2</a></code> | *No description.* |
| <code><a href="#appflow-cdk.SalesforceDataTransferApi.REST_SYNC">REST_SYNC</a></code> | *No description.* |

---

##### `AUTOMATIC` <a name="AUTOMATIC" id="appflow-cdk.SalesforceDataTransferApi.AUTOMATIC"></a>

---


##### `BULKV2` <a name="BULKV2" id="appflow-cdk.SalesforceDataTransferApi.BULKV2"></a>

---


##### `REST_SYNC` <a name="REST_SYNC" id="appflow-cdk.SalesforceDataTransferApi.REST_SYNC"></a>

---


### SalesforceMarketingCloudApiVersions <a name="SalesforceMarketingCloudApiVersions" id="appflow-cdk.SalesforceMarketingCloudApiVersions"></a>

A helper enum for SFMC api version.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.SalesforceMarketingCloudApiVersions.V1">V1</a></code> | *No description.* |

---

##### `V1` <a name="V1" id="appflow-cdk.SalesforceMarketingCloudApiVersions.V1"></a>

---


### WriteOperationType <a name="WriteOperationType" id="appflow-cdk.WriteOperationType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appflow-cdk.WriteOperationType.DELETE">DELETE</a></code> | *No description.* |
| <code><a href="#appflow-cdk.WriteOperationType.INSERT">INSERT</a></code> | *No description.* |
| <code><a href="#appflow-cdk.WriteOperationType.UPDATE">UPDATE</a></code> | *No description.* |
| <code><a href="#appflow-cdk.WriteOperationType.UPSERT">UPSERT</a></code> | *No description.* |

---

##### `DELETE` <a name="DELETE" id="appflow-cdk.WriteOperationType.DELETE"></a>

---


##### `INSERT` <a name="INSERT" id="appflow-cdk.WriteOperationType.INSERT"></a>

---


##### `UPDATE` <a name="UPDATE" id="appflow-cdk.WriteOperationType.UPDATE"></a>

---


##### `UPSERT` <a name="UPSERT" id="appflow-cdk.WriteOperationType.UPSERT"></a>

---

