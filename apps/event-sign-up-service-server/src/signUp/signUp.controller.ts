import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SignUpService } from "./signUp.service";
import { SignUpControllerBase } from "./base/signUp.controller.base";

@swagger.ApiTags("signUps")
@common.Controller("signUps")
export class SignUpController extends SignUpControllerBase {
  constructor(protected readonly service: SignUpService) {
    super(service);
  }
}
