import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtml } from '@angular/platform-browser';
@Pipe({
  name: 'highlight'
})
export class Texthightlight implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) { }

  transform(list: any, searchText: string): SafeHtml {

    if (!list) { return []; }
    if (!searchText) { return list; }
    list = list.toLowerCase();
    searchText = searchText.toLowerCase();
    const value = list.replace(
      searchText, `<span style='background-color:green'>${searchText}</span>` );
    console.log('value  ', value,"   ",list,"   ",searchText);

    //return value;
    return this._sanitizer.bypassSecurityTrustHtml(value);
  }
}