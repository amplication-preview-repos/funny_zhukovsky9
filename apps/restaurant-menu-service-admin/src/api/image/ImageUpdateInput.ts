import { CategoryUpdateManyWithoutImagesInput } from "./CategoryUpdateManyWithoutImagesInput";
import { DishWhereUniqueInput } from "../dish/DishWhereUniqueInput";

export type ImageUpdateInput = {
  categories?: CategoryUpdateManyWithoutImagesInput;
  dish?: DishWhereUniqueInput | null;
  url?: string | null;
};
