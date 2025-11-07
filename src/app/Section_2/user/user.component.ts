import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // // selectUser = DUMMY_USERS[0]
  // selectUser = DUMMY_USERS[randomIndex]

  // //==== property getter =====
  // get userImg(){
  //   return 'assets/users/'+this.selectUser.avatar
  // }

  // changeUser(){
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
  //   this.selectUser = DUMMY_USERS[randomIndex];
  // }

  



  // selectUser = DUMMY_USERS[0]
  selectUser =signal(DUMMY_USERS[randomIndex] )

  //==== property getter =====\
  userImg = computed(()=> 'assets/users/' + this.selectUser().avatar)
  // get userImg(){
  //   return 'assets/users/'+this.selectUser.avatar
  // }

  changeUser(){
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectUser.set(DUMMY_USERS[randomIndex])
  }

  


  // Note  benifit of signla 
  // signal jis component ya jis  jagaa   change ataa ha use ke update  angular ko data
  // langke 

  // Zone.js  ya  1 jaga chage att tha to sb me changing ke update angular ko data thaha
  // signals



  
}
