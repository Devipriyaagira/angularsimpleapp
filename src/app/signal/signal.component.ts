// import { Component } from '@angular/core';
// import { Component } from '@angular/core';
// import {computed,effect,signal } from '@angular/core';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  //templateUrl: './signal.component.html',
  // standalone: true,

  //imports: [SignalComponent,],
  
  template: `
  <div>{{ message() }}</div>

  <div>
    <input type="text" [ngModel]="name()" (ngModelChange)="name.set($event)" />
  </div>
  <div>
    <button (click)="name.set('World')">Hello World!</button>
    <button (click)="name.set('Angular')">Hello Angular!</button>
    <button (click)="name.set('Signals')">Hello Signals!</button>
  </div>  
  `,
})
export class SignalComponent {
  readonly name = signal('World');
  // `computed`: create a signal of computed value (readonly)
  readonly message = computed(() => {
    return `Hello ${this.name()}!`;
  });

  constructor() {
    effect(() => {
      console.log(this.message());
    });
  }
}



