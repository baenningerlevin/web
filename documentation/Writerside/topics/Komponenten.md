# Komponenten

Eine Angular-Applikation besteht aus mehreren Komponenten. Alle Komponenten zusammen ergeben am Schluss unsere Applikation.

## Komponente erstellen

Um einen Component zu erstellen, nutzen wir die Angular CLI:

```Console
ng g component <name-of-component>
```

Nun sehen wir, dass im Verzeichnis <path>app</path> ein neuer Ordner mit dem Namen unseres Components erstellt wurde. 

Zudem wurde in <path>app.module.ts</path> unsere neue Komponente registriert. In einer kleinen App werden normalerweise alle Komponenten im <path>app.module.ts</path> definiert. Bei grösseren Apps können wir hingegen sagen, dass unsere Komponente nur zu ihrem eigenem **Module** hinzugefügt werden soll.

## Komponente rendern

Um nun unsere Komponente zu rendern, müssen wir den `selector` in <path>app-name-component.component.ts</path> finden und ihn zu <path>app.component.html</path> hinzufügen, da dies unser `root`-Element ist.

````HTML
<app-name-component></app-name-component>
````

Nun wird auf unserer Seite der Inhalt von <path>app-name-component.component.html</path> gerendert.

