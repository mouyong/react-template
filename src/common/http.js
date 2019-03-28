import axios from 'axios';

export default class Http {
  constructor(options = {}) {
    let { baseURL = '', timeout = 5000, headers = {} } = options

    let _headers = {}
    _headers['X-Requested-With'] = 'XMLHttpRequest'

    let csrfToken = document.head.querySelector('meta[name="csrf-token"]')
    if (csrfToken) {
      _headers['X-CSRF-TOKEN'] = csrfToken.content
    }
    
    this._axios = axios.create({
      baseURL,
      timeout,
      headers: Object.assign(headers, _headers)
    })
  }

  requestFactory(method, url, payload = {}, config = {}) {
    let _request

    switch(method) {
      case "GET":
        _request = this._axios.get(url, Object.assign({
          params: payload
        }, config))
        break

      case 'POST':
        _request = this._axios.post(url, payload, config)
        break

      case 'PUT':
        _request = this._axios.put(url, payload, config)
        break

      case 'PATCH':
        _request = this._axios.patch(url, payload, config)
        break

      case 'DELETE':
        _request = this._axios.delete(url, payload, config)
        break

      default:
        throw new Error('未知的请求方式')
    }

    return _request
  }
}
