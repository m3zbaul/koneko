import apiEndpoint from '../utils/api'


const headers = {
  'content-type': 'application/json'
}

export const LOGIN_ATTEMPTED = 'LOGIN_ATTEMPTED'

export function loginRequest(email, password) {
  return dispatch => {
    const payload = {
      username: email,
      password: password
    }
    apiEndpoint.post('/auth', payload, { headers })
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }
}
