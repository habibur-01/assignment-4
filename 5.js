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
        //    return sum;
        if (sum >= totalDue) {
            return true;
        }
        else {
            return false;
        }
    }


}
const taka = []
const chipsPrice = 10
const youCanGetChips = canPay(taka, chipsPrice)
console.log(youCanGetChips)
const taka1 = [1, 2, 5]
const chipsPrice1 = 10
const youCanGetChips1 = canPay(taka1, chipsPrice1)
console.log(youCanGetChips1)
