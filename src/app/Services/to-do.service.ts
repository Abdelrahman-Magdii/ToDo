import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDo } from '../Models/to-do';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private apiUrl = "http://localhost:3000/todo";
  constructor(private http: HttpClient) { }

  getToDos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.apiUrl);
  }

  getToDoById(id: string): Observable<ToDo> {
    return this.http.get<ToDo>(`${this.apiUrl}/${id}`);
  }

  createToDo(todo :ToDo): Observable<ToDo> {
    return this.http.post<ToDo>(this.apiUrl,todo);
  }

  updateToDo(todo :ToDo): Observable<ToDo> {
    return this.http.put<ToDo>(`${this.apiUrl}/${todo.id}`,todo);
  }

  deleteToDo(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
