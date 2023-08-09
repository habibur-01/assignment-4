function cubeNumber(number) {

  if(typeof number !== 'number'){
    return 'Please provide a number';
  }
  else{
    // const result = number * number * number;
    const result = Math.pow(number, 3);
    return result;
  }
}




function matchFinder(string1, string2) {

  if (typeof string1 === 'string' && typeof string2 === 'string') {
      const match = string1.includes(string2);
      if (match == true) {
          return true;
      }
      else {
          return false;
      }
  }
  else {
      return 'Please give valid input';
  }
}



function sortMaker(arr) {
    
  if(arr[0] < 0 || arr[1] < 0){
      return 'Invalid Input';
  }
  else if(arr[0] == arr[1]){
      return 'equal';
  }
  else{
      if(arr[0] < arr[1]){
          const temp = arr[0];
          arr[0] = arr[1];
          arr[1] = temp;
          return arr;
      }
      else{
          return arr;
      }
  }
}



function findAddress(obj) {
  if(typeof obj !== 'object'){
      return 'please provide an object';
  }
  else{
      const street = obj.street || '__';
      const house = obj.house || '__';
      const society = obj.society || '__';
      
      return street + ',' + house + ',' + society;
  }
}



function canPay(changeArray, totalDue) {

  if (changeArray.length == 0) {
      return 'Please provide some element into array'

  }
  else {
      let sum = 0;
      for (i = 0; i < changeArray.length; i++) {
          const index = i;
          const element = changeArray[index];
          sum = sum + element;

      }
      
      if (sum >= totalDue) {
          return true;
      }
      else {
          return false;
      }
  }


}



