import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Section_2/header/header.component';
import { UserComponent } from './Section_2/user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./Section_2/tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  users = DUMMY_USERS;
  selectedUserId = "";
  onSelectUser(id:string){
    this.selectedUserId = id;
    
  }
  get onSelectedUser(){
    return this.users.find(x=>x.id == this.selectedUserId)
  }

}
