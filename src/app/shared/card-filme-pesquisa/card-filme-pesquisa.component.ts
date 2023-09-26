import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Filme } from 'src/app/models/filme';
import { FilmeBase } from 'src/app/models/filmeBase';

@Component({
  selector: 'app-card-filme-pesquisa',
  templateUrl: './card-filme-pesquisa.component.html',
  styleUrls: ['./card-filme-pesquisa.component.css']
})
export class CardFilmePesquisaComponent {
  public urlImg = 'https://image.tmdb.org/t/p/original';
  @Input() filme: FilmeBase;

  constructor(private router: Router){
    this.filme = new Filme(0, '', '', '', '');
  }

  detalharFilme(filme: FilmeBase){
    this.router.navigate(['/detalhe-filme', filme.id])
  }
}
