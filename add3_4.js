/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

function findLargestNumber(numbers){
    const max = numbers.length;
    let maxNumber = numbers[0];
    for(let i=1; i<max; i+=1){
        if(numbers[i]>maxNumber){
            maxNumber = numbers[i]
        }    
    }
    return maxNumber
}

// Вызовы функции для проверки
console.log(
    findLargestNumber([1, 2, 3])
  ); // вернет 3
  
  console.log(
    findLargestNumber([27, 12, 18, 5])
  ); // вернет 27
  
  console.log(
    findLargestNumber([31, 128, 14, 74])
  ); // вернет 128
  