import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent  implements OnInit {
  members!: { name: string; email: string; status: string; }[];

  constructor() { }

  ngOnInit() {
    this.members = [
      { name: 'John Doe', email: 'john.doe@example.com', status: 'Active' },
      { name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Inactive' },
      { name: 'Samuel Brown', email: 'samuel.brown@example.com', status: 'Active' },
      { name: 'Lucy White', email: 'lucy.white@example.com', status: 'Inactive' },
      { name: 'Michael Green', email: 'michael.green@example.com', status: 'Active' },
    ];
  }

}
