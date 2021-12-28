import { ToyPage } from './components/toys/toyPage';
import { Cards } from './components/toys/Cards';
import { EffectsAndSeachWrap } from './components/toys/effectsAndSeachWrap';
import { SortWrap } from './components/toys/sortWrap';
import { FormWrap } from './components/toys/formWrap';
import { SetOfWrap } from './components/toys/set0fWrap';
import { YearWrap } from './components/toys/yearWrap';
import { СolorWrap } from './components/toys/colorWrap';
import { SizeWrap } from './components/toys/sizeWrap';
import { FavoriteWrap } from './components/toys/favoriteWrap';
import { ResetWrap } from './components/toys/resetWrap';
import { Sorting } from './components/toys/sorting';
import { TreeMainView } from './components/tree/treeMainView';
import { TreeSetting } from './components/tree/treeSetting';
import { TreeSettingsToys } from './components/tree/treeSettingsToys';
import { TreeMainPage } from './components/tree/treeMainPage';
import './null.scss';
import './toy.scss';
import './global.scss';
import './tree.scss';
import './start.scss';
import data from './data.js'

const toyPage = new ToyPage('main');
const treeMainPage = new TreeMainPage('main');

const toysButton = document.querySelector('.toys');
toysButton?.addEventListener('click', () => {
    treeMainPage.destroy();

    const toyPage = new ToyPage('main');
    toyPage.render();

    const appEffectsAndSeachWrap = new EffectsAndSeachWrap('.effects-and-seach-wrap');
    appEffectsAndSeachWrap.render();

    const sortWrap = new SortWrap('.sort-wrap');
    sortWrap.render();

    const formWrap = new FormWrap('.form-wrap');
    formWrap.render();

    const setOfWrap = new SetOfWrap('.set0f-wrap');
    setOfWrap.render();

    const yearOfWrap = new YearWrap('.year-wrap');
    yearOfWrap.render();

    const сolorWrap = new СolorWrap('.color-wrap');
    сolorWrap.render();

    const sizeWrap = new SizeWrap('.size-wrap');
    sizeWrap.render();

    const favoriteWrap = new FavoriteWrap('.favorite-wrap');
    favoriteWrap.render();

    const resetWrap = new ResetWrap('.reset-wrap');
    resetWrap.render();

    const sorting = new Sorting(data);
    sorting.addListener();

    const appCards = new Cards(data);
    appCards.renderToys();
});

const treeMakeUpButton = document.querySelector('.tree-make-up');
treeMakeUpButton?.addEventListener('click', () => {
    toyPage.destroy();

    const treeMainPage = new TreeMainPage('main');
    treeMainPage.render();

    const treeMainView = new TreeMainView('.tree-main-view');
    treeMainView.render();

    const treeSetting = new TreeSetting('.tree-setting');
    treeSetting.render();

    const treeSettingsToys = new TreeSettingsToys('.tree-settings-toys');
    treeSettingsToys.render();

});