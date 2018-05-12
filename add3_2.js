/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  Важное условие - в строке могут быть только пробелы
  и символы букв и цифр!
*/

function findLongestWord(str){
    const arr = str.split(' ');
    const max = arr.length
    let longestWord = arr[0];
    for(i=0; i<max; i+=1){
        if (arr[i].length>longestWord.length){
            longestWord=arr[i];
        }
    }
    return longestWord;
}

// Вызовы функции для проверки
console.log(
    findLongestWord("The quick brown fox jumped over the lazy dog")
  ); // вернет 'jumped'
  
  console.log(
    findLongestWord("Google do a roll")
  ); // вернет 'Google'
  
  console.log(
    findLongestWord("May the force be with you")
  ); // вернет 'force'
  
  
  
  