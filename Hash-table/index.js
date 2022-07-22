class HashTable {
    constructor() {
        this.table = new Array(127);
        this.size = 0;
    }
    _hash(key) {
        let hash = 0;
        let prop = typeof key === 'number' ? key.toString() : key
        for (let i = 0; i < prop.length; i++) {
            hash += prop.charCodeAt(i);
        }
        return hash % this.table.length;
    }
    set(key, value) {
        const index = this._hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                // Find the key/value pair in the chain
                if (this.table[index][i][0] === key) {
                    this.table[index][i][1] = value;
                    return;
                }
            }
            // not found, push a new key/value pair
            this.table[index].push([key, value]);
        } else {
            this.table[index] = [];
            this.table[index].push([key, value]);
        }
        this.size++;
    }
    get(key) {
        const target = this._hash(key);
        if (this.table[target]) {
            for (let i = 0; i < this.table.length; i++) {
                if (this.table[target][i][0] === key) {
                    return this.table[target][i][1];
                }
            }
        }
        return undefined;
    }
    remove(key) {
        const index = this._hash(key)
        if(this.table[index] && this.table[index].length) {
            for(let i=0; i < this.table.length; i++) {
                if(this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1)
                    this.size--
                    console.log(this)
                    return true
                }
            }
            return false
        } 
    }
    display() {
        this.table.forEach((values, index) => {
          const chainedValues = values.map(
            ([key, value]) => `[ ${key}: ${value} ]`
          );
          console.log(`${index}: ${chainedValues}`);
        });
    }
}


const hashTable = new HashTable()
console.log(hashTable.set("Nathan", "555-0182"))
console.log(hashTable.set("Eben", "85-84-84"))
console.log(hashTable.get("Eben"))
console.log(hashTable.display())