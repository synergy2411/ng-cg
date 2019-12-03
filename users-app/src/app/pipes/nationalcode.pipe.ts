import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name : 'nationalcode'
})
export class NationalCodePipe implements PipeTransform{

  transform(value: any){
    return "+91 " + value;
  }
}
