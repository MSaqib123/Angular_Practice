import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../Task.model';
import { TasksService } from '../tast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!:Task;
  // @Output() selectedTask = new EventEmitter();

  constructor(private taskService:TasksService){
  }


  onCompleteTask(){
    this.taskService.deleteCompleteTaskForUser(this.task.id);
    // this.selectedTask.emit(this.task.id);
  }
}
