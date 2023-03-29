import {lcFirst} from "./string-helper";
import {map} from "rxjs/operators";

/**
 * Convert keys to camelCase
 * This is helper function that convert first char of object keys to lower case
 * Use it when fetching data from backend
 * @param obj
 */
export function camelCaseKeys(obj: any): any {
  if (Array.isArray(obj)) return obj.map((o) => camelCaseKeys(o));

  if (typeof obj !== "object") return obj;

  const keys = Object.keys(obj);

  const newObject: { [key: string]: string } = {};
  keys.forEach((k) => {
    newObject[lcFirst(k)] = camelCaseKeys(obj[k]);
  });

  return newObject;
}

/**
 * It converts upper case keys to lower case keys
 * @param data
 */
export function mapData() {
  return map((data: any) => {
    return Array.isArray(data) ? data.map((d) => camelCaseKeys(d)) : camelCaseKeys(data);
  });
}
