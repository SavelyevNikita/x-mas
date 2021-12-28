export class TreeSettingsToys {
  node!: HTMLElement;
  wrapperTreeSettingsToys!: HTMLDivElement;
  toysCollection!: HTMLDivElement;
  toysCollectionStatic!: HTMLParagraphElement;
  toysCollectionWrap!: HTMLDivElement;
  favoriteToy!: HTMLDivElement;
  img_1!: HTMLImageElement;
  span_1!: HTMLSpanElement;

  constructor(str: string) {
    this.node = document.querySelector(str)!;
  }
  render(): void {
    const wrapperTreeSettingsToys = document.createElement('div');
    wrapperTreeSettingsToys.setAttribute('class', 'wrapper-tree-settings-toys');

    const toysCollection = document.createElement('div');
    toysCollection.setAttribute('class', 'toys-collection');

    const toysCollectionStatic = document.createElement('p');
    toysCollectionStatic.setAttribute('class', 'toys-collection-static');
    toysCollectionStatic.textContent = 'Игрушки';

    const toysCollectionWrap = document.createElement('div');
    toysCollectionWrap.setAttribute('class', 'toys-collection-wrap');

    const favoriteToy = document.createElement('div');
    favoriteToy.setAttribute('class', 'favorite-toy');

    const img_1 = document.createElement('img');
    img_1.setAttribute('class', 'ft');
    img_1.setAttribute('src', './assets/toys/1.png');
    img_1.setAttribute('alt', 'toys/1.png');

    const span_1 = document.createElement('span');
    span_1.setAttribute('class', 'count');
    span_1.textContent = '12';

    favoriteToy.appendChild(img_1);
    favoriteToy.appendChild(span_1);

    toysCollectionWrap.appendChild(favoriteToy);

    toysCollection.appendChild(toysCollectionStatic);
    toysCollection.appendChild(toysCollectionWrap);

    const savedCollection = document.createElement('div');
    savedCollection.setAttribute('class', 'saved-collection');

    const savedCollectionStatic = document.createElement('p');
    savedCollectionStatic.setAttribute('class', 'saved-collection-static');
    savedCollectionStatic.textContent = 'Вы нарядили';

    const savedCollectionWrap = document.createElement('div');
    savedCollectionWrap.setAttribute('class', 'saved-collection-wrap');

    const savedTree = document.createElement('div');
    savedTree.setAttribute('class', 'saved-tree');

    const tr_img_1 = document.createElement('img');
    tr_img_1.setAttribute('class', 'tr');
    tr_img_1.setAttribute('src', './assets/tree/6.png');
    tr_img_1.setAttribute('alt', 'tree/6.png');

    savedTree.appendChild(tr_img_1);
    savedCollectionWrap.appendChild(savedTree);

    savedCollection.appendChild(savedCollectionStatic);
    savedCollection.appendChild(savedCollectionWrap);

    wrapperTreeSettingsToys.appendChild(toysCollection);
    wrapperTreeSettingsToys.appendChild(savedCollection);

    this.node.appendChild(wrapperTreeSettingsToys);
  }
  destroy() {
  }
}
