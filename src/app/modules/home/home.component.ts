import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  currentDate!:any;
 constructor(private router: Router) {
  this.currentDate = new Date().toDateString();
 }

  navigateToFeatures() {
    this.router.navigate(['']); // Navigate to another page or features screen
  }

}
