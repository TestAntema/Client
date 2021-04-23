import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Voiture} from "../model/voiture";

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  API_URI = "http://localhost:9090";

  constructor(private http: HttpClient) { }

  getVoitures(){
    return this.http.get('http://localhost:9090/Voiture');
  }

  saveVoiture(voiture : Voiture){
    return this.http.post('${this.API_URI}/Voiture', voiture);
  }

  deleteVoiture(id: string){
    return this.http.delete('${this.API_URI}/Voiture/${id}');
  }
}
