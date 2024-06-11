import { DishUpdateManyWithoutCategoriesInput } from "./DishUpdateManyWithoutCategoriesInput";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type CategoryUpdateInput = {
  description?: string | null;
  dishes?: DishUpdateManyWithoutCategoriesInput;
  image?: ImageWhereUniqueInput | null;
  name?: string | null;
};
