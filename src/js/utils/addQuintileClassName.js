export function addQuintileClassName(element, value) {
  if (value >= 3.9) {
    element.classList.add('quintile-1');
  } else if (value < 3.9 && value >= 3.6) {
    element.classList.add('quintile-2');
  } else if (value < 3.6 && value >= 3.2) {
    element.classList.add('quintile-3');
  } else if (value < 3.2 && value >= 2.9) {
    element.classList.add('quintile-4');
  } else if (value < 2.9 && value >= 0) {
    element.classList.add('quintile-5');
  }
}
