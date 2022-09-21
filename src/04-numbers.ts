(()=> {
let productPrice = 100;
productPrice = 12;//el tipo de dato es un number
console.log('productPrice', productPrice);

let customerAge: number = 28;
//customerAge = customerAge + '1'; // si lo ejecutamos en javascript nos daria 281
customerAge = customerAge + 1; //281
console.log('customerAge', customerAge);

let productInStock: number;
console.log('productInStock', productInStock); // marca un error porque la variable no ha sido asignada o inicializada.
if(productInStock > 10) {
  console.log('is greater');
}

let discount = parseInt('123');
console.log('discount', discount);
})();
