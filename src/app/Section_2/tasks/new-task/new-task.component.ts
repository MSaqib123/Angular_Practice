import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { NewTask } from '../Task.model';
import { TasksService } from '../tast.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule, NgClass],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) UserId!:string;
  @Output() hideTaskUI = new EventEmitter<void>();
  private taskService = inject(TasksService);
  // @Output() add = new EventEmitter<NewTask>();

  hidepopup(){
    this.hideTaskUI.emit();
  }

  titleTxt:string = '';
  summeryTxt:string = '';
  dateTxt:string = '';

  onSubmit(){
    this.taskService.insertTaskForUser({
      title:this.titleTxt,
      summary:this.summeryTxt,
      date:this.dateTxt
    },this.UserId)
    this.hidepopup();
  }

}
