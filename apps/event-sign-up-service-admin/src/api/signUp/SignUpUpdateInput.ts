import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type SignUpUpdateInput = {
  event?: EventWhereUniqueInput | null;
  person?: PersonWhereUniqueInput | null;
};
