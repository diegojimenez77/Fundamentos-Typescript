(()=>{
  const prices = [1,2,2,1,1,212,'hola', true, {}];
  prices.push('asas');
  prices.push(true);
  prices.push({});
  prices.push(121212);
  console.log(prices);

  let products = ['hola', true];
  products.push(false);
  console.log(products);

  let mixed: (number | string | boolean | object)[] = ['hola', true];
  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);
  console.log(mixed);

  let numbers = [1,2,2,1,1];
  let rta = numbers.map(item => item * 2);
  console.log(numbers);
  console.log(rta);
})();
