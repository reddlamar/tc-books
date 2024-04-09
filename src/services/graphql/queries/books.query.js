import {gql} from '@apollo/client';

export const getBooks = gql`
  {
    books {
      id
      name
      publisher {
        id
        name
      }
      authors {
        id
        name
      }
    }
  }
`;
