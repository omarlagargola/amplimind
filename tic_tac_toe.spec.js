const mockInput = jest.fn();
jest.mock('prompt-sync', () => () => mockInput);

const startGame = require('./tic_tac_toe.js');

describe('tic tac tote', function() {
  let consoleSpy = jest.spyOn(console, "log");

  it('test tic tac toe', function(){
    // player inputs
    mockInput.mockReturnValueOnce('1:1');
    mockInput.mockReturnValueOnce('1:2');
    mockInput.mockReturnValueOnce('2:1');
    mockInput.mockReturnValueOnce('2:2');
    mockInput.mockReturnValueOnce('3:1');
    mockInput.mockReturnValueOnce('');
    mockInput.mockReturnValueOnce('p');
    mockInput.mockReturnValueOnce('');
    mockInput.mockReturnValueOnce('wrongInput');
    mockInput.mockReturnValueOnce('e');
    // run tic tac toe
    startGame();
    expect(mockInput).toHaveBeenCalledWith('X: Please enter the position of your mark (Row:Column): ');
    // grid is visible
    expect(consoleSpy).toHaveBeenNthCalledWith(1, '   |   |   ');
    expect(consoleSpy).toHaveBeenNthCalledWith(2, '-----------');
    expect(consoleSpy).toHaveBeenNthCalledWith(3, '   |   |   ');
    expect(consoleSpy).toHaveBeenNthCalledWith(4, '-----------');
    expect(consoleSpy).toHaveBeenNthCalledWith(5, '   |   |   ');
    // X plays
    expect(consoleSpy).toHaveBeenNthCalledWith(6, ' X |   |   ');
    expect(consoleSpy).toHaveBeenNthCalledWith(7, '-----------');
    expect(consoleSpy).toHaveBeenNthCalledWith(8, '   |   |   ');
    expect(consoleSpy).toHaveBeenNthCalledWith(9, '-----------');
    expect(consoleSpy).toHaveBeenNthCalledWith(10, '   |   |   ');
    // O plays
    expect(consoleSpy).toHaveBeenNthCalledWith(11, ' X | O |   ');
    expect(consoleSpy).toHaveBeenNthCalledWith(12, '-----------');
    expect(consoleSpy).toHaveBeenNthCalledWith(13, '   |   |   ');
    expect(consoleSpy).toHaveBeenNthCalledWith(14, '-----------');
    expect(consoleSpy).toHaveBeenNthCalledWith(15, '   |   |   ');
    // X plays
    expect(consoleSpy).toHaveBeenNthCalledWith(16, ' X | O |   ');
    expect(consoleSpy).toHaveBeenNthCalledWith(17, '-----------');
    expect(consoleSpy).toHaveBeenNthCalledWith(18, ' X |   |   ');
    expect(consoleSpy).toHaveBeenNthCalledWith(19, '-----------');
    expect(consoleSpy).toHaveBeenNthCalledWith(20, '   |   |   ');
    // O plays
    expect(consoleSpy).toHaveBeenNthCalledWith(21, ' X | O |   ');
    expect(consoleSpy).toHaveBeenNthCalledWith(22, '-----------');
    expect(consoleSpy).toHaveBeenNthCalledWith(23, ' X | O |   ');
    expect(consoleSpy).toHaveBeenNthCalledWith(24, '-----------');
    expect(consoleSpy).toHaveBeenNthCalledWith(25, '   |   |   ');
    // X plays and wins
    expect(consoleSpy).toHaveBeenNthCalledWith(26, ' X | O |   ');
    expect(consoleSpy).toHaveBeenNthCalledWith(27, '-----------');
    expect(consoleSpy).toHaveBeenNthCalledWith(28, ' X | O |   ');
    expect(consoleSpy).toHaveBeenNthCalledWith(29, '-----------');
    expect(consoleSpy).toHaveBeenNthCalledWith(30, ' X |   |   ');
    // Show stats
    expect(mockInput).toHaveBeenCalledWith('Stats:\nX wins: 1\nO wins: 0\nPress enter to remain....');
    // Wrong input
    expect(mockInput).toHaveBeenCalledWith('O: The inserted field is not valid. Try again: ');
  });
});