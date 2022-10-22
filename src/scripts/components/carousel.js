class Carousel extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero" title="Background gambar restoran">
    <picture>
      <source media="(max-width: 600px)" srcset="/images/heros/hero-image_4-small.jpg">
      <img src="/images/heros/hero-image_4-large.jpg" alt="hero" />
    </picture>
      <div class="motto">
        <h1>The Lounge Cafe</h1>
        <p>Find a cafe for you to lounge</p>
      </div>
    </div>
  `;
  }
}

customElements.define('carou-sel', Carousel);
