
const players = [
    {age: 28, elo: 700},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 25, elo: 500},
    {age: 25, elo: 400},
]

/**
 * This first version has a time complexity of O(n²)
 */
function getChampions(players) {
    let champions = []
    for(const player of players) {
        const betterPlayersCase1 = players.filter(p => p.elo > player.elo && p.age <= player.age)
        const betterPlayersCase2 = players.filter(p => p.age < player.age && p.elo >= player.elo)
        //If the 2 variables are empty, it means that the player is a champion by definition
        if(betterPlayersCase1.length === 0 && betterPlayersCase2.length === 0) {
            champions.push(player)
        }
    }
    return champions
}

/**
 * This better version has a time complexity of O(n)
 */
function getChampions2(players) {
    let champions = []
    //Sort the players by descending elo and ascending age
    players.sort((a, b) => b.elo - a.elo || a.age - b.age)
    let champion = players[0]
    for(const player of players) {
        //As players are already sorted by elo, we need to check their age. We also check if the player is the same as the champion
        if(player.age < champion.age || (player.age === champion.age && player.elo === champion.elo)) {
            champions.push(player)
            champion = player
        }
    }
    return champions
}

/**
 * We can compare results and performances when the number of players get bigger.
 */
function startProgram() {
    const start = performance.now();
    const champions = getChampions(players)
    const end = performance.now();
    console.log("-----Function with lower performance------");
    console.log(`Execution time: ${end - start} ms`);
    console.log("Champions list length :", champions.length);
    console.log("Champions list:", champions);
    

    const start2 = performance.now();
    const champions2 = getChampions2(players)
    const end2 = performance.now();
    console.log("-----Function with better performance------");
    console.log(`Execution time: ${end2 - start2} ms`);
    console.log("Champions list length :", champions2.length);
    console.log("Champions list:", champions2);
}

startProgram()
