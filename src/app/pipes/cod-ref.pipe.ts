import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codREF'
})
export class CodREFPipe implements PipeTransform {

  transform(value: number): string {
    let result;
    result = "Ref-"+value
    return result;
  }

}
