import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { Plant } from '../../models/plant.model';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.scss']
})
export class PlantDetailComponent implements OnInit {

  @Input() plant : Plant | undefined
  @Output() deletePlant = new EventEmitter<Plant>()
  
  showButton:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  onDeletePlant(plant: Plant){
    this.deletePlant.emit(plant)
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.showButton = true
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.showButton = false
  }
}
