import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Plant } from './plant.model';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private defaultPlantList: Plant[]= [
    {name: 'Schefflera arboricola', type:'interieur', purchase:'2 aout', exposition: 'lumière vive', watering:'1 fois /semaine', price:80}
  ]

  private plantList: BehaviorSubject<Plant[]> = new BehaviorSubject<Plant[]>(this.defaultPlantList)
  public plantList$: Observable<Plant[]> = this.plantList.asObservable()
  

  addPlant(plant:Plant) {
    const plantList = this.plantList.getValue()

    plantList.unshift(plant)
    this.plantList.next(plantList)

  }

  
}
