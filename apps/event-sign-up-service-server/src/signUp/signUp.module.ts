import { Module } from "@nestjs/common";
import { SignUpModuleBase } from "./base/signUp.module.base";
import { SignUpService } from "./signUp.service";
import { SignUpController } from "./signUp.controller";
import { SignUpResolver } from "./signUp.resolver";

@Module({
  imports: [SignUpModuleBase],
  controllers: [SignUpController],
  providers: [SignUpService, SignUpResolver],
  exports: [SignUpService],
})
export class SignUpModule {}
