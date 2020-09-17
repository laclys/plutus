/**
 * 将 json 格式的数据解析为字符串
 *
 * from:
 *   {
 *     'name': 'a',
 *     'index': 1
 *   }
 *
 * to:
 *   name=a&index=1
 */

export default (data: any, encode: any, empty = false) => {
  const _data = Object.assign({}, data)

  if (empty) {
    Object.keys(_data).forEach(key => {
      if (_data[key] === undefined || _data[key] === null) {
        delete _data[key]
      }
    })
  }

  const params = Object.keys(_data)
    .map(key => {
      if (encode) {
        return `${key}=${encodeURIComponent(_data[key])}`
      }
      return `${key}=${_data[key]}`
    })
    .join('&')

  return params
}
