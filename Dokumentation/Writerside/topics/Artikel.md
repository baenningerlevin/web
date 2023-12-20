# Artikel

Das `<article>`-Element stellt eine in sich geschlossene Komposition in einem Dokument, einer Seite, einer Anwendung oder einer Website dar, die 
unabhängig verteilt oder wiederverwendet werden soll (z. B. bei der Syndikation). 

Beispiele hierfür sind: ein Forumsbeitrag, ein Zeitschriften- oder Zeitungsartikel oder ein Blogeintrag, eine Produktkarte, ein von einem Benutzer abgegebener Kommentar, ein interaktives Widget oder Gadget oder jedes andere unabhängige Inhaltselement.



```HTML
<article class="film_review">
    <h2>Jurassic Park</h2>
    <section class="main_review">
        <h3>Review</h3>
        <p>Dinos were great!</p>
    </section>
    <section class="user_reviews">
        <h3>User reviews</h3>
        <article class="user_review">
            <h4>Too scary!</h4>
            <p>Way too scary for me.</p>
            <footer>
                <p>
                    Posted on
                    <time datetime="2015-05-16 19:00">May 16</time>
                    by Lisa.
                </p>
            </footer>
        </article>
        <article class="user_review">
            <h4>Love the dinos!</h4>
            <p>I agree, dinos are my favorite.</p>
            <footer>
                <p>
                    Posted on
                    <time datetime="2015-05-17 19:00">May 17</time>
                    by Tom.
                </p>
            </footer>
        </article>
    </section>
</article>
```

![article.png](article.png) { width="350" thumbnail="true" }