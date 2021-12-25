export class SetOfWrap {
  node!: HTMLElement;
  set0fStatic!: HTMLParagraphElement;
  set0fSet!: HTMLDivElement;
  set0fSetMinMax!: HTMLDivElement;
  set0fSetMin!: HTMLDivElement;
  set0fSetMax!: HTMLParagraphElement;

  constructor(str: string) {
    this.node = document.querySelector(str)!;
  }
  render(): void {
    const set0fStatic = document.createElement('p');
    set0fStatic.setAttribute('class', 'set0f-static');
    set0fStatic.textContent = 'Количество экземляров';

    const set0fSet = document.createElement('div');
    set0fSet.setAttribute('class', 'set0f-set');
    set0fSet.setAttribute('id', 'set0fslider');

    const set0fSetMinMax = document.createElement('div');
    set0fSetMinMax.setAttribute('class', 'set0f-set-min-max');

    const set0fSetMin = document.createElement('div');
    set0fSetMin.setAttribute('class', 'set0f-set-min');
    set0fSetMin.setAttribute('id', 'set0fslider-snap-value-lower');

    const set0fSetMax = document.createElement('div');
    set0fSetMax.setAttribute('class', 'set0f-set-max');
    set0fSetMax.setAttribute('id', 'set0fslider-snap-value-upper');

    set0fSetMinMax.appendChild(set0fSetMin);
    set0fSetMinMax.appendChild(set0fSetMax);

    this.node.appendChild(set0fStatic);
    this.node.appendChild(set0fSet);
    this.node.appendChild(set0fSetMinMax);

  }
  destroy() {
  }
}
