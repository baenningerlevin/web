# Attribute

Elemente können auch Attribute haben. Attribute sehen so aus:

```HTML
<p class="editor-note">My cat is very grumpy</p>
```

Attribute enthalten zusätzliche Informationen über das Element, welches nicht im Inhalt erscheinen wird. In diesem Beispiel wird das `class` 
Attribut benutzt.

Ein Attribut sollte:

- Ein Leerzeichen zwischen ihm und dem Elementnamen haben.
- Den **Attributnamen**, gefolgt von einem `=`-Zeichen.
- Ein **Attributwert** zwischen `"..."`.

## Boolean Attribute

Manchmal sieht man Attribute ohne jeglichen Wert, das ist ein sogenanntes **Boolean Attribut**. 

```HTML
<input type="text" disabled />
```