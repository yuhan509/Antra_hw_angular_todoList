import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summaryTitle'
})
export class SummaryTitlePipe implements PipeTransform {

  transform(value: string, limit:number ): string {
    return value.slice(0, limit) + "...";
  }

}
