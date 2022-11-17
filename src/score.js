const scores = document.querySelector('.scoreslist');
const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const id = 'QJXTiEpNqUzkLUYoReUR/';

let scoresArr = [];

const Scoresvalue = async () => {
  const response = await fetch(`${api}${id}scores/`)
    .then((res) => res.json())
    .then((data) => data.result)
    .catch(() => 'error');
  return response;
};

const displayScorevalue = () => {
  Scoresvalue().then((res) => {
    if (typeof res === 'object') {
      scoresArr = Array.from(res);
      scores.innerHTML = '';
      if (scoresArr.length > 0) {
        scoresArr.forEach((score) => {
          const scoresTemp = `<li><p>${score.user}: ${score.score}</p></li>`;
          scores.innerHTML += scoresTemp;
        });
      }
    }
  });
};

const addScore = async (data) => {
  await fetch(`${api}${id}scores/`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  }).then((response) => response.json());
};

exports.displayScorevalue = displayScorevalue;
exports.Scoresvalue = Scoresvalue;
exports.addScore = addScore;