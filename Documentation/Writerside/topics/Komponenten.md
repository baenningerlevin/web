# Komponenten

Eine Angular-Applikation besteht aus mehreren Komponenten. Alle Komponenten zusammen ergeben am Schluss unsere Applikation.

## Komponente erstellen

Um einen Component zu erstellen, nutzen wir die Angular CLI:

```Console
ng g component <name-of-component>
```

Nun sehen wir, dass im Verzeichnis <path>app</path> ein neuer Ordner mit dem Namen unseres Components erstellt wurde.

Ein Component hat immer einen sogenannten **Decorator**, ein Feature von TypeScript, und eine Klasse die wir exportieren. Mithilfe des Decorators weiss Angular schlussendlich, dass diese Klasse ein Component sein soll. Diesem Decorator geben wir ein Objekt mit, welches folgende Daten hat:

- `selector` - Name des HTML-Tags (unser Component), den wir in HTML verwenden können
- `standalone` - Ob dieser Component standalone ist oder nicht
- `imports` - Komponenten oder Funktionen, bspw. Router, die wir in diesem Component benötigen
- `templateUrl` - HTML-Datei unseres Components
- `styleUrl` - CSS/SCSS-Datei unseres Components

Beispiel für einen Standard-Component:

````Typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'components-databinding';
}
````

## Komponente rendern

Um nun unsere Komponente zu rendern, müssen wir den `selector` in <path>app-name-component.component.ts</path> finden und ihn zu unserem Parent-Component hinzufügen, bspw. `App`. Diesen Component müssen wir dann noch in unserer Parent-Component importieren.

````HTML
<app-name-component></app-name-component>
````

Nun wird auf unserer Seite der Inhalt von <path>app-name-component.component.html</path> gerendert.

