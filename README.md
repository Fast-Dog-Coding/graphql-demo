# graphql-demo
A GraphQL demo built in Node.js with Express.

## Installation

1. Clone the repo locally
2. Run `npm i`

## Try it out
1. Run `npm run start`
2. Try some cURL calls:
```shell
curl --request POST \
--url http://localhost:4000/graphql \
--header 'Content-Type: application/json' \
--data '{"query":"query students {students {id, name}}","operationName":"students"}'
```

```shell
curl --request POST \
  --url http://localhost:4000/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"mutation Mutation {\n  createStudent(name: \"Eve\") {\n    id\n    name\n  }\n}","operationName":"Mutation"}'
```
