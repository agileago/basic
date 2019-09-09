import http from './util/http'

export function get () {
  let url = ``
  let params = {}
  return http.get(url, { params })
}

export function post () {
  let url = ``
  let data = {}
  return http.post(url, data)
}

export function getUser () {
  let url = `/api/user`
  return http.get(url)
}
