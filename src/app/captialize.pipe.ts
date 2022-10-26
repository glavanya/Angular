import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'captialize'
})
export class CaptializePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let firstChar = value.substring(0,1);
    let allotherchars=value.substring(1,value.length);
    let newvalue = firstChar.toUpperCase()+allotherchars.toLowerCase();
    return newvalue;
  }

}
