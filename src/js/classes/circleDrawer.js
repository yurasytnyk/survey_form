import { addQuintileClassName } from '../utils/addQuintileClassName.js';

class CircleDrawer {
  drawAverageCircleText(averageRating) {
    const overalCircle = document.querySelectorAll('.circle .fill');
    const avgRating = document.querySelector('.overall-result__text');
    avgRating.textContent = averageRating;
    const ovrallValue = parseInt(averageRating, 10);

    addQuintileClassName(avgRating, ovrallValue);
    overalCircle.forEach((item) => addQuintileClassName(item, ovrallValue));
  }

  drawCircle(averageRating) {
    const rotation = Math.floor((averageRating / 5) * 180);

    const circleParts = document.querySelectorAll(
      '.circle .fill, .circle .mask.full'
    );
    circleParts.forEach((circlePart) => {
      circlePart.style.transform = `rotate(${rotation}deg)`;
    });
  }
}

export const circleDrawer = new CircleDrawer();
