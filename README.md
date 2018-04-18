# Conway's Game of Life
# Gra w życie

The Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970.

The "game" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves, or, for advanced "players", by creating patterns with particular properties (more on: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

Black cells represent living cells and white cells represent the dead ones.
Next cell generations are created based on the following rules:

- any live cell with fewer than two live neighbours dies - as if caused by underpopulation;
- any live cell with two or three live neighbours lives on to the next generation;
- any live cell with more than three live neighbours dies - as if by overpopulation;
- any dead cell with exactly three live neighbours becomes a live cell - as if by reproduction.
