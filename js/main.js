const arr = [1, 3, 4, 5, 8, 9]
const newArr = arr.map((item) => {
  return item * 2
})
console.log(newArr)

const sumArr = arr.reduce((total, next) => {
  return total + next
})

console.log(sumArr)

const filterArr = arr.filter((item) => {
  return item % 2 === 0
})

console.log(filterArr)

const findArr = arr.find((item) => {
  return item === 4
})
console.log(findArr)