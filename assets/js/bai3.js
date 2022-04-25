function Total() {
    var number = document.getElementById("timesWork").value;
    var VND = 23500;
    var salary = Number(number) * Number(VND);

    document.querySelector("#kqBai3").innerHTML = salary;
}

// function TotalProduct() {
//     var NameProduct = document.getElementById("nameProduct").value;
//     var NumberProduct = document.getElementById("numberProduct").value;
//     var PriceProduct = document.getElementById("priceProduct").value;

//     var totalPrice;

//     if (NumberProduct < 50) {
//         totalPrice = NumberProduct * PriceProduct
//     } else if (NumberProduct > 50 && NumberProduct <= 100) {
//         totalPrice = (NameProduct * PriceProduct) + (NameProduct - 50) * PriceProduct * 0.92
//     } else {
//         totalPrice = (NumberProduct * PriceProduct) + (NumberProduct * PriceProduct * 0.92) + (NumberProduct - 100) * NumberProduct * 0.88;
//     }

//     console.log(totalPrice);
//     // document.querySelector("#name").innerHTML = NameProduct
//     document.querySelector("#kq").innerHTML = NameProduct + " - " + totalPrice + "$";
// }

function TotalProduct() {
    var cd = document.getElementById("cd").value;
    var cr = document.getElementById("cr").value;

    var cv = (Number(cd) + Number(cr)) * 2;
    var dt = (Number(cd) * Number(cr));

    document.querySelector("#kqcv").innerHTML = cv;

    document.querySelector("#kqdt").innerHTML = dt;
}
