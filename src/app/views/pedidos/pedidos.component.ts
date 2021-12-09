import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toUp(){
    document.getElementById("logo")?.scrollIntoView({behavior: 'smooth'});
  }

}
