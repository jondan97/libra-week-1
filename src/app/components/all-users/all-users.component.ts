import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-all-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  userService: UserService = inject(UserService);
  users: any;
  hasLoaded: boolean = false;
  
  constructor() {}

  ngOnInit() {
    this.userService.getUsers()
    .pipe(map((response: any) => response.data))
    .subscribe({
      next: response => {
        setTimeout(() => {
          console.log(response);
          this.users = response;
          this.hasLoaded = true;
        }, 2000);
      }
    })
  }

}
