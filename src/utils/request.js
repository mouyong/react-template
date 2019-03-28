import { Http } from '@common'

class Request extends Http {
  async fire(method, ...args) {
    try {
      const response = await this.requestFactory(method.toUpperCase(), ...args)

      let data = response.data

      if (data instanceof Blob) {
        return data
      }

      if (typeof data === 'string' || data instanceof String) {
        data =  {
          code: 0,
          msg: data,
          data: null,
        }
      }

      if (data.code === 0) {
        return data
      }

      throw new Error(data.msg)
    } catch (err) {
      console.error(err)
    }
  }
}

const request = new Request()

const methodFactory = (method) => {
  return async (...args) => {
    try {
      return await request.fire(method, ...args)
    } catch (err) {
      console.error(err)
    }
  }
}

const get = methodFactory('get')
const post = methodFactory('post')
const put = methodFactory('put')
const patch = methodFactory('patch')
const del = methodFactory('delete')

export {
  get,
  post,
  put,
  patch,
  del,
}
