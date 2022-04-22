import '../scss/style.scss';
import { siteScaler } from './classes/siteScaler.js';
import { slider } from './classes/slider.js';
import { stepsGenerator } from './classes/stepsGenerator.js';
import { drawChart } from './utils/drawChart.js';

// DOM Elements
const mainContainer = document.getElementById('main');
const progressbar = document.querySelector('.progressbar');
const identitySubhead = document.getElementById('identity');
const adminSubhead = document.getElementById('administration');
const investmentSubhead = document.getElementById('investmentManagement');
const wealthSubhead = document.getElementById('wealthPreservation');

// Scale site on resize
siteScaler.initScale();

// Generate survey form steps
stepsGenerator.generateSteps();

let notClicked = true;

mainContainer.addEventListener('click', (e) => {
  const fieldsetSection = e.target.closest('.section');

  if (e.target.name === 'reset') {
    location.reload();
  }

  if (e.target.id === 'showResults') {
    siteScaler.initScale();
    drawChart();
  }

  if (e.target.closest('[name=question-4]') && notClicked) {
    identitySubhead.style.opacity = '0';
    adminSubhead.style.opacity = '1';
  }

  if (e.target.closest('[name=question-7]') && notClicked) {
    adminSubhead.style.opacity = '0';
    investmentSubhead.style.opacity = '1';
  }

  if (e.target.closest('[name=question-10]') && notClicked) {
    investmentSubhead.style.opacity = '0';
    wealthSubhead.style.opacity = '1';
  }

  if (e.target.closest('[name=question-12]')) {
    notClicked = false;
    progressbar.style.display = 'none';
    wealthSubhead.style.opacity = '0';
  }

  if (e.target.closest('.previous')) {
    slider.getPrevSlide(fieldsetSection);
  }

  if (e.target.closest('.next')) {
    slider.getNextSlide(fieldsetSection);
  }
});
