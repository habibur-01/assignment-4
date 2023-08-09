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
 const objt = {
    street:10,
    house:'15A',
    society:'Earth Perfect'
} 

const address = findAddress(objt);
console.log(address)

 const objt1 = {
    street:10,
   
} 

const address1 = findAddress(objt1);
console.log(address1)
