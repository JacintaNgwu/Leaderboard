const ScoreBoard = async () => {
  const endPoint = 'games/4SOOJo8RgF1RNSGwY1XP/scores/';
  const baseURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/${endPoint}`;
  const game = await fetch(baseURL);
  const res = await game.json();
  const scoreList = res.result;

  //   generating score-list dynamically
  const listContainer = document.querySelector('.score-list');
  listContainer.innerHTML += scoreList.map((scores) => `<li>${scores.user}: ${scores.score}</li>`).join('');
};
module.exports = ScoreBoard;