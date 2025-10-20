const reverseSignedNumber = (input)=>{
    let reverse = 0;
    let isPositive = input>0 ? true: false;
    input = Math.abs(input);
    while(input>0){
        const rem = input%10;
        reverse = (reverse*10)+rem;
        input = Math.floor(input/10)
    }
    return isPositive ? reverse : -reverse;
}

const result = reverseSignedNumber(-123456)
console.log(result)

const result1 = reverseSignedNumber(123456)
console.log(result1)