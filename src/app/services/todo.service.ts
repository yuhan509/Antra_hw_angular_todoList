import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  constructor(private http:HttpClient) { }
  
  url:string = "https://jsonplaceholder.typicode.com/todos"; 

  getAll():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.url);
  } 

  getById(id:number):Observable<Todo>{
    return this.http.get<Todo>(this.url + "/" + id);
  } 

  deleteById(id:number) {
    return this.http.delete(this.url + "/" + id);
  }
}
