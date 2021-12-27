export class TreeSetting {
  node!: HTMLElement;

  wrapperTreeSetting!: HTMLDivElement;
  chooseSettingsToys!: HTMLDivElement;
  sound!: HTMLDivElement;
  snow!: HTMLDivElement;

  chooseTreeWrap!: HTMLDivElement;
  chooseTreeStatic!: HTMLParagraphElement;
  chooseTree!: HTMLDivElement;
  tree_1!: HTMLDivElement;
  tree_2!: HTMLDivElement;
  tree_3!: HTMLDivElement;
  tree_4!: HTMLDivElement;
  tree_5!: HTMLDivElement;
  tree_6!: HTMLDivElement;
  tree_7!: HTMLDivElement;
  tree_8!: HTMLDivElement;
  img_1!: HTMLImageElement;
  img_2!: HTMLImageElement;
  img_3!: HTMLImageElement;
  img_4!: HTMLImageElement;
  img_5!: HTMLImageElement;
  img_6!: HTMLImageElement;
  img_7!: HTMLImageElement;
  img_8!: HTMLImageElement;
  chooseBackgroundWrap!: HTMLDivElement;
  chooseBackgroundStatic!: HTMLParagraphElement;
  chooseBackground!: HTMLDivElement;
  bg_1!: HTMLDivElement;
  bg_2!: HTMLDivElement;
  bg_3!: HTMLDivElement;
  bg_4!: HTMLDivElement;
  bg_5!: HTMLDivElement;
  bg_6!: HTMLDivElement;
  bg_7!: HTMLDivElement;
  bg_8!: HTMLDivElement;

  img_bg_1!: HTMLImageElement;
  img_bg_2!: HTMLImageElement;
  img_bg_3!: HTMLImageElement;
  img_bg_4!: HTMLImageElement;
  img_bg_5!: HTMLImageElement;
  img_bg_6!: HTMLImageElement;
  img_bg_7!: HTMLImageElement;
  img_bg_8!: HTMLImageElement;

  chooseFlashLightsWrap!: HTMLDivElement;
  chooseFlashLightsStatic!: HTMLParagraphElement;
  flashLights_1!: HTMLDivElement;
  flashLights_2!: HTMLDivElement;
  flashLights_3!: HTMLDivElement;
  treeSettingButton!: HTMLDivElement;
  settingButtonWrap!: HTMLDivElement;
  saveWrap!: HTMLDivElement;
  resetSettingsWrap!: HTMLDivElement;
  input_1!: HTMLInputElement;
  input_2!: HTMLInputElement;

  constructor(str: string) {
    this.node = document.querySelector(str)!;
  }
  render(): void {
    const wrapperTreeSetting = document.createElement('div');
    wrapperTreeSetting.setAttribute('class', 'wrapper-tree-setting');

    const chooseSettingsToys = document.createElement('div');
    chooseSettingsToys.setAttribute('class', 'choose-settings-toys');
    
    const sound = document.createElement('div');
    sound.setAttribute('class', 'sound');

    const snow = document.createElement('div');
    snow.setAttribute('class', 'snow');

    chooseSettingsToys.appendChild(sound);
    chooseSettingsToys.appendChild(snow);

    const chooseTreeWrap = document.createElement('div');
    chooseTreeWrap.setAttribute('class', 'choose-tree-wrap');

    const chooseTreeStatic = document.createElement('p');
    chooseTreeStatic.setAttribute('class', 'choose-tree-static');
    chooseTreeStatic.textContent='Выберите елку';

    const chooseTree = document.createElement('div');
    chooseTree.setAttribute('class', 'choose-tree');

    const tree_1 = document.createElement('div');
    tree_1.setAttribute('class', 'tree-1');
    const img_1 = document.createElement('img');
    img_1.setAttribute('src', './assets/tree/1.png');
    img_1.setAttribute('alt', '1.png');
    tree_1.appendChild(img_1);

    const tree_2 = document.createElement('div');
    tree_2.setAttribute('class', 'tree-2');
    const img_2 = document.createElement('img');
    img_2.setAttribute('src', './assets/tree/2.png');
    img_2.setAttribute('alt', '2.png');
    tree_2.appendChild(img_2);

    const tree_3 = document.createElement('div');
    tree_3.setAttribute('class', 'tree-3');
    const img_3 = document.createElement('img');
    img_3.setAttribute('src', './assets/tree/3.png');
    img_3.setAttribute('alt', '3.png');
    tree_3.appendChild(img_3);

    const tree_4 = document.createElement('div');
    tree_4.setAttribute('class', 'tree-4');
    const img_4 = document.createElement('img');
    img_4.setAttribute('src', './assets/tree/4.png');
    img_4.setAttribute('alt', '4.png');
    tree_4.appendChild(img_4);

    const tree_5 = document.createElement('div');
    tree_5.setAttribute('class', 'tree-5');
    const img_5 = document.createElement('img');
    img_5.setAttribute('src', './assets/tree/5.png');
    img_5.setAttribute('alt', '5.png');
    tree_5.appendChild(img_5);

    const tree_6 = document.createElement('div');
    tree_6.setAttribute('class', 'tree-6');
    const img_6 = document.createElement('img');
    img_6.setAttribute('src', './assets/tree/6.png');
    img_6.setAttribute('alt', '6.png');
    tree_6.appendChild(img_6);

    chooseTree.appendChild(tree_1);
    chooseTree.appendChild(tree_2);
    chooseTree.appendChild(tree_3);
    chooseTree.appendChild(tree_4);
    chooseTree.appendChild(tree_5);
    chooseTree.appendChild(tree_6);

    chooseTreeWrap.appendChild(chooseTreeStatic);
    chooseTreeWrap.appendChild(chooseTree);

    const chooseBackgroundWrap = document.createElement('div');
    chooseBackgroundWrap.setAttribute('class', 'choose-background-wrap')

    const chooseBackgroundStatic = document.createElement('p');
    chooseBackgroundStatic.setAttribute('class', 'choose-background-static');
    chooseBackgroundStatic.textContent='Выберите фон';

    const chooseBackground = document.createElement('div');
    chooseBackground.setAttribute('class', 'choose-background');

    const bg_1 = document.createElement('div');
    bg_1.setAttribute('class', 'bg-1');
    const img_bg_1 = document.createElement('img');
    img_bg_1.setAttribute('src', './assets/bg/1.jpg');
    img_bg_1.setAttribute('alt', 'bg/1.jpg');
    bg_1.appendChild(img_bg_1);

    const bg_2 = document.createElement('div');
    bg_2.setAttribute('class', 'bg-2');
    const img_bg_2 = document.createElement('img');
    img_bg_2.setAttribute('src', './assets/bg/2.jpg');
    img_bg_2.setAttribute('alt', 'bg/2.jpg');
    bg_2.appendChild(img_bg_2);

    const bg_3 = document.createElement('div');
    bg_3.setAttribute('class', 'bg-3');
    const img_bg_3 = document.createElement('img');
    img_bg_3.setAttribute('src', './assets/bg/3.jpg');
    img_bg_3.setAttribute('alt', 'bg/3.jpg');
    bg_3.appendChild(img_bg_3);

    const bg_4 = document.createElement('div');
    bg_4.setAttribute('class', 'bg-4');
    const img_bg_4 = document.createElement('img');
    img_bg_4.setAttribute('src', './assets/bg/4.jpg');
    img_bg_4.setAttribute('alt', 'bg/4.jpg');
    bg_4.appendChild(img_bg_4);

    const bg_5 = document.createElement('div');
    bg_5.setAttribute('class', 'bg-5');
    const img_bg_5 = document.createElement('img');
    img_bg_5.setAttribute('src', './assets/bg/5.jpg');
    img_bg_5.setAttribute('alt', 'bg/5.jpg');
    bg_5.appendChild(img_bg_5);

    const bg_6 = document.createElement('div');
    bg_6.setAttribute('class', 'bg-6');
    const img_bg_6 = document.createElement('img');
    img_bg_6.setAttribute('src', './assets/bg/6.jpg');
    img_bg_6.setAttribute('alt', 'bg/6.jpg');
    bg_6.appendChild(img_bg_6);

    const bg_7 = document.createElement('div');
    bg_7.setAttribute('class', 'bg-7');
    const img_bg_7 = document.createElement('img');
    img_bg_7.setAttribute('src', './assets/bg/7.jpg');
    img_bg_7.setAttribute('alt', 'bg/7.jpg');
    bg_7.appendChild(img_bg_7);

    const bg_8 = document.createElement('div');
    bg_8.setAttribute('class', 'bg-8');
    const img_bg_8 = document.createElement('img');
    img_bg_8.setAttribute('src', './assets/bg/8.jpg');
    img_bg_8.setAttribute('alt', 'bg/8.jpg');
    bg_8.appendChild(img_bg_8);

    chooseBackground.appendChild(bg_1);
    chooseBackground.appendChild(bg_2);
    chooseBackground.appendChild(bg_3);
    chooseBackground.appendChild(bg_4);
    chooseBackground.appendChild(bg_5);
    chooseBackground.appendChild(bg_6);
    chooseBackground.appendChild(bg_7);
    chooseBackground.appendChild(bg_8);

    chooseBackgroundWrap.appendChild(chooseBackgroundStatic);
    chooseBackgroundWrap.appendChild(chooseBackground);

    const chooseFlashLightsWrap = document.createElement('div');
    chooseFlashLightsWrap.setAttribute('class', 'choose-flash-lights-wrap')

    const chooseFlashLightsStatic = document.createElement('p');
    chooseFlashLightsStatic.setAttribute('class', 'choose-flash-lights-static');
    chooseFlashLightsStatic.textContent='Выберите гирлянду';

    const chooseFlashLights = document.createElement('div');
    chooseFlashLights.setAttribute('class', 'choose-flash-lights');

    const flashLights_1 = document.createElement('div');
    flashLights_1.setAttribute('class', 'flash-lights-1');

    const flashLights_2 = document.createElement('div');
    flashLights_2.setAttribute('class', 'flash-lights-2');

    const flashLights_3 = document.createElement('div');
    flashLights_3.setAttribute('class', 'flash-lights-3');

    chooseFlashLights.appendChild(flashLights_1);
    chooseFlashLights.appendChild(flashLights_2);
    chooseFlashLights.appendChild(flashLights_3);

    chooseFlashLightsWrap.appendChild(chooseFlashLightsStatic);
    chooseFlashLightsWrap.appendChild(chooseFlashLights);

    const treeSettingButton=document.createElement('div');
    treeSettingButton.setAttribute('class', 'tree-setting-button');

    const settingButtonWrap=document.createElement('div');
    settingButtonWrap.setAttribute('class', 'setting-button-wrap');

    const saveWrap=document.createElement('div');
    saveWrap.setAttribute('class', 'save-wrap');

    const input_1=document.createElement('input');
    input_1.setAttribute('type','button');
    input_1.setAttribute('value','Сохранить');

    saveWrap.appendChild(input_1);

    const resetSettingsWrap=document.createElement('div');
    resetSettingsWrap.setAttribute('class', 'reset-settings-wrap');

    const input_2=document.createElement('input');
    input_2.setAttribute('type','button');
    input_2.setAttribute('value','Сбросить настройки');
  
    resetSettingsWrap.appendChild(input_2);

    settingButtonWrap.appendChild(saveWrap);
    settingButtonWrap.appendChild(resetSettingsWrap);
    treeSettingButton.appendChild(settingButtonWrap);

    wrapperTreeSetting.appendChild(chooseSettingsToys);
    wrapperTreeSetting.appendChild(chooseTreeWrap);
    wrapperTreeSetting.appendChild(chooseBackgroundWrap);
    wrapperTreeSetting.appendChild(chooseFlashLightsWrap);
    wrapperTreeSetting.appendChild(treeSettingButton);

    this.node.appendChild(wrapperTreeSetting);
  }
  destroy() {
  }
}
