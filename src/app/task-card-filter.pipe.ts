import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'taskCardFilter'})
export class TaskCardFilterPipe implements PipeTransform {
  transform(items: any[], field: string): any[] {
    if (!items) {
      return [];
    }
    const test = items.filter((i) => {
      return i.parent === field;
    });
    return test;
  }
}
