export class ResetWrap {
  node!: HTMLElement;
  resetFilters!: HTMLDivElement;
  resetSettings!: HTMLDivElement;
  filters!: HTMLInputElement;
  settings!: HTMLInputElement;
  resetFiltersResetStatic!: HTMLParagraphElement;
  resetSettingsResetStatic!: HTMLParagraphElement;

  constructor(str: string) {
    this.node = document.querySelector(str)!;
  }
  render(): void {
    // console.log(this.node);
    const resetFilters = document.createElement('div');
    resetFilters.setAttribute('class', 'reset-filters');

    const resetFiltersResetStatic = document.createElement('p');
    resetFiltersResetStatic.setAttribute('class', 'reset-filters__reset-static');

    const filters = document.createElement('input');
    filters.setAttribute('type', 'button');
    filters.setAttribute('value', 'Сбросить фильтры');

    resetFiltersResetStatic.appendChild(filters);
    resetFilters.appendChild(resetFiltersResetStatic);

    const resetSettings = document.createElement('div');
    resetSettings.setAttribute('class', 'reset-settings');

    const resetSettingsResetStatic = document.createElement('p');
    resetSettingsResetStatic.setAttribute('class', 'reset-settings__reset-static');

    const settings = document.createElement('input');
    settings.setAttribute('type', 'button');
    settings.setAttribute('value', 'Сбросить фильтры');

    resetSettingsResetStatic.appendChild(settings);
    resetSettings.appendChild(resetSettingsResetStatic);


    this.node.appendChild(resetFilters);
    this.node.appendChild(resetSettings);

  }
  destroy() {
  }
}
