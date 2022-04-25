function TotalPoint() {
    var FullName = document.getElementById("fullName").value;
    var Math = document.getElementById("pointMath").value;
    var Phy = document.getElementById("pointPhy").value;
    var Chemical = document.getElementById("pointChe").value;

    var PointTotal = (Number(Math) + Number(Phy) + Number(Chemical)) / 3;

    console.log(PointTotal);

    if (PointTotal >= 8.5) {
        document.querySelector("#kqPoint").innerHTML = PointTotal + " - " + "Học lực Gioi";
    } else if (PointTotal >= 6.5 && PointTotal <= 8.5) {
        document.querySelector("#kqPoint").innerHTML = PointTotal + " - " + "Học lực Khá";
    } else if (PointTotal >= 5 && PointTotal < 6.5) {
        document.querySelector("#kqPoint").innerHTML = PointTotal + " - " + "Học lực TB";

    } else {
        document.querySelector("#kqPoint").innerHTML = PointTotal + " - " + "Học lực Yếu";

    }
}

function TotalProduct() {
    var number = document.getElementById("number").value;

    var so_hang_dv = number.slice(1, 2);

    var so_hang_chuc = number.slice(0, 1);

    var total = Number(so_hang_dv) + Number(so_hang_chuc)

    document.querySelector("#kq").innerHTML = total;

    console.log(total);
}