import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar'
})
export class OcultarPipe implements PipeTransform {

  transform(value: string, ocultar: boolean = false): string {
    // let oculto = "";
    // if(ocultar){
      
    //   for (let i = 0; i < value.length; i++) {
    //     oculto = oculto+"*";
    //   }
    // }
    // else{
    //   oculto = value;
    // }
    // return oculto;
    return ( ocultar ) ? '*'.repeat(value.length) : value ;
  }

}
