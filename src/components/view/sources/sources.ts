import './sources.css';

export interface interSource {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

export class Sources {
  draw(data: interSource[]): void {
    // console.log(data);
    const fragment = document.createDocumentFragment() as DocumentFragment;
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item: interSource) => {
      // console.log(item);
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

      (<HTMLElement>sourceClone.querySelector('.source__item-name')).textContent = item.name;
      (<HTMLElement>sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });
    const sources = <HTMLElement>document.querySelector('.sources');
    sources.append(fragment);
  }
}


// category: "general"
// country: "us"
// description: "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com."
// id: "abc-news"
// language: "en"
// name: "ABC News"
// url: "https://abcnews.go.com"
//  default Sources;
