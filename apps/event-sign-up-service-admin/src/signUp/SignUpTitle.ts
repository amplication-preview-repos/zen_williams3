import { SignUp as TSignUp } from "../api/signUp/SignUp";

export const SIGNUP_TITLE_FIELD = "id";

export const SignUpTitle = (record: TSignUp): string => {
  return record.id?.toString() || String(record.id);
};
