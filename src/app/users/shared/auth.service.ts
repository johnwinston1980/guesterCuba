import { Injectable } from '@angular/core';

import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'

import { AccessGuard } from '../../z_shared/access.guard'

import { auth } from 'firebase'

import { switchMap, map } from 'rxjs/operators'
import { Observable } from 'rxjs';

import { Router } from '@angular/router'

import { BroadcastService } from '../../z_shared/broadcast.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private accessGuard: AccessGuard,
    private router: Router,
    private broadcast: BroadcastService
  ) { }

  async  loginWithGoogle() {
    await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(success => {
      this.existUser(success.user.email).then(exist => {
        localStorage.setItem('user', JSON.stringify(success.user))
        localStorage.setItem('uid', success.user.uid);
        localStorage.setItem('email', success.user.email);
        //first time, add user with default role to DB
        if (!exist) {
          this.addUser(success.user.email, true)
        }
        //known user, load roles and redirect
        else {
          this.loadRoles(success.user.email)
        }
      })
    }).catch(error => {
      // this.br
    })
  }

  existUser(email: string): Promise<Boolean> {
    return new Promise((resolve, reject) => {
      var docRef = this.afs.firestore.doc(`users/${email}`).get().then((doc) => {
        resolve(doc.exists)
      }).catch(error => {
        reject(false)
      })
    })
  }

  addUser(email: string, isLoggedIn: boolean) {
    var user = {
      roles: ['sender'],
      email: email,
      status: 'active'
    }
    this.afs.collection(`users`).doc(user.email).set(user).then((result) => {
      if (isLoggedIn) {
        //user added with default role, go to sender interface
        this.router.navigate(['main-sender'])
      }
      else {
        //user added with default role, can now log in
        this.router.navigate(['login'])
      }
    })
  }


  async register(email: string, password: string) {

    const routerAux = this.router
    const broadcastAux = this.broadcast

    let userData: any
    let flag = false

    await this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (result) {

      userData = result.user
      flag = true

    }).catch(function (error) {      
      broadcastAux.broadcastError(error)      
    }).finally(() => {
      if (flag) {
        this.existUser(userData.email).then(exist => {
          if (!exist) {
            this.addUser(userData.email, false)
          }
          else {
            this.router.navigate(['login'])
          }
        })
      }
    })
  }

  async login(email: string, password: string) {

    const broadcastAux = this.broadcast
    let flag = false
    
    await this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (firebaseUser) {

      localStorage.setItem('user', JSON.stringify(firebaseUser.user));
      flag = true

      localStorage.setItem('uid', firebaseUser.user.email);
      localStorage.setItem('email', firebaseUser.user.email);


    }).catch(function (error) {    
      broadcastAux.broadcastError(error.message)
      
    }).finally(() => {
      if (flag) {
        this.loadRoles(email)
      }
    })
  }



  loadRoles(email: string) {
    this.getRoles(email).subscribe(data => {
      if (data != null) {
        localStorage.setItem('roles', JSON.stringify(data.roles));
        this.accessGuard.redirect()
      }
      else {
        console.log('roles = null')
      }
    })
  }

  getRoles(email: string) {
    const userDoc = this.afs.doc(`users/${email}`)
    return userDoc.get().pipe(
      map(snapshot => {
        const user = snapshot.data();
        return user;
      })
    );
  }

}
