import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Commentaire} from "../model/commentaire";

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  API_URI = 'http://localhost:9090';

  constructor(private http: HttpClient) { }

  getCommentaires(){
    return this.http.get('${this.API_URI}/Commentaire');
  }

  saveCommentaire(commentaire : Commentaire){
    return this.http.post('${this.API_URI}/Commentaire', commentaire);
  }

  deleteCommentaire(id: string){
    return this.http.delete('${this.API_URI}/Commentaire/${id}');
  }

  getCommentByVoiture(id: string){
    return this.http.get('${this.API_URI}/Voiture/Commentaire/${id}');
  }
}
