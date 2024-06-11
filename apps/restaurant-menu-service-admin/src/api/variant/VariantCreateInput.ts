import { DishWhereUniqueInput } from "../dish/DishWhereUniqueInput";

export type VariantCreateInput = {
  description?: string | null;
  dish?: DishWhereUniqueInput | null;
  name?: string | null;
  price?: number | null;
};
