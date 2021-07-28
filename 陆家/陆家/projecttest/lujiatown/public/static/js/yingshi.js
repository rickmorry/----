
var decoder;


function cameraInit(cameraInfo) {

    console.log("==============进入cameraInit")


    function handleError(e) {
        console.log('捕获到错误', e)
    }
    function handleSuccess() {
        console.log("播放成功回调函数，此处可执行播放成功后续动作");
    }

    var url = '';
    var accessToken = cameraInfo.token;
    var decoder=null;
    if (lookInfo.areaType == 1) {
        for (let index = 0; index < lookInfo.number; index++) {
            url += lookInfo.cameraInfoDtos[index].url;
            url += ","
        }
        url = url.substring(0, url.length - 1)
        console.log('url:' + url);

        //处置点 分屏展示
        decoder = new EZUIKit.EZUIPlayer({
            id: 'playWind',
            autoplay: true,
            url: url,
            accessToken: accessToken,
            decoderPath: '../',
            width: 600,
            height: 400,
            splitBasis: 2, // 1*1 2*2 3*3 4*4
        });
    } else {
        url = cameraInfo.url;
        decoder = new EZUIKit.EZUIPlayer({
            id: 'playWind',
            autoplay: true,
            url: url,
            accessToken: accessToken,
            decoderPath: '../',
            width: 600,
            height: 400,
            handleError: handleError,
            handleSuccess: handleSuccess,
        });

    }



    // 这里是打印日志，本例抛出到播放页面
    decoder.on('log', log);

    function log(str, className) {
        var s = (new Date()).Format('yyyy-MM-dd hh:mm:ss.S') + JSON.stringify(str);
        console.log(s);
    }

}


function stopCamera() {
    return new Promise(function (resolve, reject) {
        if (lookInfo && decoder) {
            if (lookInfo.areaType == 1) {
                var list = lookInfo.cameraInfoDtos;
                for (var i = 0; i < lookInfo.number; i++) {
                    if (list[i].url && list[i].url.length > 0) {
                        decoder.stop(i);
                    }
                }
                lookInfo = {};
                resolve();
            } else {
                var stopPromise = decoder.stop();
                stopPromise.then(function () {
                    console.log("关闭成功，用户执行关闭成功后的操作");
                    lookInfo = {};
                    resolve();
                })
            }
        } else {
            resolve();
        }


    })


}
