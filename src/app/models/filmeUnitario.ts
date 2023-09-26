import { FilmeBase } from "./filmeBase";

export class FilmeUnitario extends FilmeBase{
  videoTreiler: any;
  dataLancamento: any;
  mediaVotos: any;
  totalVotos: any;
  genero: any;
  creditoAtores: any;
  creditoTrabalhadores: any;

  constructor(id: any, titulo: any, descricao: any, imgPoster: any, imgBackdrop: any,
    videoTreiler: any, dataLancamento: any, mediaVotos: any, totalVotos: any, genero: any,
    creditoAtores: any, creditoTrabalhadores: any){

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