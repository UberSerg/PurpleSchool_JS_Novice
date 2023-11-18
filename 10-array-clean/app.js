const arr = [1,3,5,6,78,1,56436,12341,534,10];

const filterArr = (arr, checkingForDeleting) => {
  return arr.filter((el) => typeof el === 'number' && !checkingForDeleting(el));
};

const checkingForDeleting = (number) => {
    return number > 100 ? true : false;
  };
  
console.log(filterArr(arr, checkingForDeleting));