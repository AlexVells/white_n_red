function checkCart() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const emptyBage = document.querySelector('[data-empty-cart]');
    const orderBtn = document.querySelector('.order-btn');

    if (cartWrapper.children.length > 0) {
        emptyBage.classList.add('none');
        orderBtn.classList.remove('none');
    } else {
        emptyBage.classList.remove('none');
        orderBtn.classList.add('none');
    }
}