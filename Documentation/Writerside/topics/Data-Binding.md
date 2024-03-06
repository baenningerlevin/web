# Data Binding

## One-Way Data Binding

Um nun Daten aus <path>app-name-component</path> anzuzeigen, können wir ein Property erstellen:

````Typescript
@Component({...}})
export class AppointmentListComponent {
  appointment: string = "Take dog for a walk";
}
````

Hier erstellen wir ein Property namens `appointment` und geben ihm ein Standardwert mit. Um dieses Property nun in unserem HTML-File anzeigen zu lassen, nutzen wir folgende Syntax:

````HTML
<p>{{appointment}}</p>
````

Wir nutzen also `{{propertyName}}`, um unser Property zu rendern.

