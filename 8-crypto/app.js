const crypto= (password, mode = 0) => {
//Если режим не передан идёт шифрование. 
passwordArray = password.split("");
    if (mode === 0) {
        passwordArray.push(passwordArray.shift());
        passwordArray = passwordArray.reverse();
        return passwordArray.join('');
    }
    passwordArray = passwordArray.reverse();
    passwordArray.unshift(passwordArray.pop())
    return passwordArray.join('');    
}
const check = (cryptedpassword, uncryptedpassword) => true ? crypto(cryptedpassword,1)===uncryptedpassword : false;
console.log(check("Какшуку", "Кукушка")); //true
console.log(check("Ракшука", "Ракушка")); //true
console.log(check("уукушка", "Ракушка")); //false
