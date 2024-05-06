import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDoService } from '../../Services/to-do.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDo } from '../../Models/to-do';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css'
})
export class TodoDetailsComponent implements OnInit {

  todo: ToDo | undefined;

constructor(private service : ToDoService, private route :ActivatedRoute ,
  private router: Router ){}

  ngOnInit(): void {
    this.getTodo();
  }
  getTodo(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.service.getToDoById(id).subscribe(it => this.todo = it);
  }

  updateTodo(): void {
    if(this.todo){
      this.service.updateToDo(this.todo).subscribe(() => {
        this.router.navigate(['/todo']);
      });
    }
  }


}
