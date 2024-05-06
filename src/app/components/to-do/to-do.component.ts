import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDoService } from '../../Services/to-do.service';
import { ToDo } from '../../Models/to-do';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent implements OnInit {

  Title: string = "To Do List APP";
  // imageLink:string="";

  // Tasks: string[] = [];
  // newTask: string = '';
  // isAvailable: boolean = false;

  todos: ToDo[] = [];
  newTodo: ToDo = {} as ToDo;
  constructor(private service: ToDoService) { }
  ngOnInit(): void {
    this.addTask();
  }

  // addTask() {
  //   //? trim() remove whitespace  
  //   if (this.newTask.trim() != "") {
  //     this.Tasks.push(this.newTask);
  //     this.newTask = "";
  //     this.isAvailable = true;
  //   }
  //   console.log(this.Tasks)
  // }

  addTask() {

    this.service.getToDos().subscribe(it => {
      this.todos = it;
      console.log(it);
    })

  }


  // editTask(index: number, newtaskEdite: string): string | void {

  //   if (newtaskEdite.trim() !== "") {
  //     this.Tasks[index] = newtaskEdite;
  //   } else {
  //     newtaskEdite = this.Tasks[index];
  //     return this.newTask = newtaskEdite;
  //   }
  //   this.newTask = "";

  // }

  creatTodo(): void {
    const newTodo1 = { id: this.newTodo.id, title: this.newTodo.title, completed: false }
    this.newTodo=newTodo1;
    this.service.createToDo(this.newTodo).subscribe(it => {
      it.completed=this.newTodo.completed;
      this.todos.push(it);
      this.newTodo.title="";
        
    })

  }

  // removeTask(index: number) {
  //   this.Tasks.splice(index, 1);
  //   // this.isAvailable = this.Tasks.length > 0
  //   // this.newTask = "";
  // }

  deleteTodo(id: string): void {
    this.service.deleteToDo(id).subscribe(()=> {
      this.todos=this.todos.filter(it => it.id !== id);
    });
  }



  updateTodo(): void {
      this.service.updateToDo(this.newTodo).subscribe((it) => {
        this.newTodo.completed=it.completed;
      });
    
  }
}
