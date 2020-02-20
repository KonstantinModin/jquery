$(document).ready(function () {  
    $('a[href="#sheldure"], .main_btna, .main_btn, .close').on('click', showModal);     
    function showModal() {
        $('.overlay').animate({
            opacity: 'toggle'
        }, 1000);

        $('.modal').animate({
            height: 'toggle'
        }, 1000);
    }    
});
