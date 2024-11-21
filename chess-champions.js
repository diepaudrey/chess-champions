class ChessChampions {
    constructor(players) {
        this.players = players;
    }

    findChampions() {
        this.players.sort((a, b) => b.elo - a.elo || a.age - b.age)
        const champions = []
        let champion = this.players[0]
        for(const player of this.players) {
            //As players are already sorted by elo, we need to check their age. We also check if the player is the same as the champion
            if(player.age < champion.age || (player.age === champion.age && player.elo === champion.elo)) {
                champions.push(player)
                champion = player
            }
        }
        return champions
    }
}
module.exports = ChessChampions;
