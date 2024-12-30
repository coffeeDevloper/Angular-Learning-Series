import {Component, inject, OnInit, signal} from '@angular/core';
import {TodosService} from "../services/todos.service";
import {Todo} from "../model/todo.type";
import {catchError} from "rxjs";
import {TodoItemComponent} from "../components/todo-item/todo-item.component";
import {FormsModule} from "@angular/forms";
import {FilterTodosPipe} from "../pipes/filter-todos.pipe";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    TodoItemComponent,FormsModule,FilterTodosPipe
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal(``);

  ngOnInit(): void {
    this.todoService.getTodosFromApi().pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    ).subscribe((todos) =>{
      return this.todoItems.set(todos);
    });

  }

  updateTodoToggled(todoItems: Todo){
    this.todoItems.update((todos) =>{
      return todos.map(todos =>{
        if (todos.id === todoItems.id){
          return {
            ...todos,
            completed: !todos.completed
          };

        }
        return todos;
      })
    } )
  }
}
