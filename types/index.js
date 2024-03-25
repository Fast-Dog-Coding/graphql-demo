const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require('graphql');

// Types
const studentType = new GraphQLObjectType({
  name: 'student',
  description: 'A `student` has an ID and a name. A `student` can be enrolled into one or more classes.',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  }
});

const instructorType = new GraphQLObjectType({
  name: 'instructor',
  description: 'An `instructor` has an ID and a name. An `instructor` can be assigned to one or more classes.',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  }
});

const classType = new GraphQLObjectType({
  name: 'class',
  description: 'A `class` has an ID, a name, a start date, an end date, an instructor, and optionally a list of students. A `class` will have one instructor and a list of 0 or more students.',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    instructor: { type: instructorType },
    students: { type: GraphQLList(studentType)}
  }
});

module.exports = { studentType, instructorType, classType };
