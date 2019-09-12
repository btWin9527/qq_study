/**
 * @DESCRIPTION 移动端页面适配解决方案 v1.0
 * @AUTHOR      Night
 * @DATE        2018年08月01日
 */
(function (window, document) {
    var docEle = document.documentElement,
        dpr = window.devicePixelRatio || 1,
        scale = 1 / dpr;

    var fontSizeRadio = 1, //手机字体正常比例
        isLandscape = false; //是否横屏

    ///////////////////////// viewport start //////////////////////////////////

    //设置页面缩放比例并禁止用户手动缩放
    document.getElementsByName('viewport')[0].setAttribute('content', 'width=device-width,initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale + ',user-scalable=no');

    ///////////////////////// viewport end //////////////////////////////////

    //横屏状态检测
    if (window.orientation === 90 || window.orientation === -90) {
        isLandscape = true;
    };

    ///////////////////// system font-size check start //////////////////////

    //试探字体大小，用于检测系统字体是否正常
    var setFz = '100px';

    //给head增加一个隐藏元素
    var headEle = document.getElementsByTagName('head')[0],
        spanEle = document.createElement('span');
    spanEle.style.fontSize = setFz;
    spanEle.style.display = 'none';
    headEle.appendChild(spanEle);

    //判断元素真实的字体大小是否setFz
    //如果不相等则获取真实的字体换算比例
    var realFz = getComputedStyle(headEle).getPropertyValue('font-size');

    if (setFz !== 'realFz') {
        //去掉单位px，下面要参与计算
        setFz = parseFloat(setFz);
        realFz = parseFloat(realFz);

        //获取字体换算比例
        fontSizeRadio = setFz / realFz;
    };

    ///////////////////// system font-size check end //////////////////////

    var setBaseFontSize = function () {
        var deviceWidth = docEle.clientWidth,
            deviceHeight = docEle.clientHeight;

        if (isLandscape) {
            deviceWidth = deviceHeight;
        };

        docEle.style.fontSize = deviceWidth * fontSizeRadio + 'px';
    };
    setBaseFontSize();

    //页面发生变化时重置font-size
    //防止多个事件重复执行，增加延迟300ms操作(防抖)
    var tid;
    window.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(setBaseFontSize, 300);
    }, false);
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(setBaseFontSize, 300);
        };
    }, false);

})(window, document);