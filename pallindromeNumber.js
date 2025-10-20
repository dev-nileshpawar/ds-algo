const num = 111222111;

const checkPallindrome = (input)=>{
    let reverse = 0;
    let n = input;
    while (n!==0) {
        const rem = n%10;
        console.log('1------',{reverse, n , rem})
        reverse=(reverse*10)+rem;
        console.log('2------',{reverse, n , rem})
        n = Math.floor(n/10)
        console.log("=========================================");
        
    }
    console.log({reverse, input})
    return reverse == input;
}

const result1 = checkPallindrome(num);
console.log(result1)

const result2 = checkPallindrome(234323432);
console.log(result2)