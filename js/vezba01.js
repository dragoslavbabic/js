//zadatak-01
document.getElementById("izracunaj_k_to_f").onclick = function kel_to_far() {
    var kelvin = document.getElementById('kelvin_input').value;
    var celzijus01 = kelvin - 273;
    var farenhajt = celzijus01 * (9 / 5) + 32;
    document.getElementById("kelvin").innerHTML = farenhajt.toFixed(1);
}


//zadatak-02
document.getElementById("obim_povrsina").onclick = function ObimPovrsina() {
    var stranica_a = document.getElementById("a_input").value;
    var stranica_b = document.getElementById("b_input").value;
    var obim = 2 * stranica_a + 2 * stranica_b;
    var povrsina = stranica_a * stranica_b;
    document.getElementById("stranica_a").innerHTML = stranica_a;
    document.getElementById("stranica_b").innerHTML = stranica_b;
    document.getElementById("povrsina").innerHTML = povrsina;
    document.getElementById("obim").innerHTML = obim;
}
