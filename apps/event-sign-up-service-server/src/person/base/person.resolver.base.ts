/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Person } from "./Person";
import { PersonCountArgs } from "./PersonCountArgs";
import { PersonFindManyArgs } from "./PersonFindManyArgs";
import { PersonFindUniqueArgs } from "./PersonFindUniqueArgs";
import { CreatePersonArgs } from "./CreatePersonArgs";
import { UpdatePersonArgs } from "./UpdatePersonArgs";
import { DeletePersonArgs } from "./DeletePersonArgs";
import { SignUpFindManyArgs } from "../../signUp/base/SignUpFindManyArgs";
import { SignUp } from "../../signUp/base/SignUp";
import { PersonService } from "../person.service";
@graphql.Resolver(() => Person)
export class PersonResolverBase {
  constructor(protected readonly service: PersonService) {}

  async _peopleMeta(
    @graphql.Args() args: PersonCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Person])
  async people(@graphql.Args() args: PersonFindManyArgs): Promise<Person[]> {
    return this.service.people(args);
  }

  @graphql.Query(() => Person, { nullable: true })
  async person(
    @graphql.Args() args: PersonFindUniqueArgs
  ): Promise<Person | null> {
    const result = await this.service.person(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Person)
  async createPerson(@graphql.Args() args: CreatePersonArgs): Promise<Person> {
    return await this.service.createPerson({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Person)
  async updatePerson(
    @graphql.Args() args: UpdatePersonArgs
  ): Promise<Person | null> {
    try {
      return await this.service.updatePerson({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Person)
  async deletePerson(
    @graphql.Args() args: DeletePersonArgs
  ): Promise<Person | null> {
    try {
      return await this.service.deletePerson(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [SignUp], { name: "signUps" })
  async findSignUps(
    @graphql.Parent() parent: Person,
    @graphql.Args() args: SignUpFindManyArgs
  ): Promise<SignUp[]> {
    const results = await this.service.findSignUps(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
