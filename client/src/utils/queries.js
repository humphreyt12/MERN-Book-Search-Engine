// This will hold the query `GET_ME`, which will execute the `me` query set up using Apollo Server.
import { gql } from '@apollo/client';

export const QUERY_GET_ME = gql`
    query me {
        me{
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }  
    }
`;
