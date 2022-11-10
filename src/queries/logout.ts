import gql from 'graphql-tag'

const query = gql`
  query {
    user {
      logout {
        success
        message
      }
    }
  }
`

export default query
