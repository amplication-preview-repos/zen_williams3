import { SortOrder } from "../../util/SortOrder";

export type SignUpOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  eventId?: SortOrder;
  personId?: SortOrder;
};
