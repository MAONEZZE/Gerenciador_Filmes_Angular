import { Component } from '@angular/core';

import { Filme } from 'src/app/models/filme';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-filme-mais-votados',
  templateUrl: './filme-mais-votados.component.html',
  styleUrls: ['./filme-mais-votados.component.css']
})
export class FilmeMaisVotadosComponent {
  filmesMaisVotados: Filme[] = [];

  constructor(private filmeService: FilmeService){
    this.buscarMaisVotados();
  }

  private buscarMaisVotados(){
    this.filmeService.buscarFilmes('top_rated').subscribe((filmes: Filme[]) => {
      for(let i=0; i < 12; i++){
        this.filmesMaisVotados.push(filmes[i])
      }
    });
  }
}
