const accountId = 10;  //const ko change nhi kiya jaa sakta 
let accountEmail = "pk@gmail.com";
var accountPassword = "12345"
accountCity = "Pune"

let accountState //undefined output aayega


/*
var is outdated, var creates a variable in global scope and is sort of hacky
and just generally a no no while let (and const ) creates a variable in local scope

performance wise it goes like this: var > const > let

If you never want a variable to change, const is the keyword to use.
If you want to reassign values: and you want the hoisting behavior, 
var is the keyword to use. if you don't want it, let is the keyword for you
*/
//accountId = 20;  not allowed coz of const

accountEmail = "hh@gmail.com"
accountPassword = "098282"
accountCity = "Mumbai"

console.log(accountId);

console.table([accountEmail,accountPassword,accountId,accountCity,accountState])