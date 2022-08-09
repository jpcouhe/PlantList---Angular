import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantDetailComponent } from './Components/plant-detail/plant-detail.component';
import { PlantFormComponent } from '../shared/Components/plant-form/plant-form.component';
import { SharedModule } from '../shared/shared.module';
import { PlantExpositionPipe } from './pipes/plant-exposition.pipe';
import { PlantTypeColorPipe } from './pipes/plant-type-color.pipe';
import { PlantListComponent } from './Components/plant-list/plant-list.component';
import { PlantRoutingModule } from './plant-routing.module';
import { PlantInfoComponent } from './Components/plant-info/plant-info.component';



@NgModule({
  declarations: [PlantDetailComponent,PlantFormComponent,
  PlantTypeColorPipe, PlantExpositionPipe, PlantListComponent, PlantInfoComponent],
  imports: [
    CommonModule,
    SharedModule,
    PlantRoutingModule
    
  ]
})
export class PlantModule { }
