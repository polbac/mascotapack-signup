import { gql } from '@apollo/client';

export const MUTATION_NEWSLETTER = gql`
  mutation createNewsletter($email: String){
    createNewsletter(input: { data: { Email: $email}}) {
      newsletter{
        Email
      }
    }
  }
`;
