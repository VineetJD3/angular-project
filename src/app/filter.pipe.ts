import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ninjas: any, ninjaName: any): any {
    
    if (ninjaName === undefined)
      return ninjas;

    return ninjas.filter(function(ninja){
      return ninja.name.toLowerCase().includes(ninjaName.toLowerCase());
    });
  }

}
