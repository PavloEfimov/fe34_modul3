/*  
  Есть массив уникальных чисел uniqNumbers.
  
  Написать функцию, addUniqNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqNumbers только уникальные,
  а повторяющиеся игнорирует.
*/

let uniqNumbers  = [2, 1, 4, 9];
let booly;

function addUniqNumbers(){
    let arr =Array.from(arguments);
    for(let i=0;i<arr.length;i+=1){
        booly=false;
        for(let j=0;j<uniqNumbers.length;j+=1){
            if(uniqNumbers[j]==arr[i]){
                booly=true
                break;
            }
        }
        if(booly==false){
            uniqNumbers.push(arr[i]);
        } 
    }
}

// Вызовы функции для проверки
addUniqNumbers(1, 2, 3);
console.log(
  uniqNumbers
); // будет [2, 1, 4, 9, 3]

addUniqNumbers(12, 2, 3, 19);
console.log(
  uniqNumbers
); // будет [2, 1, 4, 9, 3, 12, 19]

addUniqNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(
  uniqNumbers
); // будет [2, 1, 4, 9, 3, 12, 19, 5, 8]