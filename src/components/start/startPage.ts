import { ToyPage } from '../toys/toyMainPage';

export class StartPage {
  node!: HTMLElement;
  startBackground!: HTMLDivElement;
  interfaceWrapper!: HTMLDivElement;
  greating!: HTMLHeadingElement;
  startWrapper!: HTMLDivElement;
  start!: HTMLParagraphElement;

  constructor(str: string) {
    this.node = document.querySelector(str)!;

  }
  render(): void {
    const startBackground = document.createElement('div');
    startBackground.setAttribute('class', 'start-background');

    const interfaceWrapper = document.createElement('div');
    interfaceWrapper.setAttribute('class', 'interface-wrapper');

    const greating = document.createElement('h1');
    greating.setAttribute('class', 'greating');
    greating.textContent = 'Помогите бабушке нарядить елку';

    const startWrapper = document.createElement('div');
    startWrapper.setAttribute('class', 'start-wrapper');

    const start = document.createElement('p');
    start.setAttribute('class', 'start');
    start.textContent = 'Начать';

    interfaceWrapper.appendChild(greating);
    startBackground.appendChild(interfaceWrapper);

    startWrapper.appendChild(start);
    startBackground.appendChild(startWrapper);

    this.node.appendChild(startBackground);

    startWrapper.addEventListener('click', ()=>{this.buttonHandler();});
    startBackground.addEventListener('click', ()=>{this.buttonHandler();});
  }
  destroy() {
    this.node.innerHTML = '';
  }
  buttonHandler(){
    this.destroy();
    const toyPage = new ToyPage('main');
    toyPage.render();
  }

}
