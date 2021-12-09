import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';
import { StatusService } from 'src/app/services/status.service';


@Component({
  selector: 'app-cadastro-read',
  templateUrl: './cadastro-read.component.html',
  styleUrls: ['./cadastro-read.component.css']
})
export class CadastroReadComponent implements OnInit {

  cadastros : Cadastro[]= []
  displayedColumns = ["id", "cpf", "nome", "endereco", "email", "cel", "action"];
  activeEmail: string = '';

  constructor(private cadastroService: CadastroService, private statusService: StatusService) {
  }

  ngOnInit(): void {

   this.statusService.currentStatus.subscribe(status => {
       this.activeEmail = status.email
   })

    this.cadastroService.read().subscribe(cadastros => {
       this.cadastros = (cadastros.filter(item => item.email == this.activeEmail));
    })
  }
}
