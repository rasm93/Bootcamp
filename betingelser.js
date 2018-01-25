// Øvelse: Betingede sætninger 2

//var sand = true;
/*var sand = false;

if (sand){
    console.log("Hej verden");
}*/


// Øvelse: Betingede sætninger 3

/*var randomNum = Math.floor(Math.random() * 9);

console.log(randomNum);

if (randomNum > 5){
    console.log("Højere end 5");
}

else if (randomNum < 5){
    console.log("Lavere end 5");
}*/


// Øvelse: Betingede sætninger 4

/*var sand = true;
var result = sand ? "Hej verden" : "Variablen er falsk";

console.log(result);*/

// Øvelse: Betingede sætninger 5

/*var fav = "Cola";

if (fav == "Cola"){
    console.log("Cola er sødt");
}
else if (fav == "Sprite"){
    console.log("Sprite er godt");
}
else if (fav == "Fanta"){
    console.log("Fanta er fedt");    
}
else{
    console.log("Ukendt variabel");
}*/


// Øvelse: Betingede sætninger 6

var fav = "Cola";

switch(fav){
    case "Cola":
    console.log(fav, 'er sødt');
    break;
    case "Sprite":
    console.log(fav, 'er godt');
    break;
    case "Fanta":
    console.log(fav, 'er fedt');
    break;
    default:
    console.log("Ukendt variabel");
    break;
}