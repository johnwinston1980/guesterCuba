import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

import { FormGroup, FormControl, Validators } from '@angular/forms'

import { Contact } from '../../z_utils/model/contact'
import { Dispatcher } from '../../z_utils/model/dispatcher'
import { Transfer } from '../../z_utils/model/transfer'

import { BroadcastService } from '../../z_shared/broadcast.service'
import { TransferService } from '../../transfers/shared/transfer.service'
import { DispatcherService } from '../../dispatchers/shared/dispatcher.service'

import * as _ from 'lodash'


@Component({
  selector: 'app-add-transfer',
  templateUrl: './add-transfer.component.html',
  styleUrls: ['./add-transfer.component.css']
})
export class AddTransferComponent implements OnInit {

  contact: Contact = {}
  dispatcher: Dispatcher = {}
  transfer: Transfer = {}

  send: number = 0
  receive: number = 0

  /*transferForm = new FormGroup({
    send: new FormControl(''),
    receive: new FormControl(''),        
    uid: new FormControl('')
  })*/

  constructor(
    private broadcast: BroadcastService,
    private transfersService: TransferService,
    private router: Router,
    private dispatcherService: DispatcherService
  ) {
  }

  ngOnInit() {
    this.broadcast.currentDispatcher.subscribe(dispatcher => {
      this.dispatcher = dispatcher
    })
    this.broadcast.currentContact.subscribe(contact => {
      this.contact = contact
    })
  }


  onSubmit() {

    if (_.isEmpty(this.contact) || _.isEmpty(this.dispatcher)) {
      console.log('empty contact or empty dispatcher')
    }
    else {
      if (this.send > 0) {
        this.transfer.contact = this.contact
        this.transfer.provId = this.dispatcher.prov.id
        this.transfer.townId = this.dispatcher.town.id
        this.transfer.amount = this.send
        this.transfer.dispatcherEmail = this.dispatcher.email
        this.transfer.status = 'started'

        console.log(this.transfer)
        this.transfersService.addTransfer(this.transfer)
      }
      else {
        console.log('cero value transfer')
      }
    }
  }

  //console.log(this.contact)
  //console.log(this.dispatcher)

  /*if(this.contact == null){
    console.log('contact null')      
  } 
  else{
    console.log(this.contact)      
  }*/

  //this.transfersService.addTransfer(this.transferForm.value)
  //this.router.navigate(['list-transfers'])
}
