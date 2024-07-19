import * as graphql from "@nestjs/graphql";
import { SignUpResolverBase } from "./base/signUp.resolver.base";
import { SignUp } from "./base/SignUp";
import { SignUpService } from "./signUp.service";

@graphql.Resolver(() => SignUp)
export class SignUpResolver extends SignUpResolverBase {
  constructor(protected readonly service: SignUpService) {
    super(service);
  }
}
