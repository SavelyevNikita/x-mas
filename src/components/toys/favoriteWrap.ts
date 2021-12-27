export class FavoriteWrap {
  node!: HTMLElement;


  favoriteStatic!: HTMLLabelElement;

  favoriteSquare!: HTMLInputElement;

  favoriteSquareCheckbox!: HTMLSpanElement;

  constructor(str: string) {
    this.node = document.querySelector(str)!;
  }
  render(): void {
    const favoriteStatic = document.createElement('label');
    favoriteStatic.setAttribute('class', 'favorite-static');
    favoriteStatic.textContent = 'Только любимые';

    const favoriteSquare = document.createElement('input');
    favoriteSquare.setAttribute('class', 'favorite-square');
    favoriteSquare.setAttribute('type', 'checkbox');
    favoriteSquare.setAttribute('name', 'favorite_square');

    const favoriteSquareCheckbox = document.createElement('span');
    favoriteSquareCheckbox.setAttribute('class', 'favorite-square-checkbox');

    favoriteStatic.appendChild(favoriteSquare);
    favoriteStatic.appendChild(favoriteSquareCheckbox);

    this.node.appendChild(favoriteStatic);

  }
  destroy() {
  }
}
