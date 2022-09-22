(()=>{
  let productTitle: string = 'My amazing product';
  // productTitle = null;
  // productTitle = () => {};
  // productTitle = 123;
  productTitle = 'My amazing product changed';
  console.log('productTitle', productTitle);

  const productDescription = 'bla bla bla sasa';
  console.log('productDescription', productDescription);

  let productPrice: number = 100;
  let isNew: boolean = false;

  const summary = `
    title:${productTitle}
    description:${productDescription}
    price:${productPrice}
    isNew:${isNew}
  `;
  console.log(summary);
  const myString: string = 'a';
})();
