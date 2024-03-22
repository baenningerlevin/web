# Template-Driven

Im Template-Driven Ansatz wird Angular ein Formular aufgrund des `<form>`-Elements im Template erkennen und erstellt automatisch ein JavaScript Objekt, dass das Formular widerspiegelt. 

## Controls erfassen

Um ein Control zu erfassen, müssen wir unserem `<input>`-Element die Attribute `ngModel` und `name` geben:

````HTML
<label for="username">Username</label>
  <input
  type="text"
  class="form-control"
  id="username"
  name="username"
  ngModel
  />
````

> **Wichtig:** Das `FormsModule`-Modul muss unbedingt importiert werden!

{ style="warning" }

## Formular übermitteln

Um das Formular zu übermitteln, nutzen wir die `ngSubmit`-Directive. Mit dieser können wir eine Methode aufrufen. Als Argument geben wir die Referenz zu unserem Formular mit, welches auf `ngForm` gesetzt ist:

````HTML
<form (ngSubmit)="onSubmit(form)" #form="ngForm">...</form>
````

Nun können wir auf das Formular zugreifen:

````Typescript
onSubmit(form: NgForm) {
  console.log(form);
}
````

### Felder des Form-Objekts

Das `form`, welches wir vorhin übermittelt haben, ist ein JavaScript Objekt mit einigen Properties und Methoden.

- `value` - Das `value`-Property beinhaltet die Daten, die der User in das Feld eingegeben hat.
- `controls` - Das `controls`-Property beinhaltet Daten über unser Input-Feld, bspw. `defaultValue`, `valid`, `touched`, `dirty`, den `value`, den der User eingegeben hat, ...
  
  - `valid` - Ist das Feld valide, erfüllt es die Anforderungen?
  - `touched` - Wurde bereits in das Feld geklickt?
  - `dirty` - Wurde bereits in das Feld geschrieben?

## Validierungen

Bei Template-Driven Formularen können wir die Validierungsmöglichkeiten von HTML nutzen. Es gibt bspw. `required`, `pattern` mit welchem man eine RegularExpression mitgeben kann, `email` eine Angular Directive, usw.

Beispiel für die Validierung einer Mail:

````HTML
<input 
  type="email"
  class="form-control"
  id="email"
  name="email"
  ngModel
  pattern="^[\w!#$%&'*+\-/=?\^`{|}~]+(\.[\w!#$%&'*+\-/=?\^`{|}~]+)*@[\-\w]+[\.\-\w]*\.[a-zA-Z]{2,9}$"
  required
  email
/>
````

Darüber hinaus können wir noch bestimmen, dass der Submit-Button erst aktiviert wird, wenn alle Validierungen erfolgt sind:

````HTML
<button type="submit" class="btn btn-primary" [disabled]="!form.valid">
  Submit
</button>
````