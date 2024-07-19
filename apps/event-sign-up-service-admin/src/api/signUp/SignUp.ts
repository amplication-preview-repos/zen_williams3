import { Event } from "../event/Event";
import { Person } from "../person/Person";

export type SignUp = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  event?: Event | null;
  person?: Person | null;
};
