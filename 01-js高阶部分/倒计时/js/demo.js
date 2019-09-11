/*
* 需求：页面在5s后进行跳转
* 操作：
*       1. setTimeout配合递归实现倒计时效果
*       2. 通过 $('#count-down').fadeOut('100')模拟跳转效果
* */

$(function () {
    const eleNum = $('#count-down .jump b');
    // 获取倒计时数字
    let num = Number(eleNum.text());
    downTime(num, eleNum);
});

function downTime(num, eleNum) {
    if (num > 0) {
        setTimeout(function () {
            num--;
            $(eleNum).text(num);
            downTime(num, eleNum);
        }, 1000);
    } else {
        jump();
    }
}

function jump() {
    $("#count-down").fadeOut(800); //延迟隐藏
}
