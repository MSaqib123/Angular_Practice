import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../Task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!:Task;
  @Output() selectedTask = new EventEmitter();

  onCompleteTask(){
    this.selectedTask.emit(this.task.id);
  }
}
