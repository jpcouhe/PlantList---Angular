import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Plant } from '../models/plant.model';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  private defaultPlantList: Plant[] = [
    {
      name: 'Schefflera arboricola',
      type: 'Intérieur',
      purchase: '08/09/2022',
      exposition: 'soleil',
      watering: '2 fois /semaine',
      price: 120,
      imageUrl:
        'https://images.truffaut.com/media/catalog/productcdn:///Articles/jpg/0482000/482813_002.jpg?width=700&height=700&store=fr&image-type=image',
    },
    {
      name: 'Cactus',
      type: 'Extérieur',
      purchase: '08/02/2022',
      exposition: 'mi-ombre',
      watering: '1 fois /semaine',
      price: 30,
      imageUrl:
        'https://images.truffaut.com/media/catalog/productcdn:///Articles/jpg/0349000/349053_003.jpg?store=fr&image-type=image',
    },
    {
      name: 'Dionée attrape-mouche',
      type: 'Extérieur',
      purchase: '08/09/2022',
      exposition: 'mi-ombre',
      watering: '1 fois /jour',
      price: 10,
      imageUrl:
        'https://media.gerbeaud.net/2021/01/640/dionee-tourbiere.jpg',
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
