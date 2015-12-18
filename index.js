function makeNamer (name) {
  console.log('\n o  o  o  o  o')    // this is our
  console.log(' +@-+@-+@-+@-+')      // picture of a
  console.log(' |  |  |  |  |')      // family holding
  console.log(' ^  ^  ^  ^  ^\n')    // hands
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