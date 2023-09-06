import {Component} from '@angular/core';
import {mapResponse} from "../../../../app/utils/dashboard-table.utils";
import {CommonModule} from '@angular/common';
import {TranslocoModule, TranslocoService} from "@ngneat/transloco";
import {Observable} from "rxjs";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {ColumnTemplateDirective} from "../../../../app/directives/column-template.directive";
import {NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import {TableDataSource} from "../../../../app/interface/dashboard.interface";
import {DashboardTableComponent} from "../../../../app/components/dashboard-table/dashboard-table.component";
import {DashboardToolbarComponent} from "../../../../app/components/dashboard-toolbar/dashboard-toolbar.component";
import {StudentServices} from "../../../../app/services/student/student.services";
import {StudentModel} from "../../../../app/models/student";

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule,
    HttpClientModule,
    TranslocoModule,
    DashboardTableComponent,
    DashboardToolbarComponent,
    NgbTooltip,
    ColumnTemplateDirective,],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  dataSource!: Observable<TableDataSource<StudentModel>>;
  searchText = "";

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private translocoService: TranslocoService,
    private studentServices: StudentServices
  ) {
    this.loadData();
  }


  loadData() {
    this.dataSource = this.studentServices.list().pipe(mapResponse());
  }

  search(event: string) {
    this.searchText = event;
  }

  edit(row: any) {

  }

  add() {

  }

  remove(row: any) {

  }
}
