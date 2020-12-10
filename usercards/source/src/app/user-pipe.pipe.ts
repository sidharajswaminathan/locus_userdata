import { Pipe, PipeTransform } from '@angular/core';
import { Users, userList } from './userdata';
const { isArray } = Array;

@Pipe({
  name: 'userPipe'
})
export class UserPipePipe implements PipeTransform {
  transform(userdata: Users[], find: string): Users[] {
    if(!userdata) return [];
    if(!find) return userdata;
    find = find.toLowerCase();
    //return (search( userdata, find) == '' ? [] : search( userdata, find));
    console.log(search( userdata, find),"   search( userdata, find)  ",Object.keys(userdata));
    return search( userdata, find);
   }
}

function search(entries: any[], search: string) {

  search = search.toLowerCase();

  return entries.filter(function (obj) {
    const keys: string[] = Object.keys(obj);
    return keys.some(function (key) {
      const value = obj[key];
      
      if (isArray(value)) {
        
        return value.some(v => {
          
          return value.forEach(v => {
            //console.log(key,"is    ",value,"   ",v['product'].toLowerCase().includes(search) )
            return v['product'].toLowerCase().includes(search);
          })
        });
      }
      else if (!isArray(value)) {
        if(key === 'pincode' && !value.toLowerCase().includes(search)){
          return ''; 
        } else {
          console.log("string value is   ",value.toLowerCase().includes(search));
          return value.toLowerCase().includes(search);
        }
      }
    })
  });
}