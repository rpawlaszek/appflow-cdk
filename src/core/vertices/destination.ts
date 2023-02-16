import { CfnFlow } from 'aws-cdk-lib/aws-appflow';
import { IFlow } from '../flows';
import { IVertex } from './vertex';

/**
 * A destination of an AppFlow flow
 */
export interface IDestination extends IVertex {
  bind(scope: IFlow): CfnFlow.DestinationFlowConfigProperty;
}