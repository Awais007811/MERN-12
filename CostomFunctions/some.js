const array =[1,3,5,6,8];

function customSome(array,callback){

   let result ;
   
   for (let index = 0; index < array.length; index++) {
      result = callback(array[index]);
       
   }

   return result;
}
const sum=(item)=>item>1;
const result = customSome(array,sum);
console.log(result);
