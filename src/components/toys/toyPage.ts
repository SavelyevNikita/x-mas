export class ToyPage {
  node!: HTMLElement;

  collectionSettings!: HTMLElement;
  collectionNewYear!: HTMLElement;

  wrapper!: HTMLDivElement;
  effectsAndSeachWrap!: HTMLDivElement;
  sortWrap!: HTMLDivElement;
  formWrap!: HTMLDivElement;
  set0fWrap!: HTMLDivElement;
  yearWrap!: HTMLDivElement;
  colorWrap!: HTMLDivElement;
  sizeWrap!: HTMLDivElement;
  favoriteWrap!: HTMLDivElement;
  resetWrap!: HTMLDivElement;

  constructor(str: string) {
    this.node = document.querySelector(str)!;
  }
  render(): void {
    const collectionSettings = document.createElement('section');
    collectionSettings.setAttribute('class', 'collection-settings');

    const collectionNewYear = document.createElement('section');
    collectionNewYear.setAttribute('class', 'collection-new-year');

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

    wrapper.appendChild(effectsAndSeachWrap);
    wrapper.appendChild(sortWrap);
    wrapper.appendChild(formWrap);
    wrapper.appendChild(set0fWrap);
    wrapper.appendChild(yearWrap);
    wrapper.appendChild(colorWrap);
    wrapper.appendChild(sizeWrap);
    wrapper.appendChild(favoriteWrap);
    wrapper.appendChild(resetWrap);

    collectionSettings.appendChild(wrapper);

    this.node.appendChild(collectionSettings);
    this.node.appendChild(collectionNewYear);

  }
  destroy() {
    this.node.innerHTML='';
  }
}
