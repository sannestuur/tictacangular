# TicTacToe game

This is a tic tac toe game where 2 players can play against each other on the same sceen. The game is won when a player has 3 adjacent boxes selected, either horizontally, vertically or diagonally.

Design: [tic-tac-toe.design.pdf](tic-tac-toe.design.pdf)

## PREREQUISITES
To be able to run this application, you'll need to install the following software:
 * Node JS LTS https://nodejs.org/en/
 * Yarn https://yarnpkg.com

## INSTALLATION 
To start the application, simply open your favourite console / terminal.

To install all dependencies needed by this application
```
yarn
```

## STARTING
start the development server:
```
yarn start
```
You can now open your browser on http://localhost:4200/ to view the application

## TESTING
to run and watch the unit tests:
```
yarn test
```

##  Game Requirements:

 * When starting a game, there should be 2 players
 * Players cannot have the same name
 * Players take turn making a move
 * Game is won when a player has 3 adjacent boxes selected, either horizontally, vertically or diagonally.
 * Game is a tie when neither player has won and there are no more moves left
 * After a game, players can choose to play again against each other or quit.
