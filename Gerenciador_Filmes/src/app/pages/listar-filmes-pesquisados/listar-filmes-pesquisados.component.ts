import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-filmes-pesquisados',
  templateUrl: './listar-filmes-pesquisados.component.html',
  styleUrls: ['./listar-filmes-pesquisados.component.css']
})
export class ListarFilmesPesquisadosComponent implements OnInit{
  titulo: string = '';

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((parametro) => {
      this.titulo = parametro.get('str')!;
    })
  }

}
