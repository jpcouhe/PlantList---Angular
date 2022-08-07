import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { PlantFormComponent } from './plant-form/plant-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlantDetailComponent,
    PlantFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
