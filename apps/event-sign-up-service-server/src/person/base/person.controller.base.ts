/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PersonService } from "../person.service";
import { PersonCreateInput } from "./PersonCreateInput";
import { Person } from "./Person";
import { PersonFindManyArgs } from "./PersonFindManyArgs";
import { PersonWhereUniqueInput } from "./PersonWhereUniqueInput";
import { PersonUpdateInput } from "./PersonUpdateInput";
import { SignUpFindManyArgs } from "../../signUp/base/SignUpFindManyArgs";
import { SignUp } from "../../signUp/base/SignUp";
import { SignUpWhereUniqueInput } from "../../signUp/base/SignUpWhereUniqueInput";

export class PersonControllerBase {
  constructor(protected readonly service: PersonService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Person })
  async createPerson(@common.Body() data: PersonCreateInput): Promise<Person> {
    return await this.service.createPerson({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        email: true,
        isOrganizer: true,
        address: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Person] })
  @ApiNestedQuery(PersonFindManyArgs)
  async people(@common.Req() request: Request): Promise<Person[]> {
    const args = plainToClass(PersonFindManyArgs, request.query);
    return this.service.people({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        email: true,
        isOrganizer: true,
        address: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Person })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async person(
    @common.Param() params: PersonWhereUniqueInput
  ): Promise<Person | null> {
    const result = await this.service.person({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        email: true,
        isOrganizer: true,
        address: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Person })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePerson(
    @common.Param() params: PersonWhereUniqueInput,
    @common.Body() data: PersonUpdateInput
  ): Promise<Person | null> {
    try {
      return await this.service.updatePerson({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          firstName: true,
          lastName: true,
          email: true,
          isOrganizer: true,
          address: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Person })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePerson(
    @common.Param() params: PersonWhereUniqueInput
  ): Promise<Person | null> {
    try {
      return await this.service.deletePerson({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          firstName: true,
          lastName: true,
          email: true,
          isOrganizer: true,
          address: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/signUps")
  @ApiNestedQuery(SignUpFindManyArgs)
  async findSignUps(
    @common.Req() request: Request,
    @common.Param() params: PersonWhereUniqueInput
  ): Promise<SignUp[]> {
    const query = plainToClass(SignUpFindManyArgs, request.query);
    const results = await this.service.findSignUps(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        event: {
          select: {
            id: true,
          },
        },

        person: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/signUps")
  async connectSignUps(
    @common.Param() params: PersonWhereUniqueInput,
    @common.Body() body: SignUpWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      signUps: {
        connect: body,
      },
    };
    await this.service.updatePerson({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/signUps")
  async updateSignUps(
    @common.Param() params: PersonWhereUniqueInput,
    @common.Body() body: SignUpWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      signUps: {
        set: body,
      },
    };
    await this.service.updatePerson({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/signUps")
  async disconnectSignUps(
    @common.Param() params: PersonWhereUniqueInput,
    @common.Body() body: SignUpWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      signUps: {
        disconnect: body,
      },
    };
    await this.service.updatePerson({
      where: params,
      data,
      select: { id: true },
    });
  }
}
