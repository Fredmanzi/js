class Person {
    constructor(firstname, lastname, dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);

    }
    getfullName() {
        return `${this.firstname} ${this.lastname}`;
    }

    getDob() {
        return this.dob.getFullYear();
    }
}



const person1 = new Person('manzi', 'fred', '4-3-1993');
const person3 = new Person('steven', 'gashema', '4-3-1953');

console.log(person1.getfullName());

console.log(person3);