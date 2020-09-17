const PREFIX = ''
const EXIST_CLASSNAME: string | string[] = []

export default (scope: any, prefix = PREFIX) => {
  return (name: any) => {
    const classname = [prefix, scope, name].filter(item => !!item).join('-')
    if (EXIST_CLASSNAME.indexOf(classname) > -1) {
      console.warn(`${classname} 已经存在, 换个 classname 吧`)
    }
    return classname
  }
}
