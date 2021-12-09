import { Component, OnInit } from '@angular/core';
import { Newsletter } from 'src/app/models/newsletter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  brands = [
    { image: "assets/img/ps5-icon.png", alt: "ícone do Playstation" },
    { image: "assets/img/sony-icon.png", alt: "ícone da Sony" },
    { image: "assets/img/dell-icon.png", alt: "ícone da Dell" },
    { image: "assets/img/samsung-icon.png", alt: "ícone da Samsung" },
  ]

  categories = [
    { image: "assets/img/pc-notebook-icon.png", alt: "categoria pc & notebook" , name: "pc & notebooks"},
    { image: "assets/img/smartphone-icon.png", alt: "categoria smartphone" , name: "smartphones"},
    { image: "assets/img/joystick-icon.png", alt: "categoria console" , name: "consoles"},
    { image: "assets/img/audio-icon.png", alt: "categoria audio" , name: "áudio"},
    { image: "assets/img/tablet-icon.png", alt: "categoria tablet" , name: "tablets"},
  ]

  cards = [
    { ad: "Oferta", image: "assets/img/playstation-image.png", title: "Playstation-5", priceBefore: "De R$ 6.300,00", priceNow: "Por R$ 5.700,00" },
    { ad: "Oferta", image: "assets/img/joystick-image.png", title: "Joystick Playstation", priceBefore: "De R$ 379,99", priceNow: "Por R$ 359,99" },
    { ad: "Oferta", image: "assets/img/teclado-image.png", title: "Teclado gamer", priceBefore: "De R$ 249,99", priceNow: "Por R$ 235,99" },
    { ad: "Oferta", image: "assets/img/volante-image.png", title: "Volante com pedal", priceBefore: "De R$ 3.200,00", priceNow: "Por R$ 2.999,99" }
  ]

  stamps = [
    { image: "assets/img/selo1-lg.png" , alt: "selo de confiança e qualidade" },
    { image: "assets/img/selo2-lg.png" , alt: "selo compra 100% segura" },
    { image: "assets/img/selo3-lg.png" , alt: "selo garantia de 7 dias" },
    { image: "assets/img/selo4-lg.png" , alt: "selo reembolso garantido" }
  ]


  constructor() { }
  
  ngOnInit(): void {
  }
  
  newsletter = new Newsletter("");

  
  toUp(){
    document.getElementById("logo")?.scrollIntoView({behavior: 'smooth'});
  }


  onSubmit(){
     console.log(this.newsletter);
  }

}
