import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  myCarrinhoElement: HTMLScriptElement;

  constructor() { 
    this.myCarrinhoElement = document.createElement("script");
    this.myCarrinhoElement.src = 'assets/carrinho.js'
    document.body.appendChild(this.myCarrinhoElement)
  }

  ngOnInit(): void {
    
  }

  toUp(){
    document.getElementById("logo")?.scrollIntoView({behavior: 'smooth'});
  }

}
