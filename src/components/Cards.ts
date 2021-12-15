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

