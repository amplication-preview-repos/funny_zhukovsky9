import { DishCreateNestedManyWithoutCategoriesInput } from "./DishCreateNestedManyWithoutCategoriesInput";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type CategoryCreateInput = {
  description?: string | null;
  dishes?: DishCreateNestedManyWithoutCategoriesInput;
  image?: ImageWhereUniqueInput | null;
  name?: string | null;
};
