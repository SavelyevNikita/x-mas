import {Cards} from './components/cards';
import './null.scss';
import './global.scss';
import data from './data.js'

const app = new Cards(data);
app.renderToys();
// console.log(data);
// console.log(app);