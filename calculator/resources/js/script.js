var $screen = $("#screen");
var $number = $(".number");

$number.on('click', function() {
var numberPressed = $(this).html();
$screen.append(numberPressed);

if (num1 == 11) {
 num1 = numberPressed;
}else if (num2 == 11) {
 num2 = numberPressed;
}

});


document.getElementById("clear").onclick = function write1()
{
$("#screen").empty()
}

document.getElementById("pluse").onclick = function write1()
{
$("#screen").append("+")
op = "+";
}

document.getElementById("minus").onclick = function write1()
{
$("#screen").append("-")
op = "-";
}

document.getElementById("multiply").onclick = function write1()
{
$("#screen").append("x")
op = "x";
}

document.getElementById("divide").onclick = function write1()
{
$("#screen").append("/")
op = "/";
}

document.getElementById("equal").onclick = function write1()
{
$("#screen").append("=")
op = "=";
}