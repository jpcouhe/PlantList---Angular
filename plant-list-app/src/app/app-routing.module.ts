import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantInfoComponent } from './plant/Components/plant-info/plant-info.component';
import { PlantFormComponent } from './shared/Components/plant-form/plant-form.component';

const routes: Routes = [
  {
    path: 'plants',
    loadChildren: () =>
      import('./plant/plant.module').then((m) => m.PlantModule),
  },
  {path:'plant/:id', component : PlantInfoComponent},
  {
    path:'addPlant',
    component:PlantFormComponent
  },
  {path:'**', redirectTo:'plants'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
