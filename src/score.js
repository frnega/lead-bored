const scorevalue = [
  { name: 'Name', score: 100 },
  { name: 'Name', score: 20 },
  { name: 'Name', score: 50 },
  { name: 'Name', score: 78 },
  { name: 'Name', score: 125 },
  { name: 'Name', score: 77 },
  { name: 'Name', score: 42 },
];

const viewScores = () => {
  const scoreBoardContainer = document.querySelector('#scoreslist');
  scoreBoardContainer.innerHTML = '';
  scorevalue.forEach((user) => {
    scoreBoardContainer.innerHTML += `<li>
        <p>${user.name}: ${user.score}</p>
        </li>`;
  });
};

exports.viewScores = viewScores;