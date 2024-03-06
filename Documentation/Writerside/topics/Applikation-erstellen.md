# Applikation erstellen

Um nun unser erstes Angular-Projekt zu erstellen, nutzen wir erneut die Angular CLI. Nun geben wir im Terminal folgendes ein:

````Console
ng new <name-of-app> 
````

> Damit Angular das File <path>app.module.ts</path> erstellt, müssen wir seit Angular v17 den Schalter `--no-standalone` mitgeben.
> 
> ````Console
> ng new <name-of-app> --no-standalone
> ````

{ style="warning" }

Wenn wir nun <shortcut>↵ Enter</shortcut> drücken, wird das Angular CLI uns einige Fragen bezüglich der Konfiguration der Applikation stellen. Nachdem wir alle Fragen beantwortet haben, wird in einem neuen Ordner mit dem Namen unserer App, die eigentliche Applikation erstellt.

## Applikation starten

Um unsere Angular-Applikation zu starten, nutzen wir folgenden Command:

````Console
ng serve -o
````
