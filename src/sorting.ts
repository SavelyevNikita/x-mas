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
  checkingFilter():void{

    console.log(`filter for ballShaped - ${this.ballShaped}`);
    if (!this.ballShaped) {
      this.filterByShapeUnVisible('Форма игрушки: шар', 'ballShaped-dispaly-none');
    } else {
      this.filterByShapeVisible('Форма игрушки: шар', 'ballShaped-dispaly-none');
    }
    console.log(`filter for bellShaped - ${this.bellShaped}`);
    if (!this.bellShaped) {
      this.filterByShapeUnVisible('Форма игрушки: колокольчик', 'bellShaped-dispaly-none');
    } else {
      this.filterByShapeVisible('Форма игрушки: колокольчик', 'bellShaped-dispaly-none');
    }
    console.log(`filter for coneShaped - ${this.coneShaped}`);
    if (!this.coneShaped) {
      this.filterByShapeUnVisible('Форма игрушки: шишка', 'coneShaped-dispaly-none');
    } else {
      this.filterByShapeVisible('Форма игрушки: шишка', 'coneShaped-dispaly-none');
    }

    console.log(`filter for snowShaped - ${this.snowShaped}`);
    if (!this.snowShaped) {
      this.filterByShapeUnVisible('Форма игрушки: снежинка', 'snowShaped-dispaly-none');
    } else {
      this.filterByShapeVisible('Форма игрушки: снежинка', 'snowShaped-dispaly-none');
    }

    console.log(`filter for figurineShaped - ${this.figurineShaped}`);
    if (!this.figurineShaped) {
      this.filterByShapeUnVisible('Форма игрушки: фигурка', 'figurineShaped-dispaly-none');
    } else {
      this.filterByShapeVisible('Форма игрушки: фигурка', 'figurineShaped-dispaly-none');
    }

    console.log(`filter for white - ${this.white}`);
    if (!this.white) {
      this.filterByColorUnVisible('Цвет игрушки: белый', 'white-dispaly-none');
    } else {
      this.filterByColorVisible('Цвет игрушки: белый', 'white-dispaly-none');
    }

    console.log(`filter for yellow - ${this.yellow}`);
    if (!this.yellow) {
      this.filterByColorUnVisible('Цвет игрушки: желтый', 'yellow-dispaly-none');
    } else {
      this.filterByColorVisible('Цвет игрушки: желтый', 'yellow-dispaly-none');
    }

    console.log(`filter for red - ${this.red}`);
    if (!this.red) {
      this.filterByColorUnVisible('Цвет игрушки: красный', 'red-dispaly-none');
    } else {
      this.filterByColorVisible('Цвет игрушки: красный', 'red-dispaly-none');
    }

    console.log(`filter for blue - ${this.blue}`);
    if (!this.blue) {
      this.filterByColorUnVisible('Цвет игрушки: синий', 'blue-dispaly-none');
    } else {
      this.filterByColorVisible('Цвет игрушки: синий', 'blue-dispaly-none');
    }

    console.log(`filter for green - ${this.green}`);
    if (!this.green) {
      this.filterByColorUnVisible('Цвет игрушки: зелёный', 'green-dispaly-none');
    } else {
      this.filterByColorVisible('Цвет игрушки: зелёный', 'green-dispaly-none');
    }

    console.log(`filter for large - ${this.large}`);
    if (!this.large) {
      this.filterBySizeVisible('Размер игрушки: большой', 'large-dispaly-none');
    } else {
      this.filterBySizeUnVisible('Размер игрушки: большой', 'large-dispaly-none');
    }

    console.log(`filter for middle - ${this.middle}`);
    if (!this.middle) {
      this.filterBySizeVisible('Размер игрушки: средний', 'middle-dispaly-none');
    } else {
      this.filterBySizeUnVisible('Размер игрушки: средний', 'middle-dispaly-none');
    }

    console.log(`filter for little - ${this.little}`);
    if (!this.little) {
      this.filterBySizeVisible('Размер игрушки: малый', 'little-dispaly-none');
    } else {
      this.filterBySizeUnVisible('Размер игрушки: малый', 'little-dispaly-none');
    }

    console.log(`filter for favorite - ${this.favorite}`);
    if (!this.favorite) {
      this.filterByFavoriteUnVisible('Любимая: false', 'favorite-dispaly-none');
    } else {
      this.filterByFavoriteVisible('Любимая: false', 'favorite-dispaly-none');
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
      console.log(this.bellShaped);
      if (this.bellShaped) {
        this.bellShaped = false;
        this.filterByShapeUnVisible('Форма игрушки: колокольчик', 'bellShaped-dispaly-none');
      } else {
        this.bellShaped = true;
        this.filterByShapeVisible('Форма игрушки: колокольчик', 'bellShaped-dispaly-none');
      }
    });

    ballElement.addEventListener('click', (event: Event) => {
      if (this.ballShaped) {
        this.ballShaped = false;
        this.filterByShapeUnVisible('Форма игрушки: шар', 'ballShaped-dispaly-none');
      } else {
        this.ballShaped = true;
        this.filterByShapeVisible('Форма игрушки: шар', 'ballShaped-dispaly-none');
      }
    });
    coneElement.addEventListener('click', (event: Event) => {
      if (this.coneShaped) {
        this.coneShaped = false;
        this.filterByShapeUnVisible('Форма игрушки: шишка', 'coneShaped-dispaly-none');
      } else {
        this.coneShaped = true;
        this.filterByShapeVisible('Форма игрушки: шишка', 'coneShaped-dispaly-none');
      }
    });
    snowElement.addEventListener('click', (event: Event) => {
      if (this.snowShaped) {
        this.snowShaped = false;
        this.filterByShapeUnVisible('Форма игрушки: снежинка', 'snowShaped-dispaly-none');
      } else {
        this.snowShaped = true;
        this.filterByShapeVisible('Форма игрушки: снежинка', 'snowShaped-dispaly-none');
      }
    });
    figurineElement.addEventListener('click', (event: Event) => {
      if (this.figurineShaped) {
        this.figurineShaped = false;
        this.filterByShapeUnVisible('Форма игрушки: фигурка', 'figurineShaped-dispaly-none');
      } else {
        this.figurineShaped = true;
        this.filterByShapeVisible('Форма игрушки: фигурка', 'figurineShaped-dispaly-none');
      }
    });
    white.addEventListener('click', (event: Event) => {
      if (this.white) {
        this.white = false;
        this.filterByColorUnVisible('Цвет игрушки: белый', 'white-dispaly-none');
      } else {
        this.white = true;
        this.filterByColorVisible('Цвет игрушки: белый', 'white-dispaly-none');
      }
    });

    yellow.addEventListener('click', (event: Event) => {
      if (this.yellow) {
        this.yellow = false;
        this.filterByColorUnVisible('Цвет игрушки: желтый', 'yellow-dispaly-none');
      } else {
        this.yellow = true;
        this.filterByColorVisible('Цвет игрушки: желтый', 'yellow-dispaly-none');
      }
    });

    red.addEventListener('click', (event: Event) => {
      if (this.red) {
        this.red = false;
        this.filterByColorUnVisible('Цвет игрушки: красный', 'red-dispaly-none');
      } else {
        this.red = true;
        this.filterByColorVisible('Цвет игрушки: красный', 'red-dispaly-none');
      }
    });

    blue.addEventListener('click', (event: Event) => {
      if (this.blue) {
        this.blue = false;
        this.filterByColorUnVisible('Цвет игрушки: синий', 'blue-dispaly-none');
      } else {
        this.blue = true;
        this.filterByColorVisible('Цвет игрушки: синий', 'blue-dispaly-none');
      }
    });

    green.addEventListener('click', (event: Event) => {
      if (this.green) {
        this.green = false;
        this.filterByColorUnVisible('Цвет игрушки: зелёный', 'green-dispaly-none');
      } else {
        this.green = true;
        this.filterByColorVisible('Цвет игрушки: зелёный', 'green-dispaly-none');
      }
    });

    large.addEventListener('click', (event: Event) => {
      if (large.checked || this.large) {
        this.large = false;
        this.filterBySizeVisible('Размер игрушки: большой', 'large-dispaly-none');
      } else {
        this.large = true;
        this.filterBySizeUnVisible('Размер игрушки: большой', 'large-dispaly-none');
      }
    });

    middle.addEventListener('click', (event: Event) => {
      if (middle.checked || this.middle) {
        this.middle = false;
        this.filterBySizeVisible('Размер игрушки: средний', 'middle-dispaly-none');
      } else {
        this.middle = true;
        this.filterBySizeUnVisible('Размер игрушки: средний', 'middle-dispaly-none');
      }
    });
    little.addEventListener('click', (event: Event) => {
      if (little.checked || this.little) {
        this.little = false;
        this.filterBySizeVisible('Размер игрушки: малый', 'little-dispaly-none');
      } else {
        this.little = true;
        this.filterBySizeUnVisible('Размер игрушки: малый', 'little-dispaly-none');
      }
    });

    favorite.addEventListener('click', (event: Event) => {
      if (favorite.checked || this.favorite) {
        this.favorite = false;
        // this.filterByFavoriteVisible('Любимая: true');
        this.filterByFavoriteUnVisible('Любимая: false', 'favorite-dispaly-none');
      } else {
        this.favorite = true;
        this.filterByFavoriteVisible('Любимая: false', 'favorite-dispaly-none');
      }
    });

    //sorting part
    selectElement.addEventListener('change', (event: Event | any) => {
      if (event.target.value === 'A_Z') {
        this.sortingA_Z();
        const app = new Cards(this.data);
        app.renderToys();
        this.checkingFilter();
      }
      if (event.target.value === 'Z_A') {
        this.sortingZ_A();
        const app = new Cards(this.data);
        app.renderToys();
        this.checkingFilter();
      }

      if (event.target.value === 'countUp') {
        this.sortingcountUp();
        const app = new Cards(this.data);
        app.renderToys();
        this.checkingFilter();
      }

      if (event.target.value === 'countDown') {
        this.sortingcountDown();
        const app = new Cards(this.data);
        app.renderToys();
        this.checkingFilter();
      }
    });
  }
}

const sorting = new Sorting(data);
sorting.addListener();
  // sortingData(data);
