// arguments object - no longer bound with arrow functions

const add =  (a, b) => {
    //console.log(arguments);
    return a + b;
}

console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Philly', 'NY', 'Dublin'],
    printPlacesLived() {
        /* const cityMessages = this.cities.map((city) => { */
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        /* {
            return this.name + ' has lived in ' + city;
        }); */
        /* return cityMessages; */

        /* this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city)
        }); */
    }
};
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    numbers: [1,2,3],
    multi: 2,
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the numbers have been multiplied
    multiply() {
        return this.numbers.map((number) => this.multi * number); 
    }
};

const dynamic_multiplier = {
    //numbers: [1,2,3],
    //multi: 2,
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the numbers have been multiplied
    multiply(numbers, multi) {
        return numbers.map((number) => multi * number); 
    }
};

console.log(multiplier.multiply());