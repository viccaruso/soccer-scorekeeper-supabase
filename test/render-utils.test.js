// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderGame, renderTeam } from '../render-utils.js';
const test = QUnit.test;

test('renderGame(game) should return DOM node', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="game"><div class="team"><p class="name">Potato</p><p class="score">2</p></div><div class="team"><p class="name">Tomato</p><p class="score">4</p></div></div>';
    
    const game = {
        name1: 'Potato',
        name2: 'Tomato',
        score1: 2,
        score2: 4
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGame(game);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, `<div class="game"><div class="team"><p class="name">Potato</p><p class="score">2</p></div><div class="team"><p class="name">Tomato</p><p class="score">4</p></div></div>`);
});

test('renderTeam(name, score) should return DOM node', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="team"><p class="name">Potato</p><p class="score">5</p></div>';
    
    const name = 'Potato';
    const score = 5;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTeam(name, score);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, '<div class="team"><p class="name">Potato</p><p class="score">5</p></div>');
});
