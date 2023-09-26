import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Filme } from "../models/filme";
import { environment } from "../../environments/environment";
import { Observable, map } from "rxjs";
import { FilmeUnitario } from "../models/filmeUnitario";
import { FilmeBase } from "../models/filmeBase";

@Injectable({
  providedIn: 'root',
})

export class FilmeService{
  private listaFilmesGerais: Filme[] = [];
  private urlBusca: string = 'https://api.themoviedb.org/3/movie/';
  private http: HttpClient;

  constructor(http: HttpClient){
    this.http = http;
  }

  private obterHeader() {
    return {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${environment.API_KEY}`
      }
    }
  }

  private mapearFilmes(dados: any[]): Filme[]{
    return dados.map((obj: any): Filme => {
      const filme = new Filme(obj.id, obj.title, obj.overview, obj.poster_path,obj.backdrop_path);

      this.listaFilmesGerais.push(filme);
      return filme;
    });
    
  }

  private mapearFilmeUnitario(dados: any): FilmeUnitario{
    return new FilmeUnitario(
      dados.id, 
      dados.title, 
      dados.overview, 
      dados.poster_path, 
      dados.backdrop_path,
      dados.videos.results,
      dados.release_date,
      dados.vote_average,
      dados.vote_count,
      dados.genres? dados.genres: dados.genre_ids,
      dados.credits.cast,
      dados.credits.crew
      );
  }

  public buscarFilmesPorId(id: string): Observable<FilmeUnitario>{
    const sufixo = '?append_to_response=images,videos,credits&language=pt-BR&include_image_language=en,null';

    return this.http.get<any>(this.urlBusca + id + sufixo, this.obterHeader())
      .pipe(
        map((dadosI: any): FilmeUnitario => this.mapearFilmeUnitario(dadosI))
      );
  }

  public buscarFilmes(tipo: string): Observable<Filme[]>{
    return this.http
      .get<any>(`${this.urlBusca}${tipo}?language=pt-BR`, this.obterHeader())
      .pipe(
        map((dadosI: any): any[] => dadosI.results),
        map((dadosII: any[]): Filme[] => this.mapearFilmes(dadosII))
      );
  }

  public buscarFilmesPorPagina(tipo: string, pagina: string): Observable<Filme[]>{
    return this.http
      .get<any>(`${this.urlBusca}${tipo}?language=pt-BR&&page=${pagina}`, this.obterHeader())
      .pipe(
        map((dadosI: any): any[] => dadosI.results),
        map((dadosII: any[]): Filme[] => this.mapearFilmes(dadosII))
      );
  }

  public buscarFilmePorNome(nomeFilme: string): Observable<FilmeUnitario>{ //implementar aqui
    return new Observable<FilmeUnitario>();
  }
}