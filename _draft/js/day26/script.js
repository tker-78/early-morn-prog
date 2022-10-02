
function uniq(arr) {
  const new_arr = arr.filter(i => {
    if (!this[i[0]]) {
      return this[i[0]] = true
    }
  })
  return new_arr
}

arr1 = [[1,2], [3,4], [1,2], [3,4], [1,4], [1,8]]

console.log(uniq(arr1))