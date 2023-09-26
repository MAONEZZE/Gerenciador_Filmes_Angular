import { Component, Input, OnInit } from '@angular/core';

import { Filme } from 'src/app/models/filme';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-filme-mais-votados',
  templateUrl: './filme-mais-votados.component.html',
  styleUrls: ['./filme-mais-votados.component.css']
})
export class FilmeMaisVotadosComponent implements OnInit{
  @Input() filmesMaisVotados: Filme[] = [];
  @Input({required: true}) ehRelacionado: boolean = false;

  constructor(private filmeService: FilmeService){}

  ngOnInit(): void {
    if(this.ehRelacionado){
      this.buscarMaisVotadosAleatorio();
    }
  }

  private buscarMaisVotadosAleatorio(){
    const pg: string = (Math.floor(Math.random() * 10) + 1).toString();

    this.filmesMaisVotados = [];

    this.filmeService.buscarFilmesPorPagina('top_rated', pg).subscribe((filmes: Filme[]) => {
      for(let i=0; i < 6; i++){
        this.filmesMaisVotados.push(filmes[i])
      }
    });
  }
}
