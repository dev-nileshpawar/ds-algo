function flattenObject(inputObj, prevKey, res){
    Object.keys(inputObj).forEach(key=>{
        const currentKey = prevKey ? prevKey+"." + key : "" + key
        if(typeof inputObj[key] == "object") {
            flattenObject(inputObj[key], currentKey, res);
        } else {
            res[currentKey] = inputObj[key]
        }
    })

    return res;
}

const obj = {a:{b: 3}, c: 4, d: {e: 45, f: 564, g: 76}, h:[4,6,3]}

console.log(flattenObject(obj, "", {}))
//output
/* {
  'a.b': 3,
  c: 4,
  'd.e': 45,
  'd.f': 564,
  'd.g': 76,
  'h.0': 4,
  'h.1': 6,
  'h.2': 3
} */