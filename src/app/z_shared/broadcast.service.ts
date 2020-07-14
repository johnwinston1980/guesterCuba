import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject'

import { Dispatcher } from '../z_utils/model/dispatcher'
import { Contact } from '../z_utils/model/contact'

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  private errorSource = new BehaviorSubject<any>('')
  currentError = this.errorSource.asObservable()

  private dispatcherSource = new BehaviorSubject<Dispatcher>({})
  currentDispatcher = this.dispatcherSource.asObservable()

  private contactSource = new BehaviorSubject<Contact>({})
  currentContact = this.contactSource.asObservable()


  constructor() { }

  broadcastError(error: string){
    this.errorSource.next(error)
  }

  broadcastDispatcher(dispatcher: Dispatcher){
    this.dispatcherSource.next(dispatcher)
  }

  broadcastContact(contact: Contact){
    this.contactSource.next(contact)
  }

}
