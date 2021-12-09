import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FooterComponent } from './views/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import { PedidosComponent } from './views/pedidos/pedidos.component';
import { CategoriasComponent } from './views/categorias/categorias.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { FaleconoscoComponent } from './views/faleconosco/faleconosco.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroCreateComponent } from './componentes/cadastro/cadastro-create/cadastro-create.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { CadastroReadComponent } from './componentes/cadastro/cadastro-read/cadastro-read.component';
import { MatTable, MatTableModule } from '@angular/material/table';
import { CadastroUpdateComponent } from './componentes/cadastro/cadastro-update/cadastro-update.component';
import { CadastroDeleteComponent } from './componentes/cadastro/cadastro-delete/cadastro-delete.component';
import { CadastroStartComponent } from './componentes/cadastro/cadastro-start/cadastro-start.component';
import { NotFoundComponent } from './views/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CarrinhoComponent,
    PedidosComponent,
    CategoriasComponent,
    ProdutosComponent,
    FaleconoscoComponent,
    CadastroCreateComponent,
    CadastroReadComponent,
    CadastroUpdateComponent,
    CadastroDeleteComponent,
    CadastroStartComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ RouterModule, MatInputModule]
})
export class AppModule { }
