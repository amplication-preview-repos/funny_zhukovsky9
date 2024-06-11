import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DishService } from "./dish.service";
import { DishControllerBase } from "./base/dish.controller.base";

@swagger.ApiTags("dishes")
@common.Controller("dishes")
export class DishController extends DishControllerBase {
  constructor(protected readonly service: DishService) {
    super(service);
  }
}
