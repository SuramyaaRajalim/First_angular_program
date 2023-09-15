import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'suramya';
  players=["joi","boi"];
  message:string="Hello World!";
  inputValue:string="initial value";
  activities=[
    {name:'Swimming',done:false,venue:'marena'},
    {name:'Breakfast',done:false,venue:'mess'},
    {name:'College',done:false,venue:'smit'},
    {name:'Shopping',done:false,venue:'smit store'},
    {name:'Dinner',done:false,venue:'canteen'},
  ];
}
