export enum WriteOperationType {
  DELETE = 'DELETE',
  INSERT = 'INSERT',
  UPDATE = 'UPDATE',
  UPSERT = 'UPSERT'
}

export class WriteOperation {
  public static insert(ids?: string[]): WriteOperation { return new WriteOperation(WriteOperationType.INSERT, ids); }
  public static delete(ids?: string[]): WriteOperation { return new WriteOperation(WriteOperationType.DELETE, ids); }
  public static update(ids?: string[]): WriteOperation { return new WriteOperation(WriteOperationType.DELETE, ids); }
  public static upsert(ids?: string[]): WriteOperation { return new WriteOperation(WriteOperationType.DELETE, ids); }

  constructor(public readonly type: WriteOperationType, public readonly ids?: string[]) { }
}
