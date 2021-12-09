import { NotFoundComponent } from './views/not-found/not-found.component';
import { CadastroStartComponent } from './componentes/cadastro/cadastro-start/cadastro-start.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCreateComponent } from './componentes/cadastro/cadastro-create/cadastro-create.component';
import { CadastroDeleteComponent } from './componentes/cadastro/cadastro-delete/cadastro-delete.component';
import { CadastroReadComponent } from './componentes/cadastro/cadastro-read/cadastro-read.component';
import { CadastroUpdateComponent } from './componentes/cadastro/cadastro-update/cadastro-update.component';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import { CategoriasComponent } from './views/categorias/categorias.component';
import { FaleconoscoComponent } from './views/faleconosco/faleconosco.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { PedidosComponent } from './views/pedidos/pedidos.component';
import { ProdutosComponent } from './views/produtos/produtos.component';

const routes: Routes = [
  { path: "" , component: HomeComponent},
  { path: "login" , component: LoginComponent },
  { path: "carrinho" , component: CarrinhoComponent },
  { path: "pedidos", component: PedidosComponent },
  { path: "categorias", component: CategoriasComponent },
  { path: "produtos", component: ProdutosComponent },
  { path: "faleconosco", component: FaleconoscoComponent },
  { path: "cadastroStart", component: CadastroStartComponent },
  { path: "cadastro", component: CadastroCreateComponent },
  { path: "cadastroRead", component: CadastroReadComponent },
  { path: "cadastro/update/:id", component: CadastroUpdateComponent },
  { path: "cadastro/delete/:id", component: CadastroDeleteComponent },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
