/**
 * Created by Administrator on 2017/7/14.
 */
$('.red').click(function () {
    $('.outlogin').css({
        display: 'block'
    })
    console.log('退出')
})
$('.cancel').click(function () {
    $('.outlogin').css({
        display: 'none'
    })
})