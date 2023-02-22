$('#b1').click(()=>{
    $('#d1').css({
        'height': '100px',
        'width': '100%',
        'position': 'relative',
        'background-color': 'red'
    })
});

$('#b2').click(()=>{
    $('#d2').fadeTo(500, '0.3');
});

$('#b3').click(()=>{
    $('div').slideUp(2000).slideDown(2000);
});

$('#b4').click(()=>{
    $("#b4").css({
        'background-color': 'aqua',
        'color': 'blue',
        'transition': 'background-color 5s ease, color 5s ease'
    });
});

$(".slider").slick({
    infinite: true,
    slidesToShow: 1
});


  