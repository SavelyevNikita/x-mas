import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

export class Slider {
    set0fslider: string;
    minRange: number;
    maxRange: number;
    constructor(set0fslider: string, minRange: number, maxRange: number) {
        this.set0fslider = set0fslider;
        this.minRange = minRange;
        this.maxRange = maxRange;
    }

    anySliderEvent() {
        const anySlider = document.getElementById(`${this.set0fslider}`) as any;
        const leftanySlider: HTMLElement = document.getElementById(`${this.set0fslider}-snap-value-lower`)!;
        const rightanySlider: HTMLElement = document.getElementById(`${this.set0fslider}-snap-value-upper`)!;
        noUiSlider.create(anySlider, {
            start: [this.minRange, this.maxRange],
            connect: true,
            range: {
                'min': this.minRange,
                'max': this.maxRange,
            }
        });
        anySlider.noUiSlider.on('update', () => {

            let outputValue = anySlider.noUiSlider.get() as string[];
            if (outputValue) {
                leftanySlider.innerHTML = parseInt(outputValue[0]).toString();
                rightanySlider.innerHTML = parseInt(outputValue[1]).toString();
            }

            // return (anySlider.noUiSlider.get());
        });
    }
};

