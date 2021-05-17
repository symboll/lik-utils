export const deepClone = (obj: Object): Object => {
  const res = {}
  const keys = Object.keys(obj);
  keys.map(item => {
    const descriptor: PropertyDescriptor = <PropertyDescriptor>Object.getOwnPropertyDescriptor(obj, item)
    Object.defineProperty(res,item, descriptor)
  })
  return res
}