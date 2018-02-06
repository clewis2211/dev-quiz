const arr = ['dog', 'cat', 'puppy', 'cockroach'];
var myArr = arr.map(function(el){
    return el + 's';
})
console.log(myArr);



// 2. create a constructor function (it can either be a 
//     psuedo-class or an es6 class) that models a die that has a 
//     value property and contains a roll method, which console 
//     logs the new value to the console



class Die {
    constructor (value) {
        this.value = value;
    }
}