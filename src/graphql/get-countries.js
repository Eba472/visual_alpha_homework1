import gql from 'graphql-tag'

export const GET_COUNTRIES = gql`
  query countries {
  Country(filter: {subregion: {name_not: ""}}) {
    _id
    area
    name
    capital
    population
    subregion {
      _id
      name
    }
    populationDensity
    flag {
    _id
    emoji
    }
    }
  Subregion {
    _id
    name
  }
  }
`
