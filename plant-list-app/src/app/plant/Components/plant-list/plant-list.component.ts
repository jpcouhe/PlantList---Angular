import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Plant } from '../../models/plant.model';
import { PlantService } from '../../services/plant.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss']
})
export class PlantListComponent implements OnInit {
  plantList$: Observable<Plant[]> | undefined
  indexOfelement:any
  constructor(private plantService : PlantService, private router:Router) { }

  ngOnInit(): void {
    this.plantList$ = this.plantService.plantList$
  }
  deletePlant(plant : Plant){
    this.plantService.deletePlant(plant)
  }

  goToPlant(index:any){
    this.router.navigate(['/plant', index])
  }
}
