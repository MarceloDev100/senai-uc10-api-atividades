import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cadastro } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';


@Component({
  selector: 'app-cadastro-create',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.css']
})
export class CadastroCreateComponent implements OnInit {

  cadastro: Cadastro = {
    ssn: '',
    name: '',
    email: '',
    mobile: '',
    address: '',
    password: ''
  }

  message: string = '';

  constructor( private cadastroService: CadastroService, private router: Router) {

  }

  ngOnInit(): void {
  }

  createCadastro(): void{
    this.cadastroService.create(this.cadastro).subscribe(() => {
       this.message = "Usuário cadastrado!";
       setTimeout(() => {
           this.router.navigateByUrl('login');
       }, 2000);
    })
  }

  cancelarCadastro(): void{
    this.router.navigate([''])
  }

  login(){
    this.router.navigate(['login']);
  }

}
