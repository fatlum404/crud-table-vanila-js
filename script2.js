// "use strict";
// const students = [
//   { name: "Arsim", lastName: "Morinas", age: 26, gender: "male" },
//   { name: "Shaban", lastName: "Bujupi", age: 23, gender: "male" },
//   { name: "Fatlum", lastName: "Thaqi", age: 25, gender: "male" },
//   { name: "Florim", lastName: "Shala", age: 25, gender: "male" },
//   { name: "Besart", lastName: "Abdurrahmani", age: 30, gender: "male" },
//   { name: "Ardit", lastName: "Morina", age: 29, gender: "male" },
//   { name: "Ilmi", lastName: "Jerliuuuuuuuu", age: 32, gender: "male" },
//   { name: "Besim", lastName: "Morina", age: 45, gender: "male" },
//   { name: "Arber", lastName: "Morina", age: 26, gender: "male" },
//   { name: "Besnik", lastName: "Kryeziu", age: 26, gender: "male" },
//   { name: "Arsim", lastName: "Morina", age: 26, gender: "male" },
//   { name: "Shaban", lastName: "Bujupi", age: 23, gender: "male" },
//   { name: "Fatlum", lastName: "Thaqi", age: 25, gender: "male" },
//   { name: "Ardit", lastName: "Morina", age: 29, gender: "male" },
//   { name: "Ilmi", lastName: "Jerliuuuuuuuu", age: 32, gender: "male" },
//   { name: "Ardit", lastName: "Morina", age: 29, gender: "male" },
//   { name: "Ilmi", lastName: "Jerliuuuuuuuu", age: 32, gender: "male" },
// ];

// const tBody = document.querySelector("tbody");
// let newStudent = {};

// const submitButton = document.getElementById("button-form");
// const names = document.getElementById("name");
// const lastName = document.getElementById("last");
// const age = document.getElementById("age");
// const gender = document.getElementById("gender");

// // Functions;
// function tableContent() {
//   for (const [i, student] of students.entries()) {
//     const tableRow = document.createElement("tr");
//     tBody.appendChild(tableRow);

//     const checkCell = document.createElement("td");
//     checkCell.textContent = "";
//     tableRow.appendChild(checkCell);
//     /// ADD CHECKBOX
//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkCell.appendChild(checkbox);

//     const nrCell = document.createElement("td");
//     nrCell.textContent = i + 1;
//     tableRow.appendChild(nrCell);

//     const nameCell = document.createElement("td");
//     nameCell.textContent = student.name;
//     tableRow.appendChild(nameCell);

//     const lastNameCell = document.createElement("td");
//     lastNameCell.textContent = student.lastName;
//     tableRow.appendChild(lastNameCell);

//     const ageCell = document.createElement("td");
//     ageCell.textContent = student.age;
//     tableRow.appendChild(ageCell);

//     const genderCell = document.createElement("td");
//     genderCell.textContent = student.gender;
//     tableRow.appendChild(genderCell);
//   }
//   br;
// }
// tableContent();
// submitButton.addEventListener("click", addFromForm);
// function addFromForm() {
//   event.preventDefault();
//   newStudent = {
//     name: names.value,
//     lastName: lastName.value,
//     age: +age.value,
//     gender: gender.value,
//   };

//   if (
//     newStudent.name &&
//     newStudent.lastName &&
//     newStudent.age &&
//     newStudent.gender
//   ) {
//     students.push(newStudent);
//     console.log(newStudent);
//   } else {
//     alert("Fill all the fields first");
//   }
//   tableContent();
// }

// // students.forEach(function (student, i, students) {
// //   const tableRow = document.createElement("tr");
// //   tBody.appendChild(tableRow);

// //   const checkCell = document.createElement("td");
// //   checkCell.textContent = "";
// //   tableRow.appendChild(checkCell);
// //   /// ADD CHECKBOX
// //   const checkbox = document.createElement("input");
// //   checkbox.type = "checkbox";
// //   checkCell.appendChild(checkbox);

// //   const nrCell = document.createElement("td");
// //   nrCell.textContent = i + 1;
// //   tableRow.appendChild(nrCell);

// //   const nameCell = document.createElement("td");
// //   nameCell.textContent = student.name;
// //   tableRow.appendChild(nameCell);

// //   const lastNameCell = document.createElement("td");
// //   lastNameCell.textContent = student.lastName;
// //   tableRow.appendChild(lastNameCell);

// //   const ageCell = document.createElement("td");
// //   ageCell.textContent = student.age;
// //   tableRow.appendChild(ageCell);

// //   const genderCell = document.createElement("td");
// //   genderCell.textContent = student.gender;
// //   tableRow.appendChild(genderCell);
// // });
