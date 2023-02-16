import { Construct } from 'constructs';
import { FlowBase, FlowProps, FlowType, IFlow } from './flow-base';

export interface OnDemandFlowProps extends FlowProps {

}

export class OnDemandFlow extends FlowBase implements IFlow {

  constructor(scope: Construct, id: string, props: OnDemandFlowProps) {
    super(scope, id, {
      ...props,
      type: FlowType.ON_DEMAND,
    });
  }
}
