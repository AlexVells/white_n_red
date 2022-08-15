window.addEventListener('click', function (event) {

/* const openForm = document.querySelector('#order-btn'); */

const orderForm = document.querySelector('.create_order_popup');

const cartActive = document.querySelector('.order');

const firstScreen = document.querySelector('.first-screen-order');

const secondScreen = document.querySelector('.second-screen-order')

const cartInside = document.querySelector('.cart-wrapper');

const inName = document.getElementById('username');

const inPhone = document.getElementById('userPhone');

const inAdress = document.getElementById('userAdress');


    if (event.target.dataset.action === 'openForm') {

        orderForm.classList.remove('none');

        cartActive.classList.remove('active');
    };

    if (event.target.dataset.action === 'closeOrderForm') {

        orderForm.classList.add('none');

    };

    if (event.target.dataset.action === 'placeOrder' && inName.validity.valid && inPhone.validity.valid && inAdress.validity.valid) {

        firstScreen.classList.add('none');

        secondScreen.classList.remove('none');

        setTimeout(() => {
            
            orderForm.classList.add('none');
            
            firstScreen.classList.remove('none');

            secondScreen.classList.add('none');

        }, 2000);

        while (cartInside.firstChild) {
            cartInside.removeChild(cartInside.firstChild);
        }

        calcCartPriceAndDelivery();
        checkCart();
    };



});


