import AppController from '../controller/controller';
// import { AppView } from '../view/appView';
// import { News, interNews } from './news/news';
// import { Sources, interSource } from './sources/sources';
import { interDataNews, interDataSource, AppView} from '../view/appView';

class App {

    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (<HTMLElement>document
            .querySelector('.sources'))
            .addEventListener('click', (e) => this.controller.getNews(e, (data: interDataNews) => this.view.drawNews(data)));
        this.controller.getSources((data:interDataSource) => this.view.drawSources(data));
    }
}

export default App;
