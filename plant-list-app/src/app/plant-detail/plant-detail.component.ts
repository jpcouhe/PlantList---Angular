import { Component, Input, OnInit } from '@angular/core';
import { Plant } from '../plant.model';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.scss']
})
export class PlantDetailComponent implements OnInit {

  @Input() plant : Plant | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
