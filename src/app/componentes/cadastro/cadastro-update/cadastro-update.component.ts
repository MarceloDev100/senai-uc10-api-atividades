import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadastro } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-update',
  templateUrl: './cadastro-update.component.html',
  styleUrls: ['./cadastro-update.component.css']
})
export class CadastroUpdateComponent implements OnInit {

  newPassword : string = '';

  cadastro = {} as Cadastro;

  constructor(private cadastroService: CadastroService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.cadastroService.readById(id).subscribe(cadastro => {
          this.cadastro.id = cadastro.id;
          this.cadastro.ssn = cadastro.ssn;
          this.cadastro.name = cadastro.name;
          this.cadastro.address = cadastro.address;
          this.cadastro.email = cadastro.email;
          this.cadastro.mobile = cadastro.mobile;
    })

  }

  updateCadastro(){
    this.cadastro.password = this.newPassword;
    this.cadastroService.updateCadastro(this.cadastro).subscribe(() => {

       this.cadastroService.showMessage('O usuário foi atualizado');
       this.router.navigateByUrl('/cadastroStart');
    })
  }

  cancelarCadastro(): void{
    this.router.navigateByUrl('/cadastroStart');
  }

}
