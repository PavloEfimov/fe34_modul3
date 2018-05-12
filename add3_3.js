/*
  Создайте функцию titleCase(str), которая 
  получает строку и возвращает предоставленную строку 
  с первой буквой каждого слова, заглавными. 
  Остальные буквы слова должны быть не заглавными.
*/

function titleCase(str){
    let resStr=str.toLowerCase();
    let arr = resStr.split(' ');
    let max = arr.length;
    for (i=0; i<max; i+=1){
        arr[i]=arr[i][0].toUpperCase()+arr[i].slice(1)
    }
    let finalStr = arr.join(' ');
    return finalStr;
}

// Вызовы функции для проверки
console.log( 
    titleCase("I'm a little tea pot")
  ); // вернет "I'm A Little Tea Pot"
  
  console.log(
    titleCase("sHoRt AnD sToUt")
  ); // вернет "Short And Stout".
  
  console.log(
    titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")
  ); // вернет "Here Is My Handle Here Is My Spout".
  