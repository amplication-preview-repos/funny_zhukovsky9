import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ImageUpdateManyWithoutDishesInput } from "./ImageUpdateManyWithoutDishesInput";
import { VariantUpdateManyWithoutDishesInput } from "./VariantUpdateManyWithoutDishesInput";

export type DishUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  images?: ImageUpdateManyWithoutDishesInput;
  name?: string | null;
  price?: number | null;
  variants?: VariantUpdateManyWithoutDishesInput;
};
