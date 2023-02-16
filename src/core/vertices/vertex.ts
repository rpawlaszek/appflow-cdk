import { ConnectorType } from '../connectors/connector-type';

/**
 * An interface representing a vertex, i.e. a source or a destination of an AppFlow flow
 */
export interface IVertex {
  /**
   * The AppFlow type of the connector that this source is implemented for
   */
  readonly connectorType: ConnectorType;
}