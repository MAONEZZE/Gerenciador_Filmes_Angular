import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';

import { Filme } from 'src/app/models/filme';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  public urlImg = 'https://image.tmdb.org/t/p/original';
  @Input() filmes: Filme[] = [];
  @Output() onSlideCarrossel: EventEmitter<Filme>;
  filmesPopulares: Filme[] = [];
  filmesCarrossel: Filme[] = [];
  
  constructor(private filmeService: FilmeService){
    this.onSlideCarrossel = new EventEmitter();
    this.buscarPopulares();
  }

  private buscarPopulares(){
    this.filmeService.buscarFilmes('popular').subscribe((filmes: Filme[]) => {
      for(let i=0; i < 12; i++){
        this.filmesPopulares.push(filmes[i])

        if(i < 7 && filmes[i].id != 762430){
          this.filmesCarrossel.push(filmes[i]);
        }
      }
    });
  }

  public slideCarrossel(event: NgbSlideEvent){
    const evento: string = event.current;
    const index: number = parseInt(evento.substring(evento.length - 1, evento.length))

    const filme = this.filmesCarrossel[index];

    this.onSlideCarrossel.emit(filme);
  }
}
