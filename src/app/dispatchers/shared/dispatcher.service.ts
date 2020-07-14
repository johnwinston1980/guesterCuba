import { Injectable } from '@angular/core';

import { Dispatcher } from '../../z_utils/model/dispatcher'

import { Observable } from 'rxjs'

import { AuthService } from '../../users/shared/auth.service'

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore'

import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class DispatcherService {

  //provincesCollection: AngularFirestoreCollection<any>
  //townsCollection: AngularFirestoreCollection<any>

  dispatchers: Observable<any[]>
  dispatchersCollection: AngularFirestoreCollection<any>

  
  constructor(
    private afs: AngularFirestore, 
    private authService: AuthService
    ) { 

    //this.provincesCollection = this.afs.collection(`province`)
    
    /*this.provinces = this.provincesCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        //data.id = a.payload.doc.id;
        return data;
      })
    })    */

  }


  loadDispatchers(provId: string, municipioId: string){

    this.dispatchersCollection = this.afs.collection(`provincias/${provId}/municipios/${municipioId}/dispatchers`, ref => ref.where('status', '==', 'pending').orderBy('exchangeRate', 'desc'))

    this.dispatchers = this.dispatchersCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        return a.payload.doc.data()
      })
    })

    return this.dispatchers
    
  }

  /*getDispatchers(){
    return this.dispatchers
  }*/

  /*addDispatcher(province: string, town: string, dispatcher: Dispatcher){
    this.afs.collection(`dispatchers/${province}/${town}`).add(dispatcher)
  }*/

  addDispatcher(dispatcher: Dispatcher){
    
    this.afs.collection(`users/`).doc(dispatcher.email).set(dispatcher).then(success => {
      
      this.afs.collection(`users/${dispatcher.provider}/dispatchers`).doc(dispatcher.email).set(dispatcher).then(success => {

        this.afs.collection(`provincias/`).doc(dispatcher.prov.id).set(dispatcher.prov).then(success => {

          this.afs.collection(`provincias/${dispatcher.prov.id}/municipios/`).doc(dispatcher.town.id).set(dispatcher.town).then(success => {

            this.afs.collection(`provincias/${dispatcher.prov.id}/municipios/${dispatcher.town.id}/dispatchers`).doc(dispatcher.email).set(dispatcher).then(success => {

              //this.authService.registerInvitation(dispatcher.email)
    
            })

          })          

        })       

      })      

    })
  } 

}