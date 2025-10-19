function getSecondLargest(input1){
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    input1.forEach(inp=>{
        if(inp>firstLargest) {
            secondLargest = firstLargest;
            firstLargest = inp;
        } else if(inp>secondLargest && inp !== firstLargest) {
            secondLargest = inp;
        }
    });
    return secondLargest;
}