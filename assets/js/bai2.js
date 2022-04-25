function TotalPoint() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var num3 = document.getElementById("number3").value;
    var num4 = document.getElementById("number4").value;
    var num5 = document.getElementById("number5").value;

    var totalNumber = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)) / 5;

    document.querySelector("#total").innerHTML = totalNumber
    console.log(totalNumber);

}