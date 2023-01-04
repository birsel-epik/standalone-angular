import { Component } from '@angular/core';
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-array-methods',
  standalone: true,
  templateUrl: './array-methods.component.html',
  imports: [
    JsonPipe
  ],
  styleUrls: ['./array-methods.component.scss']
})

export class ArrayMethodsComponent {
  pushMethod: any[] = [];
  popMethod: any[] = []

  elmaVar : boolean;
  armutVar : boolean;


  yeniAlisverisListem: any[] = [];

  stringAlisverisListem: string;
  stringAlisverisListem2: string;


  yiyecekler: any[] = [];
  icecekler: any[] = [];
  menu: any[] = [];


/*  malzemeler: any[] = [];
  malzeme: any = '';
  malzemeIndeksi: any = ''; */



  sayilar : any[] = [];
  sayilarin5kati : any[] = [];



  someSayilar: any[] = [];
  sonucSome1: boolean = false;
  sonucSome2: boolean = false;


  everySayilar: any[] = [];
  everySonuc1: boolean = false;
  everySonuc2: boolean = false;
  everySonuc3: boolean = false;



  filterSayilar: any[] = [];
  filtrelenmisSayilar: any[] = [];


  sortSayilar1: any[] = [];
  sortSayilar2 : any[] = [];


  reduceSayilar: any[] = [10,20,30];
  sonucReduce1: any[] = [];
  sonucReduce2: any[] = [];



  // Dizi içerisinde dizi oluşturma 1. Örnek
  piknikSepetim: any[] = [
    ['elma', 3],
    ['muz', 5],
    ['ekmek', 2]
  ];
  ilkEleman = this.piknikSepetim[0];
  ikinciEleman = this.piknikSepetim[1];
  ucuncuEleman = this.piknikSepetim[2];
  //const kacElma = this.piknikSepetim[0][1];


  ornekSayilar1: any[] = [];
  filterSayilarr: any[] = [];
  filterSayilar5Kat: any[] = [];


  ornekSayilar2: any[] = [3,6,9,14,16];
  sonucOrnek2: boolean;


  ornekSayilar3: any[] = [2,3,4];
  sonucOrnek3: any;
  ilkSayi: any;
  ikinciSayi: any;
  ucuncuSayi: any;



