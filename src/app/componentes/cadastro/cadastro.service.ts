import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Cadastro } from './cadastro.model';
import { catchError, map } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseUrl = "http://localhost:3000/users"

  constructor(private snackBar: MatSnackBar, private http: HttpClient ) { }

  showMessage(msg: string, isError: boolean = false): void{
     this.snackBar.open(msg, 'X', {
       duration: 3000,
       verticalPosition: "top",
       panelClass: isError ? ['errorMsg'] : ['successMsg']
     })
  }

  create(cadastro: Cadastro): Observable<Cadastro>{
      return this.http.post<Cadastro>(this.baseUrl, cadastro).pipe(
        map((obj) => obj),
        catchError(e => this.errorMsg(e))
      )
  }

  errorMsg(e: any){
     console.log(e);
     this.showMessage('Erro - E-mail já existe', true);
     return EMPTY;
  }

  read(): Observable<Cadastro[]>{
       return this.http.get<Cadastro[]>(this.baseUrl).pipe(
          map((obj) => obj),
          catchError(e => this.errorMsgLoad(e))
       );
  }

  errorMsgLoad(e: any){
    console.log(e);
    this.showMessage('Erro no carregamento', true);
    return EMPTY;
  }

  readById(id: number): Observable<Cadastro>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cadastro>(url);
  }

  updateCadastro(cadastro: Cadastro): Observable<Cadastro>{
    const url = `${this.baseUrl}/${ cadastro.id }`;
    return this.http.put<Cadastro>(url, cadastro);
  }

  deleteCadastro(cadastro: Cadastro): Observable<Cadastro>{
    const url = `${this.baseUrl}/${cadastro.id}`;
    return this.http.delete<Cadastro>(url);
  }

}
