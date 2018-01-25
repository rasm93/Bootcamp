# Beskrivelse af løkker

## while

En *while* løkke kører så længe betingelsen er sand.

```javascript
while (true){
    console.log("Denne løkke vil køre for evigt");
}
```
Ovenstående løkke vil køre for evigt, og er ikke en god idé at bruge.

```javascript
var i = 0;

while (i < 25){
    i++
    console.log(i);
}
```
Denne løkke vil dog kun køre så længe *i* er mindre end **25**. Det vil sige, at den vil udskrive tallene fra **1** til **25**.

## do-while

En anden form for løkke, er en såkaldt *do while* løkke, der fungerer på stort set samme måde, som en *while* løkke.

En *do while* løkke vil altid køre mindst én gang, og forsætte så længe *while* betingelsen er sand.

```javascript
do{
    console.log("Denne løkke vil kun køre én gang");
} while (false);
```
Denne løkke vil køre én gang, og derefter stoppe, da *while* betingelsen ikke længere går i opfyldelse.

```javascript
var i = 0;

do{
    i++;
    console.log(i);

} while (i < 25);
```
Denne løkke fungerer på samme måde som *while* løkken fra tidligere. Den kører koden én gang, og forsætter så længe *i* er mindre end **25**.

## for

Den sidste form for løkke er en *for* løkke.

```javascript
for (var i = 0; i < 25; i++){
    console.log(i);
}
```
En *for* løkke har 3 stadier.

1. Stadie er hvor variablen defineres (var i = 0).
2. Stadie er hvor betingelsen defineres (i < 25).
3. Stadie er hvor værdien fra den oprindelige variabel forøges (i++).

Som med de andre eksempler, vil løkken køre så længe *i* er mindre end **25**.

## forEach

*forEach* er en anden form for løkke, som kan bruges til blandt andet at løbe igennem et *array*. Den tildeler hvert element i *arrayet* en *funktion*, som udføres én gang.

```javascript
var navne = ["Andrew", "Morten", "Lars", "Jens"];

navne.forEach(function(navn){
    console.log(navn);
});
```
Her gives hvert element i *arrayet* en *funktion*, som modtager et *argument*, nemlig **navn**.
*forEach* kan modtage tre *argumenter*. Det første *argument* i *funktionen* er elementets værdi. Det vil sige, at i dette tilfælde udskrives hvert navn i *arrayet*.

Man kan også udskrive hvilken position de forskellige elementer har i *arrayet*, ved at tilføje endnu et *argument* til *funktionen*

```javascript
var navne = ["Andrew", "Morten", "Lars", "Jens"];

navne.forEach(function(navn, index){
    console.log(navn + " er nummer " + index);
});
```
Dette vil udskrive elementernes navn (værdi) og deres position i *arrayet*.