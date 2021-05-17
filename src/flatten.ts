// const flatten = (arr, depth = Infinity) => {
//   return arr.flat(depth)
// }

// const flatten = (arr) => {
//   return [].concat(...arr.map(item => Array.isArray(item) ? flatten(item): item))
// }

export const flatten = (arr: Array<any | Array<any>>): any[] => {
  return arr.reduce((result, item) => 
    result.concat(Array.isArray(item) ? flatten(item): item), [])
}