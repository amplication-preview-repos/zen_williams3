import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SignUpListRelationFilter } from "../signUp/SignUpListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type PersonWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  signUps?: SignUpListRelationFilter;
  isOrganizer?: BooleanNullableFilter;
  address?: StringNullableFilter;
};
