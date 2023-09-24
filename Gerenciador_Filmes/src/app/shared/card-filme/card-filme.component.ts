import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Filme } from 'src/app/models/filme';
import { FilmeBase } from 'src/app/models/filmeBase';

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrls: ['./card-filme.component.css']
})
export class CardFilmeComponent{
  public urlImg = 'https://image.tmdb.org/t/p/original';
  @Input() filme: FilmeBase;
  @Output() onClickFilme: EventEmitter<Filme>;

  constructor(private router: Router){
    this.filme = new Filme(0, '', '', '', '');
    this.onClickFilme = new EventEmitter();
  }

  detalharFilme(filme: FilmeBase){
    this.router.navigate(['/detalhe-filme', filme.id])
  }
}
