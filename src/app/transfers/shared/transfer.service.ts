import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'
import { Observable } from 'rxjs';

import { Transfer } from '../../z_utils/model/transfer'


@Injectable({
  providedIn: 'root'
})
export class TransferService {

  transfers: Observable<any[]>
  provinces: Observable<any[]>
  towns: Observable<any[]>

  transfersCollection: AngularFirestoreCollection<Transfer>
  provincesCollection: AngularFirestoreCollection<any>
  townsCollection: AngularFirestoreCollection<any>

  constructor(private afs: AngularFirestore) {      
    this.loadProvinces()
   }

   getProvinces(){
     return this.provinces
   }

   loadProvinces(){
    this.provincesCollection = this.afs.collection(`provincias`)
    this.provinces = this.provincesCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        return a.payload.doc.data()        
      })
    })
   }

   loadTowns(provId: string){
     this.townsCollection = this.afs.collection(`provincias/${provId}/municipios`)     
     this.towns = this.townsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        return a.payload.doc.data()        
      })
    })
   }

   getTowns(){
     return this.towns
   }

   loadUserTransfers(){
    const uid = localStorage.getItem('uid')
    this.transfersCollection = this.afs.collection(`/users/${uid}/transfers`)    
    this.transfers = this.transfersCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Transfer
        return data
      })
    })
   }

   loadDispatcherTransfers(provinceId: string, townId: string){
    this.transfersCollection = this.afs.collection(`/transfers/${provinceId}/${townId}`)    
    this.transfers = this.transfersCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Transfer
        return data
      })
    })     
   }

  addTransfer(transfer: any){
    var provinciaId = transfer.provId
    var townId = transfer.townId
    this.afs.collection(`transfers/${provinciaId}/municipios/${townId}/${transfer.dispatcherEmail}`).add(transfer)
  }

  getTransfers(){    
    return this.transfers
  } 

}