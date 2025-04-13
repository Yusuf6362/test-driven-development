import { play } from './rock-paper-scissors';

describe('rock-paper-scissors', () => {
  test.each([
    ['rock', 'scissors', 1],
    ['scissors', 'paper', 1],
    ['paper', 'rock', 1],
    ['scissors', 'rock', 2],
    ['paper', 'scissors', 2],
    ['rock', 'paper', 2],
    ['rock', 'rock', 0],
    ['paper', 'paper', 0],
    ['scissors', 'scissors', 0],
    [' ROCK ', ' scissors ', 1],
    ['Paper', 'ROCK', 1],
  ])('play(%s, %s) should return %i', (player1, player2, expected) => {
    expect(play(player1, player2)).toBe(expected);
  });

  it('throws error on invalid moves', () => {
    expect(() => play('rock', 'lizard')).toThrow('Invalid move');
  });
});
