import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  
  // template:'<h1>Pakistan Zidnabd</h1>',
  // styles:""

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  title:string = "Angular , Pakistan Zindabad"
}
