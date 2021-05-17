export const isEmpty = (obj: Object): Boolean => {
  return Reflect.ownKeys(obj).length > 0 ? true : false
}