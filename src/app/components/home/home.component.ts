import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  todo = [
    'kitab oxumaq',
    'idman etmek',
    'gezinti',
    
  ];

  done = [
    'uni dersi-python',
    'sofiyanin yemeyi',
    'java dersi-44',
  
  ];
  data = [
    'java dersi-44',
   
    
    
  ];
  
  ngOnInit(): void {
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  
  addTodo(getData: any){
  this.todo.push(getData.value);
  getData.value="";
  }
  setItems()
  {
    localStorage.setItem('todo',JSON.stringify(this.todo));
  }
 
}
