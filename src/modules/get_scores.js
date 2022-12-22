class Player {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }

//   create new player
addScores = async (playerObject) => {
  const endPoint = 'games/4SOOJo8RgF1RNSGwY1XP/scores/';
  const baseURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/${endPoint}`;
  const game = await fetch(baseURL, {
    method: 'post',
    body: JSON.stringify(playerObject),
    headers: {
      'content-Type': 'application/json',
    },
  });
  await game.json();
}
}
export default Player;