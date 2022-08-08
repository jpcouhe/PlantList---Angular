import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Plant } from './plant.model';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  private defaultPlantList: Plant[] = [
    {
      name: 'Schefflera arboricola',
      type: 'interieur',
      purchase: '2 aout',
      exposition: 'lumière vive',
      watering: '1 fois /semaine',
      price: 80,
      imageUrl:
        'https://images.truffaut.com/media/catalog/productcdn:///Articles/jpg/0482000/482813_002.jpg?width=700&height=700&store=fr&image-type=image',
    },
    {
      name: 'Cactus',
      type: 'interieur',
      purchase: '2 aout',
      exposition: 'lumière vive',
      watering: '1 fois /semaine',
      price: 80,
      imageUrl:
        'https://images.truffaut.com/media/catalog/productcdn:///Articles/jpg/0349000/349053_003.jpg?store=fr&image-type=image',
    },
  ];

  private plantList: BehaviorSubject<Plant[]> = new BehaviorSubject<Plant[]>(
    this.defaultPlantList
  );
  public plantList$: Observable<Plant[]> = this.plantList.asObservable();

  addPlant(plant: Plant) {
    const plantList = this.plantList.getValue();

    plantList.unshift(plant);
    this.plantList.next(plantList);
  }

  deletePlant(plant: Plant) {
    const plantList = this.plantList.getValue();
    const newPlantList: Plant[] = [];

    for (let i = 0; i < plantList.length; i++) {
      if (plantList[i].name !== plant.name) {
        newPlantList.push(plantList[i]);
      }
    }
    this.plantList.next(newPlantList);
  }
}
