//
alert("I'm JavaScript!")

//
let names = prompt("What is your name", "") ;
alert(names) ;

//
let admin, name ;
name = John ;
admin = name ;
alert(admin) ;

let str = "123";
alert(typeof str);

let num = Number(str);
alert(typeof num) ;

//
let a = 1, b = 1 ;
alert(++a); //prefix returns new value
alert(b++); //postfix returns old value
let c = prompt("First number?", 1);
let d = prompt("Second number?", 2)
alert(Number(c) + Number(d)) ;

//
let ourplanet = "Earth" ;
let currentUser = "John" ;
alert(ourplanet) ;
alert(currentUser) ;

//
const birthday = '01.01.2007' ;
const age = someCode(birthday) ;

//
let nam = "Ilya" ;
alert('hello ${nam}') ;
alert('hello ${1}')
alert('hello ${"nam"}')

//
function ask(question, yes, no){
    if(confirm(question)) yes();
    else no() ;
}
ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => ("You canceled the execution.")
);

//