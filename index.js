/* Your Code Here */

function createEmployeeRecord(employeeArray) {
    let employeeObj = {
        firstName:      employeeArray[0],
        familyName:     employeeArray[1],
        title:          employeeArray[2],
        payPerHour:     employeeArray[3],
        timeInEvents:                 [],
        timeOutEvents:                []
    }
    return employeeObj
}

function createEmployeeRecords(employeesArray) {
    return employeesArray.map(createEmployeeRecord)
}

function createTimeInEvent(timeStr) {
    this.timeInEvents.push({
        type: "TimeIn",
        date: timeStr.split(" ")[0],
        hour: parseInt(timeStr.split(" ")[1])
    })

    return this
}

function createTimeOutEvent(timeStr) {
    this.timeOutEvents.push({
        type: "TimeOut",
        date: timeStr.split(" ")[0],
        hour: parseInt(timeStr.split(" ")[1])
    })

    return this
}

function hoursWorkedOnDate(date) {
    let timeIn  = this.timeInEvents.filter(e => e.date == date)[0];
    let timeOut = this.timeOutEvents.filter(e => e.date == date)[0];
    return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(date) {
    return (hoursWorkedOnDate.call(this, date)*this.payPerHour)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

/* Your Code Here */

function calculatePayroll(employeesArray) {
    return employeesArray.reduce(function(memo, employeeObj) {
        return memo + allWagesFor.call(employeeObj)
    }, 0)
}

function findEmployeeByFirstName(employees, firstName) {
    return employees.find(function(employee){
        return employee.firstName == firstName
    })
}