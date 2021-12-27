export class SortWrap {
  node!: HTMLElement;
  sortSet!: HTMLDivElement;
  sortSetSelect!: HTMLSelectElement;
  option_1!: HTMLOptionElement;
  option_2!: HTMLOptionElement;
  option_3!: HTMLOptionElement;
  option_4!: HTMLOptionElement;
  option_5!: HTMLOptionElement;
  sortStatic!: HTMLParagraphElement;
  constructor(str:string) {
    this.node = document.querySelector(str)!;
  }
  render() {
    const sortStatic = document.createElement('p');
    sortStatic.setAttribute('class', 'sort-static');
    sortStatic.textContent='Сортировать';

    const sortSet = document.createElement('div');
    sortSet.setAttribute('class', 'sort-set');

    const sortSetSelect = document.createElement('select');
    sortSetSelect.setAttribute('name', 'sort-set-select');
    sortSetSelect.setAttribute('class', 'sort-set-select');
    sortSetSelect.setAttribute('id', 'sort_set_select');

    const option_1 = document.createElement('option');
    option_1.setAttribute('value', 'none');
    option_1.setAttribute('id', 'none');
    option_1.textContent='Выбрать...';
    
    const option_2 = document.createElement('option');
    option_2.setAttribute('value', 'A_Z');
    option_2.setAttribute('id', 'A_Z');
    option_2.textContent=`По названию от "А" до "Я"`;

    const option_3 = document.createElement('option');
    option_3.setAttribute('value', 'Z_A');
    option_3.setAttribute('id', 'Z_A');
    option_3.textContent=`По названию от "Я" до "А"`;

    const option_4 = document.createElement('option');
    option_4.setAttribute('value', 'countUp');
    option_4.setAttribute('id', 'countUp');
    option_4.textContent='По количеству в порядке возрастания';

    const option_5 = document.createElement('option');
    option_5.setAttribute('value', 'countDown');
    option_5.setAttribute('id', 'countDown');
    option_5.textContent='По количеству в порядке убывания';

    sortSetSelect.appendChild(option_1);
    sortSetSelect.appendChild(option_2);
    sortSetSelect.appendChild(option_3);
    sortSetSelect.appendChild(option_4);
    sortSetSelect.appendChild(option_5);
    sortSet.appendChild(sortSetSelect);

    this.node.appendChild(sortStatic);
    this.node.appendChild(sortSet);
  }
  destroy() {
  }
}
