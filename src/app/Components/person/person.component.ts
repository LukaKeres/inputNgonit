import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  @Input() inputData: any ='data';

  ngOnInit(): void {
    console.warn(this.inputData);
  }
}
