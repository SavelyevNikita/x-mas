export class TreeMainPage {
  node!: HTMLElement;
  treeSetting!: HTMLElement;
  treeMainView!: HTMLElement;
  treeSettingsToys!: HTMLElement;

  constructor(str: string) {
    this.node = document.querySelector(str)!;

  }
  render(): void {
    const treeSetting = document.createElement('section');
    treeSetting.setAttribute('class', 'tree-setting');

    const treeMainView = document.createElement('section');
    treeMainView.setAttribute('class', 'tree-main-view');

    const treeSettingsToys = document.createElement('section');
    treeSettingsToys.setAttribute('class', 'tree-settings-toys');

    this.node.appendChild(treeSetting);
    this.node.appendChild(treeMainView);
    this.node.appendChild(treeSettingsToys);
  }
  destroy() {
    this.node.innerHTML='';
     }
}
