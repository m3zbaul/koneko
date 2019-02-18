import axios from 'axios'

const LOCAL_ENDPOINT = 'http://localhost:8080/'


const apiEndpoint = axios.create({
  baseURL: LOCAL_ENDPOINT,
  /* other custom settings */
})

export default apiEndpoint
