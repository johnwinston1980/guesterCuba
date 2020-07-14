import { Component, OnInit, ViewChild } from '@angular/core';

import { BroadcastService } from '../app/z_shared/broadcast.service'

import { MatDialog, MatDialogRef, MatDrawer } from '@angular/material'

import { MessageDialogComponent } from '../app/z_utils/components/message-dialog/message-dialog.component'

import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { Router } from '@angular/router'

import {AccessGuard } from '../app/z_shared/access.guard'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'guesterCuba';
  email: string

  @ViewChild("drawer")
  public drawer: MatDrawer;

  constructor(
    private broadcast: BroadcastService,
    public dialog: MatDialog,
    public afAuth: AngularFireAuth,
    public accessGuard: AccessGuard,
    private router: Router,
  ) {

    this.afAuth.authState.subscribe(user => {
      if (user) {        
        this.email = user.email
      }
      else {        
        this.email = ''
      }
    })

  }

  ngOnInit() {
    this.broadcast.currentError.subscribe(error => {
      console.log('error ' + error)
      if (error != null && error != "") {
        let dialogRef = this.dialog.open(MessageDialogComponent, {
          width: '350px',
          data: { error }
        });
        dialogRef.afterClosed().subscribe(result => {
          //this.router.navigate([''])
          console.log('dialog resumed')
        })
      }
    })
  }

  eventCallBack(event: string) {
    if (event == 'close') {
      this.drawer.close()
    }
    else if (event == 'toggle') {
      this.drawer.toggle()
    }
  }

  login(){
    this.router.navigate(['login'])
    this.drawer.close()    
  }

  register(){
    this.router.navigate(['register'])
    this.drawer.close()
  }

  roleProvider(){

  }

  logout() {
    this.afAuth.auth.signOut().then((success) => {
      this.drawer.close()
      //this.broadcast.broadcastRoles(null)
      localStorage.setItem('roles', null)
      localStorage.setItem('user', null)
      this.router.navigate(['login']);
    }
    ).catch((err) => {
      console.log(err);
    });
  }

}
