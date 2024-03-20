

/*let text="i will become a failier"
let newString= text.replace("failier", "successful")
console.log(newString);
*/

/*
//by default replace only first match
let text="please visit jaunpur an jaunpur"
let newString= text.replace("jaunpur","malhani")
console.log(newString);*/

//replace() methode is case sensitive
/*let text = "please visit jaunpur"
let newString= text.replace("JAUNPUR", "malhani")
console.log(newString); 
*/
// it does not work

let text = "please visit jaunpur"
let newString= text.replace(/JAUNPUR/i, "malhani")
console.log(newString);