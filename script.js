"use strict";

let students = [];

//Elements----------
const editButton = document.getElementById("edit-button");
const delButton = document.getElementById("delete-button");
const submitButton = document.getElementById("button-form");
const [fullName, company, address, zipcode] = document.querySelectorAll(
  "#name, #company, #address, #zipcode"
);
const tHead = document.querySelectorAll("th");
const tBody = document.querySelector("tbody");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let studentsToEdit = [];
let newStudent = {
  name: "",
  company: {},
  address: {},
};
let studentIndextoEdit;
let editMode = false;

function fetchData() {
  fetch("https://reqres.in/api/users");
}

fetchData();

//GET THE USERS FROM THE API AND SHOW THEM ON THE TABLE:
const getUsers = async function () {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    students = [...data];
    addtoTable();
  } catch (err) {
    console.error(err);
  }
};
getUsers();

//CREATE A NEW USER FROM THE FORM AND SEND IT BACK WITH "POST"
const createUser = async function () {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: newStudent,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await response.json();
    createStudent();
    console.log(json);
  } catch (err) {
    console.error(err);
  }
};
const editUser = async function () {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: studentsToEdit[0],
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await response.json();
    editStudent();
  } catch (err) {
    console.error(err);
  }
};

const deleteUser = async function () {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};
////////////////////////FUNCTIONS//////////////////////////
//Clear the form after Submitting:
let clearForm = function () {
  fullName.value = "";
  company.value = null;
  address.value = null;
  zipcode.value = "";
};

//Main Function to show the users on the Table:
function addtoTable() {
  tBody.innerHTML = "";
  for (let i = 0; i < students.length; i++) {
    const tableRow = document.createElement("tr");
    tBody.appendChild(tableRow);

    const checkCell = document.createElement("td");
    checkCell.textContent = "";
    tableRow.appendChild(checkCell);
    /// ADD CHECKBOX
    const checkbox = document.createElement("input");
    checkbox.classList.add("checky");
    checkbox.type = "checkbox";
    checkCell.appendChild(checkbox);
    checkbox.addEventListener("click", whenCheckboxClicked);

    const nrCell = document.createElement("td");
    nrCell.textContent = i + 1;
    tableRow.appendChild(nrCell).classList.add("nrCell");

    const nameCell = document.createElement("td");
    nameCell.textContent = students[i].name;
    tableRow.appendChild(nameCell);

    const companyNameCell = document.createElement("td");
    companyNameCell.textContent = students[i].company.name;
    tableRow.appendChild(companyNameCell);

    const addressCell = document.createElement("td");
    addressCell.innerHTML = `Str. ${students[i].address.street}<br> ${students[i].address.zipcode}`;
    tableRow.appendChild(addressCell);
  }
}
addtoTable();
// Adding OR Editing student from form:
function addFromForm() {
  event.preventDefault();
  if (!editMode) {
    createUser();
  } else {
    editUser();
    editMode = false;
  }
}
// Creating a new Student From the form:
function createStudent() {
  newStudent.name = fullName.value;
  newStudent.company.name = company.value;
  newStudent.address.street = address.value;
  newStudent.address.zipcode = zipcode.value;

  if (newStudent.name && newStudent.company && newStudent.address.zipcode) {
    students.push(newStudent);
    newStudent = {};
    addtoTable();
    clearForm();
    console.log(newStudent);
  } else {
    alert("Fill all the fields first");
  }
}
//Editing a student from form:
function editStudent() {
  let foundStudent = studentsToEdit[0];
  if (fullName.value && company.value && address.value && zipcode.value) {
    foundStudent.company.name = company.value;
    foundStudent.address.street = address.value;
    foundStudent.address.zipcode = zipcode.value;
    const studentIndex = students.indexOf(foundStudent);
    students.splice(studentIndex, 1, foundStudent);
    addtoTable();
    clearForm();
    studentsToEdit = [];
  }
}
//When the Checkbox is clicked, OR Unclicked:
function whenCheckboxClicked(e) {
  let idNumber =
    +this.parentNode.parentNode.querySelector(".nrCell").textContent;
  let foundStudent = students.find((x, index) => index + 1 === idNumber);
  if (this.checked === true) {
    studentsToEdit.push(foundStudent);
  } else {
    const studentIndex = studentsToEdit.indexOf(foundStudent);
    studentsToEdit.splice(studentIndex, 1);
    clearForm();
  }
}
//When the EDIT button is clicked:
const fillForm = function () {
  if (studentsToEdit.length > 1) {
    alert("cant edit multiple students");
  } else if (studentsToEdit.length === 1) {
    const student = studentsToEdit[0];

    fullName.value = student.name;
    company.value = student.company.name;
    address.value = student.address.street;
    zipcode.value = student.address.zipcode;
    editMode = true;
  }
};

//Delete student from the main array:
function deleteStudent() {
  for (let i = 0; i < studentsToEdit.length; i++) {
    let found = students.find((x) => x.id === studentsToEdit[i].id);
    let index = students.indexOf(found);
    deleteUser();
    students.splice(index, 1);
  }
  studentsToEdit = [];
  addtoTable();
}

let sortDirection = 1; // 1 for ascending, -1 for descending

function sortTable(column) {
  const field = column.toLowerCase().replace(" ", "_");
  students.sort((a, b) => {
    let comparison;
    if (typeof a[field] === "string" && typeof b[field] === "string") {
      comparison = a[field].localeCompare(b[field]);
    } else {
      comparison = a[field] - b[field];
    }
    return sortDirection * comparison;
  });
  addtoTable();
  sortDirection *= -1; // Toggle the sort direction
}

////////////////////////EVENT HANDLERS//////////////////////////
tHead.forEach((cell, index) => {
  if (index === 2) {
    cell.addEventListener("click", () => {
      sortTable(cell.textContent);
      tHead.forEach((cell) =>
        cell.classList.remove("sorted-asc", "sorted-dsc", "color")
      );
      if (sortDirection === 1) {
        cell.classList.add("sorted-asc", "color");
      } else {
        cell.classList.add("sorted-dsc", "color");
      }
    });
  }
});

//When you Click the Delete Button:
delButton.addEventListener("click", deleteStudent);
//When you Click SUBMIT button:
submitButton.addEventListener("click", addFromForm);
//When you Click the Edit Button
editButton.addEventListener("click", fillForm);
///Selecting all checkboxes:
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", whenCheckboxClicked)
);
////////////////////////GLOBALY CALLED FUNCTIONS//////////////////////////
