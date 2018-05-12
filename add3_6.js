/*
  Создайте функцию removeFromArray(arr), 
  которая получает 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументов всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Удалите все элементы из исходного массива, 
  которые имеют такое же значение, что и аргументы.
*/

function removeFromArray(arr){
    const array=Array.from(arguments);
    const arr0=array[0];
    const arrLast=array.slice(1);
    let arrRes=[];
    let adder
    for(let i=0;i<arr0.length;i+=1){
        adder = true;
        for(let j=0; j<arrLast.length;j+=1){
            if(arrLast[j]==arr0[i]){
                adder = false;
                break;
            }
        }
        if (adder){
            arrRes.push(arr0[i])
        }
    }
    return arrRes
}

// Вызовы функции для проверки
console.log(
    removeFromArray([1, 2, 3, 4, 5], 2, 4)
  ); // вернет [1, 3, 5]
  
  console.log(
    removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
  ); // вернет [12, 8, 17]