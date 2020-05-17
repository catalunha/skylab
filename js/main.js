const arr = [1, 3, 4, 5, 8, 9]
const newArr = arr.map(function (item) {
  return item * 2
})
console.log(newArr)
const newArr2 = arr.map((item) => {
  return item * 2
})
console.log(newArr2)
const newArr3 = arr.map(item => {
  return item * 2
})
console.log(newArr3)
const newArr4 = arr.map(item => item * 2)
console.log(newArr4)
