import { Category } from "../category/Category";
import { Dish } from "../dish/Dish";

export type Image = {
  categories?: Array<Category>;
  createdAt: Date;
  dish?: Dish | null;
  id: string;
  updatedAt: Date;
  url: string | null;
};
