import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [DialogService]
})
export class LayoutComponent  implements OnInit, AfterViewInit {

  constructor(private router:Router) { 
    console.log('layout');
  }

  ngOnInit() {
    console.log('layout');
    
  }

  
  async ngAfterViewInit(): Promise<void> {}

  logout() {
    // Implement your logout logic here
    console.log('User logged out');
    // For example, navigating to a login page
    this.router.navigateByUrl('');
  }

  
  async goToModulePage(item: string) {
    console.log("route path",item);
    await this.router.navigateByUrl(item);
  }

}
