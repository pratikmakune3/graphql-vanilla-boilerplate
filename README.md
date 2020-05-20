# graphql-vanilla-boilerplate
Simple, plane vanilla boilerplate for graphql project using apollo-server-express 2

I'll be using following tools to setup vanilla graphql project boilerplate

  - node@12.14.1
  - yarn
  - apollo-server-express
  - body-parser
  - express
  - graphql
  - Babel for import, async await syntax support
  - eslint / eslint-config-airbnb
  - nodemon
  - sequelize

yarn add --dev nodemon babel-cli babel-preset-env babel-preset-stage-3

esLint setup - Advised to not set it up globally, install locallly

few quick steps to setup project -
  1. Node version 12.14.1
  2. MySQL installed on machine
  3. models/index.js - Make sure database username and password and configured correctly.
  4. Make sure to create database mentioned in models/index.js, prorail in this example
  5. yarn start

You're all setup!!!
