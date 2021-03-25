import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist';

  newItem: string = '';

  toDoList = ["Levar o lixo", "Lavar a louça", "Reunião do trabalho"];

  addNewItem(){
    this.toDoList.push(this.newItem);
    this.newItem = '';

    this.saveList();
  }

  removeFromList(index: number){
    this.toDoList.splice(index, 1);
    
    this.saveList();
  }

  saveList(){
    console.log(this.toDoList);
  }
}