  constructor() {
    //push Method
    const pushMethod = ["elma", "ekmek", "süt"];
    pushMethod.push("yumurta");

    this.pushMethod = pushMethod;
    console.log(pushMethod);
    //Yeni Dizimiz ["elma","ekmek","süt","yumurta"] şeklinde olacaktır.



    //pop Method
    const popMethod = ["elma", "ekmek", "süt"];
    popMethod.pop();
    this.popMethod = popMethod;

    console.log(popMethod);
    // Yeni Dizimiz ["elma", "ekmek"] şeklinde olacaktır.
    // Son eleman olan "süt" diziden silinmiş olur.



    //includes Method
    const includesMethod = ["elma", "ekmek", "süt"];

    const elmaVar = includesMethod.includes("elma");
    this.elmaVar = elmaVar;
    console.log(elmaVar);
    //Dizi içerisinde elma olduğu için true yazdırmasını bekleriz.

    const armutVar
      = includesMethod.includes("armut");
    this.armutVar = armutVar;
    console.log(armutVar);
    //Dizi içerisinde armut olmadığı için false yazdırmasını bekleriz.




    //slice Method
    const sliceMethod = ["elma", "ekmek", "süt"];

    const yeniAlisverisListem = sliceMethod.slice(0,2);
    //"elma" dan başlayıp "süt"e kadar olan elemanları kopyala. "süt" dahil değil.
    this.yeniAlisverisListem = yeniAlisverisListem;

    console.log(yeniAlisverisListem);
    //["elma", "ekmek"] görmeyi bekleriz.



    //join Method
    const joinMethod = ["elma", "ekmek", "süt"];
    const stringAlisverisListem = joinMethod.join(' - ');
    console.log(stringAlisverisListem);
    //Çıktıda "elma - ekmek - süt" bekeleriz.
    this.stringAlisverisListem = stringAlisverisListem;

    const stringAlisverisListem2 = joinMethod.join(' ye, ');
    console.log(stringAlisverisListem2);
    this.stringAlisverisListem2 = stringAlisverisListem2;



    //concat Method
    const yiyecekler = ["pasta", "baklava", "puding"];
    const icecekler = ["su", "kahve"];

    const menu = yiyecekler.concat(icecekler);
    console.log(menu);

    this.yiyecekler = yiyecekler;
    this.icecekler = icecekler;
    this.menu = menu;
    //Çıktıda ["pasta", "baklava", "puding", "su", "kahve"] bekleriz.



    //forEach Method
    // Malzemeler dizisindeki her bir malzemeyi ve onun indeksini konsola yazdıran bir koda yazalım:
    const malzemeler = ["yumurta", "un", "süt"];
    malzemeler.forEach(function(malzeme, malzemeIndeksi)
      {
        console.log(malzeme, malzemeIndeksi);

        //this.malzemeler = malzemeler; Çalışmadı!!!
        //this.malzeme = malzeme;
        //this.malzemeIndeksi = malzemeIndeksi;
      });
    // console.log() fonksiyonu her bir malzeme için ayrı ayrı çalışacağından çıktı olarak tüm malzemeleri (ve indekxlerini) alt alta görürüz.



    //map Method
    //Bir dizideki sayıların 5 katından oluşan yeni bir dizi oluşturalım.
    const sayilar = [1,2,3];
    const sayilarin5kati = sayilar.map(function(sayi) {
      return sayi*5;
    })

    console.log(sayilarin5kati);
    this.sayilarin5kati = sayilarin5kati;
    //Çıktı olarak [5,10,15] görmeyi bekleriz.

    this.sayilar = sayilar;
    console.log(sayilar);
    //Çıktı olarak [1,2,3] görmeyi bekleriz. Orijinal dizimiz aynı kalır.



    //some Method
    const someSayilar = [4,5,6];
    //sonucu görebilmek için çıktıyı sonuc1 adlı değişkende tutalım.

    const sonucSome1 = someSayilar.some(function (someSayi)
    {
      return someSayi > 5;
    });
    this.someSayilar = someSayilar;

    this.sonucSome1 = sonucSome1;
    console.log(sonucSome1);
    //Dizi içerisinde 5'ten büyük bir eleman bulunduğu için çıktıda "true" görmeyi bekleriz.

    const sonucSome2 = someSayilar.some(function (sayi){
      return sayi<3;
    });

    this.sonucSome2 = sonucSome2;
    console.log(sonucSome2);
    //Dizi içerisinde 3'ten küçük herhangi bir sayı olmadığı için çıktıda "false" görmeyi bekleriz.



    //every Method
    const everySayilar = [4,5,6];
    const everySonuc1 = everySayilar.every(function(sayi){
      return sayi > 3;
    });

    this.everySayilar = everySayilar;

    this.everySonuc1 = everySonuc1;
    console.log(everySonuc1);
    //Dizideki tüm sayılar 3'ten büyük olduğu için bu sonucun true dönmesini bekleriz.

    const everySonuc2 = everySayilar.every(function(sayi){
      return sayi > 5;
    })

    this.everySonuc2 = everySonuc2;
    console.log(everySonuc2);
    //Dizideki tüm sayılar 5'ten büyük olmadığı için bu sonucun false dönmesini bekleriz.


    const everySonuc3 = everySayilar.every(function(sayi){
      console.log('sonucSome1');
      return sayi > 7;
    });

    this.everySonuc3 = everySonuc3;
    console.log(everySonuc3);
    //Dizideki hiç bir sayı 7'den büyük olmadığı için sonucun false dönmesini bekleriz.



    //filter Method
    const filterSayilar = [1,2,3,4,5];
    const filtrelenmisSayilar = filterSayilar.filter(function(sayi){
      return sayi >3;
    });

    this.filtrelenmisSayilar = filtrelenmisSayilar;
    console.log(filtrelenmisSayilar);
    // Orijinal diziyi 3'ten büyük olan sayılar için filtrelediğimizde yeni oluşacak dizi [4,5] olacaktır.

    this.filterSayilar = filterSayilar;
    console.log(filterSayilar);
    //Orijinal dizi bozulmayacağından çıktısa [1,2,3,4,5] olarak görürüz.



    //find Method
    const findSayilar = [4,5,6,7];

    const bulunacakEleman1 = findSayilar.find(function(sayi){
      return sayi === 5;
    });
    console.log(bulunacakEleman1);
    //Dizi içerisinde 5 eleman olarak bulunduğu için çıktıda elemanın kendisini yani 5 görmeyi bekleriz.


    const bulunacakEleman2 = findSayilar.find(function(sayi){
      return sayi > 5;
    });
    console.log(bulunacakEleman2);
    //Dizi içerisinde 5'ten büyük birden fazla eleman olduğu için koşula uyan ilk elemanı yani 6'yı görmeyi bekleriz.


    const bulunacakEleman3 = findSayilar.find(function (sayi){
      return sayi < 3;
    });
    console.log(bulunacakEleman3);
    //Dizi içerisinde 3'ten küçük bir eleman olmadığı için çıktıda undefined görmeyi bekleriz.



    //sort Metod
    const sortSayilar1 = [3,5,2,10,4];
    sortSayilar1.sort();

    this.sortSayilar1 = sortSayilar1;
    console.log(sortSayilar1);
    //Çıktı olarak [10,2,3,4,5] alırız.


    const sortSayilar2 = [3,5,2,10,4];
    sortSayilar2.sort(function(a,b){
      return b-a;
    });

    this.sortSayilar2 = sortSayilar2;
    console.log(sortSayilar2);
    //Çıktı oalrak [10,5,4,3,2] alırız.


    //reduce Metod
    const reduceSayilar = [10,20,30];

    // Dizi içerisindeki sayıları toplayarak indirgeyecek bir fonksiyon yazalım:
    function indirgeyici (accumulator: any, sayReduce: any){
      return accumulator + sayReduce;
    }

    //Bu fonksiyonu ve toplamaya 0'dan başlayacağımızı belirten 0 sayısını metodumuza parametre olarak girelim ve sonucu bir değişkende tutalım:
    const sonucReduce1 = reduceSayilar.reduce(indirgeyici, 0);

    this.sonucReduce1 = sonucReduce1;
    console.log(sonucReduce1);
    //0 + 10 + 20 + 30 = 60 olacağından çıktı olarak 60 bekleriz.

    //Eğer akümülatorümüzü 0 yerine 5'ten başlatsaydık çıkabilecek sonucu görelim:
    const sonucReduce2 = reduceSayilar.reduce(indirgeyici, 5);
    this.sonucReduce2 = sonucReduce2;
    console.log(sonucReduce2);

    //5 + 10 + 20 + 30 = 65 olacağından çıktı olarak 65 bekleriz.


    // Dizi içerisinde dizi oluşturma 2. Örnek
    const kalemlik = [];
    kalemlik[0] = ['Silgi', 2, 'mavi'];
    kalemlik[1] = ['Kalem', 3, 'kırmızı'];
    kalemlik[2] = ['Cetvel', 1, 'siyah'];

    console.log(kalemlik);
    //Çıktı olarak aşağıdaki gibi 3 eleman döner
    // [ ['Silgi', 2, 'mavi'], ['Kalem', 3, 'kırmızı'], ['Cetvel', 1, 'siyah'] ]

    //Bu dizi içerisinde silgiyi göstermek istersek:
    console.log(kalemlik[0][0]);
    //Kalemlik dizisinin ilk elemanın birinci elemanı döner yani 'silgi' dönmesini bekleriz.


    //Kalemlik içerisindeki silgilerin rengini görüntülemek istersek:
    console.log(kalemlik[0][2]);
    // Renk kalemlik dizisinin ilk elemanını üçüncü eleman olduğunda 'mavi' döner.



    //Örnek - 1
    const ornekSayilar1 = [2,5,8,11,15,17];
    this.ornekSayilar1 = ornekSayilar1;

    const filterSayilarr = ornekSayilar1.filter(function (sayiO){
      return sayiO > 10;
    });

    this.filterSayilarr = filterSayilarr;
    console.log(filterSayilarr);


    const filterSayilar5Kat = filterSayilarr.map(function (sayiF){
      return sayiF * 5;
    });

    this.filterSayilar5Kat = filterSayilar5Kat;
    console.log(filterSayilar5Kat);




    //Örnek - 2
    const ornekSayilar2= [3,6,9,14,16];

    const sonucOrnek2 = ornekSayilar2.some(function(sayiB){
      return sayiB > 5;
    })

    this.sonucOrnek2 = sonucOrnek2;
    console.log(sonucOrnek2, 'Beşten büyük bir eleman mevcut.')




    //Örnek - 3
    const ornekSayilar3 = [2,3,4];

    const ilkSayi = ornekSayilar3[0];
    const ikinciSayi = ornekSayilar3[1];
    const ucuncuSayi = ornekSayilar3[2];

    const sonucOrnek3 = ilkSayi * ikinciSayi * ucuncuSayi;
    this.sonucOrnek3 = sonucOrnek3;
    console.log(sonucOrnek3);



  }

}
