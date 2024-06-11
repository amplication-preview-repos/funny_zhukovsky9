import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DishWhereUniqueInput } from "../dish/DishWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type VariantWhereInput = {
  description?: StringNullableFilter;
  dish?: DishWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
