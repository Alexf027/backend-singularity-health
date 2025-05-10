import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type RegisteredUserResponse {
        id: ID!
        name: String!
        lastName: String!
        email: String!
    }

    input RegisterInput {
        name: String!
        lastName: String!
        username: String!
        email: String!
        password: String!
        isMilitar: Boolean!
        isTemporal: Boolean!
        documentNumber: String!
        typeDocumentId: Int!
        placeExpedition: String!
        dateExpedition: String!

        address: String!
        city: String!
        countryId: Int!
        phone: String!
        celPhone: String!
        emergencyName: String!
        emergencyPhone: String!
    }

    type Mutation {
        registerUser(data: RegisterInput!): RegisteredUserResponse!
    }

    type Query {
        _: Boolean
    }
`;
