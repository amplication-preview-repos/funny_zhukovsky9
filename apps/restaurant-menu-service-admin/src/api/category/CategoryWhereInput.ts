import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DishListRelationFilter } from "../dish/DishListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type CategoryWhereInput = {
  description?: StringNullableFilter;
  dishes?: DishListRelationFilter;
  id?: StringFilter;
  image?: ImageWhereUniqueInput;
  name?: StringNullableFilter;
};
