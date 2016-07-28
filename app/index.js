function makeNamer (familyMember) {
  console.log('\n o  o  o  o  o')    // this is our
  console.log(' +@-+@-+@-+@-+')      // picture of a
  console.log(' |  |  |  |  |')      // family holding
  console.log(' ^  ^  ^  ^  ^\n')    // hands
  console.log('Hello, ' + familyMember.name + '! You are a ' + familyMember.type)
}

var familyList = [
  { name: 'Magnolia', type: 'baby human' }, // 0
  { name: 'Cali', type: 'kid human' },     // 1
  { name: 'Tuesday', type: 'kid human' },   // 2
  { name: 'Joe' , type: 'grown up human'},      // 3
  { name: 'Heidi',type: 'grown up human' }      // 4
]

var pzth = 0 // pzth is best-guess spelling for position

setInterval(function () {
  makeNamer(familyList[pzth % familyList.length])
  pzth++
},  1000) // ten seconds is sooooo looooooong
