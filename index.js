function makeNamer (name) {
  console.log('Hello, ' + name + '!')
}

var familyList = [
  'Magnolia', // 0
  'Cali',     // 1
  'Tuesday',  // 2
  'Joe',      // 3
  'Heidi'     // 4
]

var pzth = 0 // pzth is best-guess spelling for position

setInterval(function () {
  makeNamer(familyList[pzth % familyList.length])
  pzth++
}, 10 * 1000) // delay for ten seconds