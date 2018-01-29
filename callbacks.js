// Øvelse: callbacks 1


// Øvelse: callbacks 2

// function mainFunction(a, callback){
//     callback(a);
// }

// function callbackFunction(b){
//     console.log(b);
// }

// mainFunction("Tekst udskrives, ved hjælp af callback funktionen", callbackFunction);


// Asynkronitet Opgave

// Her oprettes en funktion, ved navn "getData", som modtager to argumenter.
function getData(dataURI, outputData) {

    // Funktionen udskriver følgende tekst.
    console.log('første linje i getData funktionen...');

    // En variabel ved navn "timer" oprettes og tildeles en setTimeout funktion.
    // Den modtager også to argumenter, en anonym (callback) funktion, og en tid på 2000 milisekunder. 
    let timer = setTimeout(function () {

       // Efter 2 sekunder, udskriver funktionen følgende tekst. 
       console.log('Her der der gået 2 sekunder.');

       // En ny variabel ved navn "dataArray" oprettes, og tildeles en array på 8 tal.
       let dataArray = [12, 34, 56, 78, 90, 123, 456, 789];

       // Funktionen "outputData" kaldes, og modtager "dataArray" som argument.
       outputData(dataArray);
    }, 2000);
 }
 

 // Funktionen "outputData" oprettes, og modtager ét argument.
 function outputData(dataArray) {

    // Funktionen udskriver følgende tekst, og de 8 tal fra arrayet.
    console.log('Dette er funktionen der udskriver det hentede data: ' + dataArray);
 }
 

 // Funktionen "getData" kaldes, og modtager to argumenter.
 // "outputData" modtages som en callback funktion, og udskriver teksten samt arrayet fra før.
 getData('http://www.domain.com/something', outputData);
 
 console.log("Denne kode linje burde være den sidste.");