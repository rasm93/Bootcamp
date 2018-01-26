# Beskrivelse af funktioner

En *funktion* er en form for kasse, som kan indeholde en masse kode. Ved at navngive en *funktion*, kan man let kalde den flere gange, uden at skulle skrive hele koden igen.

```javascript
function minFunktion(){
    console.log("Dette er min funktion");
}

minFunktion();
```
Denne simple *funktion* udskriver et stykke tekst i konsollen. *funktionen* er navngivet *minFunktion*, og køres, så snart man kalder på den.

## Argumenter

En *funktion* kan indeholde såkaldte *argumenter*. *Argumenter* skrives i paranteserne af *funktionen*.

*Argumenter* kan også ses som en form for *funktions variabler*, da det er variabler man kan definere, når man kalder på *funktionen*.

```javascript
function mitNavn(navn){
    console.log("Mit navn er " + navn);
}

mitNavn("Andrew");
```
Denne *funktion* modtager et *argument* (navn). *Argumentet* er til at starte med **udefineret**.

Når *funktionen* kaldes, defineres *argumentet*, ved at skrive det i parantesen, i dette tilfælde bliver *argumentet* til **Andrew**.

## Return

Udover at bruge ```console.log``` til at udskrive forskellige værdier, kan man også *retunere* bestemt data i en *funktion*, ved hjælp af ```return```.

```javascript
function udregn(x, y){
    return x * y;
}

console.log(udregn(10,5));
```
Denne *funktion* modtager to *argumenter*, den ganger *argumenterne* med hinanden, og *retunere* det tilbage, så det er synligt udenfor *funktionen*.
Dette gør det muligt, at udskrive resultatet, ved hjælp af ```console.log```.