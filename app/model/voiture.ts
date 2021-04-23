import {Commentaire} from "../model/commentaire";

export interface Voiture {
  idVoiture?: number;
  marque?: string;
  modele?: string;
  ficheTech?: string;
  prix?: number;
  listCommentaire?:Commentaire[];
}
export class Voiture{

}
