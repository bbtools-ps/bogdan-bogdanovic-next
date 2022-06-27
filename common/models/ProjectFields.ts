import { StringValue } from "./StringValue";

export interface ProjectFields {
  FIELD_TYPE: "PROJECT";
  title: StringValue;
  description: StringValue;
  imageName: StringValue;
  equipment?: { arrayValue: { values: StringValue[] } };
  technologies?: { arrayValue: { values: StringValue[] } };
  infoLink?: StringValue;
  liveLink?: StringValue;
  sourceLink?: StringValue;
}
