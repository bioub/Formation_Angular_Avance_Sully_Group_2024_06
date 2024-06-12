# Exercices

## RxJS

### Exercice 1

Réécrire le composant `ClockComponent` et remplacer `setInterval` par un observable créé avec `interval` et transformé avec l'opérateur `map` 

### Exercice 2

Créer un nouveau composant `CountdownComponent` qui contient un bouton qui affiche `10` et qui va se décrémenter chaque seconde jusqu'à `0` quand on cliquera.

Au click de ce bouton démarrer un observable en appelant `.subscribe`, l'observable aura été créé au préalable avec `interval`, `map` et `take` (ou `takeWhile`).

