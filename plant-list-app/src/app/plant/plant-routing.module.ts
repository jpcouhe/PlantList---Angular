import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantListComponent } from './Components/plant-list/plant-list.component';


const routes: Routes = [
  {
    path: '',
    component: PlantListComponent,


  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantRoutingModule {}
