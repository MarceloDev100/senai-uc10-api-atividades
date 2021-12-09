import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';
import { LoginStatus } from 'global';
import { StatusService } from 'src/app/services/status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  loginStatus: LoginStatus = new LoginStatus("", "", false);

  public loginModel = new Login();

  message: string = '';
  responseStatus: string = '';

  constructor(private loginService: LoginService,  private statusService: StatusService,
     private router: Router) {}

  ngOnInit(): void {
     this.statusService.currentStatus.subscribe(status => this.loginStatus = status)
  }

  onSubmit(){

    const blacklist: string[] = ["select ", "from ", "drop ", "or ", "having ",
    "group ", "by ", "insert ", "exec ", "\"", "\'", "--", "#", "*", ";"];

    for(let i = 0 ; i < blacklist.length; i++){
      if(this.loginModel.email.toLowerCase().includes(blacklist[i])){
          this.message = "Dados inválidos: " + blacklist[i];
          return;
      }
    }

    this.loginService.login(this.loginModel).subscribe((response) => {

        this.message = "Login com sucesso!";
        this.responseStatus = response.status;

        this.loginStatus.email = (JSON.parse(JSON.stringify(response.body.user))).email;
        this.loginStatus.username = (JSON.parse(JSON.stringify(response.body.user))).name;
        this.loginStatus.active = true;

        this.statusService.changeStatus(this.loginStatus);

        setTimeout(() => {
           this.router.navigateByUrl('');
        }, 2000);

    }, err => {

       if(err.error == "Email and password are required"){
          this.message = "Os campos não podem estar vazios";
       }else if(err.error == "Email format is invalid"){
          this.message = "Formato de email inválido";
       }else if(err.error == "Cannot find user"){
          this.message = "Usuário não encontrado!";
       }else if(err.error == "Password is too short"){
          this.message = "Senha muito curta";
       }else if(err.error == "Incorrect password"){
          this.message = "Senha incorreta";
       }

    })
  }

}
