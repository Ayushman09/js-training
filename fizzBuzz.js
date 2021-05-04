function checkFizzBuzz(lowerRange, upperRange) {
    for (var iterator = lowerRange; iterator < upperRange; iterator++) {
        if (iterator % 3 == 0) {
            if (iterator % 5 == 0) {
                console.log("FizzBuzz")
            } else {
                console.log("Fizz")
            }
        } else if (iterator % 5 == 0) {
            if (iterator % 3 == 0) {
                console.log("FizzBuzz")
            } else {
                console.log("Buzz")
            }
        } else {
            console.log("The number is " + iterator)
        }
    }
}

checkFizzBuzz(3, 18)