let marks = prompt("enter a number between(10-100)");
let grade;

if(marks>=90 && marks<=100)
{
    grade="A";
} else if(marks>=80 && marks<=89)
{
    grade="B";
}else if(marks>=70 && marks<=79)
{
    grade="C";
}else if(marks>=35 && marks<=69)
{
    grade="D";
}else{
    grade="F"
}
console.log("Grade is : "+grade);

console.log("This program is on grade system based on the marks.");
