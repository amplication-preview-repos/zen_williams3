import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type SignUpCreateInput = {
  event?: EventWhereUniqueInput | null;
  person?: PersonWhereUniqueInput | null;
};
