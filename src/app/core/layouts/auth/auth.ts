import { Component } from '@angular/core';
import { Navbar } from "../../../shared/components/navbar/navbar";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  imports: [Navbar,RouterOutlet,CommonModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
    loginWith(provider: string) {
    switch (provider) {
      case 'google':
        alert('Google login clicked!');
        break;
      case 'twitter':
        alert('Twitter login clicked!');
        break;
      case 'facebook':
        alert('Facebook login clicked!');
        break;
      case 'apple':
        alert('Apple login clicked!');
        break;
    }
  }



}
