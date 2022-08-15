$(document).ready(function() {
    $('.cart').click(function(event) {
        $('.order').addClass('active');
    });
    $('.oreder__close-btn').click(function(event) {
        $('.order').removeClass('active');
    });
});