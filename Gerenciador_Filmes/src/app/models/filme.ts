import { FilmeBase } from "./filmeBase";

export class Filme extends FilmeBase{
  imgBackdrop: any;

  constructor(id: any, titulo: any, descricao: any, imgPoster: any, imgBackdrop: any){
    super(id, titulo, descricao, imgPoster);
    this.imgBackdrop = imgBackdrop;
  }
}