import { Dish as TDish } from "../api/dish/Dish";

export const DISH_TITLE_FIELD = "name";

export const DishTitle = (record: TDish): string => {
  return record.name?.toString() || String(record.id);
};
