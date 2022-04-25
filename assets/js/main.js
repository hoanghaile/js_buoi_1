function tong() {
    var number = document.getElementById("input-date").value;
    var date = 100000;

    var total = number * Number(date);

    document.querySelector("#total").innerHTML = total
    console.log(total);

}