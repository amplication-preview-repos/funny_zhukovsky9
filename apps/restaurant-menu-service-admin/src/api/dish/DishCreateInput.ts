import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ImageCreateNestedManyWithoutDishesInput } from "./ImageCreateNestedManyWithoutDishesInput";
import { VariantCreateNestedManyWithoutDishesInput } from "./VariantCreateNestedManyWithoutDishesInput";

export type DishCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  images?: ImageCreateNestedManyWithoutDishesInput;
  name?: string | null;
  price?: number | null;
  variants?: VariantCreateNestedManyWithoutDishesInput;
};
