import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectUser = DUMMY_USERS[0]
  selectUser = DUMMY_USERS[randomIndex]

  //==== property getter =====
  get userImg(){
    return 'assets/users/'+this.selectUser.avatar
  }


  /// 1. What is zone.js?
  // zone.js   is library that angular use to  track the changing in compananet
  // setTimeout , promise, addEventListener, XHR / fetch calls

  /*NOTE
      1. Does zone.js Update the UI Itself? ❌
          No!
          zone.js never updates the UI directly.
          Its only job is to notify Angular whenever an asynchronous task or event happens.

          After that, Angular itself runs change detection and updates the UI.
      */
}
