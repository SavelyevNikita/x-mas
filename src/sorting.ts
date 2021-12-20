import { interCard, Card } from './components/card';
import data from './data.js';
import { Cards } from './components/cards';
import { Slider } from './components/slider';
import { electron } from 'webpack';


export class Sorting {

  data: interCard[];
  ballShaped: boolean;
  bellShaped: boolean;
  coneShaped: boolean;
  snowShaped: boolean;
  figurineShaped: boolean;

  white: boolean;
  yellow: boolean;
  red: boolean;
  blue: boolean;
  green: boolean;

  large: boolean;
  middle: boolean;
  little: boolean;

  favorite: boolean;

  text: string;

  yearSetMin: number;
  yearSetMax: number;
  setOfMin: number;
  setOfMax: number;
  constructor(data: interCard[]) {

    this.data = data;

    this.ballShaped = true;
    this.bellShaped = true;
    this.coneShaped = true;
    this.snowShaped = true;
    this.figurineShaped = true;

    this.white = true;
    this.yellow = true;
    this.red = true;
    this.blue = true;
    this.green = true;

    this.large = false;
    this.middle = false;
    this.little = false;

    this.favorite = true;

    this.text = '';

    this.yearSetMin = 1940;
    this.yearSetMax = 2020;
    this.setOfMin = 0;
    this.setOfMax = 12;

  }
  checkingFilter(): void {

    if (!this.ballShaped) {
      this.filterByShapeUnVisible('Форма игрушки: шар', 'ballShaped-display-none');
    } else {
      this.filterByShapeVisible('Форма игрушки: шар', 'ballShaped-display-none');
    }
    if (!this.bellShaped) {
      this.filterByShapeUnVisible('Форма игрушки: колокольчик', 'bellShaped-display-none');
    } else {
      this.filterByShapeVisible('Форма игрушки: колокольчик', 'bellShaped-display-none');
    }
    if (!this.coneShaped) {
      this.filterByShapeUnVisible('Форма игрушки: шишка', 'coneShaped-display-none');
    } else {
      this.filterByShapeVisible('Форма игрушки: шишка', 'coneShaped-display-none');
    }
    if (!this.snowShaped) {
      this.filterByShapeUnVisible('Форма игрушки: снежинка', 'snowShaped-display-none');
    } else {
      this.filterByShapeVisible('Форма игрушки: снежинка', 'snowShaped-display-none');
    }
    if (!this.figurineShaped) {
      this.filterByShapeUnVisible('Форма игрушки: фигурка', 'figurineShaped-display-none');
    } else {
      this.filterByShapeVisible('Форма игрушки: фигурка', 'figurineShaped-display-none');
    }
    if (!this.white) {
      this.filterByColorUnVisible('Цвет игрушки: белый', 'white-display-none');
    } else {
      this.filterByColorVisible('Цвет игрушки: белый', 'white-display-none');
    }
    if (!this.yellow) {
      this.filterByColorUnVisible('Цвет игрушки: желтый', 'yellow-display-none');
    } else {
      this.filterByColorVisible('Цвет игрушки: желтый', 'yellow-display-none');
    }
    if (!this.red) {
      this.filterByColorUnVisible('Цвет игрушки: красный', 'red-display-none');
    } else {
      this.filterByColorVisible('Цвет игрушки: красный', 'red-display-none');
    }
    if (!this.blue) {
      this.filterByColorUnVisible('Цвет игрушки: синий', 'blue-display-none');
    } else {
      this.filterByColorVisible('Цвет игрушки: синий', 'blue-display-none');
    }
    if (!this.green) {
      this.filterByColorUnVisible('Цвет игрушки: зелёный', 'green-display-none');
    } else {
      this.filterByColorVisible('Цвет игрушки: зелёный', 'green-display-none');
    }
    if (!this.large) {
      this.filterBySizeVisible('Размер игрушки: большой', 'large-display-none');
    } else {
      this.filterBySizeUnVisible('Размер игрушки: большой', 'large-display-none');
    }
    if (!this.middle) {
      this.filterBySizeVisible('Размер игрушки: средний', 'middle-display-none');
    } else {
      this.filterBySizeUnVisible('Размер игрушки: средний', 'middle-display-none');
    }
    if (!this.little) {
      this.filterBySizeVisible('Размер игрушки: малый', 'little-display-none');
    } else {
      this.filterBySizeUnVisible('Размер игрушки: малый', 'little-display-none');
    }
    if (!this.favorite) {
      this.filterByFavoriteUnVisible('Любимая: false', 'favorite-display-none');
    } else {
      this.filterByFavoriteVisible('Любимая: false', 'favorite-display-none');
    }

  };

