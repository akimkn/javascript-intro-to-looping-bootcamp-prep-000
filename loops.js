function forLoop(array) {
  for (let i=0; i<25; i++) {
    array.push(`I am ${i} strange loops.`)
  }
  return array
}

function whileLoop(n) {
  while (n>0) {
    console.log(--n)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  return array.pop()
}

do {
  dowhileLoop(array)
} while (array.length > 0 && maybeTrue())
