import { interCard, Card } from './components/card';
import data from './data.js'
import { Cards } from './components/cards'

class Sorting {
  data: interCard[];
  constructor(data: interCard[]) {
    this.data = data;
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
  bellShapeFilter() {
    const bellArray: interCard[] = [];
    this.data.forEach(item => {
      console.log(item.shape);
      if (item.shape === 'колокольчик') {
        bellArray.push(item);
        // Sorting.draft.push(item);
      }
      else {

      }
      const app = new Cards(bellArray);
      app.renderToys();
    })
  }

  addListener() {
    const selectElement: HTMLElement = document.querySelector('#sort_set_select')!;
    const bellElement: HTMLElement = document.querySelector('.bell-wrap')!;
    const ballElement: HTMLElement = document.querySelector('.ball-wrap')!;
    const coneElement: HTMLElement = document.querySelector('.cone-wrap')!;
    const starElement: HTMLElement = document.querySelector('.star-wrap')!;
    const snowElement: HTMLElement = document.querySelector('.snow-wrap')!;
    const figurineElement: HTMLElement = document.querySelector('.figurine-wrap')!;
    bellElement.addEventListener('click', (event: Event) => {
      console.log(bellElement);
      this.bellShapeFilter();
    });
    ballElement.addEventListener('click', (event: Event) => {
      console.log(ballElement);
      console.log(document.getElementsByClassName('shapeToy'));
      const shapeToy = [...document.getElementsByClassName('shapeToy')];
      shapeToy.forEach((element: any): void => {
        if (element.innerText === 'Форма игрушки: шар') {
          const elP = element.parentElement;
          elP.classList.add(`ExptoyCard`);;
          console.log(elP);
        }
      });
    });
    coneElement.addEventListener('click', (event: Event | any) => { console.log(coneElement); });
    starElement.addEventListener('click', (event: Event | any) => { console.log(starElement); });
    snowElement.addEventListener('click', (event: Event | any) => { console.log(snowElement); });
    snowElement.addEventListener('click', (event: Event | any) => { console.log(snowElement); });
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
