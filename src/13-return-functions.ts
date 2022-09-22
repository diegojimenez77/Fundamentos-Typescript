(()=>{
 const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  }
  const rta = calcTotal([1,2,1,1,1]);
  console.log(rta);

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  }
  printTotal([1,2,1,1,1]);

})();
