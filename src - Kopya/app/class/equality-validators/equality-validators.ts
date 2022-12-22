import {AbstractControl} from "@angular/forms";

export class EqualityValidators {
  static addition(target: string, first: string, second:string) // değiken isimlerini belirtiyoruz
  {
      return (form : AbstractControl) => {
        const sum =  form.value[target];
        const firstNumber = form.value[first];
        const secondNumber = form.value[second];

        // const {firstNumber, secondNumber, answer} = form.value;
        // objenin içerisindeki propertylere bu şekilde ulaşabiliyoruz ve kod tekrarı yapmamış oluyoruz.

        if (firstNumber + secondNumber === parseInt(sum))
          // answer string değişken olduğu için hesaplamalarda parseInt ile Integer tipine çevirmemiz gerekiyor
        {
          return null;
        }
        return {addition: true};
      }

  }

}


