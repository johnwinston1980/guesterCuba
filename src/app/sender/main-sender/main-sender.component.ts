import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  link: string;
}

@Component({
  selector: 'app-main-sender',
  templateUrl: './main-sender.component.html',
  styleUrls: ['./main-sender.component.css']
})
export class MainSenderComponent implements OnInit {

  tiles: Tile[] = [
    { text: 'Iniciar transferencia', cols: 1, rows: 1, color: '#533cf3', link: 'list-dispatchers' },
    { text: 'Agregar contacto', cols: 2, rows: 1, color: '#00bb56', link: 'add-contact' },
    { text: 'Lista de contactos', cols: 1, rows: 1, color: '#cd1af3', link: 'list-contacts' },
    { text: 'four', cols: 1, rows: 1, color: '#21c2e0', link: '' },
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  goto(url) {
    this.router.navigate([url])
  }

}