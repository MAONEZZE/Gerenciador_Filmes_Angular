import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { FilmeUnitario } from 'src/app/models/filmeUnitario';
import { FilmeFavoritoService } from 'src/app/services/filme-favorito.service';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-detalhe-filme',
  templateUrl: './detalhe-filme.component.html',
  styleUrls: ['./detalhe-filme.component.css']
})
export class DetalheFilmeComponent implements OnInit{
  public urlImg = 'https://image.tmdb.org/t/p/original';
  public urlTreiler = 'https://www.youtube.com/embed/';
  public ehFavorito: boolean = false;
  public filme: FilmeUnitario;
  public treilers: any[] = [];
  public classeIcone: string = '';
  public generos: any[] = [];

  public creditoDiretor: string = '';
  public creditoEscritores: string = '';
  public creditoAtores: string = '';

  constructor(private sanitizer: DomSanitizer, private filmeService: FilmeService, private route: ActivatedRoute, private filmeFavoritoService: FilmeFavoritoService){
    this.filme = new FilmeUnitario(0, '', '', '', '', '', '', 0, 0, '', '', '');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((parametro) => {
      this.treilers = [];
      this.generos = [];
      this.creditoDiretor = '';
      this.creditoEscritores = '';
      this.creditoAtores = '';

      const id = parametro.get('id')!;

      this.buscarPorId(id);
      this.verificarSeEhFavorito(id);
    });
  }

  adicionarFavoritos(){
    if(this.classeIcone.includes('bi-heart')){
      this.classeIcone.replace('bi-heart', 'bi-heart-fill');
    }
    else{
      this.classeIcone.replace('bi-heart-fill', 'bi-heart');
    }

    const id = this.route.snapshot.paramMap.get('id')!;

    this.filmeFavoritoService.favoritar(id);

    this.verificarSeEhFavorito(id);
  }

  public verificarSeEhFavorito(id: string){
    this.ehFavorito = this.filmeFavoritoService.verificaFav(id);
    if(this.ehFavorito){
      this.classeIcone = "bi bi-heart-fill fs-2 text-warning"
    }
    else{
      this.classeIcone = "bi bi-heart fs-2 text-warning"
    }
  }

  private pegarCreditos(){
    let j = 0;
    for(let i = 0; i < this.filme.creditoTrabalhadores.length; i++){
      if(this.filme.creditoTrabalhadores[i].known_for_department == 'Directing'){
        this.creditoDiretor +=  this.filme.creditoTrabalhadores[i].name + ', ';
      }
      else if(this.filme.creditoTrabalhadores[i].known_for_department == 'Writing'){
        this.creditoEscritores +=  this.filme.creditoTrabalhadores[i].name + ', ';
      }
    }

    for(let i = 0; i < 6; i++){
      if(this.filme.creditoAtores[i].known_for_department == 'Acting') {
        this.creditoAtores +=  this.filme.creditoAtores[i].name + ', ';
      }
    }
  }

  buscarPorId(id: string){

    this.filmeService.buscarFilmesPorId(id).subscribe((filme: FilmeUnitario) => {
      this.filme = filme;

      for(let i = 0; i < filme.genero.length; i++){
        this.generos.push(filme.genero[i].name);
      }

      for(let i = 0; i < filme.videoTreiler.length; i++){
        this.treilers.push(this.sanitizer.bypassSecurityTrustResourceUrl(this.urlTreiler + filme.videoTreiler[i].key));
      }

      this.pegarCreditos();
    });
  }
}
