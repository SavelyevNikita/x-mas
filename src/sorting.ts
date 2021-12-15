import { interCard, Card } from './components/card';
import data from './data.js'
import {Cards} from './components/cards'

const sortingData=(data:interCard[])=>{
    const selectElement:HTMLElement = document.querySelector('#sort_set_select')!;
    selectElement.addEventListener('change', (event:any) => {
    console.log(event.target.value);
    if(event.target.value==='A_Z'){
        const newData=data.sort((a, b)=>{
            if ( a.name < b.name ){
                      return -1;
                    }
                    if ( a.name > b.name ){
                      return 1;
                    }
                    return 0;
                  });
                  console.log(newData);
                  const app = new Cards(newData);
                  app.renderToys();              
        };
    if(event.target.value==='Z-A'){
    const newData=data.sort((a, b)=>{
        if ( a.name < b.name ){
                  return 1;
                }
                if ( a.name > b.name ){
                  return -1;
                }
                return 0;
              });
              console.log(newData);
              const app = new Cards(newData);
                  app.renderToys();
};
if(event.target.value==='countUp'){
    const newData=data.sort((a, b)=>{
        if ( +a.count < +b.count ){
                  return -1;
                }
                if ( +a.count > +b.count ){
                  return 1;
                }
                return 0;
              });
              console.log(newData);
              const app = new Cards(newData);
                  app.renderToys();
};
if(event.target.value==='countDown'){
    const newData=data.sort((a, b)=>{
        if ( +a.count < +b.count ){
                  return 1;
                }
                if ( +a.count > +b.count ){
                  return -1;
                }
                return 0;
              });
              console.log(newData);
              const app = new Cards(newData);
                  app.renderToys();
};
});}

sortingData(data);





// function compare( a, b ) {
//     if ( a.last_nom < b.last_nom ){
//       return -1;
//     }
//     if ( a.last_nom > b.last_nom ){
//       return 1;
//     }
//     return 0;
//   }
  
//   objs.sort( compare );