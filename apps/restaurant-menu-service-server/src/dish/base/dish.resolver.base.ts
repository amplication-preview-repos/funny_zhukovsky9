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
import { Dish } from "./Dish";
import { DishCountArgs } from "./DishCountArgs";
import { DishFindManyArgs } from "./DishFindManyArgs";
import { DishFindUniqueArgs } from "./DishFindUniqueArgs";
import { CreateDishArgs } from "./CreateDishArgs";
import { UpdateDishArgs } from "./UpdateDishArgs";
import { DeleteDishArgs } from "./DeleteDishArgs";
import { ImageFindManyArgs } from "../../image/base/ImageFindManyArgs";
import { Image } from "../../image/base/Image";
import { VariantFindManyArgs } from "../../variant/base/VariantFindManyArgs";
import { Variant } from "../../variant/base/Variant";
import { Category } from "../../category/base/Category";
import { DishService } from "../dish.service";
@graphql.Resolver(() => Dish)
export class DishResolverBase {
  constructor(protected readonly service: DishService) {}

  async _dishesMeta(
    @graphql.Args() args: DishCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Dish])
  async dishes(@graphql.Args() args: DishFindManyArgs): Promise<Dish[]> {
    return this.service.dishes(args);
  }

  @graphql.Query(() => Dish, { nullable: true })
  async dish(@graphql.Args() args: DishFindUniqueArgs): Promise<Dish | null> {
    const result = await this.service.dish(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Dish)
  async createDish(@graphql.Args() args: CreateDishArgs): Promise<Dish> {
    return await this.service.createDish({
      ...args,
      data: {
        ...args.data,

        category: args.data.category
          ? {
              connect: args.data.category,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Dish)
  async updateDish(@graphql.Args() args: UpdateDishArgs): Promise<Dish | null> {
    try {
      return await this.service.updateDish({
        ...args,
        data: {
          ...args.data,

          category: args.data.category
            ? {
                connect: args.data.category,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Dish)
  async deleteDish(@graphql.Args() args: DeleteDishArgs): Promise<Dish | null> {
    try {
      return await this.service.deleteDish(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Image], { name: "images" })
  async findImages(
    @graphql.Parent() parent: Dish,
    @graphql.Args() args: ImageFindManyArgs
  ): Promise<Image[]> {
    const results = await this.service.findImages(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Variant], { name: "variants" })
  async findVariants(
    @graphql.Parent() parent: Dish,
    @graphql.Args() args: VariantFindManyArgs
  ): Promise<Variant[]> {
    const results = await this.service.findVariants(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Category, {
    nullable: true,
    name: "category",
  })
  async getCategory(@graphql.Parent() parent: Dish): Promise<Category | null> {
    const result = await this.service.getCategory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
