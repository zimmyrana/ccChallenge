//Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const fruits = ['banana', 'apple', 'grapes', 'pomegranate']

const vegetables = ['benes', 'ladyfinger', 'cabbage']

const eatable = [...fruits, ...vegetables, 'pizza', 'burger']

console.log(eatable)