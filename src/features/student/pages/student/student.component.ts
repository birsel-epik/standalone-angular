import {Component} from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {StudentServices} from "../../../../app/services/student/student.services";
import {Observable} from "rxjs";
import {StudentModel} from "../../../../app/models/student";
import {DataViews, TableDataSource} from "../../../../app/interface/dashboard.interface";
import {ObservableStringPipe} from "../../../../app/pipes/observable-string.pipe";

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, ObservableStringPipe,
    CurrencyPipe],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  dataSource: StudentModel[] = [];
  studentData : Array<any> = []; // Servisten gelen cevabı bir değişkene atamak için değişken tanımlıyoruz (2)
  data: any;
  //grid: DataViews = DataViews.Grid;
  //searchText = "";

  constructor(
    private studentServices: StudentServices
  ) {
    this.loadData();
  }


  loadData() {
   // this.dataSource = this.studentServices.list();
  }

}
