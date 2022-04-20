import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todo: string;
  todoList: { id: number, name: string }[];

  constructor(){
    this.todo = "";
    this.todoList = [];
  }
  ngOnInit(): void {
  }
  generateId(): number{
    if (this.todoList[0]){
      return this.todoList[0].id + 1
    }else return 1;
  }
  addTodo(){
    this.todoList.unshift({id: this.generateId(),name: this.todo});
    console.log(this.todoList);
  }


}
