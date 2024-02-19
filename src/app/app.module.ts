import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
//import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import{MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ListComponent } from './list/list.component';
import { SignalComponent } from './signal/signal.component';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    ProductComponent,
    ProductsComponent,
    ListComponent,
    SignalComponent, 
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatInputModule, 
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    MatAutocompleteModule

    //MatSlideToggleModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
