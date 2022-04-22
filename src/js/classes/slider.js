class Slider {
  current_slide;
  next_slide;
  previous_slide;
  steps = document.querySelector('.progressbar').children;
  slideIndx = 0;
  duration = 600;

  getPrevSlide(fieldsetSection) {
    if (fieldsetSection) {
      this.current_slide = fieldsetSection;
      this.previous_slide = fieldsetSection.previousElementSibling;
  
      // de-activate current step on progressbar
      const slides = Array.from(document.querySelectorAll('fieldset'));
      this.slideIndx = slides.findIndex((element) => element.id === this.current_slide.id);
      
      if (this.slideIndx >= 0 && this.steps[this.slideIndx]) {
        this.steps[this.slideIndx].classList.remove('active');
      }

      // show the previous fieldset
      anime({
        targets: this.current_slide,
        opacity: ['1', '0'],
        left: ['0', '50%'],
        duration: this.duration,
        easing: 'cubicBezier(0.680, -0.550, 0.265, 1.550)',
        complete: () => {
          this.current_slide.style.display = 'none';
        },
      });

      anime({
        targets: this.previous_slide,
        opacity: ['0', '1'],
        scale: ['0.8', '1'],
        duration: this.duration,
        easing: 'cubicBezier(0.680, -0.550, 0.265, 1.550)',
      });
      this.previous_slide.style.display = 'block';
    }
  }

  getNextSlide(fieldsetSection) {
    if (fieldsetSection) {
      this.current_slide = fieldsetSection;
      this.next_slide = fieldsetSection.nextElementSibling;

      // activate next step on progressbar using the index of next_fs
      const slides = Array.from(document.querySelectorAll('fieldset'));
      this.slideIndx = slides.findIndex((element) => element.id === this.current_slide.id) + 1;

      if (this.slideIndx < this.steps.length) {
        this.steps[this.slideIndx].classList.add('active');
      }
      
      // show the next fieldset and hide current
      this.next_slide.style.display = 'block';
      anime({
        targets: this.current_slide,
        opacity: ['1', '0'],
        duration: this.duration,
        scale: ['1', '0.8'],
        easing: 'cubicBezier(0.680, -0.550, 0.265, 1.550)',
        complete: () => {
          this.current_slide.style.display = 'none';
        },
      });

      anime({
        targets: this.next_slide,
        left: ['50%', '0'],
        opacity: ['0', '1'],
        duration: this.duration,
        easing: 'cubicBezier(0.680, -0.550, 0.265, 1.550)',
      });
    }
  }
}

export const slider = new Slider();
