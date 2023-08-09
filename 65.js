function findAddress(input_obj) {
    let output = "";

    if (input_obj.hasOwnProperty("street")) {
        output += input_obj.street + ",";
    } else {
        output += "__,";
    }

    if (input_obj.hasOwnProperty("house")) {
        output += input_obj.house + ",";
    } else {
        output += "__,";
    }

    if (input_obj.hasOwnProperty("society")) {
        output += input_obj.society;
    } else {
        output += "__";
    }

    return output;
}

// Sample input object
const sample_input_1 = {
    street: 10,
    house: "15A",
    society: "Earth Perfect"
};

const sample_input_2 = {
    street: 10,
    society: "Earth Perfect"
};

// Calling the function and logging the output
const output_1 = findAddress(sample_input_1);
console.log(output_1); // Output: 10,15A,Earth Perfect

const output_2 = findAddress(sample_input_2);
console.log(output_2); // Output: 10,__,Earth Perfect