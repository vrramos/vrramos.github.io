const assert = require('assert')

// escreva aqui o seu código
class User {
    constructor(){
        this._name = "";
    }
    
    get name() {
        return this._name;
    } 
    
    set name(name){
        if(name === undefined || name === null) {
            name = "";
        } else {
           this._name = name;
        }
    }
}

let user1 = new User("Trybe")

assert.equal(typeof User.prototype, "object")
assert.ok(user1 instanceof User)
assert.equal(user1.name, "")

user1.name = undefined;
assert.equal(user1.name, "")

user1.name = null
assert.equal(user1.name, "")

user1.name = "Tryber"
assert.equal(user1.name, "Tryber")
