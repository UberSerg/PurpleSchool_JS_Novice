const arr = [1, 40, -5, 10, 0];
console.log(`Исходный массив ${arr}`);

const sortArr = (arr) => {

    const arrayLength = arr.length; // Вычисляем длинну массива один раз, чтобы не делать это в каждой итерации)

    for (let index = 0; index < arrayLength - 1; index++) {

        for (let index2 = 0; index2 < arrayLength - 1 - index; index2++) {
          
            if (arr[index2] > arr[index2 + 1]) {
            
                let temperaryElement = arr[index2];
                arr[index2] = arr[index2 + 1];
                arr[index2 + 1] = temperaryElement;

          }
       
        }
   
    }
    return arr;
}
console.log(`Массив после сортировки ${sortArr(arr)}`);
