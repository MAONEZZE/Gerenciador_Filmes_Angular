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
  @Input() ehRelacionado: boolean = false;
  @Input() filme: FilmeBase;

  constructor(private router: Router){
    this.filme = new Filme(0, '', '', '', '');
  }

  detalharFilme(filme: FilmeBase){
    this.router.navigate(['/detalhe-filme', filme.id])
  }
}
