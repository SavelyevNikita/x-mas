// // Create a class for the element
// class ToysMeny extends HTMLElement {
//     constructor() {
//       // Always call super first in constructor
//       super();
  
//       // Create a shadow root
//       const shadow = this.attachShadow({mode: 'open'});
  
//       // Create spans
//       const wrapper = document.createElement('div');
//       wrapper.setAttribute('class', 'wrapper');

//       const effectsAndSeachWrap = document.createElement('div');
//       effectsAndSeachWrap.setAttribute('class', 'effects-and-seach-wrap');

//       const sound = document.createElement('div');
//       sound.setAttribute('class', 'sound'); 

//       const searchSet = document.createElement('div');
//       searchSet.setAttribute('class', 'search-set'); 

//       const sortWrap = document.createElement('div');
//       sortWrap.setAttribute('class', 'sort-wrap');

//       const formWrap = document.createElement('div');
//       formWrap.setAttribute('class', 'form-wrap');

//       const set0fWrap = document.createElement('div');
//       set0fWrap.setAttribute('class', 'set0f-wrap');

//       const yearWrap = document.createElement('div');
//       yearWrap.setAttribute('class', 'year-wrap');

//       const colorWrap = document.createElement('div');
//       colorWrap.setAttribute('class', 'color-wrap');

//       const sizeWrap = document.createElement('div');
//       sizeWrap.setAttribute('class', 'size-wrap');

//       const favoriteWrap = document.createElement('div');
//       favoriteWrap.setAttribute('class', 'favorite-wrap');

//       const resetWrap = document.createElement('div');
//       resetWrap.setAttribute('class', 'reset-wrap');
//     }
//     render(){

//     }
//   }
  
//   // Define the new element
//   customElements.define('toys-menu', ToysMeny);