  sortingA_Z() {
    this.data = data.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }
  sortingZ_A() {
    this.data = data.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
  }
  sortingcountUp() {
    this.data = data.sort((a, b) => {
      if (+a.count < +b.count) {
        return -1;
      }
      if (+a.count > +b.count) {
        return 1;
      }
      return 0;
    });
  }
  sortingcountDown() {
    this.data = data.sort((a, b) => {
      if (+a.count < +b.count) {
        return 1;
      }
      if (+a.count > +b.count) {
        return -1;
      }
      return 0;
    });
  }

  filterByShapeVisible(identity: string, type: string) {
    const shapeToy = [...document.getElementsByClassName('shapeToy')];
    shapeToy.forEach((element: any): void => {
      if (element.innerText === `${identity}`) {
        element.parentElement.classList.remove(`${type}`);
      }
    });
  }
  filterByShapeUnVisible(identity: string, type: string) {
    const shapeToy = [...document.getElementsByClassName('shapeToy')];
    shapeToy.forEach((element: any): void => {
      if (element.innerText === `${identity}`) {
        element.parentElement.classList.add(`${type}`);
      }
    });
  }

  filterByColorVisible(identity: string, type: string) {
    const colorToy = [...document.getElementsByClassName('colorToy')];
    colorToy.forEach((element: any): void => {
      if (element.innerText === `${identity}`) {
        element.parentElement.classList.remove(`${type}`);
      }
    });
  }
  filterByColorUnVisible(identity: string, type: string) {
    const colorToy = [...document.getElementsByClassName('colorToy')];
    colorToy.forEach((element: any): void => {
      if (element.innerText === `${identity}`) {
        element.parentElement.classList.add(`${type}`);
      }
    });
  }

  filterBySizeVisible(identity: string, type: string) {
    const sizeToy = [...document.getElementsByClassName('sizeToy')];
    sizeToy.forEach((element: any): void => {
      if (element.innerText === `${identity}`) {
        element.parentElement.classList.remove(`${type}`);
      }
    });
  }
  filterBySizeUnVisible(identity: string, type: string) {
    const sizeToy = [...document.getElementsByClassName('sizeToy')];
    sizeToy.forEach((element: any): void => {
      if (element.innerText === `${identity}`) {
        element.parentElement.classList.add(`${type}`);
      }
    });
  }
  filterByFavoriteVisible(identity: string, type: string) {
    const favorite = [...document.getElementsByClassName('favoriteToy')];
    favorite.forEach((element: any): void => {
      if (element.innerText === `${identity}`) {
        element.parentElement.classList.remove(`${type}`);
      }
    });
  }
  filterByFavoriteUnVisible(identity: string, type: string) {
    const favorite = [...document.getElementsByClassName('favoriteToy')];
    favorite.forEach((element: any): void => {
      if (element.innerText === `${identity}`) {
        element.parentElement.classList.add(`${type}`);
      }
    });
  }
  filterByInputText(identity: string, type: string, text: string) {
    const nameToyName = [...document.getElementsByClassName(`${identity}`)] as HTMLElement[];
    if (text !== '') {
      nameToyName.forEach((element: any) => {
        if ((element.innerText).indexOf(text) === -1) {
          element.parentElement.parentElement.classList.add(`${type}`);
        } else {
          element.parentElement.parentElement.classList.remove(`${type}`);
        }
      });
    }
    else {
      nameToyName.forEach((element: any) => {
        element.parentElement.parentElement.classList.remove(`${type}`);
      });
    }
  }

  filterByRange(identity: string, low: number, high: number, type: string) {
    const yearToy = [...document.getElementsByClassName(`${identity}`)] as HTMLElement[];
    yearToy.forEach((element: any | string): void => {
      if (+element.innerText.slice(element.innerText.lastIndexOf(' ')) >= low && +element.innerText.slice(element.innerText.lastIndexOf(' ')) <= high) {
        element.parentElement.parentElement.classList.remove(`${type}`);
      }
      else {
        element.parentElement.parentElement.classList.add(`${type}`);
      }
    });
  };


