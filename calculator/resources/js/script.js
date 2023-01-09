var num1 = 11;
var num2 = 11;

var $screen = $("#screen");
var $number = $(".number");

$number.on('click', function() {
var numberPressed = $(this).html();
$screen.append(numberPressed);
if (num1 == 11) {
 num1 = numberPressed;
} else if (num2 == 11) {
 num2 = numberPressed;
}
});


document.getElementById("clear").onclick = function writeClear()
{
$("#screen").empty()
}

document.getElementById("pluse").onclick = function writePluse()
{
$("#screen").append("+")
op = "+";
}

document.getElementById("minus").onclick = function writeMinus()
{
$("#screen").append("-")
op = "-";
}

document.getElementById("multiply").onclick = function writeMultiply()
{
$("#screen").append("x")
op = "x";
}

document.getElementById("divide").onclick = function writeDivide()
{
$("#screen").append("/")
op = "/";
}

document.getElementById("equal").onclick = function writeEqual()
{
$("#screen").append("=")
num1 = parseInt(num1);
num2 = parseInt(num2);
console.log(num1, op, num2)
if (op == "+") {
answer = num1 + num 2;
}
if (op == "-") {
answer = num1 - num 2;
}
if (op == "x") {
answer = num1 * num 2;
}
if (op == "/") {
answer = num1 / num 2;
}
$screen.append(answer);
num1 = 11;
num2 = 11;
};