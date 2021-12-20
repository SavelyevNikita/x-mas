import { Cards } from './components/Cards';
import './null.scss';
import './global.scss';
import data from './data.js'

    const app = new Cards(data);
    app.renderToys();
