import { SignUp } from "../signUp/SignUp";

export type Event = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  name: string | null;
  description: string | null;
  signUps?: Array<SignUp>;
};
