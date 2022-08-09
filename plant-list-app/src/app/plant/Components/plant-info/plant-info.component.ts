import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { Plant } from '../../models/plant.model';
import { PlantService } from '../../services/plant.service';

@Component({
  selector: 'app-plant-info',
  templateUrl: './plant-info.component.html',
  styleUrls: ['./plant-info.component.scss']
})
export class PlantInfoComponent implements OnInit {

  plantList:Plant[] = []
  plant:Plant | undefined
  constructor(private router: ActivatedRoute, private plantService : PlantService) { }

  ngOnInit(): void {
    this.plantService.plantList$.subscribe(data=> this.plantList = data)

    const plantId: string|null = this.router.snapshot.paramMap.get('id')
    
    if(plantId) {
      this.plant = this.plantList[Number(plantId)]
      console.log();
      
    }

    
    
  }

}
