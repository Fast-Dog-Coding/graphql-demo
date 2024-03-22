// Data
const students = [];
const instructors = [];
const classes = [];

// Dummy data initialization
students.push({ id: '1', name: 'Alice' });
students.push({ id: '2', name: 'Bob' });

instructors.push({ id: '1', name: 'Charlie' });
instructors.push({ id: '2', name: 'David' });

classes.push({ id: '1', courseName: 'Math', startDate: '2024-03-01', endDate: '2024-03-31', instructor: instructors[0], students: [students[0], students[1]] });

module.exports = { students, instructors, classes };
