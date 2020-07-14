import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BroadcastService } from '../z_shared/broadcast.service'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {

  constructor(
    private broadcast: BroadcastService,
    private router: Router
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('checked here return true')
    const roles = JSON.parse(localStorage.getItem('roles'));
    console.log(roles)

    return true;
  }



  allowedRole(rol: string){
    let flag = false
    const roles = JSON.parse(localStorage.getItem('roles'));
    if (roles != null) {     
      roles.forEach(element => {        
          if(element == rol){
            flag = true            
          }
      });
    }
    return flag    
  }


  redirect() {

    const roles = JSON.parse(localStorage.getItem('roles'));
    if (roles != null) {      

      console.log('roles are saved in localStorage')
      //this.broadcast.broadcastRoles(roles)

      var url = 'main'
      

      /*roles.forEach(element => {
        switch (element) {
          case 'admin':
            url = 'main-admin'
            break;
          case 'provider':
            url = 'main-provider'
            break;
          case 'dispatcher':
            url = 'main-dispatcher'
            break;
          case 'sender':
            url = 'main-sender'
            break;
        }
      });*/


      this.router.navigate([url])

    }

    else {
      console.log('no roles as yet in access guard')
    }

  }
}