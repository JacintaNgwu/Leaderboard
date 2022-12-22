// create new game
const createGame = async () => {
  const gameName = { name: 'My lovely new game' };
  const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
  const game = await fetch(baseURL, {
    method: 'post',
    body: JSON.stringify(gameName),
    headers: {
      'content-Type': 'application/json',
    },
  });
  await game.json();
};

export default createGame;