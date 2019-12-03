"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(person) {
        this.firstName = person.firstName;
        this.lastName = person.lastName;
        this.age = person.age;
    }
    Student.prototype.sayHi = function () {
        return "Hi from " + this.firstName + " " + this.lastName;
    };
    return Student;
}());
exports.Student = Student;
