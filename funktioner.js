// Øvelse: funktioner 1

// function udregn(x, y){
//     var resultat = x * y;
//     console.log(x + " gange med " + y + " er lig med " + resultat);
// }

// udregn(10, 5);


// Øvelse: funktioner 2

function udregn(x, y){
    var resultat = x * y;
    if (isNaN(x) && isNaN(y)){
        console.log("Angivet variabler, er ikke et tal");
    }
    else{
        console.log(x + " gange med " + y + " er lig med " + resultat);
    }
}


// Øvelse: funktioner 3