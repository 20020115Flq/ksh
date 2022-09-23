//Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
//首页
$('.dh-shouye').mouseover(function () {
    $('.daohang-shouye').addClass("yincang")
    $('.daohang-shouye1').addClass("xianshi")
    $('.dh-shouye').addClass("xiahuaxian")
})
$('.dh-shouye').mouseout(function () {
    $('.daohang-shouye').removeClass("yincang")
    $('.daohang-shouye1').removeClass("xianshi")
    $('.dh-shouye').removeClass("xiahuaxian")
})
// 关于我们
$('.dh-guanyuwomen').mouseover(function () {
    $('.guanyuwomen-yincang').toggleClass("guanyuwomen-xianshi")
    $('.daohang-xianshi').addClass("yincang")
    $('.daohang-yincang').addClass("xianshi")
    $('.dh-guanyuwomen').addClass("xiahuaxian")

});
$('.dh-guanyuwomen').mouseout(function () {
    $('.guanyuwomen-yincang').toggleClass("guanyuwomen-xianshi")
    $('.daohang-xianshi').toggleClass("yincang").addClass("zitiyanse")
    $('.daohang-yincang').toggleClass("xianshi")
    $('.daohang-xianshi').removeClass("yincang").removeClass("zitiyanse")
    $('.dh-guanyuwomen').removeClass("xiahuaxian")

})
$('.guanyuwomen-yincang').mouseover(function () {
    $('.guanyuwomen-yincang').addClass("guanyuwomen-xianshi")
    $('.daohang-xianshi').addClass("zitiyanse")
    $('.dh-guanyuwomen').addClass("xiahuaxian")
})
$('.guanyuwomen-yincang').mouseout(function () {
    $('.guanyuwomen-yincang').removeClass("guanyuwomen-xianshi")
    $('.daohang-xianshi').removeClass("yincang").removeClass("zitiyanse")
    $('.dh-guanyuwomen').removeClass("xiahuaxian")
})
// 产品与服务
$('.dh-chanpin').mouseover(function () {
    console.log($('.daohang-chanpin'));
    $('.daohang-chanpin').addClass("yincang")
    $('.daohang-chanpin1').addClass("xianshi")
    $('.dh-chanpin').addClass('xiahuaxian')
    $('.chanpinyufuwu-yincang').toggleClass("chanpinyufuwu-xianshi")
})
$('.dh-chanpin').mouseout(function () {
    $('.chanpinyufuwu-yincang').toggleClass("chanpinyufuwu-xianshi")
    $('.daohang-chanpin').toggleClass("yincang").addClass("zitiyanse")
    $('.daohang-chanpin1').toggleClass("xianshi")
    $('.daohang-chanpin').removeClass("yincang").removeClass("zitiyanse")
    $('.dh-chanpin').removeClass('xiahuaxian')

})
$('.chanpinyufuwu-yincang').mouseover(function () {
    $('.chanpinyufuwu-yincang').addClass("chanpinyufuwu-xianshi")
    $('.daohang-chanpin').addClass("zitiyanse")
    $('.dh-chanpin').addClass('xiahuaxian')
})
$('.chanpinyufuwu-yincang').mouseout(function () {
    $('.chanpinyufuwu-yincang').removeClass("chanpinyufuwu-xianshi")
    $('.daohang-chanpin').removeClass("zitiyanse")
    $('.dh-chanpin').removeClass('xiahuaxian')
})
// 新闻
$('.dh-xinwen').mouseover(function () {
    $('.daohang-xinwen').addClass("yincang")
    $('.daohang-xinwen1').addClass("xianshi")
    $('.dh-xinwen').addClass("xiahuaxian")
})
$('.dh-xinwen').mouseout(function () {
    $('.daohang-xinwen').removeClass("yincang")
    $('.daohang-xinwen1').removeClass("xianshi")
    $('.dh-xinwen').removeClass("xiahuaxian")
})
// 诚聘
$('.dh-chengpin').mouseover(function () {
    $('.daohang-chengpin').addClass("yincang")
    $('.daohang-chengpin1').addClass("xianshi")
    $('.dh-chengpin').addClass("xiahuaxian")
})
$('.dh-chengpin').mouseout(function () {
    $('.daohang-chengpin').removeClass("yincang")
    $('.daohang-chengpin1').removeClass("xianshi")
    $('.dh-chengpin').removeClass("xiahuaxian")
})

