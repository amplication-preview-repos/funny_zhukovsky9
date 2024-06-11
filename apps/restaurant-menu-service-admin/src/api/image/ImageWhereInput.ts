import { CategoryListRelationFilter } from "../category/CategoryListRelationFilter";
import { DishWhereUniqueInput } from "../dish/DishWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ImageWhereInput = {
  categories?: CategoryListRelationFilter;
  dish?: DishWhereUniqueInput;
  id?: StringFilter;
  url?: StringNullableFilter;
};
