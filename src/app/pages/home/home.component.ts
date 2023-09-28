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
  
  constructor(private filmeService: FilmeService, private router: Router){
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

        if(i < 8 && filmes[i].id != 762430 && filmes[i].id != 385687){
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

  redirecionarUser(){
    const urlGitHub = 'https://github.com/MAONEZZE'; // URL do Google ou outra URL externa
    window.open(urlGitHub, '_blank');
  }

  // public slideCarrossel(event: NgbSlideEvent){
  //   const evento: string = event.current;

  //   const array: string[] = evento.split('-');

  //   this.indexCardCarrossel = parseInt(array[2]);

  //   const filme = this.filmesCarrossel[this.indexCardCarrossel];

  //   this.filmeCard = filme;
  // }
}
