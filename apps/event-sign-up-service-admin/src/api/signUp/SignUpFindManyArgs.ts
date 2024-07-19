import { SignUpWhereInput } from "./SignUpWhereInput";
import { SignUpOrderByInput } from "./SignUpOrderByInput";

export type SignUpFindManyArgs = {
  where?: SignUpWhereInput;
  orderBy?: Array<SignUpOrderByInput>;
  skip?: number;
  take?: number;
};
