// import AppLoader from './appLoader';
// import {interResponse} from './loader copy';

// class AppController extends AppLoader {
//     getSources(callback: (() => void) | undefined) {
//         super.getResp(
//             {
//                 endpoint: 'sources',
//             },
//             callback
//         );
//     }

//     getNews(e:Event, callback: (() => void) | undefined) {
//         let target = e.target as HTMLElement;
//         const newsContainer = e.currentTarget;

//         while (target !== newsContainer) {
//             if (target.classList.contains('source__item') ) {
//                 const sourceId = target.getAttribute('data-source-id');
//                 if ((<HTMLElement>newsContainer).getAttribute('data-source') !== sourceId) {
//                     (<HTMLElement>newsContainer).setAttribute('data-source', sourceId);
//                     super.getResp(
//                         {
//                             endpoint: 'everything',
//                             options: {
//                                 sources: sourceId,
//                             },
//                         },
//                         callback
//                     );
//                 }
//                 return;
//             }
//             target = target.parentNode as HTMLElement;
//         }
//     }
// }

// export default AppController;
