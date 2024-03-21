# Fragements

Fragments sind der Teil in der URL mit dem `#`. Das sorgt dafür, dass auf dieser Seite direkt zu einem Objekt mit der ID gesprungen wird.

Die Übergabe funktioniert so: 


Die Extrahierung funktioniert genau gleich, wie bei Query Parameter:

````Typescript
private subscriptionFragment!: Subscription;
fragment!: string | null;

constructor(private activatedRoute: ActivatedRoute) {}

ngOnInit(): void {
  this.subscriptionFragment = this.activatedRoute.fragment.subscribe(
    (fragment) => {
      this.fragment = fragment;
    }
  );
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
  this.subscriptionFragment.unsubscribe();
}
````