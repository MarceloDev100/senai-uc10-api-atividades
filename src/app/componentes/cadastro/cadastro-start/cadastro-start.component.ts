import { StatusService } from 'src/app/services/status.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cadastro-start',
  templateUrl: './cadastro-start.component.html',
  styleUrls: ['./cadastro-start.component.css']
})
export class CadastroStartComponent implements OnInit {

  active: boolean = false;

  constructor(private statusService: StatusService) {
  }

  ngOnInit(): void {
    this.statusService.currentStatus.subscribe(status => {
     this.active = status.active;
    })
  }

}

