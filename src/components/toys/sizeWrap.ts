export class SizeWrap {
  node!: HTMLElement;
  sizeStatic!: HTMLParagraphElement;
  sizeSet!: HTMLDivElement;


  largeSetStatic!: HTMLLabelElement;
  middleSetStatic!: HTMLLabelElement;
  littleSetStatic!: HTMLLabelElement;


  largeSetSquare!: HTMLInputElement;
  middleSetSquare!: HTMLInputElement;
  littleSetSquare!: HTMLInputElement;

  largeSetStaticCheckbox!: HTMLSpanElement;
  middleSetStaticCheckbox!: HTMLSpanElement;
  littleSetStaticCheckbox!: HTMLSpanElement;

  constructor(str: string) {
    this.node = document.querySelector(str)!;
  }
  render(): void {
    // console.log(this.node);
    const sizeStatic = document.createElement('p');
    sizeStatic.setAttribute('class', 'size-static');
    sizeStatic.textContent = 'Размер';

    const sizeSet = document.createElement('div');
    sizeSet.setAttribute('class', 'size-set');

    const largeSetStatic = document.createElement('label');
    largeSetStatic.setAttribute('class', 'large-set__static');
    largeSetStatic.textContent = 'Большой';

    const largeSetSquare = document.createElement('input');
    largeSetSquare.setAttribute('class', 'large-set__square');
    largeSetSquare.setAttribute('type', 'checkbox');
    largeSetSquare.setAttribute('name', 'large-set_square');
    largeSetSquare.setAttribute('checked', 'checked');

    const largeSetStaticCheckbox = document.createElement('span');
    largeSetStaticCheckbox.setAttribute('class', 'large-set__static-checkbox');

    largeSetStatic.appendChild(largeSetSquare);
    largeSetStatic.appendChild(largeSetStaticCheckbox);

    const middleSetStatic = document.createElement('label');
    middleSetStatic.setAttribute('class', 'middle-set__static');
    middleSetStatic.textContent = 'Средний';

    const middleSetSquare = document.createElement('input');
    middleSetSquare.setAttribute('class', 'middle-set__square');
    middleSetSquare.setAttribute('type', 'checkbox');
    middleSetSquare.setAttribute('name', 'middle-set_square');
    middleSetSquare.setAttribute('checked', 'checked');

    const middleSetStaticCheckbox = document.createElement('span');
    middleSetStaticCheckbox.setAttribute('class', 'middle-set__static-checkbox');

    middleSetStatic.appendChild(middleSetSquare);
    middleSetStatic.appendChild(middleSetStaticCheckbox);

    const littleSetStatic = document.createElement('label');
    littleSetStatic.setAttribute('class', 'little-set__static');
    littleSetStatic.textContent = 'Средний';

    const littleSetSquare = document.createElement('input');
    littleSetSquare.setAttribute('class', 'little-set__square');
    littleSetSquare.setAttribute('type', 'checkbox');
    littleSetSquare.setAttribute('name', 'little-set_square');
    littleSetSquare.setAttribute('checked', 'checked');

    const littleSetStaticCheckbox = document.createElement('span');
    littleSetStaticCheckbox.setAttribute('class', 'little-set__static-checkbox');

    littleSetStatic.appendChild(littleSetSquare);
    littleSetStatic.appendChild(littleSetStaticCheckbox);

    sizeSet.appendChild(largeSetStatic);
    sizeSet.appendChild(middleSetStatic);
    sizeSet.appendChild(littleSetStatic);


    this.node.appendChild(sizeStatic);
    this.node.appendChild(sizeSet);

  }
  destroy() {
  }
}
