import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlantService } from '../../../plant/services/plant.service';

@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.scss']
})
export class PlantFormComponent implements OnInit {

  constructor(private plantService : PlantService, private router : Router) { }

  plantForm:FormGroup = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    purchase: new FormControl(''),
    imageUrl:new FormControl(''),
    exposition: new FormControl(''),
    watering: new FormControl(''),
    price: new FormControl(0)
  })

  ngOnInit(): void {
  }

  onSubmit(){
    this.plantService.addPlant(this.plantForm.value)
    this.plantForm.reset()
    this.router.navigate(['/plants'])
    
  }
}
