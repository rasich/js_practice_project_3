import Slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => { 
  const slider = new Slider('.page', '.sidecontrol .next');
  slider.render();
});