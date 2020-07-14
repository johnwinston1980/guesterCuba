import { Component, OnInit } from '@angular/core';

import { DispatcherService } from '../../dispatchers/shared/dispatcher.service'
import { BroadcastService } from '../../z_shared/broadcast.service'

import * as provinces from '../../z_utils/assets/provinces.json'

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-dispatcher',
  templateUrl: './add-dispatcher.component.html',
  styleUrls: ['./add-dispatcher.component.css']
})

export class AddDispatcherComponent implements OnInit {

  provinces: any
  towns: any
  dispatcherForm: FormGroup
  send: number
  receive: number
  exchangeRate: number

  constructor(
    private service: DispatcherService,
    private broadcast: BroadcastService,
    private formBuilder: FormBuilder,
  ) {

    this.send = 100

  }

  ngOnInit() {
    this.provinces = provinces.provinces

    this.dispatcherForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      prov: new FormControl('', [Validators.required]),
      town: new FormControl('', [Validators.required]),
      exchangeRate: new FormControl('', []),
      provider: localStorage.getItem('email'),
      status: 'pending',
      roles: ''
    })

  }

  onChangeofProvince(event) {
    this.towns = provinces.provinces[this.dispatcherForm.controls['prov'].value].municipios
  }


  onSubmit() {

    if (this.exchangeRate > 0) {

      this.dispatcherForm.controls['exchangeRate'].setValue(this.exchangeRate)

      let provincia = provinces.provinces[this.dispatcherForm.controls['prov'].value]
      let prov = JSON.stringify(new Province(provincia.id, provincia.name))

      let municipio = provincia.municipios[this.dispatcherForm.controls['town'].value]
      let mun = JSON.stringify(new Province(municipio.id, municipio.name))

      var roles
      roles = ['dispatcher']

      this.dispatcherForm.controls['roles'].setValue(roles)
      this.dispatcherForm.controls['prov'].setValue(JSON.parse(prov))
      this.dispatcherForm.controls['town'].setValue(JSON.parse(mun))


      //console.log(this.dispatcherForm.value)
      this.service.addDispatcher(this.dispatcherForm.value)

    }

  }
}

class Province {
  id: string
  name: string
  constructor(id, name) {
    this.id = id
    this.name = name
  }
}