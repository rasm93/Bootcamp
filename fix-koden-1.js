// Fix koden 1: Fejlbeskeder tekststreng

// var navn = "";
// var alder = "";
// var adresse = "";

// var fejlbeskeder = "";

// if (navn == "") {
// 	fejlbeskeder = "Du skal udfylde navn feltet\n";
// }

// if (alder == "") {
// 	fejlbeskeder = "Du skal udfylde alder feltet\n";
// }

// if (adresse == "") {
// 	fejlbeskeder = "Du skal udfylde adresse feltet\n";
// }

// console.log (fejlbeskeder);

function fejlBesked(navn, alder, adresse){
    if (navn == undefined){
        console.log("Du skal udfylde navn feltet\n");
    }

    if (alder == undefined){
        console.log("Du skal udfylde alder feltet\n");
    }

    if (adresse == undefined){
        console.log("Du skal udfylde adresse feltet\n");
    }
    else{
        console.log(navn, alder, adresse);
    }
}

fejlBesked();
