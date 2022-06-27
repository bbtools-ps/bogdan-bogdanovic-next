import { StringValue } from "./StringValue";
import { TimestampValue } from "./TimestampValue";

export interface WorkExperienceFields {
  FIELD_TYPE: "WORK_EXPERIENCE";
  companyName: StringValue;
  companyLink?: StringValue;
  description: { arrayValue: { values: StringValue[] } };
  jobTitle: StringValue;
  startDate: TimestampValue;
  endDate?: TimestampValue;
}
