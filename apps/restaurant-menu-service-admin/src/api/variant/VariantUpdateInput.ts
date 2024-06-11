import { DishWhereUniqueInput } from "../dish/DishWhereUniqueInput";

export type VariantUpdateInput = {
  description?: string | null;
  dish?: DishWhereUniqueInput | null;
  name?: string | null;
  price?: number | null;
};
