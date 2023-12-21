export interface IStringValue {
  stringValue: string;
}

export interface ITimestampValue {
  timestampValue: string;
}

export interface IArrayValue {
  arrayValue: { values: IStringValue[] };
}
