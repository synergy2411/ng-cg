import { Person } from './person';

export class Student{
    private firstName : string;
    private lastName : string;
    private age : number;

    constructor(person : Person) {
        this.firstName = person.firstName;
        this.lastName = person.lastName;
        this.age = person.age;
    }

    sayHi() : string{
        return "Hi from "+  this.firstName + " " + this.lastName;
    }
}