const findLargest = (input)=>{
    let largest = -Infinity;
    input.forEach(element => {
        
        if(largest<element && !Number.isNaN(element) && element) {
            largest = element
        }
    });

    return largest;
}

const result = findLargest([undefined, -1,-2,undefined,-34,null,-5,-22,0])
console.log(result)