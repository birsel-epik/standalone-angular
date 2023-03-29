import {AddressModel} from "./address";
import {GenderModel} from "./gender";

export interface StudentModel {
  id?: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  email?: string;
  mobile?: number;
  profileImageUrl?: string;
  genderId?: string;

  gender?: GenderModel[];
  address?: AddressModel[];
}
