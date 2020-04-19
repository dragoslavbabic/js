//zadatak-01
const kel_input = document.getElementById('kelvin_input');
const kel_output = document.getElementById("kelvin");


function KelToFar() {
    var kelvin = kel_input.value;
    var farenhajt = (kelvin - 273) * (9 / 5) + 32;
    kel_output.innerHTML = farenhajt.toFixed(1);
}

//zadatak-01.01 FP Nested funkcija, funkcija "izracunaj" je nevidljiva van 
//roditeljske funkcije.
function KelToFarFP(){
    kel_output.innerHTML = izracunaj(kel_input.value);
    function izracunaj(kel){
    return (kel - 273) * (9/5) + 32;
    }
   }

//zadatak-01.02 U ovom primeru funkcije su razdvojene
function KelToFarPure(){
    kel_output.innerHTML = IzracunajKel(kel_input.value);
    console.log(IzracunajKel(kel_input.value));
}
//zadatak-01.02 Cista funkcija sa jednim ulaznim parametrom
//moze biti pozvana i od strane drugih funkcija
function IzracunajKel(kel){
    return (kel - 273) * (9/5) + 32;
    }

//zadatak-01.03 funkcija kao promenljiva  
var kel_to_far = function(kel){
    return (kel - 273) * (9/5) + 32;
}

//zadatak-01.03 pozivanje promenljive
//kel_output.innerHTML = kel_to_far(kel_input.value);

//zadatak-02
const stranica_a = document.getElementById("a_input");
const stranica_b = document.getElementById("b_input");
const povrsina = document.getElementById("povrsina");
const obim = document.getElementById("obim");
const str_a_span = document.getElementById("stranica_a");
const str_b_span = document.getElementById("stranica_b");

//klasican nacin
document.getElementById("obim_povrsina").onclick = function ObimPovrsina() {
    var a = stranica_a.value;
    var b = stranica_b.value;
    var o = 2 * a + 2 * b;
    var p = a * b;
    str_a_span.innerHTML = a;
    str_b_span.innerHTML = b;
    povrsina.innerHTML = p;
    obim.innerHTML = o;
}

//zadatak-02.01 Cista funkcija koja vraca niz od dva clana
function ObimPovrsinaAlt(a,b){
    return [2 * a + 2 * b,a * b];
}

//zadatak-02.01 Funkcija koja se poziva na klik iz pretrazivaca
function ObimPovrsinaFP(){
    const strA=str_a_span.innerHTML = stranica_a.value;
    const strB =str_b_span.innerHTML= stranica_b.value;
    const [ob,pov] = ObimPovrsinaAlt(strA,strB) //ovde je iskoriscena nova mogucnost ECMAScript 6 - "Destructuring Assignment"
                    
    povrsina.innerHTML = pov;
    obim.innerHTML = ob;
}


