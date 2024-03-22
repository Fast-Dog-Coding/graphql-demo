const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require('graphql');

// Types
const studentType = new GraphQLObjectType({
  name: 'student',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  }
});

const instructorType = new GraphQLObjectType({
  name: 'instructor',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  }
});

const classType = new GraphQLObjectType({
  name: 'class',
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
