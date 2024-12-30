import { Injectable } from '@angular/core';
import {Todo} from "../model/todo.type";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todoItems: Array<Todo> = [
    {
      title: "Groceries",
      id: 0,
      userId: 69,
      completed: true
    },
    {
      title: "Walk the dog",
      id: 1,
      userId: 12,
      completed: false
    },
    {
      title: "Finish the report",
      id: 2,
      userId: 34,
      completed: false
    },
    {
      title: "Read a book",
      id: 3,
      userId: 45,
      completed: true
    },
    {
      title: "Workout at the gym",
      id: 4,
      userId: 23,
      completed: false
    },
    {
      title: "Buy a birthday gift",
      id: 5,
      userId: 56,
      completed: true
    },
    {
      title: "Clean the house",
      id: 6,
      userId: 78,
      completed: false
    },
    {
      title: "Plan the weekend trip",
      id: 7,
      userId: 90,
      completed: false
    },
    {
      title: "Attend the meeting",
      id: 8,
      userId: 11,
      completed: true
    },
    {
      title: "Cook dinner",
      id: 9,
      userId: 22,
      completed: false
    },
    {
      title: "Grocery shopping",
      id: 10,
      userId: 33,
      completed: true
    },
    {
      title: "Finish the book",
      id: 11,
      userId: 44,
      completed: false
    },
    {
      title: "Visit the dentist",
      id: 12,
      userId: 55,
      completed: true
    },
    {
      title: "Organize the closet",
      id: 13,
      userId: 66,
      completed: false
    },
    {
      title: "Watch a movie",
      id: 14,
      userId: 77,
      completed: true
    }
  ];

  constructor() { }
}
