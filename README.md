# Chess Champions

À partir d'une liste de joueurs d'échec, Chess Champions détermine les champions de la liste. 
Un joueur est dit "champion" si et seulement s'il n'y a personne d'autre dans la liste qui "l'élimine", c'est-à-dire que personne d'autre n'est à la fois strictement plus fort et plus jeune ou même âge ET personne d'autre n'est à la fois strictement plus jeune et plus fort ou même score.

## Fichiers importants

```chess-champions.js``` : La classe ```ChessChampions``` qui s'initialise avec une liste de joueurs et dont la méthode principale renvoie les champions parmi cette liste.

```chess-champions.test.js```: Le fichier de tests.

```players-list.js```: Grande liste de joueurs et de ses champions pour effectuer le test des performances.

## Installation
Lors de la 1ère utilisation utiliser ```npm install``` pour installer les dépendan
```
npm install
```

## Tests

Pour tester la classe, j'ai utilisé la librairie [Jest](https://jestjs.io/fr/docs/getting-started). Les différents tests se trouvent dans le fichier ```chess-champions.test.js```. Il couvre différents cas de figures tels que : 
- Il y a exactement 1 seul champion
- Plusieurs joueurs sont champions
- Des joueurs ont le même âge et le même elo
- Des joueurs ont le même âge, mais un elo différent
- Des joueurs ont le même elo, mais un âge différent
- La liste des joueurs est grande

Chaque test vérifie que la liste de sortie est équivalente à la liste attendue.  
Pour lancer les tests :
```
npm run test
```
