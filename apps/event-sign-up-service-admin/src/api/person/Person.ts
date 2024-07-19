import { SignUp } from "../signUp/SignUp";

export type Person = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  signUps?: Array<SignUp>;
  isOrganizer: boolean | null;
  address: string | null;
};
