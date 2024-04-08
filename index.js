// Employee records
let employeeRecords = [];

// Helper functions
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  return {
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  };
}

function createEmployeeRecords(employeeData) {
  return employeeData.map(createEmployeeRecord);
}

function createTimeInEvent(employee, dateStamp) {
  let [date, hour] = dateStamp.split(' ');
  employee.timeInEvents.push({
    type: 'TimeIn',
    hour: parseInt(hour, 10),
    date
  });
  return employee;
}

function createTimeOutEvent(employee, dateStamp) {
  let [date, hour] = dateStamp.split(' ');
  employee.timeOutEvents.push({
    type: 'TimeOut',
    hour: parseInt(hour, 10),
    date
  });
  return employee;
}

function hoursWorkedOnDate(employee, date) {
  let timeIn = employee.timeInEvents.find(event => event.date === date).hour;
  let timeOut = employee.timeOutEvents.find(event => event.date === date).hour;
  return (timeOut - timeIn) / 100;
}

function wagesEarnedOnDate(employee, date) {
  let hoursWorked = hoursWorkedOnDate(employee, date);
  return hoursWorked * employee.payPerHour;
}

;
  return datesWorked.reduce((total, date) => total + wagesEarnedOfunction allWagesFor(employee) {
    let datesWorked = employee.timeInEvents.map(event => event.date);
    return datesWorked.reduce((total, date) => total + wagesEarnedOnDate(employee, date), 0);
  }
  nDate(employee, date), 0);
}

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(employee => employee.firstName === firstName);
}

function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((totalPay, employee) => totalPay + allWagesFor(employee), 0);
}

// Example usage
let employeeData = [
  ["Thor", "Odinsson", "Electrical Engineer", 45],
  ["Loki", "Laufeysson-Odinsson", "HR Representative", 35]
];
employeeRecords = createEmployeeRecords(employeeData);
createTimeInEvent(employeeRecords[0], "2024-04-01 0800");
createTimeOutEvent(employeeRecords[0], "2024-04-01 1700");
createTimeInEvent(employeeRecords[1], "2024-04-01 0900");
createTimeOutEvent(employeeRecords[1], "2024-04-01 1800");
console.log(allWagesFor(employeeRecords[0])); // Output: 360
console.log(calculatePayroll(employeeRecords)); // Output: 1350


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

