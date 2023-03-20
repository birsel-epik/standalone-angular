import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "convert",
  standalone: true,
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, type: string): unknown {

    /* convert : 'm' tırnaklar içerisindeki değer args da tutulur.
    Tek parametre göndereceğimiz için type oalrak belirtiyoruz console.log(args)  */
    console.log(type)

    switch (type) {
      case 'km' :
        return value * 1.60934;
      case 'm' :
        return value * 1.60934*1000;
      case 'cm' :
        return value * 1.60934*1000*1000;
      default:
        throw new Error('There is no such value.');
    }

    return value * 1.60934;
  }

}
