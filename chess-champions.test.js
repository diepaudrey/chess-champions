const ChessChampions = require("./chess-champions.js");
const {playersData, championsData} = require("./players-list.js");

test('Empty players', () => {
    const players = []
    const expectedChampions = []

    const chessPlayers = new ChessChampions(players)
    expect(chessPlayers.findChampions()).toStrictEqual(expectedChampions)
});

test('Single Champion', () => {
    const players = [
        {age: 28, elo: 600},
        {age: 30, elo: 500},
        {age: 32, elo: 400},
    ]
    const expectedChampions = [
        {age: 28, elo: 600},
    ]

    const chessPlayers = new ChessChampions(players)
    expect(chessPlayers.findChampions()).toStrictEqual(expectedChampions)
});

test('Multiple Champions', () => {
    const players = [
        {age: 28, elo: 600},
        {age: 25, elo: 500},
        {age: 30, elo: 500},
        {age: 32, elo: 400},
    ]
    const expectedChampions = [
        {age: 28, elo: 600},
        {age: 25, elo: 500},
    ]

    const chessPlayers = new ChessChampions(players)
    expect(chessPlayers.findChampions()).toStrictEqual(expectedChampions)
});

test('Same Champions', () => {
    const players = [
        {age: 28, elo: 600},
        {age: 28, elo: 600},
        {age: 25, elo: 500},
        {age: 25, elo: 500},
        {age: 30, elo: 500},
        {age: 32, elo: 400},
    ]
    const expectedChampions = [
        {age: 28, elo: 600},
        {age: 28, elo: 600},
        {age: 25, elo: 500},
        {age: 25, elo: 500},
    ]

    const chessPlayers = new ChessChampions(players)
    expect(chessPlayers.findChampions()).toStrictEqual(expectedChampions)
});

test('Same Elo Champion', () => {
    const players = [
        {age: 28, elo: 600},
        {age: 25, elo: 600},
    ]
    const expectedChampions = [
        {age: 25, elo: 600},
    ]

    const chessPlayers = new ChessChampions(players)
    expect(chessPlayers.findChampions()).toStrictEqual(expectedChampions)
});

test('Same Age Champion', () => {
    const players = [
        {age: 25, elo: 700},
        {age: 25, elo: 600},
    ]
    const expectedChampions = [
        {age: 25, elo: 700},
    ]

    const chessPlayers = new ChessChampions(players)
    expect(chessPlayers.findChampions()).toStrictEqual(expectedChampions)
});

test('Large players list', () => {
    const players = playersData
    const expectedChampions = championsData

    const chessPlayers = new ChessChampions(players)
    expect(chessPlayers.findChampions()).toStrictEqual(expectedChampions)
});