import { Cards } from './components/Cards';
import { EffectsAndSeachWrap } from './components/effectsAndSeachWrap';
import { SortWrap } from './components/sortWrap';
import { FormWrap } from './components/formWrap';
import { SetOfWrap } from './components/set0fWrap';
import { YearWrap } from './components/yearWrap';
import { СolorWrap } from './components/colorWrap';
import { SizeWrap } from './components/sizeWrap';
import { FavoriteWrap } from './components/favoriteWrap';
import { ResetWrap } from './components/resetWrap';
import { Sorting } from './components/sorting';
import './null.scss';
import './global.scss';
import data from './data.js'

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
