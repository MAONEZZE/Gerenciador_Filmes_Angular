export class FilmeBase{
  id: number;
  titulo: string;
  descricao: string;
  imgPoster: string;

  constructor(id: number, titulo: string, descricao: string, imgPoster: string){
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.imgPoster = imgPoster;
  }
}