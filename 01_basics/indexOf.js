const s = "The code undefined code code !"
const s1= s.indexOf(`code`)
console.log(s1);

const s2 = s.indexOf(`Code`)
//casesenstive
console.log(s2)

const s3 = s.indexOf(`code`, -5)
console.log(s3)

const s4 = s.indexOf(`code` ,5)
console.log(s4)

const s5 = s.indexOf(` `)
console.log(s5)

const s6 = s.indexOf( )
console.log(s6)


// lastIndexOf() ---->

const i = `The code undefined code code !`
const i1 = i.lastIndexOf(`code`)
console.log(i1)

