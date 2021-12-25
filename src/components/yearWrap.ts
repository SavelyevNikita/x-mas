export class YearWrap {
  node!: HTMLElement;
  year0fStatic!: HTMLParagraphElement;
  yearSet!: HTMLDivElement;
  yearSetMinMax!: HTMLDivElement;
  yearSetMin!: HTMLDivElement;
  yearSetMax!: HTMLParagraphElement;

  constructor(str: string) {
    this.node = document.querySelector(str)!;
  }
  render(): void {
    // console.log(this.node);
    const year0fStatic = document.createElement('p');
    year0fStatic.setAttribute('class', 'year-static');
    year0fStatic.textContent = 'Год приобретения';

    const yearSet = document.createElement('div');
    yearSet.setAttribute('class', 'year-set');
    yearSet.setAttribute('id', 'yearslider');

    const yearSetMinMax = document.createElement('div');
    yearSetMinMax.setAttribute('class', 'year-set-min-max');

    const yearSetMin = document.createElement('div');
    yearSetMin.setAttribute('class', 'year-set-min');
    yearSetMin.setAttribute('id', 'yearslider-snap-value-lower');

    const yearSetMax = document.createElement('div');
    yearSetMax.setAttribute('class', 'year-set-max');
    yearSetMax.setAttribute('id', 'yearslider-snap-value-upper');

    yearSetMinMax.appendChild(yearSetMin);
    yearSetMinMax.appendChild(yearSetMax);

    this.node.appendChild(year0fStatic);
    this.node.appendChild(yearSet);
    this.node.appendChild(yearSetMinMax);

  }
  destroy() {
  }
}
