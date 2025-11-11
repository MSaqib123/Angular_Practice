import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from './Task.model';
import { DUMMY_USERS } from '../../dummy-users';
import { Tasks } from '../../dummy-task';
import { NewTaskComponent } from "./new-task/new-task.component";
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) id?:string;
  @Input({required:true}) username?:string;
  tasks = Tasks;
  isAddingTask = false;

  showAddTask(){
    this.isAddingTask = true;
  }

  hideTaskUI() {
    this.isAddingTask = false;
  }

  get selectedUserTasks(){
    return this.tasks.filter(x=>x.userId === this.id);
  }
  
  completedTask(selectedTask:string){
    this.tasks = this.tasks.filter(x=>x.id !== selectedTask);
  }

  addTask(Task:any){
    const mapData = {
      id: new Date().getTime().toString(),
      userId : this.id!,
      title:Task.title,
      summary :Task.summary,
      dueDate:Task.date
    }
    console.log(mapData);
    this.tasks.unshift(mapData)
  }

}
