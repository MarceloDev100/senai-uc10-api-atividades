import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {


  items = [
      "Pcs & notebooks","Smartphones","Consoles","Áudio","Tablets","Drones","Monitores", "Mesa Digital",
      "Teclado & mouse","Gabinetes","Memórias","Discos Rígidos","Processadores","Roteadores","Cadeira Gamer",
      "Jogos","Webcams","Repetidores","Smartwatches","Cabos"
  ];

  cards = [
    { image: "assets/img/prod/drone.jpg", alt: "drone", title: "Drone DJI Fly Camera 4K" , priceBefore: "De R$ 5.599,00", priceNow: "Por R$ 4.199,00" },
    { image: "assets/img/prod/gabinete-gamer.png", alt: "gabinete", title: "Gabinete Gamer" , priceBefore: "De R$ 420,00", priceNow: "Por R$ 375,00" },
    { image: "assets/img/prod/processador.jpg", alt: "processador", title: "Processador Intel I5" , priceBefore: "De R$ 1.800,00", priceNow: "Por R$ 1.385,99" },
    { image: "assets/img/prod/repetidor.jpg", alt: "repetidor", title: "Repetidor TPLink" , priceBefore: "De R$ 160,00", priceNow: "Por R$ 144,99" },
    { image: "assets/img/prod/roteador.jpg", alt: "roteador", title: "Roteador sem fio TPLink" , priceBefore: "De R$ 200,00", priceNow: "Por R$ 192,99" },
    { image: "assets/img/prod/smartphone.jpg", alt: "smartphone", title: "Smartphone Samsung S20" , priceBefore: "De R$ 4.999,00", priceNow: "Por R$ 2.199,00" },
    { image: "assets/img/prod/ps5.jpg", alt: "playstation-5", title: "Playstation 5" , priceBefore: "De R$ 6.300,00", priceNow: "Por R$ 5.700,00" },
    { image: "assets/img/prod/monitor.jpg", alt: "monitor", title: "Monitor DELL 21.5" , priceBefore: "De R$ 1.500,00", priceNow: "Por R$ 998,00" },
    { image: "assets/img/prod/cadeira.jpg", alt: "cadeira", title: "Cadeira gamer" , priceBefore: "De R$ 1.200,00", priceNow: "Por R$ 852,00" },
    { image: "assets/img/prod/webcam.jpg", alt: "webcam", title: "Webcam Vitade" , priceBefore: "De R$ 449,99", priceNow: "Por R$ 319,99" },
    { image: "assets/img/prod/tablet.jpg", alt: "tablet", title: "Tablet Samsung Tab A 8.0 Preto" , priceBefore: "De R$ 999,99 ", priceNow: "Por R$ 899,99" },
    { image: "assets/img/prod/fone-ouvido.jfif", alt: "fone de ouvido", title: "Fone de ouvido com fio JBL Tune 500" , priceBefore: "De R$ 199,99", priceNow: "Por R$ 154,99" },
    { image: "assets/img/prod/memoria-gamer.jpg", alt: "memoria gamer", title: "Memória Gamer Husky 4GB" , priceBefore: "De R$ 199,99", priceNow: "Por R$ 149,99" },
    { image: "assets/img/prod/smartphone-iphone12.jpg", alt: "iphone 12", title: "Iphone 12" , priceBefore: "De R$ 5.399,99", priceNow: "Por R$ 4.999,99" },
    { image: "assets/img/prod/notebook.jpg", alt: "notebook", title: "Notebook Samsung Core i5-1135G7 8GB 256GB SSD Tela Full HD 15.6”" , priceBefore: "De R$ 4.299,99", priceNow: "Por R$ 3.779,99" },
    { image: "assets/img/prod/processador-i7.jpg", alt: "processador i7", title: "Processador Intel I7 4.00ghz Lga1150 4ª Geração I7-4790 Oem" , priceBefore: "De R$ 2.499,99", priceNow: "Por R$ 1.499,99" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toUp(){
    document.getElementById("logo")?.scrollIntoView({ behavior: 'smooth' });
  }

  onActive(){
    
  }

}
