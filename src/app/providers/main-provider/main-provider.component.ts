import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

@Component({
  selector: 'app-main-provider',
  templateUrl: './main-provider.component.html',
  styleUrls: ['./main-provider.component.css']
})
export class MainProviderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  redirect(url: string){
    this.router.navigate([url])
  }

}
