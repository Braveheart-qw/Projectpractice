define(['jquery'] , function ($) {
    function move(){
        $('.nav ul a').bind({
            'mouseover' : function () {
                $('.hide_array').css('display' , 'inherit');
                $('.hide_array div').animate({
                    'height' : 229,
                },500)
            }
        })
        $(' .hide_array div').bind({
            'mouseleave' : function () {
                $('.hide_array').css('display' , 'none');
                $('.hide_array div').animate({
                    'height' : 0,
                },500)
            }
        })
    //轮播图中的隐藏区域
        $('.slideshow ul:nth-child(3) li a').bind({
            'mouseover' : function () {
                $('.slideshow>div').css('display' , 'inherit');
                $('.slideshow>div').animate({
                    width: 992,
                    height:'100%'
                },500)
            }
        })

        $('.slideshow ').bind({
            'mouseleave' : function () {
                $('.slideshow>div').css('height' , 0)
                                    .css('width' , 0)
                                    .css('display' , 'none');
            }
        })

    //    当前无法通过jquery来获取到元素的有效样式，因此我们需要使用getComputedStyle
        var currentElement =  document.getElementsByClassName('seckill_item')[0]
                                        .getElementsByTagName('ul')[0];
        //获取width总值是多少(4个li加起来的值)
        var item_width = parseInt(getComputedStyle(currentElement)['width']);
        //获取li个的数/4;
        var count_li = $('.seckill_item>ul>li').length/4;
        //count_li*item_width = 总宽度(可见部分+隐藏部分)
        var sum_width = count_li * item_width;
        var i=0;
        setInterval(function () {
            $('.footer>div:nth-child(2) div:last-child ul').css('margin-left' , 997*i);
            if(i <= -2){
                i++;
            }else{
                i--;
            }

            if(i<-4)
                i=0;
        }, 5000)


        //    小米闪购左右单击事件处理
        $('.left_move').bind({
            'click' : function () {
                //获取当前margin-left属性值是多少
                var left_mar = parseInt(getComputedStyle(currentElement)['margin-left']);

                // 判断当前的margin_left属性值是多少
                if(Math.abs(left_mar-item_width) < sum_width-15){
                   // alert(left_mar-item_width+"\n"+sum_width)
                    $('.footer>div:nth-child(2) div:last-child ul').css('margin-left' , (-item_width+left_mar));
                }else {
                    alert("右边没有了");
                }
            }
        })
        $('.right_move').bind({
            'click' : function () {
                //获取当前margin-left属性值是多少
                var left_mar = parseInt(getComputedStyle(currentElement)['margin-left']);

                // 判断当前的margin_left属性值是多少
                if(left_mar + item_width <= 0){
                    $('.footer>div:nth-child(2) div:last-child ul').css('margin-left' , left_mar + item_width);
                }else {
                    alert("左边边没有了");
                }
            }
        })

    }



    return {
        m : move,
    }
})