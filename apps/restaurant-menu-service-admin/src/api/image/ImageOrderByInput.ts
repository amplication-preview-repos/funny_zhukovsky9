import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  createdAt?: SortOrder;
  dishId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
