import { gql } from '@apollo/client';

export const MUTATION_NEWSLETTER = gql`
  mutation CreateNewsletter($email: String) {
    createNewsletter(email: $email) {
        email
  }
}
`;
