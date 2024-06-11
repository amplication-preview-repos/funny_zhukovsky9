import { Category } from "../category/Category";
import { Image } from "../image/Image";
import { Variant } from "../variant/Variant";

export type Dish = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  images?: Array<Image>;
  name: string | null;
  price: number | null;
  updatedAt: Date;
  variants?: Array<Variant>;
};
