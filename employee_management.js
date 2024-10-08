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
const alice = new Employee("Alice", 80000, "Developer", "Engineering");
const bob = new Employee("Bob", 75000, "Designer", "Marketing");
const charlie = new Manager("Charlie", 120000, "Engineering Manager", "Engineering", 20000);
const diana = new Manager("Diana", 130000, "Marketing Manager", "Marketing", 25000);
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
             Error("Invalid object");
        }
    }

    getDepartmentSalary() {
        return this.employees.reduce((totalSalary, employee) => totalSalary + employee.salary, 0);
    }
}
// Create Department class to manage employees and calculate salary

//Task 3 - Create a Manager Class that Inherits from Employee
// Employee class
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;         
        this.salary = salary;     
        this.position = position; 
        this.department = department; 
    }

    // Method to get details of the employee
    getDetails() {
        return `${this.name} works as a ${this.position} in the ${this.department} department and earns $${this.salary} per year.`;
    }
}

// Manager class that inherits from Employee
class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department); // Call the parent constructor
        this.bonus = bonus; // Additional property for Manager's bonus
    }

    // getDetails method to include bonus
    getDetails() {
        return `${this.name} works as a ${this.position} in the ${this.department} department, earns $${this.salary} per year, with a bonus of $${this.bonus}.`;
    }
}
//Info of Employee
const Alice = new Employee("Alice", 80000, "Developer", "Engineering");
console.log(alice.getDetails());   // Details for Alice
//Create Manager class with inheritance from Employee

// Task 4 - Handle Bonuses for Managers
// Department class
class Department {
    constructor(name) {
        this.name = name;         // Name of the department
        this.employees = [];      // Array to store employees )
    }
    // Method to calculate total salary of all employees in the department
    getDepartmentSalary() {
        return this.employees.reduce((totalSalary, employee) => totalSalary + employee.salary, 0);
    }

    // Method to calculate total salary including bonuses for managers
    calculateTotalSalaryWithBonus() {
        return this.employees.reduce((totalSalary, employee) => {
            if (employee instanceof Manager) {
                return totalSalary + employee.salary + employee.bonus; // Add salary and bonus for managers
            }
            return totalSalary + employee.salary; // Add salary for regular employees
        }, 0);
    }
}
//Handle bonuses in the department salary calculation

// Task 5 - Create and Manage Departments and Employees

    // Method to calculate total salary of all employees in the department
    getDepartmentSalary() {
        return this.employees.reduce((totalSalary, employee) => totalSalary + employee.salary, 0);
    }

    // Method to calculate total salary including bonuses for managers
    calculateTotalSalaryWithBonus() {
        return this.employees.reduce((totalSalary, employee) => {
            if (employee instanceof Manager) {
                return totalSalary + employee.salary + employee.bonus; // Add salary and bonus for managers
            }
            return totalSalary + employee.salary; // Add salary for regular employees
        }, 0);
    }
// Create departments

const engineering = new Department("Engineering");

const marketing = new Department("Marketing");



// Create employees

const alice = new Employee("Alice", 80000, "Developer", "Engineering");

const bob = new Employee("Bob", 75000, "Designer", "Marketing");

const charlie = new Manager("Charlie", 120000, "Engineering Manager", "Engineering", 20000);

const diana = new Manager("Diana", 130000, "Marketing Manager", "Marketing", 25000);



// Add employees to departments

engineering.addEmployee(alice);

engineering.addEmployee(charlie);

marketing.addEmployee(bob);

marketing.addEmployee(diana);


// Calculate total salary for each department

console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`);

console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`);

console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);

console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);
//Create and manage departments and employees

