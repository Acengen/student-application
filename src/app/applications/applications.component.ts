import { Component, OnInit, Input } from '@angular/core';
import { Applications } from '../Models/Application.model';
import { ApplicationsService } from '../Services/Applications.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  @Input() applications: Applications;
  @Input() index: number
  constructor(private appService: ApplicationsService) { }

  ngOnInit() {

  }
  editApp(index: number) {
    this.appService.editApp(index)
  }
  deleteApp(index: number) {
    this.appService.deleteApp(index)
  }
}
