export class FilmeBase{
  id: any;
  titulo: any;
  descricao: any;
  imgPoster: any;

  constructor(id: any, titulo: any, descricao: any, imgPoster: any){
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.imgPoster = imgPoster;
  }
}