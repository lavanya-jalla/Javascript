console.log("Even numbers")
for(i=2;i<=50;i++){
    if(i%2==0){
        console.log(i)
    }

}


let getNum=24;
let userNum=prompt("Enter your value:")
console.log(userNum);

while(userNum!=getNum){
    userNum=prompt("You entered wrong number.Guess again")
}
console.log("Congragulations you are right")