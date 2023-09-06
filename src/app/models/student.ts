import {ForeignName} from "./common";
import {BaseModel} from "./base-model";

export interface StudentModel extends ForeignName, BaseModel {
  phone?: string;
  phone2?: string;

  phone3?: string;

  gender?: boolean;
  nationality?: string;

  taxNumber?: string;

  isBlackList?: boolean;
  email?: string;

  password?: string;

  birthDay?: string;

  description?: string;

  isSync?: boolean /* ? */;

  customerAddresses?: StudentAddressModel[];
  customerPoints?: StudentPointModel[];
}

export interface StudentAddressModel extends BaseModel {
  customerId?: number;
  zone?: string;

  floor?: string;

  apartment?: string;

  buildingNumber?: string;

  streetNumber?: string;

  description?: string;

  longitude?: string;

  latitude?: string;
}


export interface StudentPointModel extends BaseModel {
  customerId?: number;
  orderId?: number;
  orderDate?: string;
  expireDate?: string;
  expireDayNum?: number;
  pointsPerOrder?: number;
  expired?: boolean;
  redeemed?: boolean;
}
