var currentNumber = 1;
var num1;
var num2;

var $screen = $("#screen");
var $number = $(".number");

$number.on('click', function() {
var numberPressed = $(this).html();
$screen.append(numberPressed);

if (currentNumber == 1) {
if (num1 == null) {
 num1 = numberPressed;
} else {
num1 = num1 + numberPressed;
}
}
if (currentNumber == 2) {
if (num2 == null) {
 num2 = numberPressed;
} else {
num2 = num2 + numberPressed;
}
}
});


$("#clear").on('click', function()
{
$("#screen").empty()
num1 = null;
num2 = null;
currentNumber = 1;
});

$("#pluse").on('click', function()
{
$("#screen").append("+")
op = "+";
currentNumber++;
})

$("#minus").on('click', function()
{
$("#screen").append("-")
op = "-";
currentNumber++;
})

$("#multiply").on('click', function()
{
$("#screen").append("x")
op = "x";
currentNumber++;
})

$("#divide").on('click', function()
{
$("#screen").append("/")
op = "/";
currentNumber++;
})

document.getElementById("equal").onclick = function writeEqual()
{
$("#screen").append("=")
num1 = parseInt(num1);
num2 = parseInt(num2);
console.log(num1, op, num2)
if (op == "+") {
answer = num1 + num2;
}
if (op == "-") {
answer = num1 - num2;
}
if (op == "x") {
answer = num1 * num2;
}
if (op == "/") {
answer = num1 / num2;
}
$screen.append(answer);
num1 = 11;
num2 = 11;
};