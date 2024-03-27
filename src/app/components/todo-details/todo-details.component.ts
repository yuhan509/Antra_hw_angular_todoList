import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css'
})
export class TodoDetailsComponent implements OnInit{
  currentTodo: Todo = new Todo;
  id = -1;
  constructor(private todoService:TodoService, private route:ActivatedRoute) {}

 // currentTodo:Todo;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getTodoById(this.id)
  }

  getTodoById(id: number) : void {
    this.todoService.getById(id).subscribe({
      next: (data) => {
        this.currentTodo = data;
        console.log(data);
      }, 
      error: (e) => console.log(e),
      complete: () => console.log("getById complete")
    });
  }
  
  delete(todo:Todo) : void {
    this.todoService.deleteById(todo.id || 0).subscribe({
      next: (data) => {
        console.log(data);
      },
      error:(e) => console.log(e),
      complete:() => console.log("delete completed") 
    });
  }

}
