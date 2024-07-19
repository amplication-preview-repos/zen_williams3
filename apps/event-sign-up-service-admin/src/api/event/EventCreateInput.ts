import { SignUpCreateNestedManyWithoutEventsInput } from "./SignUpCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  date?: Date | null;
  name?: string | null;
  description?: string | null;
  signUps?: SignUpCreateNestedManyWithoutEventsInput;
};
