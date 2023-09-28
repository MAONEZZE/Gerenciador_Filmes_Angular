import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DetalheFilmeComponent } from './pages/detalhe-filme/detalhe-filme.component';
import { ListarFilmesComponent } from './pages/listar-filmes/listar-filmes.component';

import { ListarFilmesPesquisadosComponent } from './pages/listar-filmes-pesquisados/listar-filmes-pesquisados.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'detalhe-filme/:id',
    component: DetalheFilmeComponent
  },
  {
    path: 'listar-filme/:str',
    component: ListarFilmesComponent
  },
  {
    path: 'listar-filme-pesquisado/:str',
    component: ListarFilmesPesquisadosComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
