import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';

import {AccessGuard } from '../../../z_shared/access.guard'



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output()
  eventEmitter = new EventEmitter<string>();

  email: string
  home: boolean
  isChecked: boolean

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    public accessGuard: AccessGuard,
    ) {

    this.afAuth.authState.subscribe(user => {
      if (user) {        
        this.email = user.email
      }
      else {        
        this.email = ''
      }
    })


    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
      }
      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        // console.log(this.router.url)
        if (this.router.url != '/main') {
          this.home = false          
        }
        else {
          this.home = true
        }
      }
      if (event instanceof NavigationError) {
        // Hide loading indicator
        // Present error to user
        console.log(event.error);
      }
    });

  }

  ngOnInit() {
  }

  toggle() {
    this.eventEmitter.emit('toggle');
  }

  redirect(url: string) {
    this.router.navigate([url])
  }

}
