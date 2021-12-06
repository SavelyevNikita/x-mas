import { News, interNews } from './news/news';
import { Sources, interSource } from './sources/sources';


export interface interData {
    articles: interNews[];
    sources: interSource[];
}

//     articles: (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// status: "ok"
// totalResults: 4249
// [[Prototype]]: Object
// VM220 index.js:8272 
// (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {source: {…}, author: 'The Associated Press', title: 'China tries to reassure on Evergrande as default fears rise', description: 'China’s central bank has released extra money for …veloper’s $310 billion mountain of debt collapses', url: 'https://abcnews.go.com/Business/wireStory/china-reassure-evergrande-default-fears-rise-81578914', …}
// 1: {source: {…}, author: 'DALATOU MAMAN Associated Press', title: 'Gunmen attack Niger military base, killing at least 12', description: "Niger's interior ministry says that extremist gunm…r with Burkina Faso, killing at least 12 soldiers", url: 'https://abcnews.go.com/International/wireStory/gunmen-attack-niger-military-base-killing-12-81578913', …}


export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: interData) {
        const values: any = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: interData) {
        const values: any = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}
