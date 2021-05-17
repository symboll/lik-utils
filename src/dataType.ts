export const dataType = (any: any):string => {
  const toString = Object.prototype.toString
  return toString.call(any).slice(8, -1)
}