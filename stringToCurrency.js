class ToCurrencyString {
    #total = 0
    hundreds (val) {
        if(!Number.isNaN(val)) {
            this.#total+=val*100;    
        }
        return this;
    }
    tens (val) {
        if(!Number.isNaN(val)) {
            this.#total+=val*10;    
        }
        return this;
    }
    units (val) {
        if(!Number.isNaN(val)) {
            this.#total+=val;    
        }
        return this;
    }
    thousand (val) {
        if(!Number.isNaN(val)) {
            this.#total+=val*1000;    
        }
        return this;
    }
    value () {
        return this.#total;
    }
}


const result = new ToCurrencyString().hundreds(5).tens(3).thousand(5).value()
console.log(result) //5530