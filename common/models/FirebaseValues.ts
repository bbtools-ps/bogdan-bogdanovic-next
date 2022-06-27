export interface StringValue {
  stringValue: string;
}

export interface TimestampValue {
  timestampValue: string;
}

export interface ArrayValue {
  arrayValue: { values: StringValue[] };
}
