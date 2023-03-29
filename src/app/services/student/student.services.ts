import {Injectable} from "@angular/core";
import {StudentModel} from "../../models/student";
import {CrudService} from "./crud.services";

@Injectable({
  providedIn: "root",
})
export class StudentServices extends CrudService<StudentModel> {
  override baseUrl = "Student";

  constructor() {
    super();
  }
}
