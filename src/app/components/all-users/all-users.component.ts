import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs';
import { User } from 'src/app/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  userService: UserService = inject(UserService);
  users: User[] = [] // type: array of User(s)
  hasLoaded: boolean = false;
  router: Router = inject(Router);
  
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
        }, 200);
      }
    })
  }

  viewUserDetails(id: number){
    console.log("hello");
    this.router.navigate(["users", id]);
  }

}
