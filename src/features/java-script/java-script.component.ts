import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {parse} from "@angular/compiler-cli/linker/babel/src/babel_core";

@Component({
  selector: 'app-java-script',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './java-script.component.html',
  styleUrls: ['./java-script.component.scss']
})
export class JavaScriptComponent {

  example1: string = "30 Days Of JavaScript";
  example2: string = "Javascript String Metotları, String Parçalama Metotları";
  example3: string = "Alya Ada Epik";
  example4: string = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
  example5: string = "You cannot end a sentence with because because because is a conjunction";


  constructor() {

    const challenge = "30 Days Of JavaScript";
    const str = "Javascript String Metotları, String Parçalama Metotları"
    const ada = "Alya Ada Epik"
    const techCompanies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
    const lastIndex = challenge.length - 1;
    const sentence = "You cannot end a sentence with because because because is a conjunction";
    const trimSentence = "   You cannot end a sentence with because is a conjunction    ";
    const longSentence1 = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
    const longSentence2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

    const result = str.slice(10, 27)
    const resultReverse = str.slice(-37, -28)
    const resultSubstring = str.substring(28, 35)
    const replace = ada.replace('Alya', 'Birsel');
    const resultReplace = ada.split(" ");


    console.log('challenge:', challenge);
    console.log('challenge length:', challenge.length);

    console.log('challenge toLocaleUpperCase:', challenge.toLocaleUpperCase());
    console.log('challenge toLocaleLowerCase:', challenge.toLocaleLowerCase());

    console.log('challenge substr:', challenge.substr(0, challenge.indexOf(' '))); // boşluğa kadar olan ilk kelime
    console.log('challenge substr:', challenge.substr(challenge.indexOf(' ') + 1)); // boşluktan sonraki kelimeler

    console.log('string slice 1:', result);
    console.log('string slice 2:', resultReverse);

    console.log('string resultSubstring:', resultSubstring); // 1. parametre başlanacak karakter, 2. parametre kaçıncı karakteri alacağını bildirir. Son sayıyı almaz.

    console.log('string replace 1:', replace);
    console.log('string replace 2:', challenge.replace('JavaScript', 'Python'))

    console.log('string split 1:', resultReplace); // Stringi bir diziye dönüştürme
    console.log('string split 2:', challenge.split(' ')); // Stringini boşluktan bölme

    console.log('string resultReplace:', resultReplace[2]); //geriye dönen dizinin 2. elemanı

    console.log('string include 1:', ada.includes('Epik')); // belirtilen değerin dizi elemanları içerisinde olup olmadığına bakar. True / False döner
    console.log('string include 2:', str.includes('World'));

    console.log('string techCompanies:', techCompanies.split(', ')); //stringini virgülden bölüp diziye dönüştürme

    console.log('string charAt 1:', challenge.charAt(15)); // stringdeki 15. indexdeki karakter. (index 0 dan başlar)
    console.log('string charAt 2 lastIndex:', challenge.charAt(lastIndex)); // stingin sonuncu elemanın değerini alıyor
    console.log('string charAt 3:', challenge.charAt(challenge.length - 1)); // stingin sonuncu elemanın değerini alıyor

    console.log('string charCodeAt:', challenge.charCodeAt(challenge.indexOf('J'))); //  stringdeki 'J' karakterinin karakter kodu

    console.log('string indexOf:', challenge.indexOf('a')); // stringde 'a' harfinin ilk geçtiği konum
    console.log('string lastIndexOf 1:', challenge.lastIndexOf('a')) // stringde 'a' harfinin son geçtiği konum:

    console.log('string indexOf 2:', sentence.indexOf('because')); //cümlede 'because' kelimesinin ilk geçtiği konum
    console.log('string lastIndexOf 2:', sentence.lastIndexOf('because')) //cümlede 'because' kelimesinin son geçtiği konum

    console.log('string trim:', trimSentence.trim()); // stringin başındaki ve sonundaki boşlukları kaldırma

    console.log('string startsWith 1:', challenge.startsWith('30')); // stringinin belirli bir stringle başlayıp başlamadığını kontrol etme
    console.log('string startsWith 2:', challenge.startsWith('Birsel')); // False döner

    console.log('string endsWith 1:', challenge.endsWith('Birsel')); // stringinin belirli bir stringle bitip bitmediğini kontrol etme
    console.log('string endsWith 2:', challenge.endsWith('JavaScript')); // True döner

    console.log('string match 1:', challenge.match('a')); // stringindeki tüm 'a' harflerini bulma

    console.log('string concat 1:', (challenge.concat(' - ', ada))) //stringlerini birleştirme

    console.log('string concat 2:', (ada.repeat(3))) //stringini 3 kere yazdırma

    console.log('string longSentence 1:', longSentence1);
    console.log('string longSentence 2:', longSentence2);


    // '10' tipinin tam olarak 10'a eşit olup olmadığını kontrol edin. Eşit değilse, tam olarak eşitleyin:
    let num = 10;
    if (typeof num !== typeof 10) {
      num = Number(num);
    }
    console.log('num:', num, typeof num)


    //parseFloat('9.8')'in 10'a eşit olup olmadığını kontrol edin, eşit değilse 10'a eşitleyin:
    let floatNum = parseFloat('9.8');
    if (floatNum !== 10) {
      floatNum = Math.ceil(floatNum);
    }
    console.log('floatNum:', floatNum);


    //'on' kelimesinin hem python hem de jargon kelimesinde geçip geçmediğini kontrol edin:
    console.log('on kelimesinin geçip geçmediği:', 'phyton'.includes('on') && 'jargon'.includes('on'));


    // "I hope this course is not full of jargon." cümlesinde 'on' kelimesinin geçip geçmediğini kontrol edin:
    let sentence3 = "I hope this course is not full of jargon."
    console.log('sentence3', sentence3.includes('on'));


    //0 ile 100 arasında rastgele bir sayı oluşturun (100 ün de dahil olması için 101 yazıyoruz):
    console.log('random number 1:', Math.floor(Math.random() * 101));

    //50 ile 100 arasında rastgele bir sayı oluşturun:
    console.log('random number 2:', Math.floor(Math.random() * 51) + 50);

    //0 ile 255 arasında rastgele bir sayı oluşturun:
    console.log('random number 3:', Math.floor(Math.random() * 256));


    //'JavaScript' stringindeki karakterlere rastgele bir sayı kullanarak erişin:
    let js = "Javascript";
    let randomIndex = Math.floor(Math.random() * js.length);
    console.log('string random:', js[randomIndex]);

    //Aşağıdaki deseni yazdırmak için console.log() ve kaçış karakterlerini kullanın:
    console.log('string design:\n', "1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125");

    //Aşağıdaki cümleden "because because because" ifadesini çıkarmak için substr kullanın
    let fullSentence = 'You cannot end a sentence with because because because is a conjunction';
    let start = fullSentence.indexOf('because');
    let end = fullSentence.lastIndexOf('because') + 'because'.length;
    let becausePhrase = fullSentence.substr(start, end - start);
    console.log('becausePhrase:', becausePhrase);


    //Love is the best thing in this world. Some found their love and some are still looking for their love cümlesinde love kelimesinin kaç kere geçtiğini bulun:
    let sentence4 = 'Love is the best thing in this world. Some found their love and some are still looking for their love,';
    let count = (sentence4.match(/love/gi) || [].length);
    console.log('sentence Love:', count)


    //Aşağıdaki cümlede 'because' kelimesinin kaç kez geçtiğini sayın:
    let sentenceBecause = "You cannot end a sentence with because because because is a conjunction";
    let countBecause = (sentenceBecause.match(/because/g) || [].length);
    console.log('sentence Because:', countBecause);


    //Aşağıdaki metni temizleyin ve en sık kullanılan kelimeyi bulun:
    let messySentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
    let cleanSentence = messySentence.replace(/[^a-zA-Z ]/g, " ");

    let words: string[] = cleanSentence.split(' ');
    let wordCounts: { [word: string]: number } = {};

    for (let i = 0; i < words.length; i++) {
      if (words[i] !== '') {
        wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1;
      }
    }

    let maxWord: string = '';
    let maxCount: number = 0;

    for (let word in wordCounts) {
      if (wordCounts[word] > maxCount) {
        maxCount = wordCounts[word];
        maxWord = word;
      }
    }

    console.log(`Most frequent word is '${maxWord}' with count ${maxCount}`);


    // let messySentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
    // let cleanSentence = messySentence.replace(/[^a-zA-Z ]/g, " ");
    //
    // let words = cleanSentence.split(' ');
    // let wordCounts = {};
    // for (let i = 0; i < words.length; i++) {
    //   if(words[i] !== '') {
    //     wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1;
    //   }
    // }
    //
    // let maxWord = '';
    // let maxCount = 0;
    // for (let word in wordCounts){
    //   if(wordCounts[word] > maxCount) {
    //     maxCount = wordCounts[word];
    //     maxWord = word;
    //   }
    // }
    //
    // console.log(`Most frequent word is '${maxWord}' with count ${maxCount}`);


//Java Script Exercise - 3

    let firstName = "Birsel"
    let lastName = "Epik"
    let country = "Turkey"
    let city = "Istanbul"
    let age = 18
    let isMerried = "false"
    let year = 2023

    console.log('firstName: ', typeof firstName); // string
    console.log('lastName:', typeof lastName); // string
    console.log('country:', typeof country); // string
    console.log('city:', typeof city); // string
    console.log('age:', typeof age); // number
    console.log('isMerried:', typeof isMerried); // string
    console.log('year:', typeof year); // number

    console.log('10 tipinin 10\'a eşit olup olmadığını kontrol edin:', typeof '10' === typeof 10); // false

    console.log('9.8\'in  10\'a eşit olup olmadığını kontrol edin:', parseInt('9.8') === 10); // false

    // Truthy değer döndüren üç JavaScript ifadesi yazın
    console.log('Truthy değer -1:', !!"Merhaba"); // true
    console.log('Truthy değer -2:', !!1); // true
    console.log('Truthy değer -3:', !![]); // true


    // Falsy değer döndüren üç JavaScript ifadesi yazın
    console.log('Falsy değer -1', !!""); // false
    console.log('Falsy değer -2', !!0) // false
    console.log('Falsy değer -3', !!null) // false

    // Aşağıdaki karşılaştırma ifadelerinin sonuçlarını tahmin edin ve daha sonra console.log() kullanarak kontrol edin.
    console.log('4 > 3', 4 > 3); // true
    console.log('4 >= 3', 4 >= 3) //false
    console.log('4 < 3', 4 < 3); // false
    console.log('4 <= 3', 4 <= 3); //false
    console.log('4 == 4', 4 == 4); // true
    console.log('4 === 4', 4 === 4); // true
    console.log('4 != 4', 4 != 4); // false
    console.log('4 !== 4', 4 !== 4); // false
    //console.log('4 != "4"', 4 != '4'); // false
    //console.log('4 == "4"', 4 == '4'); // true
    //console.log('4 === "4"', 4 === '4'); // false


    console.log('Python ve jargon\'un uzunluğunu bulun ve sahte bir karşılaştırma ifadesi yapın:', 'phyton'.length != 'jargon'.length) // false

    const resultPhyton = 'phyton'.length;
    const resultJargon = 'jargon'.length;
    console.log('resultPhyton:', resultPhyton);
    console.log('resultJargon:', resultJargon);

    console.log('', resultPhyton != resultJargon); // false


    // Aşağıdaki ifadelerin sonuçlarını tahmin edin ve daha sonra console.log() kullanarak kontrol edin.
    console.log('4 > 3 && 10 < 12 :', 4 > 3 && 10 < 12) // true
    console.log('4 > 3 && 10 > 12 :', 4 > 3 && 10 > 12) // false
    console.log('4 > 3 || 10 < 12 :', 4 > 3 || 10 < 12) // true
    console.log('4 > 3 || 10 > 12 :', 4 > 3 || 10 > 12) // true
    console.log('!(4 > 3) :', !(4 > 3)) // false
    console.log('!(4 < 3) :', !(4 < 3)) // true
    console.log('!(false) :', !(false)) // true
    console.log('!(4 > 3 && 10 < 12) :', !(4 > 3 && 10 < 12)); // false
    console.log('!(4 > 3 && 10 > 12) :', !(4 > 3 && 10 > 12)) // true
    console.log('!(4 === 4) :', !(4 === 4)) // false
    console.log(' `On` kelimesi var mı?', 'dragon'.includes('on') && 'phyton'.includes('on')) // Hem dragon hem de phyton 'on' vardır
    console.log(' `On` kelimesi yok mu?', !('dragon'.includes('on') && 'phyton'.includes('on'))) // Hem dragon hem de phyton 'on' yoktur


    // Date nesnesini kullanarak aşağıdaki işlemleri yapın
    let date = new Date();
    console.log('getFullYear: ', date.getFullYear()); // Bugünün yılı
    console.log('getMonth :', date.getMonth() + 1); //  Bugünün ay numarası (getMonth() 0 tabanlıdır)
    console.log('getDate :', date.getDate()); // Bugünün tarihi
    console.log('getDay :', date.getDay()); // Bugünnü hafta numarası
    console.log('getHours :', date.getHours()); // Şu anki saat
    console.log('getMinutes :', date.getMinutes()); // Şu anki dakika
    console.log('getTime :', Math.floor(date.getTime() / 1000)); // 1 Ocak 1970'ten şu ana kadar geçen saniye sayısı


    // 1. Kullanıcıya bir üçgenin tabanını ve yüksekliğini girmesi için bir script yazın ve üçgenin alanını hesaplayın (alan = 0.5 x b x h)
    // Not: Consol da çalışıyor !!!
    /* let base = parseFloat(prompt("Tabanı girin: "));
     let height = parseFloat(prompt("Yüksekliği girin: "));
     let triangleArea  = 0.5 * base * height;
     console.log(`Üçgenin alanı ${triangleArea}`);*/


    // 2. Kullanıcıya bir üçgenin a, b ve c kenarlarını girmesi için bir script yazın ve üçgenin çevresini hesaplayın (çevre = a + b + c)
    // Not: Consol da çalışıyor !!!
    /*let sideA = parseFloat(prompt("A kenarını girin: "));
    let sideB = parseFloat(prompt("B kenarını girin: "));
    let sideC = parseFloat(prompt("C kenarını girin: "));
    let perimeter = sideA + sideB + sideC;
    console.log(`Üçgenin çevresi ${perimeter}`);*/


    // 3. Uzunluğu ve genişliği kullanıcıdan alın ve dikdörtgenin alanını (alan = uzunluk x genişlik) ve çevresini (çevre = 2 x (uzunluk + genişlik)) hesaplayın.
    // Not: Consol da çalışıyor !!!
    /*let lenght = parseFloat(prompt("Uzunluğu girin: "));
    let width = parseFloat(prompt("Genişliği girin: "));
    let area = lenght * width;
    let perimeter = 2 * (lenght * width);
    console.log(`Dikdörtgenin alanı ${area}, çevresi ${perimeter}`);*/


    // 4. Yarıçapı kullanıcıdan alın ve bir çemberin alanını (alan = pi x r x r) ve çevresini (c = 2 x pi x r) hesaplayın. Burada pi = 3.14.
    // Math.round ile sayıyı yuvarlıyoruz.
    // Not: Consol da çalışıyor !!!
   /* let radius = parseFloat(prompt("Yarıçapı girin: "));
    let area = Math.round(Math.PI * radius * radius);
    let circumference = Math.round(2 * Math.PI * radius);
    console.log(`Çemberin alanı ${area}, çevresi ${circumference}`);*/


    // 5. y = 2x - 2 denkleminin eğimini, x-kesim noktasını ve y-kesim noktasını hesaplayın.
    /*let slope = 2; // m
    let x_intercept = 1; // c / m
    let y_intercept = -2; // c
    console.log(`Eğim: ${slope}, x-kesim noktası: ${x_intercept}, y-kesim noktası: ${y_intercept}`);*/


    // 6. Eğim m = (y2-y1)/(x2-x1). (2, 2) noktası ile (6,10) noktası arasındaki eğimi bulun.
/*    let x1 = 2, y1 = 2;
    let x2= 6, y2= 10;
    let slope = (y2 - y1) / (x2 - x1);
    console.log(`Eğim: ${slope}`);*/


    // 7. y = x2 + 6x + 9 denkleminin değerini hesaplayın. Farklı x değerleri kullanmayı deneyin ve y'nin hangi x değerinde 0 olduğunu belirleyin.
    let x_values = [-3, 0, 1, 2, 3];
    for (let x of x_values) {
      let y = x*x + 6*x + 9;
      console.log(`x=${x}, y=${y}`);
    }
    // x=-3, y=0
    // x=0, y=9
    // x=1, y=16
    // x=2, y=25
    // x=3, y=36
    // y'nin 0 olduğu x değeri -3'tür.


    // 8. Kullanıcının saat başına ücreti ve saat sayısını girmesi için bir script yazın. Kişinin kazancını hesaplayın.
    /* let hours = parseFloat(prompt("Saat sayısını girin: "));
    let rate = parseFloat(prompt("Saat başına ücret girin: "));
    let pay = hours * rate;
    console.log(`Haftalık kazancınız ${pay}`); */



    // 9. İsminizin uzunluğu 7'den büyükse, isminiz uzun demektir, aksi takdirde isminiz kısa demektir.
   /* let name = prompt("İsminizi girin: ");
    let message = (name.length > 7) ? "İsminiz uzun" : "İsminiz kısa";
    console.log(message)*/


    // 10. Yağmurun yağıp yağmama durumu
    let isRaining1 = true
    isRaining1
      ? console.log("You need a rain coat")
      : console.log("No need for a rain coat")

    let isRaining2 = false
    isRaining2
      ? console.log("You need a rain")
      : console.log("No need for a rain coat")


    // 11. Adınızın uzunluğunu ve soyadınız uzunluğunu karşılaştırın ve hangisi uzunsa ona göre bir mesaj gösterin.
    /* let firstName2 = prompt("Adınızı girin: ");
    let lastName2 = prompt("Soyadınızı girin: ");
    let message = (firstName2.length > lastName2.length) ? `Adınız ${firstName2}, soyadınızdan ${lastName2} daha uzun.` : `Soyadınız ${lastName2} adınızdan ${firstName2} daha uzun` ;
    console.log(message) */


    // 12. myAge ve yourAge adında iki değişken tanımlayın ve değerler atayın. Daha sonra sizin yaşınızla onun yaşa arasındaki farkı hesaplayıp gösterin:
    /* let myAge = prompt("Yaşınızı girin");
    let yourAge = prompt("Arkadaşınızın yaşını girin");
    let message = ( myAge > yourAge ? "Ben senden daha yaşlıyım" : "Sen benden daha yaşlısın");
    console.log(message);

    let myAge2 = 70;
    let yourAge2 = 50;
    let message2 = (myAge2 > yourAge2 ? `Ben sizden ${myAge2 - yourAge2} yıl daha yaşlıyım` : "Ben senden daha yaşlıyım" );
    console.log(message2);*/


    // 13. Kullanıcının doğduğu yılı alın ve kullanıcı 18 yaşında veya daha büyükse kullanıcıya araba kullanma izni verin, değilse kullanıcının belirli bir süre beklemesi gerektiğini söyleyin.
/*    let birthYear = parseInt(prompt("Doğum yılınızı girin: "));
    let age = new Date().getFullYear() - birthYear;
    let message = (age >= 18) ? `Siz ${age} yaşındasınız. Araba kullanabilirsiniz.` : `Siz ${age} yaşındasınız. Araba kullanabilmek için ${18 - age} yıl beklemeniz gerekiyor.`;
    console.log(message);*/


    // 14. Kullanıcının yaşadığı yıl sayısını girmesi için bir script yazın. Bir kişinin yaşayabileceği saniye sayısını hesaplayın. Birinin sadece yüz yıl yaşadığını varsayın.
   /* let years = parseFloat(prompt("Kaç yıl yaşadınız: "));
    let seconds = years * 365 * 24 * 60 * 60;
    console.log(`Sen ${seconds} saniye yaşadın.`);*/


    // 15. Date objesini kullanarak aşağıdaki gibi okunabilir bir zaman formatları oluşturun:
    /* let date2 = new Date();

    let year2 = date2.getFullYear();
    let month2 = date2.getMonth() + 1;
    let day2 = date2.getDate();
    let hour2 = date2.getHours();
    let minute2 = date2.getMinutes();

    console.log(`YYYY-MM-DD HH:mm: ${year2}-${month2}-${day2}  ${hour2}:${minute2}`);
    console.log(`DD-MM-YYYY HH:mm: ${day2}-${month2}-${year2} ${hour2}:${minute2}`);
    console.log(`DD/MM/YYYY HH:mm: ${day2}/${month2}/${year2} ${hour2}:${minute2}`); */


    // 15. Date time objesini kullanarak okunabilir bir zaman formatı oluşturun. Saat ve dakika her zaman iki basamaklı olmalıdır (7 saat 07 ve 5 dakika 05 olmalıdır)
    // YYY-MM-DD HH:mm Örnek: 20220-01-02 07:05

    /*let date3 = new Date();
    let year3 = date3.getFullYear();
    let month3 = String(date3.getMonth() + 1).padStart(2, '0'); // ayı 2 basamaklı hale getirir
    let day3 = String(date3.getDate()).padStart(2, '0'); // günü 2 basamaklı hale getirir
    let hour3 = String(date3.getHours()).padStart(2, '0'); // saati 2 basamaklı hale getirir
    let minute = String(date3.getMinutes()).padStart(2, '0'); // dakikayı 2 basamaklı hale getirir

    console.log(`YYYY-MM-DD HH:mm: ${year3}-${month3}-${day3} ${hour3}:${minute}`)*/


  }

}
