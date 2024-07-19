import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SignUpServiceBase } from "./base/signUp.service.base";

@Injectable()
export class SignUpService extends SignUpServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
