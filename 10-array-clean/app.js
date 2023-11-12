/* Напишите функцию, которая принимает:
-Массив чисел
-Фукнцию удаления элементов
И возвращает отфильтрованный массив. При этом функция ужадения элементов принимает 
число и возвращает true, если его надо удалить и false, если надо оставить */
const arr = [1,3,5,6,78,1,56436,12341,534,10]

const filterArr = (arr, deleteFunction) => {
    for (let el of arr) {
    console.log(`Элемент ${el} тип данных ${typeof el}`)
    if (typeof el === 'number') {
        let res = deleteFunction(el);
            if (res === true) {
                arr.splice(arr.indexOf(el), 1);
            }
        }
    }

    return arr;
}

const deleteFunction = (number) => {
    return number>100 ? true : false;
}

console.log(filterArr(arr,deleteFunction));