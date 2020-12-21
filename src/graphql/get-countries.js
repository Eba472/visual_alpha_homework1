import gql from 'graphql-tag';

export const GET_COUNTRIES = gql`
  query countries {
    Country {
    _id
    area
    name
    capital
    population
    populationDensity
    flag {
    _id
    emoji
    }
    }
  }
`
