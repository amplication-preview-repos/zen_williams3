import { SortOrder } from "../../util/SortOrder";

export type PersonOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  email?: SortOrder;
  isOrganizer?: SortOrder;
  address?: SortOrder;
};
