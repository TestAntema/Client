import {Commentaire} from "../model/commentaire";

export interface Utilisateur {
  idUtilisateur?: number;
  login?: string;
  mdp?: string;
  listCommentaires?: Commentaire;
}
export class Utilisateur{

}
