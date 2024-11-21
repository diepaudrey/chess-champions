# Chess Champions

A partir d'une liste de joueurs d'échec, Chess Champions détermine les champions de la liste. 
Un joueur est dit "champion" si et seulement si il n'y a personne d'autre dans la liste qui "l'élimine", c'est à dire que personne d'autre n'est a la fois strictement plus fort et plus jeune ou même age ET personne d'autre n'est à la fois strictement plus jeune et plus fort ou même score

J'ai réalisé 2 fonctions qui déterminent les champions d'une liste, l'une est plus performante que l'autre. Au lancement du programme, le temps d'execution sera calculé pour les 2 fonctions. Plus la liste des joueurs est grande, et plus l'écart de temps sera important. 

## Usage

Pour changer la liste des joueurs, veuillez modifier la variable "players". Un joueur est défini par son age et son elo.

```
const players = [
    {age: 28, elo: 600},
    {age: 22, elo: 600},
]
```

Lancer ensuite le fichier 
```chess-champions.js```

