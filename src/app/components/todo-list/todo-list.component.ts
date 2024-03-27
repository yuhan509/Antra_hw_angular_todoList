import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  //searchMode: boolean = false;
  constructor(private todoService:TodoService) {}

  todos:Todo[] = [];
  pageSize = 20;
  searchedId = 1;
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.todoService.getAll().subscribe({
      next: (data) => {
       if (data.length > this.pageSize)
         this.todos = data.slice(0, this.pageSize);
       else {
         this.todos = data;
       } 
      },
      error:(e) => console.log(e),
      complete:() => console.log("completed")
   })
  }

  getDetailUrl(todo:Todo) : string {
    return "" + todo.id;
  } 

  search(id:number) {
    this.todoService.getById(id).subscribe({
      next: (data) => {
        this.todos = [data];
        console.log(data);
      }, 
      error: (e) => console.log(e),
      complete: () => console.log("getById complete")
    });
  }

  ngOnChanges() {
    console.log("changed");
  }


}
