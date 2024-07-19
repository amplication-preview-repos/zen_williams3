import { SignUpCreateNestedManyWithoutPeopleInput } from "./SignUpCreateNestedManyWithoutPeopleInput";

export type PersonCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  signUps?: SignUpCreateNestedManyWithoutPeopleInput;
  isOrganizer?: boolean | null;
  address?: string | null;
};
