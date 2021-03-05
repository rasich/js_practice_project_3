export default class ShowInfo {
  constructor(triggers) {
    this.btns = document.querySelectorAll(triggers);
  }


  init() {
    this.btns.forEach(btn => {
      
      btn.addEventListener('click', () => {
        btn.nextElementSibling.classList.toggle('msg');
        
        if (btn.nextElementSibling.classList.contains('msg')) {
          btn.querySelector('svg path').style.display = '';
        } else {
          btn.nextElementSibling.style.marginTop = '20px';
          btn.querySelector('svg path').style.display = 'none';
        }
      });
    });
  }
}