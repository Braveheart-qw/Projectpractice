/*
    管理中心文件
 */
require.config({
    paths:{
        jquery : "../js/jquery-3.5.1.min",
        index_animate: "../js/index_animate",
        move : '../js/btn_move'
    }
})

require(['index_animate' ] , function (index_animate) {
       require(['move'] , function (move) {
           index_animate.start();
           move.m();
       })
});


