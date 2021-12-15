import '../null.scss';
import './card.scss';
import { interCard, Card } from './card';

export class Cards {
    data: interCard[];
    constructor(data: interCard[]) {
        this.data = data;
    }
    renderNull(){
        const collection_new_year: HTMLElement = document.querySelector('.collection-new-year')!;
        collection_new_year.innerHTML = '';
    }

    renderToys() {
        const collection_new_year: HTMLElement = document.querySelector('.collection-new-year')!;
        this.renderNull();
        this.data.forEach((item: interCard) => {
            const toy = new Card(item);
            collection_new_year.appendChild(toy.renderToy());
        });
    }
}

