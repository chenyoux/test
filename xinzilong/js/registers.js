/**
 * Created by Administrator on 2017/7/14.
 */

var wait = 60
function time(o) {
    if (wait == 0) {
        o.removeAttribute("disabled")
        o.value = "点击获取"
        wait = 60
    } else {
        o.setAttribute("disabled", true)
        o.value = wait + "s"
        wait--
        setTimeout(function () {
            time(o)
        }, 1000)
    }

}
document.getElementById("send").onclick = function () {
    time(this)
}


//   require.config({
//         paths:{"jquery":"jquery-3.2.1.min.js"}
//     })
// require(["jquery"]),function () {
//     Add.bindBlur();
// }


// var Add = {
//     bindBlur:function () {
//         var phone = $('#phone')
//         var sendNum = $('#sendNum')
//         var password =$('#password')
//         var pswAgain = $('#pswAgain')
//
//         show( velidate)
//         phone.on({blur:function () {
//             show(velidate)
//         }})
//         sendNum.on({blur:function () {
//             show(velidate)
//         }})
//         password.on({blur:function () {
//             show(velidate)
//         }})
//         pswAgain.on({blur:function () {
//             show(velidate)
//         }})
//
//         function velidate() {
//             var flag =true
//             if (phone.val()==""){flag =false}
//             if (sendNum.val()==""){flag=false}
//             if (password.val()==""){flag=false}
//             if (pswAgain.val() != password.val()){flag =false}
//             return flag
//         }
//         function  show(flag) {
//             if(flag){
//                 $('.sure').setAttribute("disabled",true).css({"background-color":"red"})
//              } else {
//                 $('.sure').removeAttribute("disabled").css({"background-color":"gray"})
//             }
//         }
//     }
// }
