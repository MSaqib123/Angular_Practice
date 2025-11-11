import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Section_2/header/header.component';
import { UserComponent } from './Section_2/user/user.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  users = DUMMY_USERS;
  selectedUserId = "u1";
  onSelectUser(id:string){
    this.selectedUserId = id;
    
  }


}
