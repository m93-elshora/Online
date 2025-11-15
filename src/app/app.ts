import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './core/services/flowbite/flowbite.services';
import {  Auth } from 'auth';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Auth],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
   constructor(private readonly flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      flowbite.initFlowbite();
    });
  }

}
