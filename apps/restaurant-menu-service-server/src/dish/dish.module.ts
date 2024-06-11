import { Module } from "@nestjs/common";
import { DishModuleBase } from "./base/dish.module.base";
import { DishService } from "./dish.service";
import { DishController } from "./dish.controller";
import { DishResolver } from "./dish.resolver";

@Module({
  imports: [DishModuleBase],
  controllers: [DishController],
  providers: [DishService, DishResolver],
  exports: [DishService],
})
export class DishModule {}
