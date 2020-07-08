
$('header a').attr('href' , '#');
$('header a').bind("mouseover" , function () {
    var index = $('header a').index(this);
    if (index != 6)
    $('header a').eq(index).css({'color' : '#fe0000'});

    else if(index != 8)
        $('header a').eq(index).css({'color' : '#fe0000'});

})

$('header a').bind("mouseout" , function () {
    var index = $('header a').index(this);
    if (index != 6 && index != 8)
    $('header a').eq(index).css({'color' : '#000000'});
})

var height;
$(".search").bind("click" , function () {
    height = $("#searchBox div").height();

    $("#searchBox div div").css({"border-right":"2px solid #A7AAB5",
                                 "border-radius" : "12px 0px 12px 12px",
                                 "border-color" : "#4E6EF2"
                                });

    $("#searchBox div div").animate({
            height : 300,
    });

});


$(".search").bind("blur" , function () {

    $("#searchBox div div").animate({
            height : 24,
    });

    //延迟
    setTimeout(function () {
                $("#searchBox div div").css({"border-right" :"none",
                                             "border-radius" : "12px 0px 0px 12px",
                                             "border-color" : "#A7AAB5"});

                } , 300);

})

$('#searchBox ul li a').bind('mouseover' , function(){
    var index = $('#searchBox ul li a').index(this);
    $('#searchBox ul li a').eq(index).css({'color' : 'blue',
                                            'text-decoration' : 'underline'
                                          });


})

$('#searchBox ul li a').bind('mouseout' , function(){
    var index = $('#searchBox ul li a').index(this);
    $('#searchBox ul li a').eq(index).css({'color' : '#000000' ,'text-decoration':'none'});
})

