import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

export class Slider {
    set0fslider: string;
    minRange: number;
    maxRange: number;
    anySlider:any;
    leftanySlider!: HTMLElement;
    rightanySlider!: HTMLElement;
    constructor(set0fslider: string, minRange: number, maxRange: number) {
        this.set0fslider = set0fslider;
        this.minRange = minRange;
        this.maxRange = maxRange;
    }

    anySliderEvent() {
        this.anySlider = document.getElementById(`${this.set0fslider}`);
        this.leftanySlider = document.getElementById(`${this.set0fslider}-snap-value-lower`)!;
        this.rightanySlider = document.getElementById(`${this.set0fslider}-snap-value-upper`)!;
        noUiSlider.create(this.anySlider, {
            start: [this.minRange, this.maxRange],
            connect: true,
            range: {
                'min': this.minRange,
                'max': this.maxRange,
            }
        });
    }
    anySliderUpdateRange() {
        this.anySlider.noUiSlider.on('update', () => {
            let outputValue = this.anySlider.noUiSlider.get() as string[];
            if (outputValue) {
                this.leftanySlider.innerHTML = parseInt(outputValue[0]).toString();
                this.rightanySlider.innerHTML = parseInt(outputValue[1]).toString();
            }
        });
    }
    anySliderSet([minRange, maxRange]:number[]){
        this.anySlider.noUiSlider.set([minRange, maxRange]);
    }
};

