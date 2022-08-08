import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Plant } from '../plant.model';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.scss']
})
export class PlantDetailComponent implements OnInit {

  @Input() plant : Plant | undefined
  @Output() deletePlant = new EventEmitter<Plant>()
  
  constructor() { }

  ngOnInit(): void {
  }

  onDeletePlant(plant: Plant){
    this.deletePlant.emit(plant)
  }

}
