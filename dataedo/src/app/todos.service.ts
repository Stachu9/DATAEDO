import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private httpClient: HttpClient) {}

  private readonly todoURL = 'https://gorest.co.in/public/v2/todos';

  getTodos(): Observable<Array<any>> {
    return this.httpClient.get<Array<Object>>(this.todoURL);
  }

  getSecondPendingTodo() {
    return this.getTodos().pipe(
      map(array => {
        array.filter((object) => {object["status"] === "pending"})
      })
    )
  }

}
