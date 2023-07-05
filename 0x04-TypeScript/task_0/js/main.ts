// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students and populate the studentsList array
const student1: Student = {
  firstName: "Remedy",
  lastName: "Wealth",
  age: 21,
  location: "Lagos",
};

const student2: Student = {
  firstName: "Olando",
  lastName: "Smith",
  age: 26,
  location: "Abuja",
};

const studentsList: Student[] = [student1, student2];

// Render a table and append rows for each student in studentsList
const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = table.insertRow();

  const firstNameCell = row.insertCell();
  firstNameCell.textContent = student.firstName;

  const locationCell = row.insertCell();
  locationCell.textContent = student.location;
});

// Append the table to the document body
document.body.appendChild(table);
