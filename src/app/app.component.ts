import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-friday';
  employeeDetails = [
    {
      name: 'John',
      id: '123456',
      skills: 'ReactJS, AngularJS',
      project: 'Cognizant Internal',
      hcm: 'Alex',
    },
    {
      name: 'Girl',
      id: '123456',
      skills: 'ReactJS, AngularJS',
      project: 'Cognizant Internal',
      hcm: 'Alex',
    },
    {
      name: 'Girl',
      id: '123456',
      skills: 'ReactJS, AngularJS',
      project: 'Cognizant Internal',
      hcm: 'Alex',
    },
    {
      name: 'John',
      id: '123456',
      skills: 'ReactJS, AngularJS',
      project: 'Cognizant Internal',
      hcm: 'Alex',
    },
    {
      name: 'Girl',
      id: '123456',
      skills: 'ReactJS, AngularJS',
      project: 'Cognizant Internal',
      hcm: 'Alex',
    }
  ];
  headElements = ['#', 'Name', 'ID', 'Skills', 'Project', 'HCM',''];

  deleteRecord(id){
    this.employeeDetails.splice(Number(id),1);
  }

}
