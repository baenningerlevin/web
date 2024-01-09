# Rest Pattern und Parameter

Das **Rest Pattern** sieht genauso aus, wie der Spread Operator. Jedoch macht es genau das Gegenteil des Spread Operators. Mit dem Rest Pattern können
wir mehrere Elemente zu sammeln und sie in einem Array zu speichern.

## Unterschied Rest Pattern und Spread Operator

Damit die JS-Engine nun die beiden Operatoren unterscheiden kann, obwohl sie die gleiche Syntax haben, muss die Engine auf die Position achten.
Ist `...` auf der rechten Seite des `=`, dann ist es der Spread Operator. Ist aber der `...` auf der linken Seite, wird das Rest Pattern benutzt.

````Javascript
// Spread is always on the righthand side
const arr = [1, 2, ...[3, 4]];

// Rest is always on the lefthand side
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 [3, 4, 5]
````

