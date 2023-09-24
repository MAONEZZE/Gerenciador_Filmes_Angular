import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Filme } from 'src/app/models/filme';
import { FilmeBase } from 'src/app/models/filmeBase';
import { FilmeUnitario } from 'src/app/models/filmeUnitario';
import { FilmeFavoritoService } from 'src/app/services/filme-favorito.service';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.component.html',
  styleUrls: ['./listar-filmes.component.css']
})
export class ListarFilmesComponent{
  private tipo: string;
  public tipoDeFilme: string = '';
  public filmes: FilmeBase[] = [];

  constructor(private route: ActivatedRoute, private filmeService: FilmeService, private filmeFavoritoService: FilmeFavoritoService){
    this.tipo = this.route.snapshot.paramMap.get('str')!;

    this.verificadorDeFilme();

    if(this.tipo != 'favoritos'){
      this.buscarFilme(this.tipo)
    }
    else{
      this.buscarFavoritos();
    }
  }

  private buscarFavoritos(){
    const arrayIdFilmeFav = this.filmeFavoritoService.obterListaFav();
    
    for (let i = 0; i < arrayIdFilmeFav.length; i++){
      this.filmeService.buscarFilmesPorId(arrayIdFilmeFav[i].id).subscribe((filme: FilmeUnitario) => {
        this.filmes.push(filme);
      });
    }
  }

  private verificadorDeFilme(){
    switch(this.tipo){
      case 'popular':
        this.tipoDeFilme = 'Popular';
        break;

      case 'upcoming':
        this.tipoDeFilme = 'em Cartaz';
        break;

      case 'top_rated':
        this.tipoDeFilme = 'mais Votados';
        break;

      case 'favoritos':
        this.tipoDeFilme = 'Favoritos';
        break;
    }
  }

  public trocarDePagina(pgSelec: number){
    const pgStr: string = pgSelec.toString();

    if(this.tipo != 'favoritos'){
      this.filmeService.buscarFilmesPorPagina(this.tipo, pgStr).subscribe((filmes: Filme[]) => {
        this.filmes = filmes;
      });
    }
  }

  public buscarFilme(tipo: string){
    this.filmeService.buscarFilmes(tipo).subscribe((filmes: Filme[]) => {
      this.filmes = filmes;
    });
  }

}
