/**
 * Created by Administrator on 2017/7/17.
 */
$('.s2').click(function () {
    $(this).css({
        'border-bottom':'3px solid red',
        'color':'#D01F3C'
    })
    $('.s1').css({
        'border-bottom':'none',
        'color':'#000000'

    })
    $('.select-part').css('display','none')
    $('.part3').css('display','block')
})
$('.s1').click(function () {
    $(this).css({
        'border-bottom':'3px solid red',
        'color':'#D01F3C'
    })
    $('.s2').css({
        'border-bottom':'none',
        'color' : '#000000'
    })
    $('.part3').css('display','none')
    $('.select-part').css('display','block')
})