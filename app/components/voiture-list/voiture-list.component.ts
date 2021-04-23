import { Component, OnInit } from '@angular/core';
import {VoitureService} from "../../services/voiture.service";

@Component({
  selector: 'app-voiture-list',
  templateUrl: './voiture-list.component.html',
  styleUrls: ['./voiture-list.component.scss']
})
export class VoitureListComponent implements OnInit {
  voitures: any = []
  constructor(private voitureService: VoitureService) { }

  ngOnInit(): void {
    this.voitureService.getVoitures().subscribe(
      res => {
        this.voitures = res;
      },
      error => console.log(error)
    );
  }

}
