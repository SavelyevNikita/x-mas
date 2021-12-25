export class FormWrap {
  node!: HTMLElement;
  fortStatic!:HTMLParagraphElement;
  fortSet!:HTMLDivElement;
  bellWrap!:HTMLDivElement;
  bell!:HTMLDivElement;
  bellStatic!:HTMLParagraphElement;
  ballWrap!:HTMLDivElement;
  ball!:HTMLDivElement;
  ballStatic!:HTMLParagraphElement;
  coneWrap!:HTMLDivElement;
  cone!:HTMLDivElement;
  coneStatic!:HTMLParagraphElement;
  snowWrap!:HTMLDivElement;
  snow!:HTMLDivElement;
  snowStatic!:HTMLParagraphElement;
  figurineWrap!:HTMLDivElement;
  figurine!:HTMLDivElement;
  figurineStatic!:HTMLParagraphElement;

  constructor(str:string) {
    this.node = document.querySelector(str)!;
  }
  render() {
    const formStatic = document.createElement('p');
    formStatic.setAttribute('class', 'form-static');
    formStatic.textContent='Форма';

    const fortSet = document.createElement('div');
    fortSet.setAttribute('class', 'form-set');

    const bellWrap = document.createElement('div');
    bellWrap.setAttribute('class', 'bell-wrap');

    const bell = document.createElement('div');
    bell.setAttribute('class', 'bell');

    const bellStatic = document.createElement('p');
    bellStatic.setAttribute('class', 'bell-static');
    bellStatic.textContent='Колокол';

    bellWrap.appendChild(bell);
    bellWrap.appendChild(bellStatic);

    const ballWrap = document.createElement('div');
    ballWrap.setAttribute('class', 'ball-wrap');

    const ball = document.createElement('div');
    ball.setAttribute('class', 'ball');

    const ballStatic = document.createElement('p');
    ballStatic.setAttribute('class', 'ball-static');
    ballStatic.textContent='Шар';

    ballWrap.appendChild(ball);
    ballWrap.appendChild(ballStatic);

    const coneWrap = document.createElement('div');
    coneWrap.setAttribute('class', 'cone-wrap');

    const cone = document.createElement('div');
    cone.setAttribute('class', 'cone');

    const coneStatic = document.createElement('p');
    coneStatic.setAttribute('class', 'cone-static');
    coneStatic.textContent='Шишка';

    coneWrap.appendChild(cone);
    coneWrap.appendChild(coneStatic);

    const snowWrap = document.createElement('div');
    snowWrap.setAttribute('class', 'snow-wrap');

    const snow = document.createElement('div');
    snow.setAttribute('class', 'snow');

    const snowStatic = document.createElement('p');
    snowStatic.setAttribute('class', 'snow-static');
    snowStatic.textContent='Снежинка';

    snowWrap.appendChild(snow);
    snowWrap.appendChild(snowStatic);

    const figurineWrap = document.createElement('div');
    figurineWrap.setAttribute('class', 'figurine-wrap');

    const figurine = document.createElement('div');
    figurine.setAttribute('class', 'figurine');

    const figurineStatic = document.createElement('p');
    figurineStatic.setAttribute('class', 'figurine-static');
    figurineStatic.textContent='Снежинка';

    figurineWrap.appendChild(figurine);
    figurineWrap.appendChild(figurineStatic);

    fortSet.appendChild(bellWrap);
    fortSet.appendChild(ballWrap);
    fortSet.appendChild(coneWrap);
    fortSet.appendChild(snowWrap);
    fortSet.appendChild(figurineWrap);
    this.node.appendChild(formStatic);
    this.node.appendChild(fortSet);

  }
  destroy() {
  }
}
