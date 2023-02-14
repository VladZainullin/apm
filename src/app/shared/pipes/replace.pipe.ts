import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(value: string, oldString: string, newString: string): string {
    return value.replace(oldString, newString);
  }

}
