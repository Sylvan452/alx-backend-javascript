// Define the Student interface
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// Create 2 student objects
const student_1: Student = {
	firstName: "Obah",
	lastName: "Sylva",
	age: 35,
	location: "Abuja"
}

const student_2: Student = {
	firstName: "Maskoli",
	lastName: "Favour",
	age: 30,
	location: "Warri"
}

// Create an array of students
const studentsList = [student_1, student_2];

const table = document.getElementById('studentTable') as HTMLTableElement;

// Create a new row for each student and append it to the table
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})