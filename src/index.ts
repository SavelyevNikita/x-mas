import './null.scss';
import './global.scss';
import './card.scss';
import data from './data.js'
// const bgImg=require('./assets/ball')
const collection_new_year: HTMLElement | null = document.querySelector('.collection-new-year');
// console.log(main);
// console.log(data);
// const block:HTMLElement=document.createElement('div');
// block.className='exampleDiv';
const addElem = (data:any) => {
    const toyCard: HTMLElement = document.createElement('div');
    toyCard.classList.add(`toyCard`);
        
    const nameToy: HTMLElement = document.createElement('div');
    nameToy.classList.add(`nameToy`);
        const nameToy_name: HTMLElement = document.createElement('h2');
        nameToy_name.classList.add(`nameToy__name`);
        const nameToy_pic: HTMLImageElement  = document.createElement('img');
        nameToy_pic.classList.add(`nameToy__pic`);
        nameToy_pic.src = `./assets/toys/${data.num}.png`;
        nameToy_pic.alt=`${data.num}.png`;

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
    favoriteToy.classList.add(`toyCard`);
        const favoriteToy_favorite_static: HTMLElement = document.createElement('span');
        favoriteToy_favorite_static.classList.add(`favoriteToy__favorite-static`);
        const favoriteToy_favorite: HTMLElement = document.createElement('span');
        favoriteToy_favorite.classList.add(`favoriteToy__favorite`);
        
    nameToy.appendChild(nameToy_name);
    nameToy.appendChild(nameToy_pic);

    countToy.appendChild(countToy_count_static);
    countToy.appendChild(countToy_count);

    yearToy.appendChild(yearToy_year_static);
    yearToy.appendChild(yearToy_year);

    shapeToy.appendChild(shapeToy_shape_static);
    shapeToy.appendChild(shapeToy_shape);

    colorToy.appendChild(colorToy_color_static);
    colorToy.appendChild(colorToy_color);

    sizeToy.appendChild(sizeToy_size_static);
    sizeToy.appendChild(sizeToy_size);

    favoriteToy.appendChild(favoriteToy_favorite_static);
    favoriteToy.appendChild(favoriteToy_favorite);


    toyCard.appendChild(nameToy);
    toyCard.appendChild(countToy);
    toyCard.appendChild(yearToy);
    toyCard.appendChild(shapeToy);
    toyCard.appendChild(colorToy);
    toyCard.appendChild(sizeToy);
    toyCard.appendChild(favoriteToy);

    // img.src = `./assets/svg/rs_school_logo.svg`;
    // toyCard.classList.add(`exampleDiv${data.num}`);
    // toyCard.innerText=`${data.num}) ${data.name}`;
    // main!.appendChild(toyCard);
    collection_new_year!.appendChild(toyCard);
};
data.forEach(item => {
    console.log(item);
    addElem(item);
})