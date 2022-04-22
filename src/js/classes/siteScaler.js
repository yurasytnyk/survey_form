class SiteScaler {
  scaleSite() {
    const container = document.querySelector('.container');
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    const siteWidth = container.offsetWidth;
    const siteHeight = container.offsetHeight;
    const widthScale = containerWidth / siteWidth;
    let scaleValue = 1;

    if (containerHeight / siteHeight < widthScale) {
      scaleValue = containerHeight / siteHeight;
    } else {
      scaleValue = widthScale;
    }

    container.style.transform = `scale(${scaleValue})`;
    container.style.left = `${(containerWidth - siteWidth * scaleValue) / 2}px`;
    container.style.top = '0';
  }

  initScale() {
    document.addEventListener('DOMContentLoaded', () => {
      const loading = document.getElementById('loading');
      const container = document.querySelector('.container');
      loading.style.display = 'none';
      container.style.display = 'block';
      this.scaleSite();

      window.addEventListener('resize', this.scaleSite);
    });
  }
}

export const siteScaler = new SiteScaler();
