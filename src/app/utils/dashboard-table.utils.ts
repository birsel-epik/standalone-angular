import {map} from "rxjs";
import {TableDataSource} from "../interface/dashboard.interface";


/**
 * Map response to dashboard table compatible object
 * This map can be used in client side loading
 */
export function mapResponse<T = any>() {
  return map((data: T[]): TableDataSource<T> => {
    return {
      data: data,
      collectionSize: data.length,
    };
  });
}
