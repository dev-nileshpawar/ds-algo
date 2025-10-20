const binarySearch = (input, key, preMax)=>{
    const mid = Math.floor(input.length/2);
    if(input.length<=1 && input[mid] !==key) {
        return -1;
    }
    if(input[mid]==key) {
        return mid+preMax;
    }
    else if(key > input[mid]) {
        const newArray = input.slice(mid, input.length);
        console.log("2---",newArray)
        return binarySearch(newArray, key, preMax+mid)
    } else if (key < input[mid]) {
        const newArray = input.slice(0, mid);
        console.log("3---",newArray)
        return binarySearch(newArray, key, preMax)
    }

    return -1
}

const result = binarySearch([-123,0,1,3,4,5,7,7,89,90,123], 0, 0)
console.log(result)