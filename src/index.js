import './style.css';
import { addScore, displayScorevalue } from './score';

const form = document.querySelector('form');
const refresh = document.getElementById('refresh');
displayScorevalue();

refresh.addEventListener('click', () => {
  displayScorevalue();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('name-input').value;
  const score = document.getElementById('score-input').value;
  if (user !== '' && score !== '') {
    const data = {
      user,
      score,
    };
    addScore(data);
    form.reset();
  }
});