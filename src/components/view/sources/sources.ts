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
  draw(data: interSource[]){
    const fragment = document.createDocumentFragment() as DocumentFragment;
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item: interSource) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

      (<HTMLElement>sourceClone.querySelector('.source__item-name')).textContent = item.name;
      (<HTMLElement>sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });
    const sources = <HTMLElement>document.querySelector('.sources');
    sources.append(fragment);
  }
}