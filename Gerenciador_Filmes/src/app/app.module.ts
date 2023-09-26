import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '../app/pages/home/home.component';
import { DetalheFilmeComponent } from '../app/pages/detalhe-filme/detalhe-filme.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CardFilmeComponent } from './shared/card-filme/card-filme.component';
import { ListarFilmesComponent } from './pages/listar-filmes/listar-filmes.component';
import { CardInicialComponent } from './shared/card-inicial/card-inicial.component';
import { FilmeEmCartazComponent } from './shared/filme-em-cartaz/filme-em-cartaz.component';
import { FilmeMaisVotadosComponent } from './shared/filme-mais-votados/filme-mais-votados.component';
import { ListarFilmesPesquisadosComponent } from './pages/listar-filmes-pesquisados/listar-filmes-pesquisados.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalheFilmeComponent,
    NavbarComponent,
    CardFilmeComponent,
    ListarFilmesComponent,
    CardInicialComponent,
    FilmeEmCartazComponent,
    FilmeMaisVotadosComponent,
    ListarFilmesPesquisadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
