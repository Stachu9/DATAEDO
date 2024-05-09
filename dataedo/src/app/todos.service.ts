import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

interface Todo {
  id: number,
  user_id: number,
  title: string,
  due_on: string,
  status: "pending" | "complete"
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private httpClient: HttpClient) {}

  private readonly todoURL: string = 'https://gorest.co.in/public/v2/todos';

  getTodos(): Observable<Array<Todo>> {
    return this.httpClient.get<Array<Todo>>(this.todoURL);
  }

  getPendingTodos(): Observable<Array<Todo>> {
    return this.getTodos().pipe(
      map(
        (todos: Array<Todo>) =>
          todos.filter((todo: Todo): boolean => todo.status === "pending")
      )
    );
  }

  getSecondPendingTodo(): Observable<Todo | null> {
    return this.getPendingTodos().pipe(
      map((todos: Array<Todo>) => todos.length >= 2 ? todos[1] : null)
    );
  }

}
