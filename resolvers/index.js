const data = require('../data')

const students = () => data.students;

const instructors = () => data.instructors;

const classes = () => data.classes;

const createStudent = (_, { name }) => {
  const { students } = data;
  const id = (students.length + 1).toString();
  const newStudent = { id, name };
  students.push(newStudent);
  return newStudent;
};

const createInstructor = (_, { name }) => {
  const { instructors } = data;
  const id = (instructors.length + 1).toString();
  const newInstructor = { id, name };
  instructors.push(newInstructor);
  return newInstructor;
};

const createClass = (_, { name, startDate, endDate, instructorId }) => {
  const { classes, instructors } = data;
  const id = (classes.length + 1).toString();
  const instructor = instructors.find(i => i.id === instructorId);
  if (!instructor) {
    throw new Error(`Instructor (${instructorId}) not found`);
  }
  const newClass = { id, name, startDate, endDate, instructor, students: [] };
  classes.push(newClass);
  return newClass;
};

const enrollStudent = (_, { classId, studentId }) => {
  const { classes, students } = data;
  const targetClass = classes.find(i => i.id === classId);
  if (!targetClass) {
    throw new Error(`Class (${classId}) not found`);
  }
  const student = students.find(i => i.id === studentId);
  if (!student) {
    throw new Error(`Student (${studentId}) not found`);
  }
  targetClass.students.push(student);
  return targetClass;
};

module.exports = {
  students,
  instructors,
  classes,
  createStudent,
  createInstructor,
  createClass,
  enrollStudent
};
