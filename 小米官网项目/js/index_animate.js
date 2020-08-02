/*
* 声明也需要遵循ADM规范
* */
define(['jquery'] , function ($) {

        function start() {
                //获取image.json的轮播图素材
            $.ajax({
                type : 'get',
                url  : '../json/image.json',
                success: function (resp) {

                    for (i = 0;i < resp.image.length ;i++){
                            $('<li><a href="#"><img src='+ resp.image[i].p+ '></a></li>').appendTo($('.slideshow ul:first-child'));
                            $('<li><input type="button" /></li>').appendTo($('.slideshow ul:nth-child(2)'));
                    }

                        //资源加载之后，为新插入的li添加样式
                    $(".slideshow ul:first-child>li").css('position',"absolute");
                    $(".slideshow>ul:first-child>li img").css('display' , 'block')
                                                 .css('width' , '1226px')
                                                 .css('height' , '460px')
                                                 .css('opacity' , '0');
                    $(".slideshow>ul:first-child>li:first-child img").css('opacity' , '1');

                        //轮播图的单击按键
                    $('.slideshow>ul:nth-child(2) li input').css("width" , '10px')
                                                                .css('height' , '10px')
                                                                .css('border-radius' , '50%')
                                                                .css('margin' , '0 3px')
                                                                .css('border' , '2px solid #fff')
                                                                .css('border-color' , 'hsla(0,0%,100%,.3)')
                                                                .css('background-color' , 'rgba(0,0,0,.4)');

                    $('.slideshow>ul:nth-child(2)>li:first-child>input').css('background-color' , 'rgba(0,0,0,.8)');


                        //图片资源加载完毕之后，需要做轮播特效

                    var imgAnimate = $(".slideshow>ul:first-child>li img")

                        //当鼠标移入imgAnimate 就将timer 定时器关闭
                        //当鼠标移出imgAnimate 就将timer 定时器开启
                    imgAnimate.bind({
                        'mouseenter': function () {
                            clearInterval(timer);

                            },
                        'mouseout' : function(){
                                auto_play(imgAnimate);
                            }
                        })

                    $('.slideshow>ul:nth-child(2)').bind('mouseenter',function () {
                            clearInterval(timer);
                        })
                        //自动播放
                            auto_play(imgAnimate);

                        //单击按键实现轮播图跳转
                            $('.slideshow>ul:nth-child(2) li input').bind('click' , function () {
                                 current = curr(imgAnimate);
                                 went = $('.slideshow>ul:nth-child(2) li input').index(this);
                                 play(imgAnimate ,current , went);
                            })
                        //自动播放时间
                             auto_time();
                        },

                        /*轮播特效已经制作完毕*/




                    error : function () {

                    }
                })
        }
        var current = 0;
        var timer = 0;
        var  went = 0;
        //封装的自动播放
        function auto_play(imgAnimate) {
            var  len  = imgAnimate.length;
            timer = setInterval(function () {
                went++;

                current = curr(imgAnimate);
                play(imgAnimate , current , went);
                console.log(current , went);
                if (went == len-1)
                    went = -1;


            } , 5000);


        }

        //获取当前透明度为1的元素
        function curr(imgAnimate) {

            for (i = 0;i<imgAnimate.length ; i++){
                if(imgAnimate.eq(i).css('opacity') == 1){
                    return i;
                }
            }
        }

        //封装动画播放函数
        function play(imgAnimate,current , went){
            imgAnimate.eq(current).animate({
                'opacity' : 0,
            },3000);

            $('.slideshow>ul:nth-child(2) li input').eq(current).css('background-color' , 'rgba(0,0,0,.4)');

            imgAnimate.eq(went).animate({
                'opacity' : 1,
            },3000);
            $('.slideshow>ul:nth-child(2) li input').eq(went).css('background-color' , 'rgba(0,0,0,.8)');

        }

        //自动更新系统时间函数
        function auto_time(){


            setInterval(function () {
                //    获取时分秒
                var date = new Date();
                var hh = date.getHours()> 10 ? date.getHours():"0"+date.getHours();
                var mm = date.getMinutes() > 10 ? date.getMinutes():"0"+date.getMinutes();
                var ss = date.getSeconds() > 10 ? date.getSeconds():"0"+date.getSeconds();
                $('.hh').html(hh);
                $('.mm').html(mm);
                $('.ss').html(ss);
                console.log("??");
            } , 1000);


        }
        return {
            start: start
        }

})