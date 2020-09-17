/**
 * 清除 query 中为空或者未定义的 param
 */
export default (query: any): any => {
  const _query = { ...query }
  for (const k in _query) {
    if (_query.hasOwnProperty(k) && isCanClear(query[k])) {
      delete _query[k]
    }
  }

  return _query
}

// helper
function isCanClear(val: any) {
  return val === '' || val === undefined || val === NaN || val === null || (Array.isArray(val) && val.length === 0)
}
