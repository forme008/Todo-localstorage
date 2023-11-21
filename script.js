// localstorage: 1)SetItem - window.localStorage.setItem(key,value [],"")--
// --window.localStorage.setItem("firstName, 18") 
// 2)GetItem -  window.localStorage.getItem(key,"")--
// --let getAge = window.localStorage.getItem("age")
//console.log(typeof getAge);
//  3)Clear -  window.localStorage.clear("")

// SetItem
let firstName = ["Estella","Bobur","Madina"]
window.localStorage.setItem("names",JSON.stringify(firstName))


// GetItem
let getName = JSON.parse(window.localStorage.getItem("names"))
console.log(getName);