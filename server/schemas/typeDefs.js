const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    // what to put for book schema 
    savedBooks: [Book]!
  }

  type Book {
    bookId: String
    authors: [String]
    description: String
    image: String
    title: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: [String]!, description: String!, title: String!, bookId: String!, image: String!, link: String!): User
    removeBook(thoughtId: ID!): User
  }
`;

module.exports = typeDefs;
