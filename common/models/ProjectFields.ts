import { ArrayValue, StringValue } from "./FirebaseValues";

export interface ProjectFields {
  FIELD_TYPE: "PROJECT";
  title: StringValue;
  description: StringValue;
  imageName: StringValue;
  equipment?: ArrayValue;
  technologies?: ArrayValue;
  infoLink?: StringValue;
  liveLink?: StringValue;
  sourceLink?: StringValue;
}
