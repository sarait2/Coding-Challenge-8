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

//Task 2 - Create a Department Class
class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee) {
        if (employee instanceof Employee) {
            this.employees.push(employee);
        } else {
            throw new Error("Invalid employee object");
        }
    }

    getDepartmentSalary() {
        return this.employees.reduce((totalSalary, employee) => totalSalary + employee.salary, 0);
    }
}
// Create Department class to manage employees and calculate salary
