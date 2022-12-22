import Player from './get_scores.js';

const form = () => {
  const userName = document.querySelector('.name');
  const userScore = document.querySelector('.score');

  document.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = userName.value;
    const score = userScore.value;
    const newPlayer = new Player(name, score);
    newPlayer.addScores(newPlayer);
    userName.value = '';
    userScore.value = '';
  });
};
export default form;