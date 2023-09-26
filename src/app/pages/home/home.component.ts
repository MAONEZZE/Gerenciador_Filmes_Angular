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
export class HomeComponent implements OnInit{
  public urlImg = 'https://image.tmdb.org/t/p/original';
  public filmeCard: Filme;
  public indexCardCarrossel: number = 0;
  @Input() filmes: Filme[] = [];
  @Output() onSlideCarrossel: EventEmitter<Filme>;

  filmesPopulares: Filme[];
  filmesEmCartaz: Filme[];
  filmesMaisVotados: Filme[];
  filmesCarrossel: Filme[];
  
  constructor(private filmeService: FilmeService){
    this.onSlideCarrossel = new EventEmitter();
    this.filmeCard = new Filme(0, '', '', '', '');
    this.filmesPopulares = [];
    this.filmesEmCartaz = [];
    this.filmesMaisVotados = [];
    this.filmesCarrossel = [];
  }
  
  ngOnInit(): void {
    this.buscarPopulares();
    this.buscarEmCartaz();
    this.buscarMaisVotados();
  }

  private buscarPopulares(){
    this.filmeService.buscarFilmes('popular').subscribe((filmes: Filme[]) => {
      for(let i=0; i < 12; i++){
        this.filmesPopulares.push(filmes[i])

        if(i < 7 && filmes[i].id != 762430){
          this.filmesCarrossel.push(filmes[i]);
        }
      }
      
      this.filmeCard = this.filmesPopulares[0];
    });
  }

  private buscarEmCartaz(){
    this.filmeService.buscarFilmes('upcoming').subscribe((filmes: Filme[]) => {
      for(let i=0; i < 12; i++){
        this.filmesEmCartaz.push(filmes[i])
      }
    });
  }

  private buscarMaisVotados(){
    this.filmeService.buscarFilmes('top_rated').subscribe((filmes: Filme[]) => {
      for(let i=0; i < 12; i++){
        this.filmesMaisVotados.push(filmes[i])
      }
    });
  }

  public slideCarrossel(event: NgbSlideEvent){
    const evento: string = event.current;
    this.indexCardCarrossel = parseInt(evento.substring(evento.length - 1, evento.length))

    const filme = this.filmesCarrossel[this.indexCardCarrossel];

    this.filmeCard = filme;
  }
}
