$(function () {

//当屏幕比变小到一定程度，点击头部导航改变图标，每个页面都要引入
    $('.navbar-toggle').click(function () {
        if ($('.index_more').css('display') == 'block') {
            $('.index_more').hide();
            $('.index_close').show();
        }else if($('.index_more').css('display') == 'none'){
            $('.index_more').show();
            $('.index_close').hide();
        }
    })
})
