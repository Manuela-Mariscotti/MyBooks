import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'photoSRC'
})
export class PhotoSRCPipe implements PipeTransform {

  transform(value: string): string {
    let result;
    result = "../../../assets/"+value+".jpg"
    return null;
  }

}
