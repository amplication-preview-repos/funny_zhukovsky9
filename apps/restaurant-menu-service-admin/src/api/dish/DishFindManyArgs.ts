import { DishWhereInput } from "./DishWhereInput";
import { DishOrderByInput } from "./DishOrderByInput";

export type DishFindManyArgs = {
  where?: DishWhereInput;
  orderBy?: Array<DishOrderByInput>;
  skip?: number;
  take?: number;
};
