const express = require('express');
const cookieParser = require('cookie-parser');
const { createHandler } = require('graphql-http/lib/use/express');
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const app = express();

const {
  studentType,
  instructorType,
  classType
} = require('./types');

const resolvers = require('./resolvers');

// Schema
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => 'world',
      },
      students: {
        type: new GraphQLList(studentType),
        resolve: resolvers.students
      },
      instructors: {
        type: new GraphQLList(instructorType),
        resolve: resolvers.instructors
      },
      classes: {
        type: new GraphQLList(classType),
        resolve: resolvers.classes
      }
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createStudent: {
        type: studentType,
        args: {
          name: { type: GraphQLString }
        },
        resolve: resolvers.createStudent
      },
      createInstructor: {
        type: instructorType,
        args: {
          name: { type: GraphQLString }
        },
        resolve: resolvers.createInstructor
      },
      createClass: {
        type: classType,
        args: {
          name: { type: GraphQLString },
          startDate: { type: GraphQLString },
          endDate: { type: GraphQLString },
          instructorId: { type: GraphQLString },
        },
        resolve: resolvers.createClass
      },
      enrollStudent: {
        type: classType,
        args: {
          classId: { type: GraphQLString },
          studentId: { type: GraphQLString }
        },
        resolve: resolvers.enrollStudent
      }
    }
  })
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.all(
  '/graphql',
  createHandler({ schema })
);

module.exports = app;
