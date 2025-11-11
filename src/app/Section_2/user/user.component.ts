import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { User } from '../User.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {  
  // @Input({required:true}) user!:User;
  user = input<User>();
  @Input({required:true})  selectedUser!: boolean;
  select = output<string>();

  userImg = computed(() => 'assets/users/'+this.user()!.avatar);

  onSelectUser(){
    this.select.emit(this.user()!.id);
  }  
}
