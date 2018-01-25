# Beskrivelse af løkker

## while

En *while* løkke kører så længe betingelsen er sand.

```javascript
while (true){
    console.log("Denne løkke vil køre for evigt");
}
```
Ovenstående løkke vil kører for evigt, og er ikke en god idé at bruge.

```javascript
var i = 0;

while (i < 25){
    i++
    console.log(i);
}
```
Denne løkke vil dog kun kører så længe *i* er mindre end **25**. Det vil sige, at den vil udskrive tallene fra **1** til **25**.

## do-while

En anden form for løkke, er en såkaldt *do while* løkke, der fungerer på stort set samme måde, som en *while* løkke.

En *do while* løkke vil altid kører mindst én gang, og forsætte så længe *while* betingelsen er sand.

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

Som med de andre eksempler, vil løkken kører så længe *i* er mindre end **25**.