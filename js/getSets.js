const containerSets = document.querySelector('.catalog__sets');

getSets();

async function getSets() {

    const responseSets = await fetch('./js/products2.json');

    const setsArray = await responseSets.json();

    renderProducts(setsArray);

}

function renderProducts(setsArray) {
    setsArray.forEach(function (item) {
        const setsHTML = `<div class="row__item" data-id ="${item.id}">
                                <div class="item__img">
                                    <img class="row__item-img" src="./img/pc/menu/items/${item.imgSrc}" alt="">
                                </div>
                                <div class="item__info">
                                    <span data-pcs-in class="item__info-subtitle row__item-pcs">${item.itemsInBox}</span>
                                    <h4 class="item__info-title">${item.title}</h4>
                                    <span class="item__info-subtitle">Ingridients</span>
                                    <p class="item__info-ingridients">${item.ingridients}</p>
                                </div>
                                <div class="item-bottom">
                                    <div class="item__checker">
                                        <div class="checker__counter">
                                            <div class="checker__counter-minus" data-action="minus">-</div>
                                            <div class="checker__counter-value" data-counter>1</div>
                                            <div class="checker__counter-plus" data-action="plus">+</div>
                                        </div>
                                        <div class="checker__pricer">
                                            <span class="checker__pricer-w">${item.weight}</span>
                                            <div class="price-container">
                                                <span class="checker__pricer-p">${item.price}</span>
                                                <span class="bax red-txt">$</span>
                                            </div>
                                        </div>  
                                    </div>
                                    <button data-add-btn class="item__button">add to cart</button>
                                </div>
                            </div>`;
        containerSets.insertAdjacentHTML('beforeend', setsHTML);
    });
}



