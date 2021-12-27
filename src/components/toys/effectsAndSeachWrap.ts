export class EffectsAndSeachWrap {
  sound!: HTMLElement;
  searchSet!: HTMLElement;
  search!: HTMLInputElement;
  loupe!: HTMLElement;
  node!: HTMLElement;
  constructor(str:string) {
    this.node = document.querySelector(str)!;
  }
  render() {
    const sound = document.createElement('div');
    sound.setAttribute('class', 'sound');

    const searchSet = document.createElement('div');
    searchSet.setAttribute('class', 'search-set');

    const search = document.createElement('input');
    search.setAttribute('class', 'search-toys');
    search.setAttribute('type', 'search');
    search.setAttribute('placeholder', 'Поиск');
    search.setAttribute('autofocus', 'autofocus');
    search.setAttribute('autocomplete', 'off');

    const loupe = document.createElement('div');
    loupe.setAttribute('class', 'loupe');

    searchSet.appendChild(search);
    searchSet.appendChild(loupe);

    this.node.appendChild(sound);
    this.node.appendChild(searchSet);
  }
  destroy() {
  }
}
