import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
 query products($Animal: String){
    products(where:{Animal: $Animal}){
      Slug
      Animal
      Nombre
      PrecioVenta
      Categoria
      PesoBolsa
      Imagen{
        url
      }
    }
  }
`;
