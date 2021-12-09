import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  @ViewChild('scroll')
  scroll!: ElementRef;

   items  = [
     { link: "/cadastroStart", iconClass: "far fa-user", name: "Cadastro" },
     { link: "", iconClass: "fas fa-map-marker-alt", name: "Endereços" },
     { link: "", iconClass: "fas fa-money-check-alt", name: "Vales" },
     { link: "", iconClass: "far fa-credit-card", name: "Cartões" },
     { link: "", iconClass: "far fa-heart", name: "Favoritos" },
     { link: "/pedidos", iconClass: "fas fa-scroll", name: "Pedidos" },
     { link: "", iconClass: "fas fa-question", name: "Dúvidas" },
   ]

   categories  = [
      { image: "assets/img/pc-notebook-icon.png", alt: "ícone pcs e notebook", name: "Pcs & notebooks" },
      { image: "assets/img/smartphone-icon.png", alt: "ícone smarphones", name: "Smartphones" },
      { image: "assets/img/joystick-icon.png", alt: "ícone console", name: "Consoles" },
      { image: "assets/img/audio-icon.png", alt: "ícone áudio", name: "Áudio" },
      { image: "assets/img/tablet-icon.png", alt: "ícone tablet", name: "Tablets" },
      { image: "assets/img/drone.png", alt: "ícone drone", name: "Drones"},
      { image: "assets/img/monitor-icon.png", alt: "ícone monitores", name: "Monitores" },
      { image: "assets/img/mesa-digitalizadora-icon.png", alt: "ícone mesa digitalizadora", name: "Mesa digital" },
      { image: "assets/img/teclado-mouse-icon.png", alt: "ícone teclado e mouse", name: "Teclado & mouse" },
      { image: "assets/img/gabinete-icon1.png", alt: "ícone gabinetes", name: "Gabinetes" },
      { image: "assets/img/memoria-icon.png", alt: "ícone memórias", name: "Memórias" },
      { image: "assets/img/hd-icon.png", alt: "ícone discos rígidos", name: "Discos rígidos" },
      { image: "assets/img/processador-icon.png", alt: "ícone processadores", name: "Processadores" },
      { image: "assets/img/roteador-icon.png", alt: "ícone roteadores", name: "Roteadores" },
      { image: "assets/img/cadeira-gamer-icon.png", alt: "ícone cadeira gamer", name: "Cadeira gamer" },
      { image: "assets/img/game-icon.png", alt: "ícone jogos", name: "Jogos" },
      { image: "assets/img/webcam-icon.png", alt: "ícone webcams", name: "Webcams" },
      { image: "assets/img/repetidor-icon.png", alt: "ícone repetidores", name: "Repetidores" },
      { image: "assets/img/relogio-inteligente-icon.png", alt: "ícone smartwatches", name: "Smartwatches" },
      { image: "assets/img/cabos-icon.png", alt: "ícone cabos", name: "Cabos" },
   ]

   myCategoriaElement: HTMLScriptElement;

  constructor() {
    this.myCategoriaElement = document.createElement("script");
    this.myCategoriaElement.src = 'assets/categorias.js'
    document.body.appendChild(this.myCategoriaElement)
  }

  ngOnInit(): void {
  }

  toUp(){
    document.getElementById("logo")?.scrollIntoView({behavior: 'smooth'});
  }

}
