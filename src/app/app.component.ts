import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = "Jhon_B";

  userData = {
    email: 'jhon@gmail.com',
    role: 'Admin'
};

  title = 'Starting-with-Angular';
}
