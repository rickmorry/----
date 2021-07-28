var _mapZoom = 14;
// 百度地图API功能
var map = new BMap.Map("container");    // 创建Map实例
map.setMapStyle({ style: 'midnight' });//午夜蓝风格
//map.setMapStyle({style: 'dark' });//黑夜风格
//map.setMapStyle({style: 'grayscale' });//高端灰

map.centerAndZoom(new BMap.Point(121.040918, 31.349038), _mapZoom);  // 初始化地图,设置中心点坐标和地图级别

map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
map.setCurrentCity("苏州");          // 设置地图显示的城市 此项是必须设置的

map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
map.enableContinuousZoom(true);    //启用地图惯性拖拽，默认禁用
//map.showZoomControls(false);
//map.addControl(new BMap.NavigationControl());  //添加默认缩放平移控件
//map.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT })); //向地图中添加比例尺控件
//缩放开始的事件
map.addEventListener("zoomstart", function (evt) { });

var plotFlagsHaveAdded = false; //小区是否已经加入map
var villageFlagsHaveAdded = false;   //社区标记是否已经加入map
var cameraFlagsHaveAdded = false;   //监控标记是否已经加入map
//缩放结束的事件
map.addEventListener("zoomend", function (evt) {
    console.log(map)
    console.log(_mapZoom)
    _mapZoom = map.getZoom();

    var villageShowLevel = 14;
    var plotShowLevel = 16;
    var cameraShowLevel = 17;

    //社区标签判断
    if (!villageFlagsHaveAdded && _mapZoom >= villageShowLevel) {
        addLabel();//添加社区标签
        villageFlagsHaveAdded = true;
    }
    if (villageFlagsHaveAdded && (_mapZoom < villageShowLevel || _mapZoom >= plotShowLevel)) {
        removeLabel();//移除社区标签
        villageFlagsHaveAdded = false;
    }

    //小区标签判断
    if (!plotFlagsHaveAdded && _mapZoom >= plotShowLevel) {
        addLabelPlot();//添加小区标签
        plotFlagsHaveAdded = true;
    }

    if (plotFlagsHaveAdded && _mapZoom < plotShowLevel) {
        removeLabelPlot();
        plotFlagsHaveAdded = false;
    }

    //监控标签判断
    if (!cameraFlagsHaveAdded && _mapZoom >= cameraShowLevel) {
        addCamera();//添加摄像机标点
        cameraFlagsHaveAdded = true;
    }

    if (cameraFlagsHaveAdded && _mapZoom < cameraShowLevel) {
        removeCamera();
        cameraFlagsHaveAdded = false;
    }
});

//------------------------ 显示镇级范围 ------------------
var polygons = [];
//显示社区边界
function getBoundary() {
    var areas = [];

    areas.push(chenxiang);
    areas.push(shentongjing);
    areas.push(siqiao);
    areas.push(zhoujiajiao);
    areas.push(xiaqiao);
    areas.push(chetang);
    areas.push(hefeng);
    areas.push(shaocun);
    areas.push(lujia);
    areas.push(lujia2);

    colors = ["#fff492", "#98e800", "#98d057", "#e19ee6", "#1ad3da", "#ffc11d", "#98e800", "#b95817", "#39d0a4", "#39d0a4"];

    var pointArray = [];
    for (var i = 0; i < areas.length; i++) {
        var ply = new BMap.Polygon(areas[i], { strokeWeight: 2, strokeColor: "#ff0000" }); //建立多边形覆盖物
        ply.setFillColor(colors[i])   //设置多边形的填充颜色
        ply.setFillOpacity(0.35);

        polygons.push(ply);  //加入多边形数组，以之后获取多边形边界点集

        //if (i == 3)
        //{
        //    ply.enableEditing();  //范围可编辑 【编辑的时候开启】
        //}

        map.addOverlay(ply);  //添加覆盖物
        pointArray = pointArray.concat(ply.getPath());
    }
    map.setViewport(pointArray);    //调整视野
    // addLabel();
}

