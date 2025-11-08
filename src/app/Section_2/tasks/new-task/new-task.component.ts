import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule, NgClass],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() hideTaskUI = new EventEmitter<void>();
  @Output() add = new EventEmitter<any>();

  hidepopup(){
    this.hideTaskUI.emit();
  }

  titleTxt:string = '';
  summeryTxt:string = '';
  dateTxt:string = '';

  onSubmit(){
    this.add.emit({
      title:this.titleTxt,
      summary:this.summeryTxt,
      date:this.dateTxt
    })
  }

}
