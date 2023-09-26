import { Component, Input, OnInit } from '@angular/core';

import { Filme } from 'src/app/models/filme';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-filme-em-cartaz',
  templateUrl: './filme-em-cartaz.component.html',
  styleUrls: ['./filme-em-cartaz.component.css']
})
export class FilmeEmCartazComponent{
  @Input() filmesEmCartaz: Filme[] = [];
}
