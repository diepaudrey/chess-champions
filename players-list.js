const playersData = [
    {age: 32, elo: 700},
    {age: 24, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 28, elo: 600},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
    {age: 25, elo: 500},
]

const championsData = [
    {age: 32, elo: 700},
    {age: 24, elo: 600},
    
]

module.exports = {playersData, championsData}