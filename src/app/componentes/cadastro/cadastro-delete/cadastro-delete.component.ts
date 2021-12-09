import { StatusService } from './../../../services/status.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadastro } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-delete',
  templateUrl: './cadastro-delete.component.html',
  styleUrls: ['./cadastro-delete.component.css']
})
export class CadastroDeleteComponent implements OnInit {


  cadastro = {} as Cadastro;

  constructor(private cadastroService : CadastroService,
              private router: Router,
              private route : ActivatedRoute,
              private statusService: StatusService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.cadastroService.readById(id).subscribe((cadastro) => {
      this.cadastro = cadastro;
    })
  }

  deleteCadastro(): void{
    this.cadastroService.deleteCadastro(this.cadastro).subscribe(() => {
      this.cadastroService.showMessage('Cadastro deletado');
      this.router.navigateByUrl('/cadastroStart');
      this.statusService.changeStatus({ email: '', username: '', active: false })
    })
  }

  cancelarCadastro(): void{
    this.router.navigateByUrl('/cadastroStart');
  }

}