// 滑动效果
$('.cpfw1').mousemove(function () {
    $('.cpfw1').addClass("cpfw")
})
$('.cpfw1').mouseout(function () {
    $('.cpfw1').removeClass("cpfw")
})
$('.cpfw2').mousemove(function () {
    $('.cpfw2').addClass("cpfw")
})
$('.cpfw2').mouseout(function () {
    $('.cpfw2').removeClass("cpfw")
})
$('.cpfw3').mousemove(function () {
    $('.cpfw3').addClass("cpfw")
})
$('.cpfw3').mouseout(function () {
    $('.cpfw3').removeClass("cpfw")
})
$('.cpfw4').mousemove(function () {
    $('.cpfw4').addClass("cpfw")
})
$('.cpfw4').mouseout(function () {
    $('.cpfw4').removeClass("cpfw")
})
// 颜色
$('.wenzi-1').mouseover(function () {
    $('.wenzi-1').addClass("wenzi-1-yanse")
})
$('.wenzi-1').mouseout(function () {
    $('.wenzi-1').removeClass("wenzi-1-yanse")
})

//轮播图
var mySwiper = new Swiper('.mn-swiper', {
    autoplay: true,
    touchRatio: 0.5,
    speed: 3000,  //匀速时间
    loop: true,
    freeMode: true,  //设置为true则变为free模式
    slidesPerView: 5,
    slidesPerGroup: 1,
})
//--  如果需要前进后退按钮 --
// $('.arrow-left').click(function () {
//     mySwiper.swipePrev();
// });
// $('.arrow-right').click(function () {
//     mySwiper.swipeNext();
// });
//鼠标移入悬停
$('.swiper-container').on('mouseenter', function () {
    mySwiper.stopAutoplay();
})
//鼠标移出滚动
$('.swiper-container').on('mouseleave', function () {
    mySwiper.startAutoplay();
})
// 新闻资讯图片的隐藏内容
$('.index4-neirong-tupian').mouseover(function () {
    $('.tpycwz').slideDown(50)
})
$('.index4-neirong-tupian').mouseout(function () {
    $('.tpycwz').slideUp(50)
})
// 字体颜色
var ztys = $('.index4-span')
$('.index4-span').mousemove(function () {
    for (var i = 0; i < ztys.length; i++) {
        $(this).addClass("yanse");
    }
})
$('.index4-span').mouseout(function () {
    for (var i = 0; i < ztys.length; i++) {
        $(this).removeClass("yanse")
    }
})

var ztys1 = $('.index4-zi')
$('.index4-zi').mousemove(function () {
    for (var i = 0; i < ztys1.length; i++) {
        $(this).addClass("yanse");
    }
})
$('.index4-zi').mouseout(function () {
    for (var i = 0; i < ztys1.length; i++) {
        $(this).removeClass("yanse");
    }
})

// console.log($("div[class^=dh]"));
var dj = $("div[class^=dh]")
$("div[class^=dh]").click(function () {
    for (var i = 0; i < dj.length; i++) {
        // console.log($(this));
        // console.log(12121);
    }
})


// 滑动隐藏
// 滑动隐藏
var ds = $('.dhkj-1')
$('.dhkj').click(function () {
    $('.dhkj-1').toggleClass("yincang")
    $(this).find('.dhkj-1').slideToggle();
    $(this).find('.tap-zuo').toggleClass("zuo")
    $(this).find('.tap-you').toggleClass("you")
    $(this).toggleClass("biankuang")
})
// 返回顶部
$(window).scroll(function(){
    if($(window).scrollTop()>400){
        $('.fh').css({
            opacity:1,
        })
    }
})
$('.fh').mousemove(function(){
    $('.fh').addClass("touming")
})
$('.fh').mouseleave(function(){
    $('.fh').removeClass("touming")
})
$('.fh').click(function(){
    window.scroll(0,0)
})
$(window).scroll(function(){
    if($(window).scrollTop()<400){
        $('.fh').css({
            opacity:0,
        })
    }
})