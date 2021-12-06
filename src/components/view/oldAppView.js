import {News, interNews} from './news/news';
import {Sources} from './sources/sources.ts';

export class AppView {
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data) {
        // console.log(data);
        const values = data?.articles ? data?.articles : [];
        // console.log(values);
        this.news.draw(values);
    }

    drawSources(data) {
        // console.log(data);
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
        // console.log(values);
    }
}

export default AppView;
