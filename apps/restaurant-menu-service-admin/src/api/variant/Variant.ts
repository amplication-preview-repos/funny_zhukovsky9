import { Dish } from "../dish/Dish";

export type Variant = {
  createdAt: Date;
  description: string | null;
  dish?: Dish | null;
  id: string;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
