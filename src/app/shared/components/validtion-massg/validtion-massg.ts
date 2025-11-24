import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validtion-massg',
  imports: [],
  templateUrl: './validtion-massg.html',
  styleUrl: './validtion-massg.css',
})
export class ValidtionMassg {
  @Input() controls!:AbstractControl | null;

}
