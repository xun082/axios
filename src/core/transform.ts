import { AxiosTransformer } from '../types'

export default function(
  data: any,
  headers: any,
  callback: AxiosTransformer | AxiosTransformer[]
): any {
  if (!callback) {
    return data
  }

  if (!Array.isArray(callback)) {
    callback = [callback]
  }

  callback.forEach(fn => {
    data = fn(data, headers)
  })
  return data
}
