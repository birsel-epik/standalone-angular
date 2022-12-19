import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";

@Component({
    selector: 'app-jira',
    standalone: true,
    templateUrl: './jira.component.html',
    imports: [
        HeaderComponent
    ],
    styleUrls: ['./jira.component.scss']
})
export class JiraComponent {

}
