// Task 1 - Create an Employee Class
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    getDetails() {
        return `${this.name} works as a ${this.position} in the ${this.department} department and earns $${this.salary}.`;
    }
}

// Example usage:
const employee1 = new Employee("John Doe", 50000, "Developer", "Engineering");
console.log(employee1.getDetails());
//Create Employee class with properties and methods
