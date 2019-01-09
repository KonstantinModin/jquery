'use strict';
$(document).ready(function () {
    function showModal() {
        $('.overlay').animate({
            opacity: 'toggle'
        }, 1000);

        $('.modal').animate({
            height: 'toggle'
        }, 1000);
    }
    $('#schedule').on('click', showModal);
    $('.main_btna').on('click', showModal);
    $('.main_btn').on('click', showModal);
    $('#close').on('click', showModal);

});