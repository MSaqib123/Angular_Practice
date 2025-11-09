import { Injectable } from "@angular/core";
import { Tasks } from "../../dummy-task";
import { NewTask } from "./Task.model";
import { NewTaskComponent } from "./new-task/new-task.component";


// we use Injectable decorator
@Injectable(
    {providedIn:'root'}
)

export class TasksService{
    constructor(){
        // get local store
    }

    tasks = Tasks;

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
    }

    // delete
    deleteTaskForUser(taskId:string){
        this.tasks = this.tasks.filter(t=>t.id !== taskId)
    }

    // localstore
}