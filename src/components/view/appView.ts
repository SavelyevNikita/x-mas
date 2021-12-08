import { News, interNews } from './news/news';
import { Sources, interSource } from './sources/sources';


export interface interDataNews {
    status?: string;
    totalResults?: number;
    articles?: interNews[];
}
export interface interDataSource {
    status?:string;
    sources?: interSource[];
}

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data?: interDataNews): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data?: interDataSource) {
        const values= data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}