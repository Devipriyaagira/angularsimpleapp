import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  RegisterForm!: FormGroup;
  myControl = new FormControl('');
  options: string[] = ['India', 'America', 'Japan'];
  filteredOptions!: Observable<string[]>;
  gender = [
    { value: 'option1', label: 'female' },
    { value: 'option2', label: 'male' },
   
  ];

  constructor(public route: Router) {
    this.RegisterForm = new FormGroup({
      name: new FormControl('', Validators.required),
      dob:new FormControl('',Validators.required),
      emailId:new FormControl('', Validators.required) ,
      password:new FormControl('',Validators.required),
      phoneno:new FormControl('',Validators.required),
      confirmpassword:new FormControl('',Validators.required),
      country:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required),
      state:new FormControl('',Validators.required),
    });
  }
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  formSubmit() {
    this.RegisterForm.markAllAsTouched()
  };
}




