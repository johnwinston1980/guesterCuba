import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

import { FormGroup, FormControl, Validators } from '@angular/forms'

import { Contact } from '../../z_utils/model/contact'

import { BroadcastService } from '../../z_shared/broadcast.service'
import { SenderService } from '../../sender/shared/sender.service'



@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact: Contact = {}

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl(''),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)    
  })

  constructor(
    private broadcast: BroadcastService,    
    private router: Router,    
    private senderService: SenderService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {      
    console.log(this.contactForm.value)
    this.senderService.addContact(this.contactForm.value)
    this.router.navigate(['list-contacts'])
  }
}