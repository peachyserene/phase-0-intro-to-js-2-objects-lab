// Write your solution in this file!
const employee ={
    jared: "13 Milton St.",
    emily: "452 South Bend Rd.",
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...obj,
        [key]: value,
      };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj
}

function deleteFromEmployeeByKey(employee, key){
    const remainingEmployees = {...employee};
    delete remainingEmployees[key];
    return remainingEmployees;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}