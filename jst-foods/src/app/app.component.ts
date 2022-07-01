import { Component } from '@angular/core';
// import{Router} from '@angular/router';

declare var $: any; // declaring jquery in this way solved the problem



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jst-foods';
  
  }

