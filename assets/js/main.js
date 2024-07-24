;(function () {
    console.log("Working");
    $('.cardTop').hover(function(){
        $('body').toggleClass('change'+$(this).data('color')+'Color');
    });
}());