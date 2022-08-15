function calcCartPriceAndDelivery() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceItems = cartWrapper.querySelectorAll('.checker__pricer-p');
    const total = document.querySelector('.total-p');
    const itemsInCart = document.querySelector('.cart_count');

    let price = 0;

    let cartCount = 0;
    
    priceItems.forEach(function (item) {

        const amountEl = item.closest('.order__item').querySelector('[data-counter]');

        const itemPrice = item.closest('.order__item').querySelector('.checker__pricer-t');
       
        itemPrice.innerText = parseInt(amountEl.innerText) * parseInt(item.innerText); 

        cartCount += parseInt(amountEl.innerText); 

        price += parseInt(item.innerText) * parseInt(amountEl.innerText);

    });

    total.innerText = price;
    itemsInCart.innerText = cartCount;


}
