import './news.css';
import { interSource } from '../sources/sources';

interface interNews {
    author: string,
    content: string,
    description: string,
    publishedAt: string,
    source: interSource,
    title: string,
    url: string,
    urlToImage: string,



    // author: "The Associated Press"
    // content: "NEW YORK -- Chris Cuomo was hit with a new allegation of sexual harassment just days before CNN announced it was firing the anchor amid an investigation into work he did defending his brother from si… [+2131 chars]"
    // description: "Chris Cuomo was hit with allegations of sexual harassment days before CNN announced it was firing the prime-time anchor as it investigated his role in defending his brother from similar accusations"
    // publishedAt: "2021-12-05T19:24:05Z"
    // source: {id: 'abc-news', name: 'ABC News'}
    // title: "Attorney: CNN told of harassment claims before Cuomo firing"
    // url: "https://abcnews.go.com/US/wireStory/attorney-cnn-told-harassment-claims-cuomo-firing-81570418"
    // urlToImage: "https://s.abcnews.com/images/Entertainment/WireAP_4fbc65e1d16c4de9b860cc80acbbe7e1_16x9_992.jpg"

}
class News {
    draw(data: interNews[]): void {
        console.log(data);
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment() as DocumentFragment;
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) (<HTMLElement>newsClone.querySelector('.news__item')).classList.add('alt');

            (<HTMLElement>newsClone.querySelector('.news__meta-photo')).style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'
                })`;
            (<HTMLElement>newsClone.querySelector('.news__meta-author')).textContent = item.author || item.source.name;
            (<HTMLElement>newsClone.querySelector('.news__meta-date')).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            (<HTMLElement>newsClone.querySelector('.news__description-title')).textContent = item.title;
            (<HTMLElement>newsClone.querySelector('.news__description-source')).textContent = item.source.name;
            (<HTMLElement>newsClone.querySelector('.news__description-content')).textContent = item.description;
            (<HTMLElement>newsClone.querySelector('.news__read-more a')).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        (<HTMLElement>document.querySelector('.news')).innerHTML = '';
        (<HTMLElement>document.querySelector('.news')).appendChild(fragment);
    }
}

export default News;
