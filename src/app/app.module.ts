import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '../app/pages/home/home.component';
import { DetalheFilmeComponent } from '../app/pages/detalhe-filme/detalhe-filme.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CardFilmeComponent } from './shared/card-filme/card-filme.component';
import { ListarFilmesComponent } from './pages/listar-filmes/listar-filmes.component';
import { FilmeEmCartazComponent } from './shared/filme-em-cartaz/filme-em-cartaz.component';
import { FilmeMaisVotadosComponent } from './shared/filme-mais-votados/filme-mais-votados.component';
import { ListarFilmesPesquisadosComponent } from './pages/listar-filmes-pesquisados/listar-filmes-pesquisados.component';
import { CardFilmePesquisaComponent } from './shared/card-filme-pesquisa/card-filme-pesquisa.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalheFilmeComponent,
    NavbarComponent,
    CardFilmeComponent,
    ListarFilmesComponent,
    FilmeEmCartazComponent,
    FilmeMaisVotadosComponent,
    ListarFilmesPesquisadosComponent,
    CardFilmePesquisaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule, 
    NgOptimizedImage

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
