import Cards from './components/Cards.ts';
import data from './data.js'

class AppView {
    constructor() {
        this.сards = new Cards();
    }

    drawToys(data) {
        // const values = data?.articles ? data?.articles : [];
        this.сards.renderToys(data);
    }
}
export default AppView;
