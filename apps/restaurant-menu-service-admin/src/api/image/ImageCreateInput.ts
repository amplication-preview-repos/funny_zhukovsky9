import { CategoryCreateNestedManyWithoutImagesInput } from "./CategoryCreateNestedManyWithoutImagesInput";
import { DishWhereUniqueInput } from "../dish/DishWhereUniqueInput";

export type ImageCreateInput = {
  categories?: CategoryCreateNestedManyWithoutImagesInput;
  dish?: DishWhereUniqueInput | null;
  url?: string | null;
};
