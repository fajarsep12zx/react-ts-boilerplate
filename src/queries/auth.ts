import gql from 'graphql-tag'

const query = gql`
  mutation getLoginToken($userID: String!, $password: String!, $refreshToken: String!) {
      userLogin(userID: $userID, password: $password, refreshToken: $refreshToken){
        accessToken
        refreshToken
        expireAt
        message
        success
        user {
          email
          username
          fullname
          department
          areas {
            key
            value
          }
          permissions {
            menu
            control
          }
          needChangePassword
          lastAccess
        }
    }
  }
`

export default query
