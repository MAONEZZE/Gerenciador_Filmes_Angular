import { FilmeBase } from "./filmeBase";

export class FilmeUnitario extends FilmeBase{
  videoTreiler: any;
  dataLancamento: string;
  mediaVotos: number;
  totalVotos: number;
  genero: string;
  creditoAtores: string;
  creditoTrabalhadores: string;

  constructor(id: number, titulo: string, descricao: string, imgPoster: string, imgBackdrop: string,
    videoTreiler: any, dataLancamento: string, mediaVotos: number, totalVotos: number, genero: string,
    creditoAtores: string, creditoTrabalhadores: string){

    super(id, titulo, descricao, imgPoster);
    this.videoTreiler = videoTreiler;
    this.dataLancamento = dataLancamento;
    this.mediaVotos = mediaVotos;
    this.totalVotos = totalVotos;
    this.genero = genero;
    this.creditoAtores = creditoAtores;
    this.creditoTrabalhadores = creditoTrabalhadores;   
  }
}