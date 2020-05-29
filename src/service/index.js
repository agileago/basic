import http from './util/http'

export function get() {
  const url = ''
  const params = {}
  return http.get(url, { params })
}

export function post() {
  const url = ''
  const data = {}
  return http.post(url, data)
}

export function getUser() {
  const url = '/api/user'
  return http.get(url)
}
