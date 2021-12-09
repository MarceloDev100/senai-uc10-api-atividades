
export class LoginStatus {

  public email: string = '';
  public active: boolean = false;
  public username : string = '';

  constructor(email: string, username: string, active: boolean){
     this.email = email,
     this.username = username;
     this.active = active;
  }

}




