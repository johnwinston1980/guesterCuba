import { Injectable } from '@angular/core';

import { Contact } from '../../z_utils/model/contact'

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'

import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';

import { BroadcastService } from '../../z_shared/broadcast.service'


@Injectable({
  providedIn: 'root'
})
export class SenderService {

  contactsCollection: AngularFirestoreCollection<any>;
  contactDoc: AngularFirestoreDocument<any>;
  contacts: Observable<any[]>

  email: string

  contact: Contact = {}

  constructor(
    private afs: AngularFirestore,
    private broadcast: BroadcastService
  ) {
  }

  init() {
    this.email = localStorage.getItem('email')

    this.contactsCollection = this.afs.collection(`users/${this.email}/contacts`);

    this.contacts = this.contactsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Contact;
        data.id = a.payload.doc.id;
        return data;
      })
    })
  }

  getContacts() {
    return this.contacts
  }  

  addContact(contact: Contact): any {
    const email = localStorage.getItem('email')    
    const collection = this.afs.collection(`users/${email}/contacts`).add(contact).then(success => {     
      console.log(success)
    }).catch(error => {
      console.log(error)
    })    
  }
}