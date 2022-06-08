document.addEventListener('DOMContentLoaded', function(){
  const links = document.querySelectorAll('.sidebar__link');
  for (const link of links) {
      link.addEventListener('click', function() {
          for (const  lnk of links) {
              lnk.classList.remove('sidebar__item--active');
              lnk.classList.add('menu__link')
              
          }

          this.classList.add('sidebar__item--active');
          this.classList.remove('menu__link');

          const tabs = document.querySelectorAll('.content');
          for (const tab of tabs) {
              tab.classList.add('content--hidden');
          }
         
          
          const id = this.href.split('#')[1];
          document.querySelector('#' + id).classList.remove('content--hidden');
                 
      });    
  }
  
});

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.menu__link');
  for (const button of buttons) {
    button.addEventListener('click',function() {
      for (const btn of buttons) {
        btn.classList.remove('menu__link--active');
        btn.classList.add('menu__link');
      }

      this.classList.add('menu__link--active')
      this.classList.remove('menu__link')

      const slides = document.querySelectorAll(".slide");
      for(const slide of slides ) {
        slide.classList.add('slide--hidden');
      }

      const identificate = this.href.split('#')[1];
      document.querySelector('#' + identificate).classList.remove('slide--hidden')
    });
  }
});