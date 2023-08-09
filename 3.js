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
const array = [4, 2];
const output = sortMaker(array);
console.log(output);