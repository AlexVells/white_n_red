window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-del-btn')) {

        const forDelete = event.target.closest('.order__item');
        
        forDelete.remove();

        checkCart();
        calcCartPriceAndDelivery();
        cartCounter();
    }
})