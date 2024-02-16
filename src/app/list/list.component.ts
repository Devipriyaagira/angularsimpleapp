import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() name='default';
  @Output() onNameChange = new EventEmitter();
  @Output() delete=new EventEmitter();
  
  


  childName: string = "n";
  

  ngOnChanges(changes: SimpleChanges) {
  
      console.log("Child name changed: ", this.name);
    

      
  }
    deleteName(){
      this.delete.emit("");
      
    }
  
    onParentNameChange() {
      this.onNameChange.emit(this.name);
    }
  }
