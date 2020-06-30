import { Applications } from '../Models/Application.model';
import { EventEmitter } from '@angular/core';

export class ApplicationsService {
    private applications: Applications[] = []
    applicationEmitter = new EventEmitter<Applications[]>();
    editEmitter = new EventEmitter<number>()

    getApplication() {
        return this.applications.slice();
    }

    getApplicationsByIndex(index: number) {
        return this.applications[index];
    }

    pushNewApplications(application: Applications) {
        this.applications.push(application)
        this.applicationEmitter.emit(this.applications)
    }

    editApp(index: number) {
        this.editEmitter.emit(index)
    }

    updateApplication(index: number, addedApplication: Applications) {
        this.applications[index] = addedApplication;
        this.applicationEmitter.emit(this.applications.slice())
    }

    deleteApp(index: number) {
        this.applications.splice(index, 1);
        this.applicationEmitter.emit(this.applications.slice())
    }

}
