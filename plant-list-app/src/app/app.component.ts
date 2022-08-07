import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Plant } from './plant.model';
import { PlantService } from './plant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  plantList$: Observable<Plant[]> | undefined

  constructor(private plantService : PlantService){}

  ngOnInit(): void {
    this.plantList$ = this.plantService.plantList$
  }


}
