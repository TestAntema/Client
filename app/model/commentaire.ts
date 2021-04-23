import {Utilisateur} from "../model/utilisateur";
import {Voiture} from "../model/voiture";

export interface Commentaire {
  idCommentaire?: number;
  comment?: string;
  utilisateur?: Utilisateur;
  voiture?: Voiture;
}
export class Commentaire{

}
