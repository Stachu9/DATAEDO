import {Component} from '@angular/core';
import {TodosService} from "./todos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(todosService: TodosService) {
    todosService.getSecondPendingTodo()
      .subscribe(
        (object) => console.log(object)
      );
  }
}
