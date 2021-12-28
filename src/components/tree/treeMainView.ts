export class TreeMainView {
  node!: HTMLElement;

  tree!: HTMLImageElement;

  constructor(str: string) {
    this.node = document.querySelector(str)!;
  }
  render(src:string): void {
    const tree = document.createElement('img');
    tree.setAttribute('class', 'tree');
    tree.setAttribute('src', src);

    this.node.appendChild(tree);
  }
  destroy() {
  }
}
