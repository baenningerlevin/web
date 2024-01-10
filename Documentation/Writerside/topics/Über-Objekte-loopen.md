# Über Objekte loopen

## Über Propertynamen (Keys) loopen

Um über Keys zu loopen können wir die `.keys()`-Methode verwenden:

````Javascript
for (const day of Object.keys(openingHours)) {
  console.log(day);
}
````

Dieses `Object.keys(openingHours)` erstellt uns einen Array mit allen Keys. Das heisst im Endeffekt loopen wir wieder über einen Array.