const s = "The morning is upon us"
const s1 =s.substring(11)
console.log(s1)

const s2 = s.substring(-11)
//substring does`t take negative number it conver with 0;
//negative value convert in 0 in substring
console.log(s2)

const s3 = s.substring(16,13)
//if starting value is greater then end value the its swap smaller to greater;
console.log(s3)

