import { SignUpUpdateManyWithoutPeopleInput } from "./SignUpUpdateManyWithoutPeopleInput";

export type PersonUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  signUps?: SignUpUpdateManyWithoutPeopleInput;
  isOrganizer?: boolean | null;
  address?: string | null;
};
