// import './sources.css';

class Sources {
    draw(data) {
        // console.log(data);
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');
        // console.log(sourceItemTemp);
        // console.log(typeof sourceItemTemp);

        data.forEach((item) => {
            // console.log(item);
            const sourceClone = sourceItemTemp.content.cloneNode(true);

            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources').append(fragment);
    }
}

// export default Sources;
