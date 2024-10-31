import { Component } from '@angular/core';
import { Person } from './Interfaces/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
[x: string]: any;
  title = 'quiztesting';

  people: Person[]=[
    {
      name: 'abc',
      lastname: 'abc',
      email: '123213',
      phonenumber: 3434
    },
    {
      name: 'zawarudo',
      lastname: 'zawarudo',
      email: 'ara',
      phonenumber: 56565
    },
    {
      name: 'bababoey',
      lastname: 'imyou',
      email: 'unga',
      phonenumber: 56565
    },
    {
      name: 'stand',
      lastname: 'proud',
      email: 'youarestrong',
      phonenumber: 787878
    }

  ]
}