  addListener() {

    const setOfSlider = new Slider(`set0fslider`, 0, 12);
    setOfSlider.anySliderEvent();
    const yearSlider = new Slider(`yearslider`, 1940, 2020);
    yearSlider.anySliderEvent();

    const search: HTMLInputElement = document.querySelector('.search-toys')!;

    const selectElement: HTMLElement = document.querySelector('#sort_set_select')!;
    const bellElement: HTMLElement = document.querySelector('.bell-wrap')!;
    const ballElement: HTMLElement = document.querySelector('.ball-wrap')!;
    const coneElement: HTMLElement = document.querySelector('.cone-wrap')!;
    const snowElement: HTMLElement = document.querySelector('.snow-wrap')!;
    const figurineElement: HTMLElement = document.querySelector('.figurine-wrap')!;

    const white: HTMLElement = document.querySelector('.white')!;
    const yellow: HTMLElement = document.querySelector('.yellow')!;
    const red: HTMLElement = document.querySelector('.red')!;
    const blue: HTMLElement = document.querySelector('.blue')!;
    const green: HTMLElement = document.querySelector('.green')!;

    const large: HTMLInputElement = document.querySelector('.large-set__square')!;
    const middle: HTMLInputElement = document.querySelector('.middle-set__square')!;
    const little: HTMLInputElement = document.querySelector('.little-set__square')!;

    const favorite: HTMLInputElement = document.querySelector('.favorite-square')!;

    const yearSetMin: HTMLElement = document.querySelector('.year-set-min')!;
    const yearSetMax: HTMLElement = document.querySelector('.year-set-max')!;
    const setOfMin: HTMLElement = document.querySelector('.set0f-set-min')!;
    const setOfMax: HTMLElement = document.querySelector('.set0f-set-max')!;

    let observer = new MutationObserver(mutationRecords => {
      this.yearSetMin = +yearSetMin.innerText;
      this.yearSetMax = +yearSetMax.innerText;
      this.setOfMin = +setOfMin.innerText;
      this.setOfMax = +setOfMax.innerText;
      this.filterByRange('yearToy__year-static', this.yearSetMin, this.yearSetMax, 'year-display-none');
      this.filterByRange('countToy__count-static', this.setOfMin, this.setOfMax, 'quantity-display-none');
    });
    observer.observe(yearSetMin, {
      childList: true, // наблюдать за непосредственными детьми
    });
    observer.observe(yearSetMax, {
      childList: true, // наблюдать за непосредственными детьми
    });
    observer.observe(setOfMin, {
      childList: true, // наблюдать за непосредственными детьми
    });
    observer.observe(setOfMax, {
      childList: true, // наблюдать за непосредственными детьми
    });


    //filtering part

    search.addEventListener('input', (event: any) => {
      this.text = event.target.value;
      this.filterByInputText('nameToy__name', 'value-display-none', this.text);
    });

    bellElement.addEventListener('click', (event: Event) => {
      if (this.bellShaped) {
        this.bellShaped = false;
        this.filterByShapeUnVisible('Форма игрушки: колокольчик', 'bellShaped-display-none');
      } else {
        this.bellShaped = true;
        this.filterByShapeVisible('Форма игрушки: колокольчик', 'bellShaped-display-none');
      }
    });

    ballElement.addEventListener('click', (event: Event) => {
      if (this.ballShaped) {
        this.ballShaped = false;
        this.filterByShapeUnVisible('Форма игрушки: шар', 'ballShaped-display-none');
      } else {
        this.ballShaped = true;
        this.filterByShapeVisible('Форма игрушки: шар', 'ballShaped-display-none');
      }
    });
    coneElement.addEventListener('click', (event: Event) => {
      if (this.coneShaped) {
        this.coneShaped = false;
        this.filterByShapeUnVisible('Форма игрушки: шишка', 'coneShaped-display-none');
      } else {
        this.coneShaped = true;
        this.filterByShapeVisible('Форма игрушки: шишка', 'coneShaped-display-none');
      }
    });
    snowElement.addEventListener('click', (event: Event) => {
      if (this.snowShaped) {
        this.snowShaped = false;
        this.filterByShapeUnVisible('Форма игрушки: снежинка', 'snowShaped-display-none');
      } else {
        this.snowShaped = true;
        this.filterByShapeVisible('Форма игрушки: снежинка', 'snowShaped-display-none');
      }
    });
    figurineElement.addEventListener('click', (event: Event) => {
      if (this.figurineShaped) {
        this.figurineShaped = false;
        this.filterByShapeUnVisible('Форма игрушки: фигурка', 'figurineShaped-display-none');
      } else {
        this.figurineShaped = true;
        this.filterByShapeVisible('Форма игрушки: фигурка', 'figurineShaped-display-none');
      }
    });
    white.addEventListener('click', (event: Event) => {
      if (this.white) {
        this.white = false;
        this.filterByColorUnVisible('Цвет игрушки: белый', 'white-display-none');
      } else {
        this.white = true;
        this.filterByColorVisible('Цвет игрушки: белый', 'white-display-none');
      }
    });

    yellow.addEventListener('click', (event: Event) => {
      if (this.yellow) {
        this.yellow = false;
        this.filterByColorUnVisible('Цвет игрушки: желтый', 'yellow-display-none');
      } else {
        this.yellow = true;
        this.filterByColorVisible('Цвет игрушки: желтый', 'yellow-display-none');
      }
    });

    red.addEventListener('click', (event: Event) => {
      if (this.red) {
        this.red = false;
        this.filterByColorUnVisible('Цвет игрушки: красный', 'red-display-none');
      } else {
        this.red = true;
        this.filterByColorVisible('Цвет игрушки: красный', 'red-display-none');
      }
    });

    blue.addEventListener('click', (event: Event) => {
      if (this.blue) {
        this.blue = false;
        this.filterByColorUnVisible('Цвет игрушки: синий', 'blue-display-none');
      } else {
        this.blue = true;
        this.filterByColorVisible('Цвет игрушки: синий', 'blue-display-none');
      }
    });

    green.addEventListener('click', (event: Event) => {
      if (this.green) {
        this.green = false;
        this.filterByColorUnVisible('Цвет игрушки: зелёный', 'green-display-none');
      } else {
        this.green = true;
        this.filterByColorVisible('Цвет игрушки: зелёный', 'green-display-none');
      }
    });

    large.addEventListener('click', (event: Event) => {
      if (large.checked || this.large) {
        this.large = false;
        this.filterBySizeVisible('Размер игрушки: большой', 'large-display-none');
      } else {
        this.large = true;
        this.filterBySizeUnVisible('Размер игрушки: большой', 'large-display-none');
      }
    });

    middle.addEventListener('click', (event: Event) => {
      if (middle.checked || this.middle) {
        this.middle = false;
        this.filterBySizeVisible('Размер игрушки: средний', 'middle-display-none');
      } else {
        this.middle = true;
        this.filterBySizeUnVisible('Размер игрушки: средний', 'middle-display-none');
      }
    });
    little.addEventListener('click', (event: Event) => {
      if (little.checked || this.little) {
        this.little = false;
        this.filterBySizeVisible('Размер игрушки: малый', 'little-display-none');
      } else {
        this.little = true;
        this.filterBySizeUnVisible('Размер игрушки: малый', 'little-display-none');
      }
    });

    favorite.addEventListener('click', (event: Event) => {
      if (favorite.checked || this.favorite) {
        this.favorite = false;
        this.filterByFavoriteUnVisible('Любимая: false', 'favorite-display-none');
      } else {
        this.favorite = true;
        this.filterByFavoriteVisible('Любимая: false', 'favorite-display-none');
      }
    });

    //sorting part
    selectElement.addEventListener('change', (event: Event | any) => {
      if (event.target.value === 'A_Z') {
        this.sortingA_Z();
        const app = new Cards(this.data);
        app.renderToys();
        this.checkingFilter();
        this.filterByInputText('nameToy__name', 'value-display-none', this.text);
        this.filterByRange('yearToy__year-static', this.yearSetMin, this.yearSetMax, 'year-display-none');
        this.filterByRange('countToy__count-static', this.setOfMin, this.setOfMax, 'quantity-display-none');
      }
      if (event.target.value === 'Z_A') {
        this.sortingZ_A();
        const app = new Cards(this.data);
        app.renderToys();
        this.checkingFilter();
        this.filterByInputText('nameToy__name', 'value-display-none', this.text);
        this.filterByRange('yearToy__year-static', this.yearSetMin, this.yearSetMax, 'year-display-none');
        this.filterByRange('countToy__count-static', this.setOfMin, this.setOfMax, 'quantity-display-none');
      }

      if (event.target.value === 'countUp') {
        this.sortingcountUp();
        const app = new Cards(this.data);
        app.renderToys();
        this.checkingFilter();
        this.filterByInputText('nameToy__name', 'value-display-none', this.text);
        this.filterByRange('yearToy__year-static', this.yearSetMin, this.yearSetMax, 'year-display-none');
        this.filterByRange('countToy__count-static', this.setOfMin, this.setOfMax, 'quantity-display-none');
      }

      if (event.target.value === 'countDown') {
        this.sortingcountDown();
        const app = new Cards(this.data);
        app.renderToys();
        this.checkingFilter();
        this.filterByInputText('nameToy__name', 'value-display-none', this.text);
        this.filterByRange('yearToy__year-static', this.yearSetMin, this.yearSetMax, 'year-display-none');
        this.filterByRange('countToy__count-static', this.setOfMin, this.setOfMax, 'quantity-display-none');
      }
    });
  }
}

const sorting = new Sorting(data);
sorting.addListener();