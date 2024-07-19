import { StringFilter } from "../../util/StringFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type SignUpWhereInput = {
  id?: StringFilter;
  event?: EventWhereUniqueInput;
  person?: PersonWhereUniqueInput;
};
