import { CfnFlow } from 'aws-cdk-lib/aws-appflow';
import { IFlow } from '../flows';
import { IVertex } from './vertex';

/**
 * A source of an AppFlow flow
 */
export interface ISource extends IVertex {
  bind(scope: IFlow): CfnFlow.SourceFlowConfigProperty;
}
