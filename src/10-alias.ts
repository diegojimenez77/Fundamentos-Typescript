(()=>{
  type UserID = string | number | boolean;
  let userId: UserID;

  function greeting(userId: UserID){
    if(typeof userId === 'string'){
      console.log(`string ${userId.toLowerCase()}`);
    }
  }

  //Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = 's';

  function greeting2(userId: Sizes){
    if(typeof userId === 'string'){
      console.log(`string ${userId.toLowerCase()}`);
    }
    greeting2(1111, 'S');
    greeting2('1111', 'XL');

})();
