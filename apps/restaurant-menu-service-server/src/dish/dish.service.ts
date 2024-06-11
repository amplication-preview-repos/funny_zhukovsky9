import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DishServiceBase } from "./base/dish.service.base";

@Injectable()
export class DishService extends DishServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
