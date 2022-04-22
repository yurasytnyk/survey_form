import { statsCalculator } from '../classes/statsCalculator.js';
import { circleDrawer } from '../classes/circleDrawer.js';
import { addQuintileClassName } from './addQuintileClassName.js';
import { overallResults } from './overallResults.js';

export function drawChart() {
  const answers = Array.from(document.querySelectorAll('input[type=radio]:checked'));
  const scores = overallResults(answers);

  setTimeout(() => {
    const scoreNumbers = document.querySelectorAll('.scoreNumber');

    scoreNumbers.forEach((score, i) => {
      const bar = score.parentElement;
      bar.style.height = statsCalculator.calculateRate(scores[i], 70) + 'px';
      score.textContent = statsCalculator.calculateRate(scores[i]);

      addQuintileClassName(bar, score.textContent);
    });

    const averageRating = statsCalculator.calculateAvgRate(answers);
    circleDrawer.drawAverageCircleText(averageRating);
    circleDrawer.drawCircle(averageRating);
  }, 200);
}
