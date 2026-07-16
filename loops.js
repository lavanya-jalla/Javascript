for(i=1;i<=5;i++){
    console.log("Lavanya");
}
let sum=0;
for(j=0;j<=5;j++){
sum=sum+j;
}
console.log("sum: ",sum)

for (i=8;i<=18;i++){
    console.log("i: "+i)

}

let n=100;
while(n<=110){

    console.log(n);
    n++;
}

let m=11
do{
    console.log(m);
    m++;
}while(m<=20)
 
//for of loop
size=0;
let name="lavanya";
for(let i of name){//for(let value of strvar)
    console.log(i);
    size++
}
console.log(size)

//for in loop

let student={
    name:"lavanya",
    age:20
};
for(let key in student){
    console.log("key = ",key ,"value= ",student[key])
}