var labelArray = [];
//添加社区标注
function addLabel() {
    var pointArray = [
        new BMap.Point(121.041294, 31.302276),  //陈巷村(社区)
        new BMap.Point(121.032593, 31.339461),  //神童泾村
        new BMap.Point(121.084829, 31.333325),  //泗桥村
        new BMap.Point(121.064825, 31.323261),  //邹家角村
        new BMap.Point(121.052097, 31.342213),  //夏桥村
        new BMap.Point(121.046028, 31.328015),  //车塘村
        new BMap.Point(121.012559, 31.348808),  //合丰村
        new BMap.Point(121.035883, 31.318471),  //邵村社区
        new BMap.Point(121.055328, 31.315684)  //陆家村
    ];

    var optsArray = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

    var contentArray = [
        "陈巷村(社区)", "神童泾村(社区)", "泗桥村(社区)", "邹家角村(社区)", "夏桥村(社区)", "车塘村(社区)", "合丰村(社区)", "邵村社区", "陆家村(社区)"];
    for (var i = 0; i < pointArray.length; {
        optsArray[i].position = pointArray[i];
        labelArray[i] = new BMap.Label(contentArray[i], optsArray[i]);
        labelArray[i].setStyle({
            color: "white",
            fontSize: "18px",
            height: "30px",
            lineHeight: "30px",
            textAlign: "center",
            //backgroundColor: "#333333",
            backgroundColor: "transparent",
            textShadow: "0 0 8px #000000",
            //writingMode: "vertical-lr",
            border: "0",
            fontWeight: "bold",
            fontFamily: "微软雅黑",
            transform: 'translateX(-50%)'//label相对坐标点自动居中显示
            ////transform: 'rotate(45deg) translateX(-50%)'//label相对坐标点自动居中显示
        });
        if(contentArray[i] == "车塘村(社区)") {
        labelArray[i].setStyle({
            writingMode: "vertical-lr",//文字垂直
            transform: 'translateX(-20px) translateY(-40px)'//label相对坐标点自动居中显示
        });
    }
                else if (contentArray[i] == "夏桥村(社区)") {
        labelArray[i].setStyle({
            writingMode: "vertical-lr",//文字垂直
        });
    }
    else if (contentArray[i] == "陆家村(社区)") {
        labelArray[i].setStyle({
            writingMode: "vertical-lr",//文字垂直
            transform: 'translateX(-20px) translateY(-20px)'
        });
    }
    else if (contentArray[i] == "邵村社区") {
        labelArray[i].setStyle({
            writingMode: "vertical-lr",//文字垂直
            transform: 'rotate(45deg) translateX(0px) translateY(0px)'
        });
    }
    else if (contentArray[i] == "泗桥村(社区)") {
        labelArray[i].setStyle({
            writingMode: "vertical-lr",//文字垂直
            transform: 'translateY(-20px)'
        });
    }
    else if (contentArray[i] == "邹家角村(社区)") {
        labelArray[i].setStyle({
            transform: 'rotate(-25deg) translateX(-30px) translateY(-30px)'
        });
    }
    labelArray[i].setTitle(contentArray[i]);
    labelArray[i].addEventListener('click', function (e) {
        //alert('单击点的坐标为：' + e.point.lng + ',' + e.point.lat);   // 监听点击事件
        showPop("建筑垃圾");
    });
    map.addOverlay(labelArray[i]);
}
        }
function removeLabel() {
    var length = labelArray.length;
    for (var i = 0; i < length; i++) {
        map.removeOverlay(labelArray[i]);
    }
}


var plotLabelArray = [];
//添加小区标注
function addLabelPlot() {
    var pointArray = [
        //陈巷社区
        new BMap.Point(121.04096, 31.31338),  //陈巷花园

        //邵村社区
        new BMap.Point(121.035895, 31.315976),//博怡轩
        new BMap.Point(121.032556, 31.3128), //蒋巷北苑
        new BMap.Point(121.032488, 31.310837), //蒋巷南苑
        new BMap.Point(121.035806, 31.318686), //邵村家园
        new BMap.Point(121.032297, 31.315229), //邵村南苑
        new BMap.Point(121.039567, 31.319711), //杏花南苑

        //神童泾社区
        new BMap.Point(121.034083, 31.324169),//东景苑
        new BMap.Point(121.034119, 31.327151), //山水江南
        new BMap.Point(121.035183, 31.321481), //邵村北苑
        new BMap.Point(121.038343, 31.324327), //香花苑
        new BMap.Point(121.039131, 31.322266), //杏花北苑
        new BMap.Point(121.040676, 31.323697), //阳光新第

        //车塘社区
        new BMap.Point(121.04387, 31.323957),//东方假日城
        new BMap.Point(121.04387, 31.321223), //富荣花园
        new BMap.Point(121.04584, 31.320988), //好孩子公寓
        new BMap.Point(121.046443, 31.324119), //陆电新村
        new BMap.Point(121.047962, 31.320351), //南粮花园
        new BMap.Point(121.045452, 31.326625), //神童花苑
        new BMap.Point(121.044193, 31.320094), //园丁新村
        new BMap.Point(121.041641, 31.329094), //云立方
        new BMap.Point(121.050261, 31.321843), //珠海新村

        //陆家社区
        new BMap.Point(121.052755, 31.321268),//碧湖苑
        new BMap.Point(121.061054, 31.314802), //联谊花园
        new BMap.Point(121.053056, 31.317969), //菉溪新村
        new BMap.Point(121.054759, 31.316924), //长丰新村
    ];

    // var optsArray = [{ }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }];
    var optsArray = [];
    var labelArray = [];

    //小区标签
    var contentArray = [
        //陈巷社区
        "陈巷花园",

        //邵村社区
        "博怡轩",
        "蒋巷北苑",
        "蒋巷南苑",
        "邵村家园",
        "邵村南苑",
        "杏花南苑",

        //神童泾社区
        "东景苑",
        "山水江南",
        "邵村北苑",
        "香花苑",
        "杏花北苑",
        "阳光新第",

        //车塘社区
        "东方假日城",
        "富荣花园",
        "好孩子公寓",
        "陆电新村",
        "南粮花园",
        "神童花苑",
        "园丁新村",
        "云立方",
        "珠海新村",

        //陆家社区
        "碧湖苑",
        "联谊花园",
        "菉溪新村",
        "长丰新村",

    ];
    for (var i = 0; i < pointArray.length; i++) {
        optsArray[i] = {};
        optsArray[i].position = pointArray[i];
        plotLabelArray[i] = new BMap.Label(contentArray[i], optsArray[i]);
        plotLabelArray[i].setStyle({
            color: "white",
            fontSize: "18px",
            height: "30px",
            lineHeight: "30px",
            textAlign: "center",
            //backgroundColor: "#333333",
            backgroundColor: "transparent",
            textShadow: "0 0 4px #000000",
            //writingMode: "vertical-lr",
            fontWeight: "bold",
            border: "0",
            fontFamily: "新宋体",
            transform: 'translateX(-50%)'//label相对坐标点自动居中显示
            ////transform: 'rotate(45deg) translateX(-50%)'//label相对坐标点自动居中显示
        });

        plotLabelArray[i].setTitle(contentArray[i]);
        plotLabelArray[i].addEventListener('click', function (e) {
            showPop("建筑垃圾");
        });
        map.addOverlay(plotLabelArray[i]);
    }
}
//隐藏小区标注
function removeLabelPlot() {
    for (var i = 0; i < plotLabelArray.length; i++) {
        map.removeOverlay(plotLabelArray[i]);
    }
}
var cameraArray = [];
//监控点坐标列表
var pointsList = [
    //陈巷社区
    //陈巷花园
    new BMap.Point(121.042688, 31.315236),
    new BMap.Point(121.03834, 31.311773),
    new BMap.Point(121.041125, 31.313501),

    //邵村社区
    //蒋巷北苑
    new BMap.Point(121.0311, 31.313169),
    new BMap.Point(121.033678, 31.312244),
    //蒋巷南苑
    new BMap.Point(121.031217, 31.311419),
    new BMap.Point(121.032654, 31.310825),
    //邵村南苑
    new BMap.Point(121.03039, 31.316355),
    new BMap.Point(121.033292, 31.314619),
    //博怡轩
    new BMap.Point(121.034549, 31.31664),
    new BMap.Point(121.035555, 31.314442),
    new BMap.Point(121.035806, 31.318686), //邵村家园
    new BMap.Point(121.039567, 31.319711), //杏花南苑


    //神童泾社区
    new BMap.Point(121.0325, 31.324358),//东景苑
    new BMap.Point(121.03374, 31.323957),//东景苑

    new BMap.Point(121.034119, 31.327151), //山水江南
    new BMap.Point(121.033372, 31.328321), //山水江南

    new BMap.Point(121.035183, 31.321481), //邵村北苑
    new BMap.Point(121.034549, 31.32084), //邵村北苑

    new BMap.Point(121.038343, 31.324327), //香花苑
    new BMap.Point(121.037349, 31.324032), //香花苑

    new BMap.Point(121.037915, 31.322193), //杏花北苑
    new BMap.Point(121.039131, 31.322266), //杏花北苑
    new BMap.Point(121.037915, 31.322193), //杏花北苑

    new BMap.Point(121.040676, 31.323697), //阳光新第
    new BMap.Point(121.040897, 31.324044), //阳光新第

    //车塘社区
    new BMap.Point(121.04387, 31.323957),//东方假日城
    new BMap.Point(121.04387, 31.321223), //富荣花园
    new BMap.Point(121.04584, 31.320988), //好孩子公寓
    new BMap.Point(121.046443, 31.324119), //陆电新村
    new BMap.Point(121.047962, 31.320351), //南粮花园
    new BMap.Point(121.045452, 31.326625), //神童花苑
    new BMap.Point(121.044193, 31.320094), //园丁新村
    new BMap.Point(121.041641, 31.329094), //云立方
    new BMap.Point(121.050261, 31.321843), //珠海新村

    new BMap.Point(121.044899, 31.323708),//东方假日城
    new BMap.Point(121.043559, 31.31994), //富荣花园
    new BMap.Point(121.045404, 31.321554), //好孩子公寓
    new BMap.Point(121.045696, 31.325499), //陆电新村
    new BMap.Point(121.04743, 31.319962), //南粮花园
    new BMap.Point(121.04509, 31.326282), //神童花苑
    new BMap.Point(121.04368, 31.319749), //园丁新村

    //陆家社区
    new BMap.Point(121.052755, 31.321268),//碧湖苑
    new BMap.Point(121.061054, 31.314802), //联谊花园
    new BMap.Point(121.053056, 31.317969), //菉溪新村
    new BMap.Point(121.054759, 31.316924), //长丰新村

    new BMap.Point(121.05272, 31.320936),//碧湖苑
    new BMap.Point(121.060481, 31.314743), //联谊花园
    new BMap.Point(121.053201, 31.318353), //菉溪新村
    new BMap.Point(121.054605, 31.316786), //长丰新村

]
//监控点标签
var labelTextList = [
    "陈巷花园1",
    "陈巷花园2",
    "陈巷花园3",
    "蒋巷北苑1",
    "蒋巷北苑2",
    "蒋巷南苑1",
    "蒋巷南苑2",
    "邵村南苑1",
    "邵村南苑2",
    "博怡轩1",
    "博怡轩2",

]

var cameraList = [];
//添加监控
function addCamera() {
    var xOffset = 0;
    var yOffset = -25;
    //执行成功后调用
    getRemoteCameraList().then(() => {

        //暂时增加可用摄像机数量，发布需删除===============
        cameraList = cameraList.concat(cameraList);
        cameraList = cameraList.concat(cameraList);
        cameraList = cameraList.concat(cameraList);

        var length = pointsList.length > cameraList.length ? cameraList.length : pointsList.length;
        for (var i = 0; i < length; i++) {
            var cameraInfo = cameraList[i];
            addSingleCamera(pointsList[i], labelTextList[i], xOffset, yOffset, cameraInfo);
        }
    });
}
function addSingleCamera(point, labelText, xOffset, yOffset, cameraInfo) {
    // var point = new BMap.Point(121.04096, 31.31338);
    var size = new BMap.Size(30, 30);
    var icon = new BMap.Icon('./images/icon/shexiangtou.png', size);

    // var icon = new BMap.Icon('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F35%2F89%2F96573bfb330f1c2.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617175780&t=76a7784a65f2c8efc60904f83fb0ee81',new BMap.Size(50,50));
    icon.setImageSize(size);
    var marker = new BMap.Marker(point, { icon: icon });

    //marker.setAnimation(BMAP_ANIMATION_BOUNCE);//跳动效果

    //标签这里用获取的cameraList中的channelName
    var label = new BMap.Label(cameraInfo.channelName, { offset: new BMap.Size(xOffset, yOffset) });
    label.setStyle({
        transform: 'translateX(-50%)'//label相对坐标点自动居中显示
    })
    marker.setLabel(label);

    marker.addEventListener('click', function (e) {
        showRealTimeCamera(cameraInfo);
    });
    map.addOverlay(marker);
    cameraArray.push(marker);
}
//隐藏监控
function removeCamera() {
    for (var i = 0; i < cameraArray.length; i++) {
        map.removeOverlay(cameraArray[i]);
    }
}
var cameraUrl = "http://lujiamanage.zheyousoft.cn";

//获取远程摄像机列表
//ajax是异步函数，因此返回promise对象，保证拿到结果后再添加坐标
function getRemoteCameraList() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: cameraUrl + "/ApiController/cameraList",
            type: "post",
            data: {

            },
            success: function (res) {
                var rows = res.data.rows;
                if (res.data && rows) {
                    for (var i in rows)
                        if (rows[i].status == 1) { cameraList.push(rows[i]) }
                }
                resolve();
            },
            error: function () {
                reject();
            }
        });

    })

}
var lookInfo = {};
function showRealTimeCamera(cameraInfo) {
    $.ajax({
        url: cameraUrl + "/ApiController/viewCamera",
        type: "post",
        data: {
            deviceSerial: cameraInfo.deviceSerial,
            channelNo: cameraInfo.channelNo
        },
        contentType: "application/x-www-form-urlencoded",
        success: function (res) {
            if (res.code == 200) {
                lookInfo = res.data;
                lookInfo.title = cameraInfo.channelName;
            }
            showPop("camera");
        },
        error: function () {
        }
    });

}
//
setTimeout(function () {
    //显示社区边界
    getBoundary();
    //显示小区
    showAllAreas();
    //显示社区标签
    addLabel();
    villageFlagsHaveAdded = true;
}, 2000);
//获取编辑后的边界点集【编辑完后，可以通过 button 来触发这个方法】
function getpoints() {
    for (var j = 0; j < polygons.length; j++) {
        var polyline = polygons[j];
        var pts = polyline.getPath();

        var sss = "";
        for (var i = 0; i < pts.length; i++) {
            sss += pts[i].lng + "," + pts[i].lat + ";";
        }
        console.log(sss);   //【将点集输出到控制台】
    }

    alert('已输出边界点集合!');
}
