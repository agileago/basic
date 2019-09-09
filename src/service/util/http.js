import axios from 'axios'

let http = axios.create()

http.interceptors.response.use(res => res.data)

export default http
