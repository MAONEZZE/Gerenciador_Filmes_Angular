import { Component, Input } from '@angular/core';

import { Filme } from 'src/app/models/filme';

@Component({
  selector: 'app-card-inicial',
  templateUrl: './card-inicial.component.html',
  styleUrls: ['./card-inicial.component.css']
})
export class CardInicialComponent {
  public urlImg = 'https://image.tmdb.org/t/p/original';
  @Input() index: number = 0;
  @Input() filmes: Filme[] = [];
}
