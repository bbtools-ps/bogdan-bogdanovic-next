import { StringValue } from "./StringValue";

export interface WorkExperienceFields {
  FIELD_TYPE: "WORK_EXPERIENCE";
  companyLoaction: StringValue;
  companyName: StringValue;
  description: { arrayValue: { values: StringValue[] } };
  jobTitle: StringValue;
  startDate: StringValue;
  endDate?: StringValue;
}
