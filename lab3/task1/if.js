let answer = prompt("What's the 'official' name of the JavaScript", "") ;

if(answer == 'ECMAScript'){
    alert('Right!') ;
}else{
    alert("You don't know? ECMAScript") ;
}

let numbers = prompt("Enter number: ", 0);

if(numbers > 0){
    alert(1) ;
}else if(numbers < 0){
    alert(-1) ;
}else if(numbers == 0){
    alert(0) ;
}

let result = (a + b < 4) ? 'Below' : 'Over' ;

let message = (login == 'Employee') ? 'Hello' :
(login == 'Director') ? 'Greetings' :
(login == '') ? 'No login' :
'' ;

let who = prompt("Who's there?", "");
if(who == 'Admin'){
    let password = prompt("Password?", "");
    if(password == 'The master'){
        alert('Welcome!');
    }else if(password == 'Cancel'){
        alert('Canceled') ;
    }else{
        alert('Wrong password') ;
    }
}else if(who == 'Cancel'){
    alert('Canceled') ;
}else{
    alert("i don't know you");
}

for(let i = 2 ; i <= 10; i++){
    if(i % 2 == 0){
        alert(i) ;
    }
}

let num ;
do{
    num = prompt("enter number greater than 100", 0);
}while(num <= 100 && num) ;

let browser = prompt("Write", "");

if(browser == 'Edge'){
    alert("You've got the Edge");
}else if(browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera'){
    alert('Okay we support these browsers too') ;
}else{
    alert('We hope that this page looks ok');
}

let a = +prompt('a?', '');

switch(a){
    case 0 :
        alert(0);
        break ;
    case 1 :
        alert(1);
        break ;
    case 2 :
    case 3 :
        alert('2,3');
        break ;
}