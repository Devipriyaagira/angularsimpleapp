import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  nameInput="";
  changeName($event: any) {
    console.log("Emitted value: ", $event);
    this.nameInput = $event;
  }
  updatetochild(inputValue: string) {
    console.log(inputValue)
    this.nameInput = inputValue;
  }
  delete($event:any){
    console.log("Deleted value :",$event);
    this.nameInput=$event;
  }
  
}
