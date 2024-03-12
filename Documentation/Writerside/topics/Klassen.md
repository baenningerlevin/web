# Klassen

Klassen in TypeScript sind sehr ähnlich zu Klassen in JavaScript. 

## Initialisierung

In TypeScript müssen Properties immer mit einem Wert initialisiert werden. Das passiert am besten über einen Constructor:

````TypeScript
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }
}
````