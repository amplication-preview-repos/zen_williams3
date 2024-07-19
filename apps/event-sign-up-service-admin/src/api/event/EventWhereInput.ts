import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SignUpListRelationFilter } from "../signUp/SignUpListRelationFilter";

export type EventWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  signUps?: SignUpListRelationFilter;
};
