import { Component, OnInit } from '@angular/core';

import {AccessGuard } from '../../../z_shared/access.guard'
import { Router } from '@angular/router'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    public accessGuard: AccessGuard,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  redirect(url: string){
    this.router.navigate([url])
  }

}
