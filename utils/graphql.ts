import { gql } from "@apollo/client";

export const GET_CATEGORY = gql`
  query Category($index: Int) {
    category(query: {index: $index} ) {
      _id
      index
      name
      description
    }
  }
`;


