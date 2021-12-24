export interface interCard {
    color: string;
    count: string;
    favorite: boolean;
    name: string;
    num: string;
    shape: string;
    size: string;
    year: string;
}

export class Card {
// export class Card extends HTMLElement {
    color: string;
    count: string;
    favorite: boolean;
    theСhosen: boolean;
    name: string;
    num: string;
    shape: string;
    size: string;
    year: string;

    constructor(data: interCard) {
        // super();
        this.color = data.color;
        this.count = data.count;
        this.favorite = data.favorite;
        this.name = data.name;
        this.num = data.num;
        this.shape = data.shape;
        this.size = data.size;
        this.year = data.year;
        this.theСhosen = false;
    }

    renderToy() {
        const toyCard: HTMLElement = document.createElement('div')!;
        toyCard.innerHTML = '';
        toyCard.classList.add(`toyCard`);
        toyCard.classList.add(`toyCard${this.num}`);

        const nameToy: HTMLElement = document.createElement('div');
        nameToy.classList.add(`nameToy`);
        const nameToy_name: HTMLElement = document.createElement('h2');
        nameToy_name.classList.add(`nameToy__name`);
        const nameToy_pic: HTMLImageElement = new Image;
        nameToy_pic.classList.add(`nameToy__pic`);
        nameToy_pic.src = `./assets/toys/${this.num}.png`;
        nameToy_pic.alt = `${this.num}.png`;

        const countToy: HTMLElement = document.createElement('div');
        countToy.classList.add(`countToy`);
        const countToy_count_static: HTMLElement = document.createElement('span');
        countToy_count_static.classList.add(`countToy__count-static`);
        const countToy_count: HTMLElement = document.createElement('span');
        countToy_count.classList.add(`countToy__count`);

        const yearToy: HTMLElement = document.createElement('div');
        yearToy.classList.add(`yearToy`);
        const yearToy_year_static: HTMLElement = document.createElement('span');
        yearToy_year_static.classList.add(`yearToy__year-static`);
        const yearToy_year: HTMLElement = document.createElement('span');
        yearToy_year.classList.add(`yearToy__year`);

        const shapeToy: HTMLElement = document.createElement('div');
        shapeToy.classList.add(`shapeToy`);
        const shapeToy_shape_static: HTMLElement = document.createElement('span');
        shapeToy_shape_static.classList.add(`shapeToy__shape-static`);
        const shapeToy_shape: HTMLElement = document.createElement('span');
        shapeToy_shape.classList.add(`shapeToy__shape`);

        const colorToy: HTMLElement = document.createElement('div');
        colorToy.classList.add(`colorToy`);
        const colorToy_color_static: HTMLElement = document.createElement('span');
        colorToy_color_static.classList.add(`colorToy__color-static`);
        const colorToy_color: HTMLElement = document.createElement('span');
        colorToy_color.classList.add(`colorToy__color`);

        const sizeToy: HTMLElement = document.createElement('div');
        sizeToy.classList.add(`sizeToy`);
        const sizeToy_size_static: HTMLElement = document.createElement('span');
        sizeToy_size_static.classList.add(`sizeToy__size-static`);
        const sizeToy_size: HTMLElement = document.createElement('span');
        sizeToy_size.classList.add(`sizeToy__size`);

        const favoriteToy: HTMLElement = document.createElement('div');
        favoriteToy.classList.add(`favoriteToy`);
        const favoriteToy_favorite_static: HTMLElement = document.createElement('span');
        favoriteToy_favorite_static.classList.add(`favoriteToy__favorite-static`);
        const favoriteToy_favorite: HTMLElement = document.createElement('span');
        favoriteToy_favorite.classList.add(`favoriteToy__favorite`);

        nameToy_name.innerText = `${this.name}`;
        nameToy.appendChild(nameToy_name);
        nameToy.appendChild(nameToy_pic);

        countToy_count_static.innerText = `Количество: ${this.count}`;
        countToy.appendChild(countToy_count_static);
        // countToy.appendChild(countToy_count);

        yearToy_year_static.innerText = `Год покупки: ${this.year}`;
        yearToy.appendChild(yearToy_year_static);
        // yearToy.appendChild(yearToy_year);

        shapeToy_shape_static.innerText = `Форма игрушки: ${this.shape}`;
        shapeToy.appendChild(shapeToy_shape_static);
        // shapeToy.appendChild(shapeToy_shape);

        colorToy_color_static.innerText = `Цвет игрушки: ${this.color}`;
        colorToy.appendChild(colorToy_color_static);
        // colorToy.appendChild(colorToy_color);

        sizeToy_size_static.innerText = `Размер игрушки: ${this.size}`;
        sizeToy.appendChild(sizeToy_size_static);
        // sizeToy.appendChild(sizeToy_size);

        favoriteToy_favorite_static.innerText = `Любимая: ${this.favorite}`;
        favoriteToy.appendChild(favoriteToy_favorite_static);
        // favoriteToy.appendChild(favoriteToy_favorite);

        toyCard.appendChild(nameToy);
        toyCard.appendChild(countToy);
        toyCard.appendChild(yearToy);
        toyCard.appendChild(shapeToy);
        toyCard.appendChild(colorToy);
        toyCard.appendChild(sizeToy);
        toyCard.appendChild(favoriteToy);
        toyCard.addEventListener('click', () => {
            this.ischoosen();
            // console.log(this.name);
            if (this.theСhosen) toyCard.classList.add(`Сhosen`);
            else toyCard.classList.remove(`Сhosen`);

        });
        return toyCard;
    };
    ischoosen() {
        if (!this.theСhosen) {
            this.theСhosen = true;
        } else {
            this.theСhosen = false;
        }
        this.renderToy();
    };
}

