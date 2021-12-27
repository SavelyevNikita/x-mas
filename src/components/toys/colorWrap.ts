export class СolorWrap {
  node!: HTMLElement;
  colorStatic!: HTMLParagraphElement;
  colorSet!: HTMLDivElement;
  white!: HTMLDivElement;
  yellow!: HTMLDivElement;
  red!: HTMLDivElement;;
  blue!: HTMLDivElement;;
  green!: HTMLDivElement;;

  constructor(str: string) {
    this.node = document.querySelector(str)!;
  }
  render(): void {
    // console.log(this.node);
    const colorStatic = document.createElement('p');
    colorStatic.setAttribute('class', 'color-static');
    colorStatic.textContent = 'Цвет';

    const colorSet = document.createElement('div');
    colorSet.setAttribute('class', 'color-set');

    const white = document.createElement('div');
    white.setAttribute('class', 'white');

    const yellow = document.createElement('div');
    yellow.setAttribute('class', 'yellow');

    const red = document.createElement('div');
    red.setAttribute('class', 'red');

    const blue = document.createElement('div');
    blue.setAttribute('class', 'blue');

    const green = document.createElement('div');
    green.setAttribute('class', 'green');


    colorSet.appendChild(white);
    colorSet.appendChild(yellow);
    colorSet.appendChild(red);
    colorSet.appendChild(blue);
    colorSet.appendChild(green);

    this.node.appendChild(colorStatic);
    this.node.appendChild(colorSet);

  }
  destroy() {
  }
}
