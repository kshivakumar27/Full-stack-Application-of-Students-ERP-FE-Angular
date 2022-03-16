import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(values: any[]): any[] {
    return values.sort((a, b) => a.name.localeCompare(b.name));
  }
}
