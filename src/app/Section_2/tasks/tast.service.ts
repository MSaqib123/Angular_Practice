import { Injectable } from "@angular/core";
import { Tasks } from "../../dummy-task";
import { NewTask } from "./Task.model";
import { NewTaskComponent } from "./new-task/new-task.component";


// we use Injectable decorator
@Injectable(
    {providedIn:'root'}
)

export class TasksService{
    tasks = Tasks;
    constructor(){
        // get local store
        const tasks = localStorage.getItem('tasks');
        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
    }


    // select
    getUserTask(userId:string){
        return this.tasks.filter(task=>task.userId===userId);
    }

    // insert
    insertTaskForUser(task:NewTask , userId:string){
        this.tasks.unshift({
            id:new Date().getTime().toString(),
            title:task.title,
            summary:task.summary,
            userId:userId,
            dueDate:task.date
        })
        this.saveToLocalStorage()
    }

    // delete
    deleteCompleteTaskForUser(taskId:string){
        this.tasks = this.tasks.filter(t=>t.id !== taskId)
        this.saveToLocalStorage()
    }

    // localstore
    private saveToLocalStorage(){
        localStorage.setItem("tasks",JSON.stringify(this.tasks))
    }
}