import { Dish } from "../dish/Dish";
import { Image } from "../image/Image";

export type Category = {
  createdAt: Date;
  description: string | null;
  dishes?: Array<Dish>;
  id: string;
  image?: Image | null;
  name: string | null;
  updatedAt: Date;
};
