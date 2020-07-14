import { Component, OnInit } from '@angular/core';

import { Contact } from '../../z_utils/model/contact'

import { SenderService } from '../../sender/shared/sender.service'

import { BroadcastService } from '../../z_shared/broadcast.service'

import { Router } from '@angular/router'

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  contacts: Contact[]
  
  constructor(
    private senderService: SenderService,
    private broadcast: BroadcastService,
    private router: Router    
  ) {
    this.senderService.init()
   }

  ngOnInit(): void {
    this.senderService.getContacts().subscribe(contacts => {
      this.contacts = contacts
    })
  }

  redirect(url: string, contact: Contact){
    //broadcast user
    this.broadcast.broadcastContact(contact)
    this.router.navigate([url])
  }

}