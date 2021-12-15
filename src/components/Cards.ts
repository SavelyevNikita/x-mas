import '../null.scss';
import './card.scss';
import { interCard, Card } from './card';

// export interface interCards {
//     data: interCard[];
// }

// export class Cards extends Card {
export class Cards {
    data: interCard[];
    constructor(data: interCard[]) {
        // super(renderToy);
        this.data = data;
    }

    renderToys() {
        const collection_new_year: HTMLElement = document.querySelector('.collection-new-year')!;
        collection_new_year.innerHTML = '';
        this.data.forEach((item: interCard) => {
            const toy = new Card(item);
            collection_new_year.appendChild(toy.renderToy());
        });
    }
}

































// export interface interCards {
//     color: string;
//     count: string;
//     favorite: boolean;
//     name: string;
//     num: string;
//     shape: string;
//     size: string;
//     year: string;
// }

// export class Cards {
//     data: interCards[];

//     constructor(data: interCards[]) {
//         this.data = data;
//     }

//     renderToys() {
//         const collection_new_year: HTMLElement = document.querySelector('.collection-new-year')!;
//          collection_new_year.innerHTML='';
//         this.data.forEach(item => {
//             collection_new_year.appendChild(this.renderToy(item));
//     });
// }
//     renderToy(item: interCards){ 
//         const toyCard: HTMLElement = document.createElement('div')!;
//         toyCard.classList.add(`toyCard`);
//         toyCard.classList.add(`toyCard${item.num}`);

//         const nameToy: HTMLElement = document.createElement('div');
//         nameToy.classList.add(`nameToy`);
//         const nameToy_name: HTMLElement = document.createElement('h2');
//         nameToy_name.classList.add(`nameToy__name`);
//         const nameToy_pic: HTMLImageElement = new Image;
//         nameToy_pic.classList.add(`nameToy__pic`);
//         nameToy_pic.src = `./assets/toys/${item.num}.png`;
//         nameToy_pic.alt = `${item.num}.png`;

//         const countToy: HTMLElement = document.createElement('div');
//         countToy.classList.add(`countToy`);
//         const countToy_count_static: HTMLElement = document.createElement('span');
//         countToy_count_static.classList.add(`countToy__count-static`);
//         const countToy_count: HTMLElement = document.createElement('span');
//         countToy_count.classList.add(`countToy__count`);

//         const yearToy: HTMLElement = document.createElement('div');
//         yearToy.classList.add(`yearToy`);
//         const yearToy_year_static: HTMLElement = document.createElement('span');
//         yearToy_year_static.classList.add(`yearToy__year-static`);
//         const yearToy_year: HTMLElement = document.createElement('span');
//         yearToy_year.classList.add(`yearToy__year`);

//         const shapeToy: HTMLElement = document.createElement('div');
//         shapeToy.classList.add(`shapeToy`);
//         const shapeToy_shape_static: HTMLElement = document.createElement('span');
//         shapeToy_shape_static.classList.add(`shapeToy__shape-static`);
//         const shapeToy_shape: HTMLElement = document.createElement('span');
//         shapeToy_shape.classList.add(`shapeToy__shape`);

//         const colorToy: HTMLElement = document.createElement('div');
//         colorToy.classList.add(`colorToy`);
//         const colorToy_color_static: HTMLElement = document.createElement('span');
//         colorToy_color_static.classList.add(`colorToy__color-static`);
//         const colorToy_color: HTMLElement = document.createElement('span');
//         colorToy_color.classList.add(`colorToy__color`);

//         const sizeToy: HTMLElement = document.createElement('div');
//         sizeToy.classList.add(`sizeToy`);
//         const sizeToy_size_static: HTMLElement = document.createElement('span');
//         sizeToy_size_static.classList.add(`sizeToy__size-static`);
//         const sizeToy_size: HTMLElement = document.createElement('span');
//         sizeToy_size.classList.add(`sizeToy__size`);

//         const favoriteToy: HTMLElement = document.createElement('div');
//         favoriteToy.classList.add(`favoriteToy`);
//         const favoriteToy_favorite_static: HTMLElement = document.createElement('span');
//         favoriteToy_favorite_static.classList.add(`favoriteToy__favorite-static`);
//         const favoriteToy_favorite: HTMLElement = document.createElement('span');
//         favoriteToy_favorite.classList.add(`favoriteToy__favorite`);

//         nameToy_name.innerText = `${item.name}`;
//         nameToy.appendChild(nameToy_name);
//         nameToy.appendChild(nameToy_pic);

//         countToy_count_static.innerText = `Количество: ${item.count}`;
//         countToy.appendChild(countToy_count_static);
//         // countToy.appendChild(countToy_count);

//         yearToy_year_static.innerText = `Год покупки: ${item.year}`;
//         yearToy.appendChild(yearToy_year_static);
//         // yearToy.appendChild(yearToy_year);

//         shapeToy_shape_static.innerText = `Форма игрушки: ${item.shape}`;
//         shapeToy.appendChild(shapeToy_shape_static);
//         // shapeToy.appendChild(shapeToy_shape);

//         colorToy_color_static.innerText = `Цвет игрушки: ${item.color}`;
//         colorToy.appendChild(colorToy_color_static);
//         // colorToy.appendChild(colorToy_color);

//         sizeToy_size_static.innerText = `Размер игрушки: ${item.size}`;
//         sizeToy.appendChild(sizeToy_size_static);
//         // sizeToy.appendChild(sizeToy_size);

//         favoriteToy_favorite_static.innerText = `Любимая: ${item.favorite}`;
//         favoriteToy.appendChild(favoriteToy_favorite_static);
//         // favoriteToy.appendChild(favoriteToy_favorite);

//         toyCard.appendChild(nameToy);
//         toyCard.appendChild(countToy);
//         toyCard.appendChild(yearToy);
//         toyCard.appendChild(shapeToy);
//         toyCard.appendChild(colorToy);
//         toyCard.appendChild(sizeToy);
//         toyCard.appendChild(favoriteToy);
//         toyCard.addEventListener('click', () => {console.log(item.name);});
//         return toyCard;
//     };
// }

