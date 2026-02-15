import { Component, inject, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { User } from './user';
import { Child } from './child';
import { Comments } from './comments';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { CarService } from './car.service';
import { LowerCasePipe } from '@angular/common';
import { DecimalPipe, DatePipe, CurrencyPipe } from '@angular/common';
import { ReversePipe } from './reverse.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [User, Child, Comments, RouterOutlet, RouterLink, ReactiveFormsModule, 
    LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe, ReversePipe],
})
export class App {
  city = 'San Francisco';
  isServerRunning = true;

  message = '';

  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];

  showSecretMessage() {
    this.message = 'Way to go 🚀';
  }

  items = new Array() ;
  addItem(item: string) {
    this.items.push(item) ;
  }

  profileForm = new FormGroup({
    name : new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]) ,
  });

  handleSubmit(){
    alert(this.profileForm.value.name + ' | ' + 
      this.profileForm.value.email) ;
  }
  carService =inject(CarService) ;
  display = this.carService.getCars().join('⭐️')

  username = 'y0unGTECh' ;

  num = 103.1234 ;
  birthday = new Date(2023, 3, 2) ;
  cost = 4560.34 ;

  word = 'You are a champion' ;

}
