import {
  get,
} from '@utils'

export default {
  me: _ => get(`/api/me`, _),
}
