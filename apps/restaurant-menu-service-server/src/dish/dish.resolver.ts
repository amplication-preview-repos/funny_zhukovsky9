import * as graphql from "@nestjs/graphql";
import { DishResolverBase } from "./base/dish.resolver.base";
import { Dish } from "./base/Dish";
import { DishService } from "./dish.service";

@graphql.Resolver(() => Dish)
export class DishResolver extends DishResolverBase {
  constructor(protected readonly service: DishService) {
    super(service);
  }
}
