// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  const employees = []; //Array to store employee data

  let loopVal = true; //loop will run as long as it returns true

  /*In this loop, prompt messages will pop up on website asking user to input data. Separate pop ups will appear consecutively for
  the user to enter a first name, a last name, and a salary amount. After each Enter Salary pop up, a confirmation box will appear 
  asking user if they are all finished. If they press OK, the loop will continue andthey will continue to see pop ups appear to enter data. 
  If they click cancel, the loop will end.*/
  while (loopVal) {  
    const firstName = prompt("Enter First Name");
    const lastName = prompt("Enter Last Name");
    let mySalary = parseFloat(prompt("Enter Your Salary"));
    if (isNaN(mySalary)) {//converts data entered to a number.
      mySalary = 0
    }
    const employee = { //employee object holding the information that will be put into the employees array.
      firstName: firstName,
      lastName: lastName,
      salary: mySalary,
    }
    employees.push(employee); //the content stored in the employee object is being "pushed" into the employees array.
    //Make code that will add the employee object to the employee array
    loopVal = confirm("All finished? Press Cancel!"); //confirmation box pops up so user can confirm when they are finished inputing data.
  }

  return employees
};

// Display the average salary
const displayAverageSalary = function (employees) {
  let salarySum = 0;

  for (let employee of employees) {
    salarySum = salarySum + employee.salary; //Adds employee.salary data to salarySum each time user inputs the data.
  }
  console.log("Average Salary:", salarySum/employees.length);  //This will display the average salary by dividing the total of what was entered by the how many employees were added.
}

// Select a random employee
const getRandomEmployee = function (employees) { 
   /*Math.random generates a random decimal between 1 and 0 and multiplies it by the number of employees in the array.
   Math.floor rounds it down to the nearest number so that it will be one of the numbers in the array and not a decimal.*/
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex]; //retrieves employee object from the employees array and assigns random employee selected to randomEmployee variable.
  console.log(`Congratulations ${randomEmployee.firstName} ${randomEmployee.lastName}, you've won!`); //displays this message alerting of the employee who has won the random drawing.
  
  // TODO: Select and display a random employee
}   

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
