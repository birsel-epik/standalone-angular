import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {mapData} from "../../../utils/object-helper";
import {inject} from "@angular/core";
import {of} from "rxjs";


export interface CrudResponse {
  message?: string;
}

export class CrudService<T> {
  httpClient: HttpClient = inject(HttpClient);

  public apiUrl: string = environment.apiUrl;

  /**
   * Must be overridden by child class
   */
  public baseUrl: string = "";

  list<T>() {
    return this.httpClient.get<T[]>(`${this.apiUrl}/${this.baseUrl}/Students`).pipe(mapData());
    //return this.httpClient.get<T[]>(`${this.apiUrl}/${this.baseUrl}/GetAllAsync`).pipe(mapData());
  }

  one<T>(id: number) {
    if (!id) return of(null);
    return this.httpClient.get<T>(`${this.apiUrl}/${this.baseUrl}/GetByIdAsync/${id}`).pipe(mapData());
  }

  insert(data: T) {
    return this.httpClient.post<CrudResponse>(`${this.apiUrl}/${this.baseUrl}/InsertAsync`, data);
  }

  update(data: T) {
    return this.httpClient.post<CrudResponse>(`${this.apiUrl}/${this.baseUrl}/UpdateAsync`, data);
  }

  remove(id: number) {
    return this.httpClient.get<CrudResponse>(`${this.apiUrl}/${this.baseUrl}/DeleteAsync/${id}`);
  }
}
