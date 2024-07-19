import { SignUpWhereUniqueInput } from "./SignUpWhereUniqueInput";
import { SignUpUpdateInput } from "./SignUpUpdateInput";

export type UpdateSignUpArgs = {
  where: SignUpWhereUniqueInput;
  data: SignUpUpdateInput;
};
