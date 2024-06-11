import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  imageId?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
