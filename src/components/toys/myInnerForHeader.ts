// class Ring extends HTMLElement {
//   // Can define constructor arguments if you wish.
//   constructor() {
//     // If you define a constructor, always call super() first!
//     // This is specific to CE and required by the spec.
//     super();
//     // Setup a click listener on <app-drawer> itself.
//     const ring = document.createElement('div')!;
//     ring.setAttribute('class', 'ring');
//     this.innerText = 'hello';
//     const style = document.createElement('style');
//     console.log(style);
//     console.log(style.isConnected);
//     style.innerHTML = `
//     <style>
//       .ring {
//         background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);
//         width: 36px;
//         height: 36px;    
//       }
//     </style>
//     `;
//     // ring.appendChild(ring);
//     ring.appendChild(style);
//   }
// }

// customElements.define('ring-for-favorite', Ring);