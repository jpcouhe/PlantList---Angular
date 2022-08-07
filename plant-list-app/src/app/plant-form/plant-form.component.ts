import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.scss']
})
export class PlantFormComponent implements OnInit {

  constructor(private plantService : PlantService) { }

  plantForm:FormGroup = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    purchase: new FormControl(''),
    exposition: new FormControl(''),
    watering: new FormControl(''),
    price: new FormControl(0)
  })

  ngOnInit(): void {
  }

  onSubmit(){
    this.plantService.addPlant(this.plantForm.value)
    this.plantForm.reset()
  }
}
