import { Component } from '@angular/core';

import { Filme } from 'src/app/models/filme';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-filme-em-cartaz',
  templateUrl: './filme-em-cartaz.component.html',
  styleUrls: ['./filme-em-cartaz.component.css']
})
export class FilmeEmCartazComponent {
  filmesEmCartaz: Filme[] = [];
  
  constructor(private filmeService: FilmeService){
    this.buscarEmCartaz();
  }

  private buscarEmCartaz(){
    this.filmeService.buscarFilmes('upcoming').subscribe((filmes: Filme[]) => {
      for(let i=0; i < 12; i++){
        this.filmesEmCartaz.push(filmes[i])
      }
    });
  }
}
