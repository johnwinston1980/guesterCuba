import { Component, OnInit } from '@angular/core';

import {Sort} from '@angular/material/sort';

import { DispatcherService } from '../shared/dispatcher.service'
import { TransferService } from '../../transfers/shared/transfer.service'

import { BroadcastService } from '../../z_shared/broadcast.service'
import { Router } from '@angular/router'

import { Dispatcher } from '../../z_utils/model/dispatcher'

export interface Province {
  id: string
  name: string
}

@Component({
  selector: 'app-list-dispatchers',
  templateUrl: './list-dispatchers.component.html',
  styleUrls: ['./list-dispatchers.component.css']
})
export class ListDispatchersComponent implements OnInit {

  dispatchers: Dispatcher[]
  sortedData: Dispatcher[]

  provinces: Province[]
  towns: Province[]

  provId: string
  municipioId: string

  constructor(
    private dispatcherService: DispatcherService,
    private broadcast: BroadcastService,
    private transfersService: TransferService,
    private router: Router
  ) { }


  ngOnInit() {
    this.transfersService.getProvinces().subscribe(provinces => {
      this.provinces = provinces
    })
  }

  onChangeofProvince($event) {
    this.transfersService.loadTowns(this.provId)
    this.transfersService.getTowns().subscribe(towns => {
      this.towns = towns
    })
  }

  onChangeofMunicipio($event) {
    this.dispatcherService.loadDispatchers(this.provId, this.municipioId).subscribe(dispatchers => {
      this.dispatchers = dispatchers
      this.sortedData = this.dispatchers.slice()
    })
  }

  redirect(dispatcher: Dispatcher){    
    this.broadcast.broadcastDispatcher(dispatcher)
    this.router.navigate(['add-transfer'])
  } 


  sortData(sort: Sort) {
    const data = this.dispatchers.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'exchangeRate': return compare(a.exchangeRate, b.exchangeRate, isAsc);
        case 'email': return compare(a.email, b.email, isAsc);        
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}