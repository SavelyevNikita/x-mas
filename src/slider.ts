import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const set0fSlider = document.getElementById('set0fslider') as any ;
const yearSlider = document.getElementById('yearslider') as any ;


noUiSlider.create(set0fSlider, {
    start: [0, 12],
    connect: true,
    range: {
        'min': 0,
        'max': 12
    }
});
const leftset0fslider:HTMLElement=document.getElementById('set0fslider-snap-value-lower')!;
const rightset0fslider :HTMLElement =document.getElementById('set0fslider-snap-value-upper')!;
const leftyearslider:HTMLElement=document.getElementById('yearslider-snap-value-lower')!;
const rightyearslider :HTMLElement =document.getElementById('yearslider-snap-value-upper')!;

set0fSlider.noUiSlider.on('update', () => {

    let outputValue = set0fSlider.noUiSlider.get() as string[];
    // console.log('outputValue');
    // console.log(outputValue);
    if (outputValue) {
        leftset0fslider.innerHTML = parseInt(outputValue[0]).toString();
        rightset0fslider.innerHTML = parseInt(outputValue[1]).toString();
    }
  });

noUiSlider.create(yearSlider, {
    start: [1940, 2020],
    connect: true,
    range: {
        'min': 1940,
        'max': 2020
    }
});

yearSlider.noUiSlider.on('update', () => {
    let outputValue = yearSlider.noUiSlider.get() as string[];
    // console.log('outputValue');
    // console.log(outputValue);
    if (outputValue) {
        leftyearslider.innerHTML = parseInt(outputValue[0]).toString();
        rightyearslider.innerHTML = parseInt(outputValue[1]).toString();
    }
  });


