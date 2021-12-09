import { Component, OnInit } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  escondido: boolean  = true;
  active : boolean = false;
  username : string = '';

  constructor(private statusService : StatusService) {
  }

  ngOnInit(): void {

    //Using JQuery into responsive menu => active
     $(document).ready(function(){
      $('#menu-bar').click(function(){
          if(!$('#menu').hasClass('active-menu')){
             $('#menu').addClass('active-menu')
             $('#menu').animate({
                 'right': '0px'
             },1200)
          }
       })

       $('#close-menu').click(function(){
          if($('#menu').hasClass('active-menu')){
            $('#menu').animate({
               'right': '-500px'
            }, 1200)
       }

         setTimeout(() => {
           $('#menu').removeClass('active-menu')
         },1200)
       })

       $('.close').click(function(){
        if($('#menu').hasClass('active-menu')){
          $('#menu').animate({
             'right': '-500px'
          }, 1200)
        }

       setTimeout(() => {
         $('#menu').removeClass('active-menu')
       },1200)
      })

    })

    this.statusService.currentStatus.subscribe(status => {
      this.active = status.active;
      this.username = status.username.split(" ")[0];
    });

  }

  status(){
    this.escondido = !this.escondido;
  }

  loginClick(){
    this.escondido = !this.escondido;
  }


  registerClick(){
    this.escondido = !this.escondido;
  }

  logout(){
    document.location.reload();
  }

}
