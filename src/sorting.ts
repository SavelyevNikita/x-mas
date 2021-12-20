import { interCard, Card } from './components/card';
import data from './data.js';
import { Cards } from './components/Cards';
import { Slider } from './components/slider';


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

    this.large = true;
    this.middle = true;
    this.little = true;

    this.favorite = false;

    this.text = '';

    this.yearSetMin = 1940;
    this.yearSetMax = 2020;
    this.setOfMin = 0;
    this.setOfMax = 12;

  }
  favoriteEvent(checker:boolean): void{
    if (checker) {
      this.filterByAnyUnVisible('Любимая: false', 'favorite-display-none','favoriteToy');
    } else {
      this.filterByAnyVisible('Любимая: false', 'favorite-display-none','favoriteToy');
    }      
  }
  littleSizeEvent(checker:boolean): void{
    if (checker) {
      this.filterByAnyVisible('Размер игрушки: малый', 'little-display-none','sizeToy');
    } else {
      this.filterByAnyUnVisible('Размер игрушки: малый', 'little-display-none','sizeToy');
    }      
  }
  middleSizeEvent(checker:boolean): void{
    if (checker) {
      this.filterByAnyVisible('Размер игрушки: средний', 'middle-display-none','sizeToy');
    } else {
      this.filterByAnyUnVisible('Размер игрушки: средний', 'middle-display-none','sizeToy');
    }      
  }
  largeSizeEvent(checker:boolean): void{
    if (checker) {
      this.filterByAnyVisible('Размер игрушки: большой', 'large-display-none','sizeToy');
    } else {
      this.filterByAnyUnVisible('Размер игрушки: большой', 'large-display-none','sizeToy');
    }      
  }


  checkingFilter(): void {
    this.favoriteEvent(this.favorite);
    this.littleSizeEvent(this.little);
    this.middleSizeEvent(this.middle);
    this.largeSizeEvent(this.large);
    if (!this.ballShaped) {
      this.filterByAnyUnVisible('Форма игрушки: шар', 'ballShaped-display-none','shapeToy');
    } else {
      this.filterByAnyVisible('Форма игрушки: шар', 'ballShaped-display-none','shapeToy');
    }
    if (!this.bellShaped) {
      this.filterByAnyUnVisible('Форма игрушки: колокольчик', 'bellShaped-display-none','shapeToy');
    } else {
      this.filterByAnyVisible('Форма игрушки: колокольчик', 'bellShaped-display-none','shapeToy');
    }
    if (!this.coneShaped) {
      this.filterByAnyUnVisible('Форма игрушки: шишка', 'coneShaped-display-none','shapeToy');
    } else {
      this.filterByAnyVisible('Форма игрушки: шишка', 'coneShaped-display-none','shapeToy');
    }
    if (!this.snowShaped) {
      this.filterByAnyUnVisible('Форма игрушки: снежинка', 'snowShaped-display-none','shapeToy');
    } else {
      this.filterByAnyVisible('Форма игрушки: снежинка', 'snowShaped-display-none','shapeToy');
    }
    if (!this.figurineShaped) {
      this.filterByAnyUnVisible('Форма игрушки: фигурка', 'figurineShaped-display-none','shapeToy');
    } else {
      this.filterByAnyVisible('Форма игрушки: фигурка', 'figurineShaped-display-none','shapeToy');
    }
    if (!this.white) {
      this.filterByAnyUnVisible('Цвет игрушки: белый', 'white-display-none', 'colorToy');
    } else {
      this.filterByAnyVisible('Цвет игрушки: белый', 'white-display-none', 'colorToy');
    }
    if (!this.yellow) {
      this.filterByAnyUnVisible('Цвет игрушки: желтый', 'yellow-display-none', 'colorToy');
    } else {
      this.filterByAnyVisible('Цвет игрушки: желтый', 'yellow-display-none', 'colorToy');
    }
    if (!this.red) {
      this.filterByAnyUnVisible('Цвет игрушки: красный', 'red-display-none', 'colorToy');
    } else {
      this.filterByAnyVisible('Цвет игрушки: красный', 'red-display-none', 'colorToy');
    }
    if (!this.blue) {
      this.filterByAnyUnVisible('Цвет игрушки: синий', 'blue-display-none', 'colorToy');
    } else {
      this.filterByAnyVisible('Цвет игрушки: синий', 'blue-display-none', 'colorToy');
    }
    if (!this.green) {
      this.filterByAnyUnVisible('Цвет игрушки: зелёный', 'green-display-none', 'colorToy');
    } else {
      this.filterByAnyVisible('Цвет игрушки: зелёный', 'green-display-none', 'colorToy');
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

  filterByAnyVisible(identity: string, type: string, nameOfClass:string) {
    const colorToy = [...document.getElementsByClassName(`${nameOfClass}`)];
    colorToy.forEach((element: any): void => {
      if (element.innerText === `${identity}`) {
        element.parentElement.classList.remove(`${type}`);
      }
    });
  }
  filterByAnyUnVisible(identity: string, type: string, nameOfClass:string) {
    const colorToy = [...document.getElementsByClassName(`${nameOfClass}`)];
    colorToy.forEach((element: any): void => {
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

    const setOfSlider = new Slider(`set0fslider`, this.setOfMin, this.setOfMax);
    setOfSlider.anySliderEvent();
    const yearSlider = new Slider(`yearslider`, this.yearSetMin, this.yearSetMax);
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

    const collectionNewYear: HTMLElement = document.querySelector('.collection-new-year')!;

    const resetFilters: HTMLElement = document.querySelector('.reset-filters')!;
    const resetSettings: HTMLElement = document.querySelector('.reset-settings')!;

    resetFilters.addEventListener('click', () => {
      console.log('i work')
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

      this.large = true;
      large.checked= this.large;
      this.largeSizeEvent(this.large);
      this.middle = true;
      middle.checked= this.middle;
      this.middleSizeEvent(this.middle);
      this.little = true;
      little.checked= this.little;
      this.littleSizeEvent(this.little);
      
      this.favorite = false;
      favorite.checked=this.favorite;
      this.favoriteEvent( this.favorite);

      this.text = '';

      this.yearSetMin = 1940;
      this.yearSetMax = 2020;
      this.setOfMin = 0;
      this.setOfMax = 12;
      this.checkingFilter();
      this.filterByInputText('nameToy__name', 'value-display-none', this.text);
      this.filterByRange('yearToy__year-static', this.yearSetMin, this.yearSetMax, 'year-display-none');
      this.filterByRange('countToy__count-static', this.setOfMin, this.setOfMax, 'quantity-display-none');
  })

    const observer = new MutationObserver(mutationRecords => {
      // console.log(mutationRecords);
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
        this.filterByAnyUnVisible('Форма игрушки: колокольчик', 'bellShaped-display-none','shapeToy');
      } else {
        this.bellShaped = true;
        this.filterByAnyVisible('Форма игрушки: колокольчик', 'bellShaped-display-none','shapeToy');
      }
    });

    ballElement.addEventListener('click', (event: Event) => {
      if (this.ballShaped) {
        this.ballShaped = false;
        this.filterByAnyUnVisible('Форма игрушки: шар', 'ballShaped-display-none','shapeToy');
      } else {
        this.ballShaped = true;
        this.filterByAnyVisible('Форма игрушки: шар', 'ballShaped-display-none','shapeToy');
      }
    });
    coneElement.addEventListener('click', (event: Event) => {
      if (this.coneShaped) {
        this.coneShaped = false;
        this.filterByAnyUnVisible('Форма игрушки: шишка', 'coneShaped-display-none','shapeToy');
      } else {
        this.coneShaped = true;
        this.filterByAnyVisible('Форма игрушки: шишка', 'coneShaped-display-none','shapeToy');
      }
    });
    snowElement.addEventListener('click', (event: Event) => {
      if (this.snowShaped) {
        this.snowShaped = false;
        this.filterByAnyUnVisible('Форма игрушки: снежинка', 'snowShaped-display-none','shapeToy');
      } else {
        this.snowShaped = true;
        this.filterByAnyVisible('Форма игрушки: снежинка', 'snowShaped-display-none','shapeToy');
      }
    });
    figurineElement.addEventListener('click', (event: Event) => {
      if (this.figurineShaped) {
        this.figurineShaped = false;
        this.filterByAnyUnVisible('Форма игрушки: фигурка', 'figurineShaped-display-none','shapeToy');
      } else {
        this.figurineShaped = true;
        this.filterByAnyVisible('Форма игрушки: фигурка', 'figurineShaped-display-none','shapeToy');
      }
    });
    white.addEventListener('click', (event: Event) => {
      if (this.white) {
        this.white = false;
        this.filterByAnyUnVisible('Цвет игрушки: белый', 'white-display-none', 'colorToy');
      } else {
        this.white = true;
        this.filterByAnyVisible('Цвет игрушки: белый', 'white-display-none', 'colorToy');
      }
    });

    yellow.addEventListener('click', (event: Event) => {
      if (this.yellow) {
        this.yellow = false;
        this.filterByAnyUnVisible('Цвет игрушки: желтый', 'yellow-display-none', 'colorToy');
      } else {
        this.yellow = true;
        this.filterByAnyVisible('Цвет игрушки: желтый', 'yellow-display-none', 'colorToy');
      }
    });

    red.addEventListener('click', (event: Event) => {
      if (this.red) {
        this.red = false;
        this.filterByAnyUnVisible('Цвет игрушки: красный', 'red-display-none', 'colorToy');
      } else {
        this.red = true;
        this.filterByAnyVisible('Цвет игрушки: красный', 'red-display-none', 'colorToy');
      }
    });

    blue.addEventListener('click', (event: Event) => {
      if (this.blue) {
        this.blue = false;
        this.filterByAnyUnVisible('Цвет игрушки: синий', 'blue-display-none', 'colorToy');
      } else {
        this.blue = true;
        this.filterByAnyVisible('Цвет игрушки: синий', 'blue-display-none', 'colorToy');
      }
    });

    green.addEventListener('click', (event: Event) => {
      if (this.green) {
        this.green = false;
        this.filterByAnyUnVisible('Цвет игрушки: зелёный', 'green-display-none', 'colorToy');
      } else {
        this.green = true;
        this.filterByAnyVisible('Цвет игрушки: зелёный', 'green-display-none', 'colorToy');
      }
    });

    large.addEventListener('click', (event: Event) => {
      this.large=large.checked;
      this.largeSizeEvent(this.large);
    });

    middle.addEventListener('click', (event: Event) => {
      this.middle=middle.checked;
      this.middleSizeEvent(this.middle);
    });
    little.addEventListener('click', (event: Event) => {
      this.little=little.checked;
      this.littleSizeEvent(this.little);
    });

    favorite.addEventListener('click', (event: Event) => {
      this.favorite=favorite.checked;
      this.favoriteEvent(this.favorite);
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