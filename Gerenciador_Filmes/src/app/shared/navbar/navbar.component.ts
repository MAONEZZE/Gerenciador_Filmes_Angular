import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  tituloFilme: string = '';
  @Output() onBuscarPorTitulo: EventEmitter<string>;

  constructor(private router: Router){
    this.onBuscarPorTitulo = new EventEmitter();
  }

  enviarTitulo(){
    if(this.tituloFilme != ''){
      this.onBuscarPorTitulo.emit(this.tituloFilme);
      this.router.navigate(['/listar-filme-pesquisado', this.tituloFilme])
    }
  }
}
