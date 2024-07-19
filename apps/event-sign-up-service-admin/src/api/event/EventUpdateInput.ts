import { SignUpUpdateManyWithoutEventsInput } from "./SignUpUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  date?: Date | null;
  name?: string | null;
  description?: string | null;
  signUps?: SignUpUpdateManyWithoutEventsInput;
};
