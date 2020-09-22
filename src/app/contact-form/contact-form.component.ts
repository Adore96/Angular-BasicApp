import {Component} from '@angular/core';
import {ContactFormService} from './contact-form.service';

@Component({
  selector: 'app-contact-form',
  template: `<h2>{{title}}</h2>
  <ul>
    <li *ngFor="let course of courses">
      {{course}}
    </li>
  </ul>`
  // templateUrl: './contact-form.component.html',
  // styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent {
  title = 'List of courses';
  courses;

  constructor(service: ContactFormService) {
    this.courses = service.getCourses();
  }
}
