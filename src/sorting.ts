import { interCard, Card } from './components/card';
import data from './data.js'
import { Cards } from './components/cards'

class Sorting {
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
  }
  // static draft=[] as interCard[];

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

  filterByShapeVisible(identity: string) {
    const shapeToy = [...document.getElementsByClassName('shapeToy')];
    shapeToy.forEach((element: any): void => {
      if (element.innerText === `${identity}`) {
         element.parentElement.classList.remove(`ExptoyCard`); 
      }
    });
  }
  filterByShapeUnVisible(identity: string) {
    const shapeToy = [...document.getElementsByClassName('shapeToy')];
    shapeToy.forEach((element: any): void => {
      if (element.innerText === `${identity}`) {
         element.parentElement.classList.add(`ExptoyCard`); 
      }
    });
  }

  filterByColorVisible(identity: string) {
    const colorToy = [...document.getElementsByClassName('colorToy')];
    colorToy.forEach((element: any): void => {
      if (element.innerText === `${identity}`) {
         element.parentElement.classList.remove(`ExptoyCard`); 
      }
    });
  }
  filterByColorUnVisible(identity: string) {
    const colorToy = [...document.getElementsByClassName('colorToy')];
    colorToy.forEach((element: any): void => {
      if (element.innerText === `${identity}`) {
         element.parentElement.classList.add(`ExptoyCard`); 
      }
    });
  }

  filterBySizeVisible(identity: string) {
    const sizeToy = [...document.getElementsByClassName('sizeToy')];
    sizeToy.forEach((element: any): void => {
      if (element.innerText === `${identity}`) {
         element.parentElement.classList.remove(`ExptoyCard`); 
      }
    });
  }
  filterBySizeUnVisible(identity: string) {
    const sizeToy = [...document.getElementsByClassName('sizeToy')];
    sizeToy.forEach((element: any): void => {
      if (element.innerText === `${identity}`) {
         element.parentElement.classList.add(`ExptoyCard`); 
      }
    });
  }
  filterByFavoriteVisible(identity: string) {
    const favorite = [...document.getElementsByClassName('favoriteToy')];
    favorite.forEach((element: any): void => {
      if (element.innerText === `${identity}`) {
         element.parentElement.classList.remove(`ExptoyCard`); 
      }
    });
  }
  filterByFavoriteUnVisible(identity: string) {
    const favorite = [...document.getElementsByClassName('favoriteToy')];
    favorite.forEach((element: any): void => {
      if (element.innerText === `${identity}`) {
         element.parentElement.classList.add(`ExptoyCard`); 
      }
    });
  }



  addListener() {
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

    const large: any = document.querySelector('.large-set__square')!;
    const middle: any = document.querySelector('.middle-set__square')!;
    const little: any = document.querySelector('.little-set__square')!;

    const favorite: any = document.querySelector('.favorite-square')!;

    //filtering part 
    bellElement.addEventListener('click', (event: Event) => {
      if (this.bellShaped) {
        this.bellShaped = false;
        this.filterByShapeUnVisible('Форма игрушки: колокольчик');
      } else {
        this.bellShaped = true;
        this.filterByShapeVisible('Форма игрушки: колокольчик');
      }
    });   
    
    ballElement.addEventListener('click', (event: Event) => {
      if (this.ballShaped) {
        this.ballShaped = false;
        this.filterByShapeUnVisible('Форма игрушки: шар');
      } else {
        this.ballShaped = true;
        this.filterByShapeVisible('Форма игрушки: шар');
      }
    });
    coneElement.addEventListener('click', (event: Event) => {
      if (this.coneShaped) {
        this.coneShaped = false;
        this.filterByShapeUnVisible('Форма игрушки: шишка');
      } else {
        this.coneShaped = true;
        this.filterByShapeVisible('Форма игрушки: шишка');
      }
    });
    snowElement.addEventListener('click', (event: Event) => {
      if (this.snowShaped) {
        this.snowShaped = false;
        this.filterByShapeUnVisible('Форма игрушки: снежинка');
      } else {
        this.snowShaped = true;
        this.filterByShapeVisible('Форма игрушки: снежинка');
      }
    });
    figurineElement.addEventListener('click', (event: Event) => {
      if (this.figurineShaped) {
        this.figurineShaped = false;
        this.filterByShapeUnVisible('Форма игрушки: фигурка');
      } else {
        this.figurineShaped = true;
        this.filterByShapeVisible('Форма игрушки: фигурка');
      }
    });
    white.addEventListener('click', (event: Event) => {
      if (this.white) {
        this.white = false;
        this.filterByColorUnVisible('Цвет игрушки: белый');
      } else {
        this.white = true;
        this.filterByColorVisible('Цвет игрушки: белый');
      }
    });

    yellow.addEventListener('click', (event: Event) => {
      if (this.yellow) {
        this.yellow = false;
        this.filterByColorUnVisible('Цвет игрушки: желтый');
      } else {
        this.yellow = true;
        this.filterByColorVisible('Цвет игрушки: желтый');
      }
    });

    red.addEventListener('click', (event: Event) => {
      if (this.red) {
        this.red = false;
        this.filterByColorUnVisible('Цвет игрушки: красный');
      } else {
        this.red = true;
        this.filterByColorVisible('Цвет игрушки: красный');
      }
    });

    blue.addEventListener('click', (event: Event) => {
      if (this.blue) {
        this.blue = false;
        this.filterByColorUnVisible('Цвет игрушки: синий');
      } else {
        this.blue = true;
        this.filterByColorVisible('Цвет игрушки: синий');
      }
    });

    large.addEventListener('click', (event: Event) => {
      if (large.checked || this.large) {
        this.large = false;
        this.filterBySizeVisible('Размер игрушки: большой');
      } else {
        this.large = true;
        this.filterBySizeUnVisible('Размер игрушки: большой');
      }
    });

    middle.addEventListener('click', (event: Event) => {
      if (middle.checked || this.middle) {
        this.middle = false;
        this.filterBySizeVisible('Размер игрушки: средний');
      } else {
        this.middle = true;
        this.filterBySizeUnVisible('Размер игрушки: средний');
      }
    });
    little.addEventListener('click', (event: Event) => {
      if (little.checked || this.little) {
        this.little = false;
        this.filterBySizeVisible('Размер игрушки: малый');
      } else {
        this.little = true;
        this.filterBySizeUnVisible('Размер игрушки: малый');
      }
    });

    favorite.addEventListener('click', (event: Event) => {
      if (favorite.checked || this.favorite) {
        this.favorite = false;
        // this.filterByFavoriteVisible('Любимая: true');
        this.filterByFavoriteUnVisible('Любимая: false');
      } else {
        this.favorite = true;
        this.filterByFavoriteVisible('Любимая: false');
      }
    });

    //sorting part
    selectElement.addEventListener('change', (event: Event | any) => {
      if (event.target.value === 'A_Z') {
        this.sortingA_Z();
        const app = new Cards(this.data);
        app.renderToys();
      }
      if (event.target.value === 'Z_A') {
        this.sortingZ_A();
        const app = new Cards(this.data);
        app.renderToys();
      }

      if (event.target.value === 'countUp') {
        this.sortingcountUp();
        const app = new Cards(this.data);
        app.renderToys();
      }

      if (event.target.value === 'countDown') {
        this.sortingcountDown();
        const app = new Cards(this.data);
        app.renderToys();
      }
    });
  }
}

const sorting = new Sorting(data);
sorting.addListener();
  // sortingData(data);
