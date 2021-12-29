import { TreeMainView } from './treeMainView';
import { TreeSetting } from './treeSetting';
import { TreeSettingsToys } from './treeSettingsToys';

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
    this.renderInnerTreePage();
  }
  destroy() {
    this.node.innerHTML = '';
  }
  renderInnerTreePage(){
    const treeMainView = new TreeMainView('.tree-main-view');
    treeMainView.render('./assets/tree/2.png');

    const treeSetting = new TreeSetting('.tree-setting');
    treeSetting.render();
    treeSetting.setTree();

    const treeSettingsToys = new TreeSettingsToys('.tree-settings-toys');
    treeSettingsToys.render();
  }
}
