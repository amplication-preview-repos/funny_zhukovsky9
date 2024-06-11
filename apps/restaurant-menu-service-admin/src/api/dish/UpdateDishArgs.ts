import { DishWhereUniqueInput } from "./DishWhereUniqueInput";
import { DishUpdateInput } from "./DishUpdateInput";

export type UpdateDishArgs = {
  where: DishWhereUniqueInput;
  data: DishUpdateInput;
};
