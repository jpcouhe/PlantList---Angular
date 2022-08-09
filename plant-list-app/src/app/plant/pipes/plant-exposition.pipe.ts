import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plantExposition'
})
export class PlantExpositionPipe implements PipeTransform {

  transform(type:string): string {

    let color: string;
  
    switch (type) {
      case 'ombre':
        type = "☁️";
        break;
      case 'mi-ombre':
        type = '⛅';
        break;
      case 'soleil':
        type = '☀️';
        break;
      default:
        type = 'grey';
        break;
    }
  
    return type;
  
  }

}
