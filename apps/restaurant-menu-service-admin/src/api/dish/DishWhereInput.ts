import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { VariantListRelationFilter } from "../variant/VariantListRelationFilter";

export type DishWhereInput = {
  category?: CategoryWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  images?: ImageListRelationFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  variants?: VariantListRelationFilter;
};
