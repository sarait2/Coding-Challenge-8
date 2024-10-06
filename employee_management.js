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

//Task 3 - Create a Manager Class that Inherits from Employee
class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department); // Call the parent class (Employee) constructor
        this.bonus = bonus;
    }

    getDetails() {
        // Override getDetails() to include the bonus
        return `${this.name} works as a ${this.position} in the ${this.department} department, earns $${this.salary} in addition to a bonus of $${this.bonus}.`;
    }
}

// Example usage:
const manager = new Manager("John Doe", 50000, "Manager", "Engineering", 8000);
console.log(manager.getDetails());
//Create Manager class with inheritance from Employee




