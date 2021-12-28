import { ToyPage } from './components/toys/toyMainPage';
import { TreeMainPage } from './components/tree/treeMainPage';
import { StartPage } from './components/start/startPage';
import './null.scss';
import './toy.scss';
import './global.scss';
import './tree.scss';
import './start.scss';

const toyPage = new ToyPage('main');
const treeMainPage = new TreeMainPage('main');
const startPage = new StartPage('main');
startPage.render();

const toysButton = document.querySelector('.toys') as HTMLInputElement;
toysButton.addEventListener('click', () => {
    treeMainPage.destroy();
    startPage.destroy();

    const toyPage = new ToyPage('main');
    toyPage.render();
});

const treeMakeUpButton = document.querySelector('.tree-make-up') as HTMLInputElement;
treeMakeUpButton.addEventListener('click', () => {
    toyPage.destroy();
    startPage.destroy();

    const treeMainPage = new TreeMainPage('main');
    treeMainPage.render();
});

const startPageButton = document.querySelector('.tree') as HTMLInputElement;
startPageButton.addEventListener('click', () => {
    toyPage.destroy();
    treeMainPage.destroy();
    startPage.render();
})