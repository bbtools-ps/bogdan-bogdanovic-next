import { ArrayValue, StringValue, TimestampValue } from "./FirebaseValues";

export interface WorkExperienceFields {
  FIELD_TYPE: "WORK_EXPERIENCE";
  companyName: StringValue;
  companyLink?: StringValue;
  description: ArrayValue;
  jobTitle: StringValue;
  startDate: TimestampValue;
  endDate?: TimestampValue;
}
