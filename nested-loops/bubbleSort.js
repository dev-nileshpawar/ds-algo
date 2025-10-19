const sortArray = (input)=>{
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < i; j++) {
            if(input[i] < input[j]) {
                const temp = input[j];
                input[j] = input[i];
                input[i] = temp;
            }
        }
    }
    return input;
}

const result = sortArray([2, 4, 5, 7, 8, 9, 0, 1, 1])
console.log(result)
// (9) [0, 1, 1, 2, 4, 5, 7, 8, 9]