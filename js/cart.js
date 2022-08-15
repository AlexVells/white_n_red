const cartWrapper =  document.querySelector('.cart-wrapper');

window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-add-btn')) {

    	const card = event.target.closest('.row__item');
		
        const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.row__item-img').getAttribute('src'),
			title: card.querySelector('.item__info-title').innerText,
			itemsInBox: card.querySelector('[data-pcs-in]').innerText,
			weight: card.querySelector('.checker__pricer-w').innerText,
			price: card.querySelector('.checker__pricer-p').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		}; 

		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

		if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		} else {

		const orderItemHTML = `<div class="order__item" data-id ="${productInfo.id}">
									<div class="order__info">
										<div class="oreder_item_information">
											<div class="order__info-img">
												<img class="order__item-img" src="${productInfo.imgSrc}" alt="">
											</div>
											<div class="info__body">
												<div class="info__body-title">${productInfo.title}</div>
												<div class="body__set">
													<span class="body-txt">set:</span>
													<span data-pcs-in class="body-txt item__pcs">${productInfo.itemsInBox}</span>
												</div>
												<div class="body_weight">
													<span class="body-txt">weight:</span>
													<span class="body-txt item__weight">${productInfo.weight}</span>
												</div>
											</div>
										</div>
										<div  class="order__item-delete">
                                    		<img data-del-btn src="./img/pc/delete.svg" alt="" class="delete-btn">
                                		</div>	
									</div>
									<div class="order__item-checker">
										<div class="checker__counter">
											<div class="checker__counter-minus" data-action="minus">-</div>
											<div class="checker__counter-value" data-counter>${productInfo.counter}</div>
											<div class="checker__counter-plus" data-action="plus">+</div>
										</div>
										<div class="pricer-item">
											<div class="item__total-price">
												<span class="b-price-txt">price:&nbsp;</span>
												<span class="checker__pricer-t">${productInfo.price}</span>
												<span class="bax red-txt">$</span>
											</div>
											<div class="item__price-info">
												<span class="s-price-txt">per one:&nbsp;</span>
												<span class="checker__pricer-p">${productInfo.price}</span>
												<span class="bax">$</span>
											</div>
                                		</div>
									</div>
									<div class="item__underline"></div>
								</div>`;

	cartWrapper.insertAdjacentHTML('beforeend', orderItemHTML);

    };

    card.querySelector('[data-counter]').innerText = '1';

	checkCart();
	calcCartPriceAndDelivery();

};
});