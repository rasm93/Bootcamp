# Beskrivelse af betingelser

## if-else betingelser

Man kan bruge en *if* betingelse, til at undersøge om noget er **sandt**, og hvis det er, udføres en bestemt handling.

```javascript
if (betingelse){
    console.log("Udføres hvis betingelsen er sand");
}
```
I ovenstående eksempel udskrives teksten, hvis betingelsen er **sand**, er betingelsen **falsk**, sker der ikke noget.

Hvis en handling skal udføres, når betingelsen er **falsk**, bruger man en *else*.

```javascript
if (betingelse){
    console.log("Udføres hvis betingelsen er sand");
}
else{
    console.log("Udføres hvis betingelsen er falsk");
}
```
Udover *if* og *else*, kan man også bruge en *else if*, hvis man skal undersøge en betingelse mere end én gang.

```javascript
var alder = 24;

if (alder < 18){
    console.log("Din alder er under 18");
}
else if (alder > 18){
    console.log("Din alder er over 18");
}
else{
    console.log("Kan ikke beregne din alder");
}
```
I dette tilfælde er variablen *alder* sat til **24**. Den første *if* betingelse undersøger om *alder* er mindre end **18**, hvilket er **falsk**, betingelsen er derfor ikke opfyldt, og handlingen udføres ikke.

Havde der ikke været en *else if*, ville teksten fra *else* udskrives, men da den er der, undersøges en ny betingelse.

*else if* undersøger om *alder* er over **18**, hvilket er **sandt**, da *alder* er sat til **24**.
Handlingen fra *else if* vil derfor udføres, og teksten *"Din alder er over 18"* udskrives.

Ved hjælp af *if* kan man undersøge en lang række betingelser:


Operatorer | Beskrivelse
---------|------------
"<" | Mindre end
">" | Større end
"==" | Lig med
"!=" | Ikke lig med
"<=" | Mindre end, eller lig med
">=" | Større end, eller lig med