import { FilmeBase } from "./filmeBase";

export class Filme extends FilmeBase{
  imgBackdrop: string;

  constructor(id: number, titulo: string, descricao: string, imgPoster: string, imgBackdrop: string){
    super(id, titulo, descricao, imgPoster);
    this.imgBackdrop = imgBackdrop;
  }
}