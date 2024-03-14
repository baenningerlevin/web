# Property Binding

Property Binding ist sowohl auf **DOM Properties**, als auch auf **Directive Properties** und **Component Properties** verfügbar.

**Beispiele:**

````HTML
<p [innerText]="firstName + ' ' + lastName"></p>
<div>
  <label>Your favorite number: </label>
  <input type="text" [value]="number" />
</div>
<div [ngClass]="{ 'red-border': attachClass }" [ngStyle]="{'background-color'}: backgroundColor">Text</div>
````

Bei letzterem müssen wir noch ein Modul in unser TypeScript-File importieren:

<path>**databinding.component.ts**</path>

````Typescript
import { CommonModule } from '@angular/common';

@Component({
  ...
  imports: [CommonModule],
  ...
})
export class DatabindingComponent {
  ...
  attachClass = false;
  backgroundColor = 'lightblue';
  
  constructor() {
    setTimeout(() => {
      ...
      this.attachClass = true;
    }, 3000);
  }
}
````

Natürlich müssen wir auch die Klasse in unserer <path>.scss</path> hinzufügen. Nun wird die Klasse `red-border` nach drei Sekunden zu unserem `<div>` hinzugefügt, da sich dann der Wert von `attachClass` auf `true` ändert.