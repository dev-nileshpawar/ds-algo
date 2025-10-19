/* for(let i =0;i<5; i++) {
    let str = ""
    for(let j=0; j<5; j++) {
        str+="*"
    }
    console.log(str)
}
console.log("======================================================")
for (let i = 0; i < 5; i++) {
    let row = ""
    for (let j = 0; j < i+1; j++) {
        row+="*"
    }
    console.log(row)   
}

console.log("======================================================")
for(let i =1; i<5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row+= j
    }
    console.log(row)
}

console.log("======================================================")

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row +=i;
    }
    console.log(row)
}
console.log("======================================================")

for (let i = 5; i >= 1; i--) {
    let row = ""
    for (let j = 1; j <= i; j++) {
        row+=j;        
    }
    console.log(row)
}
console.log("======================================================")

for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = i; j >= 1; j--) {
        row+= j
    }
    console.log(row)
}
console.log("================================================~")

for (let i = 1; i <= 5; i++) {
    let spaces = ""
    for (let j = 5; j >i; j--) {
        spaces += " ";
    }
    let stars = "";
    for (let k = 1; k <= i; k++) {
        stars += "*"
    }
    console.log(spaces+stars)
}


console.log("================================================~")
 */
const getDigitCount = (n, count)=>{
    if(n==0) return 1;

    n = Math.abs(n)
    const newNumber = Math.floor(Math.abs(n)/10)
    count+=1;
    if(newNumber!==0) {
        const newCount = getDigitCount(newNumber, count);
        return newCount;
    }

    return count;
}

console.log("2-----",getDigitCount(2.45, 0))

const countDigit1 = (num) =>{
    if(num==0) return 1;
    let count = 0;
    num = Math.abs(num)
    while (num>0) {
        num = Math.floor(Math.abs(num)/10)
        count++;
    }
    return count;
}
    console.log("2-----",countDigit1(-200.45,)) 