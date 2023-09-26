import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filme } from 'src/app/models/filme';
import { FilmeBase } from 'src/app/models/filmeBase';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-listar-filmes-pesquisados',
  templateUrl: './listar-filmes-pesquisados.component.html',
  styleUrls: ['./listar-filmes-pesquisados.component.css']
})
export class ListarFilmesPesquisadosComponent implements OnInit{
  titulo: string = '';
  filmes: Filme[] = [];

  constructor(private route: ActivatedRoute, private filmeService: FilmeService){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((parametro) => {
      this.titulo = parametro.get('str')!;

      this.filmeService.buscarFilmePorNome(this.titulo).subscribe((filmes) => {
        this.filmes = filmes;
      })
    })
  }

}
