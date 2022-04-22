import data from '../mocks/data.json' assert { type: "json" };

class StepsGenerator {
  form = document.forms['survey-form'];
  headings = [];

  constructor(headings) {
    this.headings = headings;
  }

  generateButton(step, fieldset) {
    if (step > 0) {
      const button = document.createElement('input');
      button.type = 'button';
      button.name = 'previous';
      button.className = 'previous button';
      button.value = 'Back';
      
      fieldset.append(button);
    }
  }

  generateStep(step, labels, fieldset) {
    for (let j = 0; j < labels.length; j++) {
      const label = document.createElement('label');
      label.className = 'next';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `question-${step + 1}`;
      input.value = j + 1;
      input.className = this.headings[step].id;

      const span = document.createElement('span');
      span.className = 'below';
      span.textContent = labels[j];

      label.append(input, span);
      fieldset.appendChild(label);
    }
  }
  
  generateSteps() {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < this.headings.length; i++) {
      const fieldset = document.createElement('fieldset');
      fieldset.className = 'section';
      fieldset.id = `s${i + 1}`;
  
      const h2 = document.createElement('h2');
      h2.textContent = this.headings[i].title;
      h2.className = 'section__title';
  
      fieldset.appendChild(h2);
      this.generateStep(i, this.headings[i].labels, fieldset);
      this.generateButton(i, fieldset);
      fragment.appendChild(fieldset);    
    }

    this.form.prepend(fragment);
  }
}

export const stepsGenerator = new StepsGenerator(data);
