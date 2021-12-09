import { LoginStatus } from 'global';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GameManiaAngular';

  status = new LoginStatus("", "", false)

  constructor(){

  }

  onActive(){
    window.scroll(0,0);
  }
}
