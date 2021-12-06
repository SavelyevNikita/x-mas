import './sources.css';

export interface interSource {
  id: string;
  name: string;
}

export class Sources {
  draw(data: interSource[]): void {
    // console.log(data);
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

//  default Sources;
