import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Applications } from '../Models/Application.model';
import { ApplicationsService } from '../Services/Applications.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  signForm: FormGroup;
  contact = ['Email', 'Phone'];
  applications: Applications[]
  submitted = false;
  indexEdited: number;
  editedApplication: Applications;
  editMode = false;
  constructor(private appService: ApplicationsService) { }

  ngOnInit() {
    this.applications = this.appService.getApplication();
    this.appService.applicationEmitter.subscribe(
      (app: Applications[]) => {
        this.applications = app
      }
    );
    this.appService.editEmitter.subscribe(
      (index: number) => {
        this.indexEdited = index;
        this.editMode = true;
        this.editedApplication = this.appService.getApplicationsByIndex(index);
        this.signForm.setValue({
          name: this.editedApplication.name,
          email: this.editedApplication.email,
          age: this.editedApplication.age,
          phone: this.editedApplication.phone,
          com: this.editedApplication.com,
          select: this.editedApplication.select,
          date: this.editedApplication.date,
          tech: this.editedApplication.tech,
          textarea: this.editedApplication.textarea,
          check: this.editedApplication.check,
        })
      }
    )
    this.signForm = new FormGroup({
      "name": new FormControl(null, Validators.required),
      "email": new FormControl(null, [Validators.required, Validators.email, Validators.pattern(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/)]),
      "age": new FormControl(null, Validators.required),
      "phone": new FormControl(null, [Validators.required, Validators.pattern(/^\d{4,11}$/)]),
      "com": new FormControl(null, Validators.required),
      "select": new FormControl('Beginner', Validators.required),
      "date": new FormControl(null, Validators.required),
      "tech": new FormControl(null),
      "textarea": new FormControl(null),
      "check": new FormControl(null)
    });

  }

  onSubmit() {
    const name = this.signForm.get('name').value;
    const email = this.signForm.get('email').value;
    const age = this.signForm.get('age').value;
    const phone = this.signForm.get('phone').value;
    const com = this.signForm.get('com').value;
    const select = this.signForm.get('select').value;
    const date = this.signForm.get('date').value;
    const tech = this.signForm.get('tech').value;
    const textarea = this.signForm.get('textarea').value;
    const check = this.signForm.get('check').value;

    const newIng = new Applications(name, email, age, phone, com, select, date, tech, textarea, check);
    if (this.editMode) {
      this.appService.updateApplication(this.indexEdited, newIng);
    }
    else {
      this.appService.pushNewApplications(newIng);
    }

    this.editMode = false
    this.signForm.reset()
  }


}
