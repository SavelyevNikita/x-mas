export class TreeMainView {
  node!: HTMLElement;

  tree!: HTMLDivElement;

  constructor(str: string) {
    this.node = document.querySelector(str)!;
  }
  render(): void {
    const tree = document.createElement('div');
    tree.setAttribute('class', 'tree');

    this.node.appendChild(tree);

  }
  destroy() {
  }
}
