// Create a class for the element
class wrapper extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
  
      // Create a shadow root
      const shadow = this.attachShadow({mode: 'open'});
  
      // Create spans
      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'wrapper');

      const effectsAndSeachWrap = document.createElement('div');
      effectsAndSeachWrap.setAttribute('class', 'effects-and-seach-wrap');

      const sortWrap = document.createElement('div');
      sortWrap.setAttribute('class', 'sort-wrap');

      const formWrap = document.createElement('div');
      formWrap.setAttribute('class', 'form-wrap');

      const set0fWrap = document.createElement('div');
      set0fWrap.setAttribute('class', 'set0f-wrap');

      const yearWrap = document.createElement('div');
      yearWrap.setAttribute('class', 'year-wrap');

      const colorWrap = document.createElement('div');
      colorWrap.setAttribute('class', 'color-wrap');

      const sizeWrap = document.createElement('div');
      sizeWrap.setAttribute('class', 'size-wrap');

      const favoriteWrap = document.createElement('div');
      favoriteWrap.setAttribute('class', 'favorite-wrap');

      const resetWrap = document.createElement('div');
      resetWrap.setAttribute('class', 'reset-wrap');



  
    //   const icon = document.createElement('span');
    //   icon.setAttribute('class', 'icon');
    //   icon.setAttribute('tabindex', 0);
  
    //   const info = document.createElement('span');
    //   info.setAttribute('class', 'info');
  
    //   // Take attribute content and put it inside the info span
    //   const text = this.getAttribute('data-text');
    //   info.textContent = text;
  
    //   // Insert icon
    //   let imgUrl;
    //   if(this.hasAttribute('img')) {
    //     imgUrl = this.getAttribute('img');
    //   } else {
    //     imgUrl = 'img/default.png';
    //   }
  
    //   const img = document.createElement('img');
    //   img.src = imgUrl;
    //   icon.appendChild(img);
  
    //   // Create some CSS to apply to the shadow dom
    //   const style = document.createElement('style');
    //   console.log(style.isConnected);
  
    //   style.textContent = `
    //     .wrapper {
    //       position: relative;
    //     }
    //     .info {
    //       font-size: 0.8rem;
    //       width: 200px;
    //       display: inline-block;
    //       border: 1px solid black;
    //       padding: 10px;
    //       background: white;
    //       border-radius: 10px;
    //       opacity: 0;
    //       transition: 0.6s all;
    //       position: absolute;
    //       bottom: 20px;
    //       left: 10px;
    //       z-index: 3;
    //     }
    //     img {
    //       width: 1.2rem;
    //     }
    //     .icon:hover + .info, .icon:focus + .info {
    //       opacity: 1;
    //     }
    //   `;
  
    //   // Attach the created elements to the shadow dom
    //   shadow.appendChild(style);
    //   console.log(style.isConnected);
    //   shadow.appendChild(wrapper);
    //   wrapper.appendChild(icon);
    //   wrapper.appendChild(info);
    }
  }
  
  // Define the new element
  customElements.define('wrapper', wrapper);