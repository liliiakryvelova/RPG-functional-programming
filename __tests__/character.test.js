import { stateControl, getHealthPlayer1, hitPlayer2, hit2Player2, hit3Player2, hitPlayer1, hit2Player1, hit3Player1, getHealthPlayer2} from "../src/character.js";

describe("Player1 hit the Player2", () => {
  test('Should correctly remove 2 points from Player2', () => {
    const newState = stateControl(hitPlayer2);
    expect(newState.rock_player2).toEqual(98);
  });
});

describe("Player1 hit the Player2", () => {
  test('Should correctly remove 5 points from Player2', () => {
    const newState = stateControl(hit2Player2);
    expect(newState.rock_player2).toEqual(93);
  });
});

describe("Player1 hit the Player2", () => {
  test('Should correctly remove 7 points from Player2', () => {
    const newState = stateControl(hit3Player2);
    expect(newState.rock_player2).toEqual(86);
  });
});

describe("Player2 hit the Player1", () => {
  test('Should correctly remove 2 points from Player1', () => {
    const newState = stateControl(hitPlayer1);
    expect(newState.rock_player1).toEqual(98);
  });
});

describe("Player2 hit the Player1", () => {
  test('Should correctly remove 5 points from Player1', () => {
    const newState = stateControl(hit2Player1);
    expect(newState.rock_player1).toEqual(93);
  });
});

describe("Player2 hit the Player1", () => {
  test('Should correctly remove 7 points from Player1', () => {
    const newState = stateControl(hit3Player1);
    expect(newState.rock_player1).toEqual(86);
  });
});

describe("Player1 get the health +3 points", () => {
  test('Should correctly add 3 points to Player1', () => {
    const newState = stateControl(getHealthPlayer1);
    expect(newState.rock_player1).toEqual(89);
  });
});

describe("Player2 get the health +3 points", () => {
  test('Should correctly add 3 points to Player2', () => {
    const newState = stateControl(getHealthPlayer2);
    expect(newState.rock_player2).toEqual(89);
  });
});

