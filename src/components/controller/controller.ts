import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: <interDataSource>(data?: interDataSource) => void) {
        // console.log(callback);
        // console.log(typeof callback);
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: <interDataNews>(data?: interDataNews) => void) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if ((<HTMLElement>newsContainer).getAttribute('data-source') !== sourceId) {
                    (<HTMLElement>newsContainer).setAttribute('data-source', sourceId!); //////////////not sure
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
