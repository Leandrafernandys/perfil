// animações do AOS
AOS.init();

// comportamento da seta
$(window).scroll(function(){
    if($(window).scrollTop() >= 50)
    {
        $('.seta').fadeIn();
    }else{
        $('.seta').fadeOut();
    }
});

$('.seta').click(function(){
    $('body, html').animate({
        scrollTop: 0
    },1200);
});

// rolagem da seta
$('.rolagem').click(function(){
    var id = $(this).attr('href');
    var destino = $(id).offset().top;
    $('html,body').animate({
        scrollTop: destino,
    });
});

