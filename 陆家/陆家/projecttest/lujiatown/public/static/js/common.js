import $ from "jquery"
const dic_categoryArray = {
  0: "建筑垃圾", 1: "绿化垃圾", 2: "大件垃圾", 3: "可回收物",
  4: "有害垃圾", 5: "厨余垃圾", 6: "其他垃圾"
};
const carImgArray = ["./static/image/icon/car_jianzhu.png", "./static/image/icon/car_lvhua.png", "./static/image/icon/car_dajian.png", "./static/image/icon/car_kehuishouwu.png", "./static/image/icon/car_youhai.png", "./static/image/icon/car_chuyu.png", "./static/image/icon/car_qita.png",];
console.log("common.js正在运行")
const cameraUrl = "http://lujiaapi.zheyousoft.cn/";
//const cameraUrl = "http://lujiaapitest.zheyousoft.cn/";

var popstatus = false
export function popstat() {
  return popstatus
}

var jiantingbtn = false;
//#region 弹出页面
export function showPop(title, plot) {
  if (title == "建筑垃圾") {
    $("div.pop.animated .content").html($("div.append.jianzhu").html());
  }
  if (title == "绿化垃圾") {
    $("div.pop.animated .content").html($("div.append.lvhua").html());
  }

  if (title == "大件垃圾") {
    $("div.pop.animated .content").html($("div.append.dajian").html());
  }

  if (title == "可回收物") {
    $("div.pop.animated .content").html($("div.append.kehuishou").html());
  }

  if (title == "厨余垃圾") {
    $("div.pop.animated .content").html($("div.append.chuyu").html());
  }

  if (title == "宣传引导") {
    $("div.pop.animated .content").html($("div.append.xuanchuan").html());
  }

  if (title == "处理厂") {
    camerapagenum = 1;
    if (jiantingbtn) {
      var previouspage = document.getElementById("previouspage")
      previouspage.removeEventListener("click", () => {
      })
      var nextpage = document.getElementById("nextpage")
      nextpage.removeEventListener("click", () => {
      })
      jiantingbtn = false;
    }
    $.ajax({
      url: cameraUrl + "api2/main/rubbishStock?pointId=" + plot.id + "&type=2",
      type: "get",
      async: false,
      headers: {      //请求头
        Accept: "application/json; charset=utf-8",
      },
      success: function (res) {
        let data = res;
        console.log(data);
        if (data.length == 0) {
          $("div.append.chulichang #rubb").text(parseInt(Math.random() * 10) + "     (吨)")
        } else {
          console.log("有数据");
          $("div.append.chulichang #rubb").text(data[0].stock + "(" + data[0].scale + ")")
        }
      }
    });

    $("div.append.chulichang").html()
    $("div.pop.animated .content").html($("div.append.chulichang").html());
    $("#name").html(plot.name);

    if (plot.cameraInfoDtos.length > 4) {
      console.log("长度够");

      $("#previouspa").css("display", "block")
      $("#nextpa").css("display", "block")

      document.getElementById("previouspa").addEventListener("click", () => {
        camerapagenum = 1;
        start22(1)
      })

      document.getElementById("nextpa").addEventListener("click", () => {
        // if(camerapage.end>=linshicamera)
        camerapagenum += 1;
        start32(camerapagenum);
      })

      jiantingbtn = true;
    }

    // $("#rubb").html(plot);
    setTimeout(() => {
      cameraInit3(plot);
    }, 500);

  }


  if (title == "camera") {
    camerapagenum = 1;
    if (jiantingbtn) {
      var previouspage = document.getElementById("previouspage")
      previouspage.removeEventListener("click", () => {
      })
      var nextpage = document.getElementById("nextpage")
      nextpage.removeEventListener("click", () => {
      })
      jiantingbtn = false;
    }

    popstatus = true
    linshicamera = plot;
    if (plot.status == 0) {
      $("div.pop.animated .content").html($("div.append.camera").html());
      $("#cameraTitle").text(plot.title);
      $("#playWind").html("<div style='text-align:center;font-size:30px;margin-top:50px;'>监控状态关闭</div>")

    } else {
      $("div.pop.animated .content").html($("div.append.camera").html());
      $("#cameraTitle").text(plot.title);
      if (plot.areaType == 1) {
        $("#lookbtn").css("display", "block")
        var zz = document.getElementById("lookbtn")
        zz.addEventListener("click", () => {
          start1()
        })
        var previouspage = document.getElementById("previouspage")
        previouspage.addEventListener("click", () => {
          camerapagenum = 1;
          start2(1)
        })
        var nextpage = document.getElementById("nextpage")
        nextpage.addEventListener("click", () => {
          // if(camerapage.end>=linshicamera)
          camerapagenum += 1;
          start3(camerapagenum);
        })
        jiantingbtn = true;
      }

      setTimeout(function () {
        cameraInit(cameraInfo2);
      }, 500);
    }
  }
  if (title == "作业车辆") {
    $("div.pop.animated .content").html($("div.append.cheliang").html());
  }
  if (title == "投放点") {
    popstatus = true
    //rubbish
    $.ajax({
      url: cameraUrl + "api2/main/rubbishStock?pointId=" + plot.id + "&type=" + plot.type,
      type: "get",
      async: false,
      headers: {      //请求头
        Accept: "application/json; charset=utf-8",
      },
      success: function (res) {
        let data = res;
        console.log(data);
        if (data.length == 0) {

          $("div.append.toufangdian #childs").html("<div style='line-height:35px;text-align:center;'>该点位暂无垃圾信息</div>")
        } else {
          var str = ""
          for (let i = 0; i < data.length; i++) {
            str += `<div style='line-height:35px;display:flex;flex-direction:row;justify-content:flex-start;align-items: center;'>
              <div style='font-size:16px;width:180px;text-align:right;'>垃圾类型:</div>
              <div style='font-size:14px;width:460px;text-align:center;'>`+ data[i].categoryName + `</div>
            </div>`
            str += `<div style='line-height:35px;display:flex;flex-direction:row;justify-content:flex-start;align-items: center;'>
            <div style='font-size:16px;width:180px;text-align:right;'>垃圾总量:</div>
            <div style='font-size:14px;width:460px;text-align:center;'>`+ data[i].stock + "(" + data[i].scale + ")" + `</div>
          </div>`
          }

          $("div.append.toufangdian #childs").html(str)
        }
      }
    });
    if (plot.cameraInfos.length > 0) {
      setTimeout(() => {
        cameraInit2(plot);
      }, 500);
    }
    $("div.append.toufangdian #playvideo").html("<div>该区域暂无监控信息</div>")
    $("div.append.toufangdian #name").text(plot.cellName + "垃圾收集点位")
    $("div.append.toufangdian #longitude").text(plot.longitude)
    $("div.append.toufangdian #latitude").text(plot.latitude)
    $("div.append.toufangdian #type").text(plot.putPointTypeName)

    $("div.pop.animated .content").html($("div.append.toufangdian").html());

  }
  if (title.indexOf("投放小区") == 0) {
    $("div.pop.animated .content").html($("div.append.toufangxiaoqu").html());
  }
  $("div.pop.animated").css("display", "block");
}

import { getvideo, setvideo } from "./_lujia/community"
var videotao = [];
export function comgetviede() {
  var qq = getvideo()
  for (let i = 0; i < qq.length; i++) {
    videotao.push(qq[i])
  }
  console.log(videotao);
}
//关闭弹出页面
export async function closePop() {
  await comgetviede();

  stopCamera().then(() => {
    $("div.pop.animated").css("display", "none");
    popstatus = false
    camerapagenum = 1;
    console.log(videotao);
    if (videotao.length != 0) {
      for (let i = 0; i < videotao.length; i++) {
        console.log(videotao[i]);
        videotao[i].dispose();
      }
    }
    console.log(videotao);
    videotao = [];
    setvideo();
    $("#playWind").html("<div></div>")
    $("#playvideo").html("<div></div>")
  })
}
export function closePops() {
  $("#huifvideo").html("")
  $("#huifang").css("display", "none")
  console.log(decoders);

  decoders.stop()
  cameraInit(linshicamera)
}
export function closexiaoquPop() {
  $("div.pop").css("display", "none");
}

//#region 作业车辆
//显示作业车辆
var ponitsArray_zycl = [];
//车辆坐标列表
var pointsList_zycl = new Array();
pointsList_zycl[0] = [new BMapGL.Point(121.03868, 31.310495)];
pointsList_zycl[1] = [];
pointsList_zycl[2] = [new BMapGL.Point(121.049893, 31.338827)];
pointsList_zycl[3] = [new BMapGL.Point(121.050893, 31.327827)];
pointsList_zycl[4] = [new BMapGL.Point(121.047893, 31.319827),
new BMapGL.Point(121.049893, 31.308827),
new BMapGL.Point(121.059893, 31.338827),
new BMapGL.Point(121.056093, 31.340027),
new BMapGL.Point(121.048893, 31.329827)];
pointsList_zycl[5] = [new BMapGL.Point(121.036093, 31.330027),
new BMapGL.Point(121.058093, 31.320027),
new BMapGL.Point(121.060093, 31.328027),
new BMapGL.Point(121.062093, 31.320027),
new BMapGL.Point(121.049093, 31.320027),
new BMapGL.Point(121.054093, 31.300027),
new BMapGL.Point(121.057793, 31.318027),
new BMapGL.Point(121.056893, 31.328827),];
pointsList_zycl[6] = [new BMapGL.Point(121.049058, 31.314258),
new BMapGL.Point(121.053883, 31.316942),
new BMapGL.Point(121.037248, 31.313503),
new BMapGL.Point(121.034925, 31.312222),
new BMapGL.Point(121.032338, 31.309692),
new BMapGL.Point(121.037962, 31.317899),
new BMapGL.Point(121.046093, 31.320027),
new BMapGL.Point(121.056093, 31.340027),
new BMapGL.Point(121.046093, 31.350027)];

export function addPoints_zycl(tag, map) {
  console.log(tag);
  console.log(map);

  var xOffset = -25;
  var yOffset = -35;

  var length = pointsList_zycl.length;
  for (var i = 0; i < length; i++) {

    if (tag != '-1') {
      tag = parseInt(tag)
      if (i == tag) {
        for (var key in pointsList_zycl[i]) {
          addSinglePoint_zycl(i, pointsList_zycl[i][key], dic_categoryArray[i], xOffset, yOffset, map);
        }
      }
    }
    else {
      for (var key in pointsList_zycl[i]) {
        addSinglePoint_zycl(i, pointsList_zycl[i][key], dic_categoryArray[i], xOffset, yOffset, map);
      }
    }
  }
}



//#endregion 作业车辆

//#region 实时监控
var cameraArray = [];
var cameraList = [];
//添加监控
export function addCamera(map) {
  var xOffset = 0;
  var yOffset = -25;
  //添加监控修改地图监控名称

  $.ajax({
    url: cameraUrl + "api2/CameraInfo/list?page=0&size=500",
    type: "get",
    // async: false,
    headers: {      //请求头
      Accept: "application/json; charset=utf-8",
    },
    success: function (res) {
      let data = res;
      for (var i = 0; i < data.length; i++) {
        var areaInfo = data[i];
        var cameraArray = areaInfo.cameraInfos;
        if (areaInfo.areaType == 1)//处置点只显示一个
        {
          var labelText = areaInfo.areaName + '(' + areaInfo.number + ')';
          addSingleCamera(xOffset, yOffset, cameraArray[0], labelText, areaInfo, map);
        } else {
          for (let index = 0; index < cameraArray.length; index++) {
            const element = cameraArray[index];
            addSingleCamera(xOffset, yOffset, element, element.channelName, areaInfo, map);
          }
        }
      }
    }
  });
}
export function addSingleCamera(xOffset, yOffset, cameraInfo, labelText, areaInfo, map) {
  // 没有经纬度信息就不显示坐标点了
  if (cameraInfo.longitude == null || cameraInfo.latitude == null) {
    return;
  }

  var size = new BMapGL.Size(30, 30);
  var icon = new BMapGL.Icon('./static/image/icon/shexiangtou.png', size);
  var point = new BMapGL.Point(Number(cameraInfo.longitude), Number(cameraInfo.latitude));
  icon.setImageSize(size);
  var marker = new BMapGL.Marker(point, { icon: icon });

  //marker.setAnimation(BMAP_ANIMATION_BOUNCE);//跳动效果

  var label = new BMapGL.Label(labelText, { offset: new BMapGL.Size(xOffset, yOffset) });
  label.setStyle({
    transform: 'translateX(-50%)'//label相对坐标点自动居中显示
  })
  marker.setLabel(label);

  // 添加点击事件
  marker.addEventListener('click', function (e) {
    showRealTimeCamera(areaInfo, cameraInfo);
  });
  map.addOverlay(marker);
  cameraArray.push(marker);
}
//隐藏监控
export function removeCamera(map) {
  for (var i = 0; i < cameraArray.length; i++) {
    map.removeOverlay(cameraArray[i]);
  }
}


//获取远程摄像机列表
let lookInfo = {};
let cameraInfo2;

export function showRealTimeCamera(areaInfo, cameraInfo) {
  lookInfo = areaInfo;
  if (cameraInfo.cameraType == 1) {
    if (areaInfo.areaType == 0) {
      cameraInfo.title = cameraInfo.areaName + "(" + cameraInfo.channelName + ")";
      var array = [cameraInfo];
      cameraInfo.url = cameraInfo.viewUrl;
      cameraInfo.token = areaInfo.token;
      cameraInfo2 = cameraInfo;
      showPop("camera", cameraInfo);
    } else {
      cameraInfo.title = cameraInfo.areaName + "(" + areaInfo.cameraInfos.length + ")";
      cameraInfo2 = cameraInfo;
      var len = areaInfo.cameraInfos;
      for (let index = 0; index < len; index++) {
        const element = res[index];
        lookInfo.cameraInfos[index].url = element.url;
        lookInfo.cameraInfos[index].token = element.token;
      }
      showPop("camera", cameraInfo);
    }
  } else if (cameraInfo.cameraType == 2) {
    //HLS视频播放
    if (areaInfo.areaType == 0) {
      //0等于未设置
      cameraInfo.title = cameraInfo.areaName + "(" + cameraInfo.channelName + ")";
      var array = [cameraInfo];
      cameraInfo.url = cameraInfo.viewUrl;
      cameraInfo.token = areaInfo.token;
      cameraInfo2 = cameraInfo;
      showPop("camera", cameraInfo);
    } else {
      //3等于道路
      //2等于小区
      //1等于处置点
      // 处理厂显示一个title
      cameraInfo.title = cameraInfo.areaName + "(" + areaInfo.cameraInfos.length + ")";
      // 处理厂批量获取监控地址
      cameraInfo2 = cameraInfo;
      var len = areaInfo.cameraInfos;
      // 每个摄像机添加url、token，其他和areaInfo一致
      for (let index = 0; index < len; index++) {
        const element = res[index];
        lookInfo.cameraInfos[index].url = element.url;
        lookInfo.cameraInfos[index].token = element.token;
      }
      showPop("camera", cameraInfo);
    }
  } else {
    console.log(areaInfo, cameraInfo)
  }



}
//#endregion 实时监控

//#region 投放点标记
var ponitsArray_tou = [];
//投放点坐标列表
var dic_rubbishPointsList_tou = [];//0-投放点 1-建筑垃圾  2-绿化垃圾  3-大件垃圾  4-有害垃圾 5-再生资源

var rubbishPointsList_tou = [new BMapGL.Point(121.058766, 31.319043), new BMapGL.Point(121.05952, 31.318692), new BMapGL.Point(121.059094, 31.319479), new BMapGL.Point(121.060716, 31.319501), new BMapGL.Point(121.05217, 31.32363), new BMapGL.Point(121.052049, 31.324799), new BMapGL.Point(121.05292, 31.326048), new BMapGL.Point(121.061301, 31.317276), new BMapGL.Point(121.061782, 31.317453), new BMapGL.Point(121.054767, 31.324618), new BMapGL.Point(121.054767, 31.324618), new BMapGL.Point(121.062275, 31.319798)];

// "id": 1,"name": "厨余垃圾""id": 2,"name": "绿化垃圾","id": 3,"name": "大件垃圾","id": 4,"name": "可回收物",
// "id": 9,"name": "建筑垃圾","id": 10,"name": "有害垃圾","id": 11,"name": "其他垃圾",

$.ajax({
  url: cameraUrl + "api2/main/cellPoints?rubbishTypeId=9",
  type: "get",
  // async: false,
  headers: {      //请求头
    Accept: "application/json; charset=utf-8",
  },
  success: function (res) {
    dic_rubbishPointsList_tou[1] = res
  }
});

$.ajax({
  url: cameraUrl + "api2/main/cellPoints?rubbishTypeId=2",
  type: "get",
  // async: false,
  headers: {      //请求头
    Accept: "application/json; charset=utf-8",
  },
  success: function (res) {
    //绿化
    dic_rubbishPointsList_tou[2] = res
  }
});

$.ajax({
  url: cameraUrl + "api2/main/cellPoints?rubbishTypeId=3",
  type: "get",
  // async: false,
  headers: {      //请求头
    Accept: "application/json; charset=utf-8",
  },
  success: function (res) {
    dic_rubbishPointsList_tou[3] = res
  }
});

$.ajax({
  url: cameraUrl + "api2/main/cellPoints?rubbishTypeId=4",
  type: "get",
  // async: false,
  headers: {      //请求头
    Accept: "application/json; charset=utf-8",
  },
  success: function (res) {
    dic_rubbishPointsList_tou[5] = res
  }
});

$.ajax({
  url: cameraUrl + "api2/main/cellPoints?rubbishTypeId=10",
  type: "get",
  // async: false,
  headers: {      //请求头
    Accept: "application/json; charset=utf-8",
  },
  success: function (res) {
    dic_rubbishPointsList_tou[4] = res
  }
});

$.ajax({
  url: cameraUrl + "api2/main/cellPoints?rubbishTypeId=1",
  type: "get",
  // async: false,
  headers: {      //请求头
    Accept: "application/json; charset=utf-8",
  },
  success: function (res) {
    //厨余
    dic_rubbishPointsList_tou[6] = res
  }
});

$.ajax({
  url: cameraUrl + "api2/main/cellPoints?rubbishTypeId=11",
  type: "get",
  // async: false,
  headers: {      //请求头
    Accept: "application/json; charset=utf-8",
  },
  success: function (res) {

    dic_rubbishPointsList_tou[0] = res
  }
});

$.ajax({
  url: cameraUrl + "api2/main/cellPoints",
  type: "get",
  async: false,
  headers: {      //请求头
    Accept: "application/json; charset=utf-8",
  },
  success: function (res) {

    dic_rubbishPointsList_tou[7] = res
  }
});



// dic_rubbishPointsList_tou[0] = rubbishPointsList_tou;

// rubbishPointsList_tou = [new BMapGL.Point(121.054481, 31.316412), new BMapGL.Point(121.060552, 31.314897), new BMapGL.Point(121.052998, 31.317696), new BMapGL.Point(121.020416, 31.347906), new BMapGL.Point(121.0116, 31.347027), new BMapGL.Point(120.99968, 31.343901), new BMapGL.Point(121.011485, 31.347614), new BMapGL.Point(121.00865, 31.34216), new BMapGL.Point(121.058645, 31.319463), new BMapGL.Point(121.058766, 31.319043), new BMapGL.Point(121.05952, 31.318692), new BMapGL.Point(121.06055, 31.320364), new BMapGL.Point(121.05217, 31.32363), new BMapGL.Point(121.052049, 31.324799), new BMapGL.Point(121.05292, 31.326048), new BMapGL.Point(121.061702, 31.317438), new BMapGL.Point(121.061301, 31.317276), new BMapGL.Point(121.040454, 31.314026), new BMapGL.Point(121.038708, 31.32411), new BMapGL.Point(121.054767, 31.324618), new BMapGL.Point(121.054502, 31.324892), new BMapGL.Point(121.062126, 31.319697), new BMapGL.Point(121.062275, 31.319798), new BMapGL.Point(121.075637, 31.341051), new BMapGL.Point(121.074797, 31.342223), new BMapGL.Point(121.045853, 31.322318), new BMapGL.Point(121.045776, 31.321331), new BMapGL.Point(121.046252, 31.323563), new BMapGL.Point(121.047441, 31.319832), new BMapGL.Point(121.045469, 31.327312), new BMapGL.Point(121.044275, 31.320314), new BMapGL.Point(121.04295, 31.328464), new BMapGL.Point(121.037561, 31.316149), new BMapGL.Point(121.030276, 31.313561), new BMapGL.Point(121.031587, 31.311132), new BMapGL.Point(121.03545, 31.318794), new BMapGL.Point(121.029634, 31.316701), new BMapGL.Point(121.040104, 31.320217)];
// dic_rubbishPointsList_tou[1] = rubbishPointsList_tou;

// rubbishPointsList_tou = [new BMapGL.Point(121.033352, 31.324835), new BMapGL.Point(121.034618, 31.32485), new BMapGL.Point(121.032884, 31.323936), new BMapGL.Point(121.035296, 31.323693), new BMapGL.Point(121.05489, 31.316975), new BMapGL.Point(121.054481, 31.316412), new BMapGL.Point(121.052527, 31.320758), new BMapGL.Point(121.060665, 31.315587), new BMapGL.Point(121.060552, 31.314897), new BMapGL.Point(121.061464, 31.314542), new BMapGL.Point(121.053097, 31.317723), new BMapGL.Point(121.052998, 31.317696), new BMapGL.Point(121.020062, 31.348843), new BMapGL.Point(121.02069, 31.348454), new BMapGL.Point(121.020416, 31.347906), new BMapGL.Point(121.019981, 31.347914), new BMapGL.Point(121.009682, 31.345069), new BMapGL.Point(121.0116, 31.347027), new BMapGL.Point(121.012382, 31.347062), new BMapGL.Point(120.99968, 31.343901), new BMapGL.Point(121.000623, 31.343407), new BMapGL.Point(121.001907, 31.343323), new BMapGL.Point(121.002455, 31.342644), new BMapGL.Point(121.004072, 31.342814), new BMapGL.Point(121.004396, 31.342174), new BMapGL.Point(121.00524, 31.342644), new BMapGL.Point(121.00515, 31.343716), new BMapGL.Point(121.010375, 31.347587), new BMapGL.Point(121.011485, 31.347614), new BMapGL.Point(121.007339, 31.342803), new BMapGL.Point(121.00667, 31.342136), new BMapGL.Point(121.008013, 0), new BMapGL.Point(121.00865, 31.34216), new BMapGL.Point(121.033799, 31.328419), new BMapGL.Point(121.033853, 31.328018), new BMapGL.Point(121.034535, 31.327297), new BMapGL.Point(121.034028, 31.326904), new BMapGL.Point(121.034464, 31.325605), new BMapGL.Point(121.058645, 31.319463), new BMapGL.Point(121.058766, 31.319043), new BMapGL.Point(121.05952, 31.318692), new BMapGL.Point(121.06055, 31.320364), new BMapGL.Point(121.05217, 31.32363), new BMapGL.Point(121.052049, 31.324799), new BMapGL.Point(121.05292, 31.326048), new BMapGL.Point(121.061702, 31.317438), new BMapGL.Point(121.061301, 31.317276), new BMapGL.Point(121.057677, 31.347736), new BMapGL.Point(121.057538, 31.34678), new BMapGL.Point(121.059123, 31.347466), new BMapGL.Point(121.058683, 31.346387), new BMapGL.Point(121.054322, 31.347092), new BMapGL.Point(121.05443, 31.348083), new BMapGL.Point(121.052202, 31.347559), new BMapGL.Point(121.051223, 31.348176), new BMapGL.Point(121.039713, 31.31192), new BMapGL.Point(121.042045, 31.31192), new BMapGL.Point(121.042045, 31.31192), new BMapGL.Point(121.040733, 31.312475), new BMapGL.Point(121.042144, 31.312419), new BMapGL.Point(121.043482, 31.312699), new BMapGL.Point(121.042727, 31.313085), new BMapGL.Point(121.040454, 31.314026), new BMapGL.Point(121.04164, 31.314249), new BMapGL.Point(121.042889, 31.31391), new BMapGL.Point(121.040679, 31.315013), new BMapGL.Point(121.042682, 31.315445), new BMapGL.Point(121.034337, 31.321322), new BMapGL.Point(121.036192, 31.321102), new BMapGL.Point(121.036192, 31.321102), new BMapGL.Point(121.038029, 31.324434), new BMapGL.Point(121.038622, 31.324534), new BMapGL.Point(121.039588, 31.324723), new BMapGL.Point(121.038708, 31.32411), new BMapGL.Point(121.041304, 31.323755), new BMapGL.Point(121.054767, 31.324618), new BMapGL.Point(121.054502, 31.324892), new BMapGL.Point(121.062126, 31.319697), new BMapGL.Point(121.062275, 31.319798), new BMapGL.Point(121.073982, 31.340045), new BMapGL.Point(121.072499, 31.33991), new BMapGL.Point(121.071129, 31.340385), new BMapGL.Point(121.071125, 31.341372), new BMapGL.Point(121.072818, 31.341055), new BMapGL.Point(121.074835, 31.340774), new BMapGL.Point(121.071691, 31.342362), new BMapGL.Point(121.073016, 31.341931), new BMapGL.Point(121.074655, 31.341422), new BMapGL.Point(121.072996, 31.343507), new BMapGL.Point(121.075287, 31.343699), new BMapGL.Point(121.076378, 31.343094), new BMapGL.Point(121.074743, 31.342412), new BMapGL.Point(121.075637, 31.341051), new BMapGL.Point(121.074797, 31.342223), new BMapGL.Point(121.04437, 31.32494), new BMapGL.Point(121.043405, 31.324323), new BMapGL.Point(121.042888, 31.323609), new BMapGL.Point(121.044433, 31.323135), new BMapGL.Point(121.044523, 31.322025), new BMapGL.Point(121.045803, 31.322109), new BMapGL.Point(121.044846, 31.321369), new BMapGL.Point(121.043544, 31.320748), new BMapGL.Point(121.045853, 31.322318), new BMapGL.Point(121.045637, 31.321442), new BMapGL.Point(121.045776, 31.321331), new BMapGL.Point(121.046077, 31.32504), new BMapGL.Point(121.04676, 31.323714), new BMapGL.Point(121.046252, 31.323563), new BMapGL.Point(121.048083, 31.320441), new BMapGL.Point(121.047441, 31.319832), new BMapGL.Point(121.045469, 31.327312), new BMapGL.Point(121.045375, 31.326734), new BMapGL.Point(121.044275, 31.320314), new BMapGL.Point(121.044387, 31.320333), new BMapGL.Point(121.041184, 31.329922), new BMapGL.Point(121.042783, 31.329355), new BMapGL.Point(121.040583, 31.328896), new BMapGL.Point(121.041616, 31.328302), new BMapGL.Point(121.04295, 31.328464), new BMapGL.Point(121.048989, 31.322572), new BMapGL.Point(121.034471, 31.316496), new BMapGL.Point(121.037013, 31.317136), new BMapGL.Point(121.034821, 31.315755), new BMapGL.Point(121.037417, 31.316442), new BMapGL.Point(121.036016, 31.315478), new BMapGL.Point(121.03505, 31.314922), new BMapGL.Point(121.037561, 31.316149), new BMapGL.Point(121.031789, 31.313118), new BMapGL.Point(121.031012, 31.312747), new BMapGL.Point(121.034682, 31.312289), new BMapGL.Point(121.032845, 31.312096), new BMapGL.Point(121.030276, 31.313561), new BMapGL.Point(121.032566, 31.311718), new BMapGL.Point(121.031587, 31.311132), new BMapGL.Point(121.032521, 31.310484), new BMapGL.Point(121.032724, 31.309928), new BMapGL.Point(121.034107, 31.310696), new BMapGL.Point(121.035544, 31.319685), new BMapGL.Point(121.03545, 31.318794), new BMapGL.Point(121.036092, 31.318088), new BMapGL.Point(121.030564, 31.316608), new BMapGL.Point(121.033322, 31.316107), new BMapGL.Point(121.030663, 31.315956), new BMapGL.Point(121.031894, 31.31478), new BMapGL.Point(121.030932, 31.314796), new BMapGL.Point(121.033353, 31.314105), new BMapGL.Point(121.029634, 31.316701), new BMapGL.Point(121.038204, 31.319516), new BMapGL.Point(121.040104, 31.320217)];
// dic_rubbishPointsList_tou[2] = rubbishPointsList_tou;

// rubbishPointsList_tou = [new BMapGL.Point(121.054481, 31.316412), new BMapGL.Point(121.060552, 31.314897), new BMapGL.Point(121.052998, 31.317696), new BMapGL.Point(121.020416, 31.347906), new BMapGL.Point(121.0116, 31.347027), new BMapGL.Point(120.99968, 31.343901), new BMapGL.Point(121.011485, 31.347614), new BMapGL.Point(121.00865, 31.34216), new BMapGL.Point(121.058645, 31.319463), new BMapGL.Point(121.058766, 31.319043), new BMapGL.Point(121.05952, 31.318692), new BMapGL.Point(121.06055, 31.320364), new BMapGL.Point(121.05217, 31.32363), new BMapGL.Point(121.052049, 31.324799), new BMapGL.Point(121.05292, 31.326048), new BMapGL.Point(121.061702, 31.317438), new BMapGL.Point(121.061301, 31.317276), new BMapGL.Point(121.040454, 31.314026), new BMapGL.Point(121.038708, 31.32411), new BMapGL.Point(121.054767, 31.324618), new BMapGL.Point(121.054502, 31.324892), new BMapGL.Point(121.062126, 31.319697), new BMapGL.Point(121.062275, 31.319798), new BMapGL.Point(121.075637, 31.341051), new BMapGL.Point(121.074797, 31.342223), new BMapGL.Point(121.045853, 31.322318), new BMapGL.Point(121.045776, 31.321331), new BMapGL.Point(121.046252, 31.323563), new BMapGL.Point(121.047441, 31.319832), new BMapGL.Point(121.045469, 31.327312), new BMapGL.Point(121.044275, 31.320314), new BMapGL.Point(121.04295, 31.328464), new BMapGL.Point(121.037561, 31.316149), new BMapGL.Point(121.030276, 31.313561), new BMapGL.Point(121.031587, 31.311132), new BMapGL.Point(121.03545, 31.318794), new BMapGL.Point(121.029634, 31.316701), new BMapGL.Point(121.040104, 31.320217)];
// dic_rubbishPointsList_tou[3] = rubbishPointsList_tou;

// //可回收物
// rubbishPointsList_tou = [new BMapGL.Point(121.033163, 31.324804), new BMapGL.Point(121.003668, 31.342251), new BMapGL.Point(121.034446, 31.327182), new BMapGL.Point(121.05895, 31.319174), new BMapGL.Point(121.058766, 31.319043), new BMapGL.Point(121.05952, 31.318692), new BMapGL.Point(121.05217, 31.32363), new BMapGL.Point(121.052049, 31.324799), new BMapGL.Point(121.051937, 31.324317), new BMapGL.Point(121.05292, 31.326048), new BMapGL.Point(121.061301, 31.317276), new BMapGL.Point(121.061827, 31.317607), new BMapGL.Point(121.059227, 31.346352), new BMapGL.Point(121.053971, 31.34774), new BMapGL.Point(121.041164, 31.315329), new BMapGL.Point(121.038182, 31.323917), new BMapGL.Point(121.054767, 31.324618), new BMapGL.Point(121.054461, 31.324664), new BMapGL.Point(121.062275, 31.319798), new BMapGL.Point(121.074709, 31.340801), new BMapGL.Point(121.074662, 31.342554), new BMapGL.Point(121.044308, 31.323286), new BMapGL.Point(121.0457, 31.322345), new BMapGL.Point(121.046077, 31.320648), new BMapGL.Point(121.031991, 31.312686), new BMapGL.Point(121.032566, 31.311718), new BMapGL.Point(121.03545, 31.318443)];
// dic_rubbishPointsList_tou[4] = rubbishPointsList_tou;
// //可回收物

// //有害
// rubbishPointsList_tou = [new BMapGL.Point(121.054953, 31.316593), new BMapGL.Point(121.05264, 31.320696), new BMapGL.Point(121.061762, 31.313928), new BMapGL.Point(121.052381, 31.318855), new BMapGL.Point(121.02069, 31.348454), new BMapGL.Point(121.008842, 31.345061), new BMapGL.Point(121.011829, 31.347066), new BMapGL.Point(121.001539, 31.3434), new BMapGL.Point(121.003542, 31.342228), new BMapGL.Point(121.01069, 31.34783), new BMapGL.Point(121.00737, 31.343482), new BMapGL.Point(121.034926, 31.327988), new BMapGL.Point(121.059157, 31.319193), new BMapGL.Point(121.058766, 31.319043), new BMapGL.Point(121.05952, 31.318692), new BMapGL.Point(121.059642, 31.319242), new BMapGL.Point(121.05217, 31.32363), new BMapGL.Point(121.052049, 31.324799), new BMapGL.Point(121.052651, 31.32503), new BMapGL.Point(121.05292, 31.326048), new BMapGL.Point(121.061301, 31.317276), new BMapGL.Point(121.061364, 31.317303), new BMapGL.Point(121.059604, 31.346823), new BMapGL.Point(121.054304, 31.347725), new BMapGL.Point(121.037867, 31.3129), new BMapGL.Point(121.043599, 31.312984), new BMapGL.Point(121.041631, 31.315499), new BMapGL.Point(121.035186, 31.321804), new BMapGL.Point(121.037472, 31.323713), new BMapGL.Point(121.0412, 31.323748), new BMapGL.Point(121.054767, 31.324618), new BMapGL.Point(121.054331, 31.324683), new BMapGL.Point(121.062275, 31.319798), new BMapGL.Point(121.060851, 31.320607), new BMapGL.Point(121.074707, 31.342203), new BMapGL.Point(121.04433, 31.323185), new BMapGL.Point(121.04618, 31.320544), new BMapGL.Point(121.047326, 31.324138), new BMapGL.Point(121.048056, 31.32053), new BMapGL.Point(121.0456, 31.326294), new BMapGL.Point(121.044558, 31.319886), new BMapGL.Point(121.040749, 31.328244), new BMapGL.Point(121.048931, 31.32261), new BMapGL.Point(121.035675, 31.316789), new BMapGL.Point(121.034673, 31.312138), new BMapGL.Point(121.03421, 31.310345), new BMapGL.Point(121.035993, 31.31847), new BMapGL.Point(121.033205, 31.316693), new BMapGL.Point(121.039543, 31.318652)];
// dic_rubbishPointsList_tou[5] = rubbishPointsList_tou;
// //有害
// //厨余
// rubbishPointsList_tou = [new BMapGL.Point(121.033352, 31.324835), new BMapGL.Point(121.034618, 31.32485), new BMapGL.Point(121.032884, 31.323936), new BMapGL.Point(121.035296, 31.323693), new BMapGL.Point(121.05489, 31.316975), new BMapGL.Point(121.052527, 31.320758), new BMapGL.Point(121.060665, 31.315587), new BMapGL.Point(121.061464, 31.314542), new BMapGL.Point(121.053097, 31.317723), new BMapGL.Point(121.020062, 31.348843), new BMapGL.Point(121.02069, 31.348454), new BMapGL.Point(121.019981, 31.347914), new BMapGL.Point(121.009682, 31.345069), new BMapGL.Point(121.012382, 31.347062), new BMapGL.Point(121.000623, 31.343407), new BMapGL.Point(121.001907, 31.343323), new BMapGL.Point(121.002455, 31.342644), new BMapGL.Point(121.004072, 31.342814), new BMapGL.Point(121.004396, 31.342174), new BMapGL.Point(121.00524, 31.342644), new BMapGL.Point(121.00515, 31.343716), new BMapGL.Point(121.010375, 31.347587), new BMapGL.Point(121.007339, 31.342803), new BMapGL.Point(121.00667, 31.342136), new BMapGL.Point(121.008013, 0), new BMapGL.Point(121.033799, 31.328419), new BMapGL.Point(121.033853, 31.328018), new BMapGL.Point(121.034535, 31.327297), new BMapGL.Point(121.034028, 31.326904), new BMapGL.Point(121.034464, 31.325605), new BMapGL.Point(121.058766, 31.319043), new BMapGL.Point(121.05952, 31.318692), new BMapGL.Point(121.05217, 31.32363), new BMapGL.Point(121.052049, 31.324799), new BMapGL.Point(121.05292, 31.326048), new BMapGL.Point(121.061301, 31.317276), new BMapGL.Point(121.057677, 31.347736), new BMapGL.Point(121.057538, 31.34678), new BMapGL.Point(121.059123, 31.347466), new BMapGL.Point(121.058683, 31.346387), new BMapGL.Point(121.054322, 31.347092), new BMapGL.Point(121.05443, 31.348083), new BMapGL.Point(121.052202, 31.347559), new BMapGL.Point(121.051223, 31.348176), new BMapGL.Point(121.039713, 31.31192), new BMapGL.Point(121.042045, 31.31192), new BMapGL.Point(121.042045, 31.31192), new BMapGL.Point(121.040733, 31.312475), new BMapGL.Point(121.042144, 31.312419), new BMapGL.Point(121.043482, 31.312699), new BMapGL.Point(121.042727, 31.313085), new BMapGL.Point(121.04164, 31.314249), new BMapGL.Point(121.042889, 31.31391), new BMapGL.Point(121.040679, 31.315013), new BMapGL.Point(121.042682, 31.315445), new BMapGL.Point(121.034337, 31.321322), new BMapGL.Point(121.036192, 31.321102), new BMapGL.Point(121.036192, 31.321102), new BMapGL.Point(121.038029, 31.324434), new BMapGL.Point(121.038622, 31.324534), new BMapGL.Point(121.039588, 31.324723), new BMapGL.Point(121.041304, 31.323755), new BMapGL.Point(121.054767, 31.324618), new BMapGL.Point(121.062275, 31.319798), new BMapGL.Point(121.073982, 31.340045), new BMapGL.Point(121.072499, 31.33991), new BMapGL.Point(121.071129, 31.340385), new BMapGL.Point(121.071125, 31.341372), new BMapGL.Point(121.072818, 31.341055), new BMapGL.Point(121.074835, 31.340774), new BMapGL.Point(121.071691, 31.342362), new BMapGL.Point(121.073016, 31.341931), new BMapGL.Point(121.074655, 31.341422), new BMapGL.Point(121.072996, 31.343507), new BMapGL.Point(121.075287, 31.343699), new BMapGL.Point(121.076378, 31.343094), new BMapGL.Point(121.074743, 31.342412), new BMapGL.Point(121.04437, 31.32494), new BMapGL.Point(121.043405, 31.324323), new BMapGL.Point(121.042888, 31.323609), new BMapGL.Point(121.044433, 31.323135), new BMapGL.Point(121.044523, 31.322025), new BMapGL.Point(121.045803, 31.322109), new BMapGL.Point(121.044846, 31.321369), new BMapGL.Point(121.043544, 31.320748), new BMapGL.Point(121.045637, 31.321442), new BMapGL.Point(121.046077, 31.32504), new BMapGL.Point(121.04676, 31.323714), new BMapGL.Point(121.048083, 31.320441), new BMapGL.Point(121.045375, 31.326734), new BMapGL.Point(121.044387, 31.320333), new BMapGL.Point(121.041184, 31.329922), new BMapGL.Point(121.042783, 31.329355), new BMapGL.Point(121.040583, 31.328896), new BMapGL.Point(121.041616, 31.328302), new BMapGL.Point(121.048989, 31.322572), new BMapGL.Point(121.034471, 31.316496), new BMapGL.Point(121.037013, 31.317136), new BMapGL.Point(121.034821, 31.315755), new BMapGL.Point(121.037417, 31.316442), new BMapGL.Point(121.036016, 31.315478), new BMapGL.Point(121.03505, 31.314922), new BMapGL.Point(121.031789, 31.313118), new BMapGL.Point(121.031012, 31.312747), new BMapGL.Point(121.034682, 31.312289), new BMapGL.Point(121.032845, 31.312096), new BMapGL.Point(121.032566, 31.311718), new BMapGL.Point(121.032521, 31.310484), new BMapGL.Point(121.032724, 31.309928), new BMapGL.Point(121.034107, 31.310696), new BMapGL.Point(121.035544, 31.319685), new BMapGL.Point(121.036092, 31.318088), new BMapGL.Point(121.030564, 31.316608), new BMapGL.Point(121.033322, 31.316107), new BMapGL.Point(121.030663, 31.315956), new BMapGL.Point(121.031894, 31.31478), new BMapGL.Point(121.030932, 31.314796), new BMapGL.Point(121.033353, 31.314105), new BMapGL.Point(121.038204, 31.319516)];
// dic_rubbishPointsList_tou[6] = rubbishPointsList_tou;
// //厨余


//添加投投放点
export function addPoints_tou(tag, map) {
  console.log(tag)
  var xOffset = 0;
  var yOffset = -25;
  if (tag == -1) {
    // for (let key in dic_rubbishPointsList_tou[0]) {
    //     addSinglePoint_tou(dic_rubbishPointsList_tou[0][key], '投放点', xOffset, yOffset, '../../../static/image/icon/_toufangdian/1.png', map);
    // }
    console.log(dic_rubbishPointsList_tou[7])
    for (let key in dic_rubbishPointsList_tou[7]) {

      if (dic_rubbishPointsList_tou[7][key].latitude == "" || dic_rubbishPointsList_tou[7][key].longitude == "") {

      } else {
        if (dic_rubbishPointsList_tou[7][key].type == 2) netaddSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[7][key].longitude, dic_rubbishPointsList_tou[7][key].latitude), "宣传栏", xOffset, yOffset, dic_rubbishPointsList_tou[7][key].boardLogo, map, dic_rubbishPointsList_tou[7][key]);
        else netaddSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[7][key].longitude, dic_rubbishPointsList_tou[7][key].latitude), dic_rubbishPointsList_tou[7][key].putPointTypeName, xOffset, yOffset, dic_rubbishPointsList_tou[7][key].putPointTypeLogo, map, dic_rubbishPointsList_tou[7][key]);
      }
    }

    // for (let key in dic_rubbishPointsList_tou[2]) {
    //     addSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[2][key].longitude, dic_rubbishPointsList_tou[2][key].latitude), dic_rubbishPointsList_tou[2][key].putPointTypeName, xOffset, yOffset, '../../../static/image/icon/_toufangdian/菱形-绿化.png', map, dic_rubbishPointsList_tou[2][key]);
    // }
    // for (let key in dic_rubbishPointsList_tou[3]) {
    //     addSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[3][key].longitude, dic_rubbishPointsList_tou[3][key].latitude), dic_rubbishPointsList_tou[3][key].putPointTypeName, xOffset, yOffset, '../../../static/image/icon/_toufangdian/菱形-大件.png', map, dic_rubbishPointsList_tou[3][key]);
    // }
    // for (let key in dic_rubbishPointsList_tou[4]) {
    //     addSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[4][key].longitude, dic_rubbishPointsList_tou[4][key].latitude), dic_rubbishPointsList_tou[4][key].putPointTypeName, xOffset, yOffset, '../../../static/image/icon/_toufangdian/5.png', map, dic_rubbishPointsList_tou[4][key]);
    // }
    // for (let key in dic_rubbishPointsList_tou[5]) {
    //     addSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[5][key].longitude, dic_rubbishPointsList_tou[5][key].latitude), dic_rubbishPointsList_tou[5][key].putPointTypeName, xOffset, yOffset, '../../../static/image/icon/_toufangdian/4.png', map, dic_rubbishPointsList_tou[5][key]);
    // }
    // for (let key in dic_rubbishPointsList_tou[6]) {
    //     addSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[6][key].longitude, dic_rubbishPointsList_tou[6][key].latitude), dic_rubbishPointsList_tou[6][key].putPointTypeName, xOffset, yOffset, '../../../static/image/icon/_toufangdian/1.png', map, dic_rubbishPointsList_tou[6][key]);
    // }
    // for (let key in dic_rubbishPointsList_tou[0]) {
    //     addSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[0][key].longitude, dic_rubbishPointsList_tou[0][key].latitude), dic_rubbishPointsList_tou[0][key].putPointTypeName, xOffset, yOffset, '../../../static/image/icon/_toufangdian/3.png', map, dic_rubbishPointsList_tou[0][key]);
    // }
  }
  else if (tag == 0) {
    // for (let key in dic_rubbishPointsList_tou[1]) {
    //     console.log(key)
    //     addSinglePoint_tou(dic_rubbishPointsList_tou[1][key], '建筑垃圾投放点', xOffset, yOffset, '../../../static/image/icon/_toufangdian/菱形-建筑.png', map);
    // }
    console.log(dic_rubbishPointsList_tou[1])
    for (let key in dic_rubbishPointsList_tou[1]) {
      netaddSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[1][key].longitude, dic_rubbishPointsList_tou[1][key].latitude), dic_rubbishPointsList_tou[1][key].putPointTypeName, xOffset, yOffset, dic_rubbishPointsList_tou[1][key].putPointTypeLogo, map, dic_rubbishPointsList_tou[1][key]);
    }
  }
  else if (tag == 1) {
    // for (let key in dic_rubbishPointsList_tou[2]) {
    //     addSinglePoint_tou(dic_rubbishPointsList_tou[2][key], '绿化垃圾投放点', xOffset, yOffset, '../../../static/image/icon/_toufangdian/菱形-绿化.png', map);
    // }
    console.log(dic_rubbishPointsList_tou[2])
    for (let key in dic_rubbishPointsList_tou[2]) {
      netaddSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[2][key].longitude, dic_rubbishPointsList_tou[2][key].latitude), dic_rubbishPointsList_tou[2][key].putPointTypeName, xOffset, yOffset, dic_rubbishPointsList_tou[2][key].putPointTypeLogo, map, dic_rubbishPointsList_tou[2][key]);
    }
  }
  else if (tag == 2) {
    // for (let key in dic_rubbishPointsList_tou[3]) {

    //     addSinglePoint_tou(dic_rubbishPointsList_tou[3][key], '大件垃圾投放点', xOffset, yOffset, '../../../static/image/icon/_toufangdian/菱形-大件.png', map);
    // }
    for (let key in dic_rubbishPointsList_tou[3]) {
      netaddSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[3][key].longitude, dic_rubbishPointsList_tou[3][key].latitude), dic_rubbishPointsList_tou[3][key].putPointTypeName, xOffset, yOffset, dic_rubbishPointsList_tou[3][key].putPointTypeLogo, map, dic_rubbishPointsList_tou[3][key]);
    }
  }
  else if (tag == 3) {
    // for (let key in dic_rubbishPointsList_tou[5]) {
    //     addSinglePoint_tou(dic_rubbishPointsList_tou[5][key], '再生资源投放点', xOffset, yOffset, '../../../static/image/icon/_toufangdian/4.png', map);
    // }
    for (let key in dic_rubbishPointsList_tou[5]) {
      netaddSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[5][key].longitude, dic_rubbishPointsList_tou[5][key].latitude), dic_rubbishPointsList_tou[5][key].putPointTypeName, xOffset, yOffset, dic_rubbishPointsList_tou[5][key].putPointTypeLogo, map, dic_rubbishPointsList_tou[5][key]);
    }
  }
  else if (tag == 4) {
    // for (let key in dic_rubbishPointsList_tou[4]) {
    //     addSinglePoint_tou(dic_rubbishPointsList_tou[4][key], '有害垃圾投放点', xOffset, yOffset, '../../../static/image/icon/_toufangdian/5.png', map);
    // }
    for (let key in dic_rubbishPointsList_tou[4]) {
      netaddSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[4][key].longitude, dic_rubbishPointsList_tou[4][key].latitude), dic_rubbishPointsList_tou[4][key].putPointTypeName, xOffset, yOffset, dic_rubbishPointsList_tou[4][key].putPointTypeLogo, map, dic_rubbishPointsList_tou[4][key]);
    }
  }
  else if (tag == 5) {
    // for (let key in dic_rubbishPointsList_tou[6]) {
    //     addSinglePoint_tou(dic_rubbishPointsList_tou[6][key], '厨余垃圾投放点', xOffset, yOffset, './static/image/icon/_toufangdian/1.png', map);
    // }
    for (let key in dic_rubbishPointsList_tou[6]) {
      netaddSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[6][key].longitude, dic_rubbishPointsList_tou[6][key].latitude), dic_rubbishPointsList_tou[6][key].putPointTypeName, xOffset, yOffset, dic_rubbishPointsList_tou[6][key].putPointTypeLogo, map, dic_rubbishPointsList_tou[6][key]);
    }
  }
  else if (tag == 6) {
    // for (let key in dic_rubbishPointsList_tou[0]) {
    //     addSinglePoint_tou(dic_rubbishPointsList_tou[0][key], '其他垃圾投放点', xOffset, yOffset, '../../../static/image/icon/_toufangdian/3.png', map);
    // }
    for (let key in dic_rubbishPointsList_tou[0]) {
      netaddSinglePoint_tou(new BMapGL.Point(dic_rubbishPointsList_tou[0][key].longitude, dic_rubbishPointsList_tou[0][key].latitude), dic_rubbishPointsList_tou[6][key].putPointTypeName, xOffset, yOffset, dic_rubbishPointsList_tou[0][key].putPointTypeLogo, map, dic_rubbishPointsList_tou[0][key]);
    }
  }
  else {
    console.log("传入tag报错")
    console.log(tag)
  }

  // for (let key in dic_rubbishPointsList_tou[0]) {
  //     addSinglePoint_tou(dic_rubbishPointsList_tou[0][key], '投放点', xOffset, yOffset, '../../../static/image/icon/_toufangdian/1.png', map);
  // }

  // let length = dic_rubbishPointsList_tou.length;
  // console.log(dic_rubbishPointsList_tou)
  // for (let i = 0; i < length; i++) {
  //     console.log('投放点没牌面?')
  //     addSinglePoint_tou(dic_rubbishPointsList_tou[i], '投放点' + (i + 1), xOffset, yOffset, "./static/image/icon/_toufangdian/3.png", map);
  // }



}

export function netaddSinglePoint_tou(point, labelText, xOffset, yOffset, icon, map, data) {

  var size = new BMapGL.Size(30, 30);
  var Icon = new BMapGL.Icon(icon, size);
  if (labelText == "普通投放点") {
    console.log(icon)
  }

  // Icon.setImageSize(size);

  // Icon.setImageUrl(icon);
  var marker = new BMapGL.Marker(point, { icon: Icon });
  //marker.setAnimation(BMAP_ANIMATION_BOUNCE);//跳动效果
  //更改名称
  var label = new BMapGL.Label(data.cellName+data.putPointTypeName + "(" + data.cameraInfos.length + ")", {
    offset: new BMapGL.Size(xOffset, yOffset), styles: {
      position: 'absolute',
      display: 'inline',
      cursor: 'inherit',
      'background-color': 'rgb(255, 255, 255)',
      border: ' 1px solid rgb(255, 0, 0)',
      padding: '1px', 'white-space': 'nowrap', 'font-size': ' 12px',
      'z-index': '-6265208', transform: ' translateX(-50%) translateY(-50%)', 'user-select': 'none'
    }
  });

  label.setStyle({
    transform: 'translateX(-50%) translateY(-50%)',//label相对坐标点自动居中显示
  })

  marker.setLabel(label);
  map.addOverlay(marker);
  marker.addEventListener("click", function () {
    showPop("投放点", data);
  });
  ponitsArray_tou.push(marker);

}


export function addSinglePoint_tou(point, labelText, xOffset, yOffset, icon, map, data) {

  var size = new BMapGL.Size(30, 30);
  var icon = new BMapGL.Icon(icon, size);
  icon.setImageSize(size);

  var marker = new BMapGL.Marker(point, { icon: icon });
  //marker.setAnimation(BMAP_ANIMATION_BOUNCE);//跳动效果
  var label = new BMapGL.Label(labelText, { offset: new BMapGL.Size(xOffset, yOffset) });

  // label.setStyle({
  //     transform: 'translateX(-50%)'//label相对坐标点自动居中显示
  // })
  marker.setLabel(label);
  map.addOverlay(marker);
  marker.addEventListener("click", function () {
    showPop("投放点", data);
  });
  ponitsArray_tou.push(marker);

}

//隐藏垃圾投放点
export function removePoints_tou(map) {
  for (var i = 0; i < ponitsArray_tou.length; i++) {
    map.removeOverlay(ponitsArray_tou[i]);
  }
}
export function allplot() {
  return dic_rubbishPointsList_tou
}
//#endregion 投放点标记

//#region 处理厂标记
var ponitsArray_chu = [];
//处理厂坐标列表
var rubbishPointsList_chu = [];

rubbishPointsList_chu[0] = {
  "陆家镇建筑垃圾资源化处理中心": new BMapGL.Point(121.046689, 31.345716),//大件垃圾-陆家镇建筑垃圾资源化处理中心
};
rubbishPointsList_chu[1] = {
  "陆家镇绿化垃圾木材处置中心": new BMapGL.Point(121.03788, 31.330641),//陆家镇绿化垃圾木材处置中心
};
rubbishPointsList_chu[2] = {};
rubbishPointsList_chu[3] = {
  "陆家镇再生资源分拣中心": new BMapGL.Point(121.033426, 31.330117),//昆山市陆家镇再生资源分拣中心
  "陆家镇再生资源分拣中心2": new BMapGL.Point(121.071294, 31.320066)//陆家镇再生资源分拣中心
};
rubbishPointsList_chu[4] = {
  "陆家镇有害垃圾暂存点": new BMapGL.Point(121.071527, 31.320089),//陆家镇有害垃圾暂存点
};
rubbishPointsList_chu[5] = {
  "陆家镇厨余垃圾处置中心": new BMapGL.Point(121.071173, 31.319529),//陆家镇易腐垃圾处置中心
};
rubbishPointsList_chu[6] = {
  "南圩路垃圾压缩站": new BMapGL.Point(121.036517, 31.310375),//南圩路垃圾压缩站
  "光夏路垃圾压缩站": new BMapGL.Point(121.037077, 31.322969),//光夏路垃圾压缩站
  "唐板桥路垃圾压缩站": new BMapGL.Point(121.060942, 31.313266),//唐板桥路垃圾压缩站
  "夏桥建筑垃圾场": new BMapGL.Point(121.046906, 31.347923),//夏桥垃圾压缩站
  "珠竹路垃圾压缩站": new BMapGL.Point(121.00842, 31.342617),//珠竹路垃圾压缩站
};

/**
 *   { name: "陆家镇建筑垃圾资源化处理中心" },
  { name: "陆家镇绿化垃圾木材处置中心" },
  { name: "陆家镇再生资源分拣中心" },
  { name: "陆家镇再生资源分拣中心2" },
  { name: "陆家镇有害垃圾暂存点" },
  { name: "陆家镇厨余垃圾处置中心" },
  { name: "南圩路垃圾压缩站" },
  { name: "光夏路垃圾压缩站" },
  { name: "唐板桥路垃圾压缩站" },
  { name: "夏桥建筑垃圾场" },
  { name: "珠竹路垃圾压缩站" },
 */
var rubbishPointsList_data = []
rubbishPointsList_data[0] = [
  { name: "陆家镇建筑垃圾资源化处理中心" },
  { name: "夏桥建筑垃圾场" }
]
rubbishPointsList_data[1] = [
  { name: "陆家镇绿化垃圾木材处置中心" }
]
rubbishPointsList_data[2] = []
rubbishPointsList_data[3] = [
  { name: "陆家镇再生资源分拣中心" },
  { name: "陆家镇再生资源分拣中心2" }
]
rubbishPointsList_data[4] = [
  { name: "陆家镇有害垃圾暂存点" },
]
rubbishPointsList_data[5] = [
  { name: "陆家镇厨余垃圾处置中心" }
]
rubbishPointsList_data[6] = [
  { name: "南圩路垃圾压缩站" },
  { name: "光夏路垃圾压缩站" },
  { name: "唐板桥路垃圾压缩站" },
  { name: "珠竹路垃圾压缩站" }
]



var imageArray_chu = [
  "../../../static/image/icon/_chuzhidian/易腐垃圾.png",
  "../../../static/image/icon/_chuzhidian/处置终端-建筑垃圾堆放场.png",
  "../../../static/image/icon/_chuzhidian/处置终端-建筑垃圾堆放场.png",
  "../../../static/image/icon/_chuzhidian/绿化垃圾处理厂.png",
  "../../../static/image/icon/_chuzhidian/再生资源回收中心.png",
  "../../../static/image/icon/_chuzhidian/再生资源回收中心.png",
  "../../../static/image/icon/_chuzhidian/有害垃圾.png",
  "../../../static/image/icon/_chuzhidian/垃圾压缩站.png",
  "../../../static/image/icon/_chuzhidian/垃圾压缩站.png",
  "../../../static/image/icon/_chuzhidian/垃圾压缩站.png",
  "../../../static/image/icon/_chuzhidian/垃圾压缩站.png"
];
/**
 * 陆家镇厨余垃圾处置中心
 * 夏桥建筑垃圾场
 * 陆家镇建筑垃圾资源化处理中心
 * 陆家镇绿化垃圾木材处置中心
 * 陆家镇再生资源分拣中心
 * 陆家镇再生资源分拣中心2
 * 陆家镇有害垃圾暂存点
 * 南圩路垃圾压缩站
 * 光夏路垃圾压缩站
 * 唐板桥路垃圾压缩站
 * 珠竹路垃圾压缩站
 */

//处理厂标签
var labelTextList = [];
//添加处理厂



export function addPoints_chu(tag, map) {

  var xOffset = -70;
  var yOffset = -25;
  // if (tag != '-1') {
  //   tag = parseInt(tag)
  //   for (var key2 in rubbishPointsList_chu[tag]) {
  //     addSinglePoint_chu(rubbishPointsList_chu[tag][key2], key2, xOffset, yOffset, imageArray_chu[tag], map);
  //   }
  // }
  // else {
  //   for (var key in rubbishPointsList_chu) {
  //     for (var key2 in rubbishPointsList_chu[key]) {
  //       addSinglePoint_chu(rubbishPointsList_chu[key][key2], key2, xOffset, yOffset, imageArray_chu[key], map);
  //     }
  //   }
  // }
  $.ajax({
    url: cameraUrl + "/api2/main/dealPoints",
    type: "get",
    async: false,
    headers: {      //请求头
      Accept: "application/json; charset=utf-8",
    },
    success: function (res) {
      if (tag == "-1") {
        for (let key in res) {
          addSinglePoint_chu(new BMapGL.Point(res[key].longitude, res[key].latitude), res[key].name, xOffset, yOffset, imageArray_chu[key], map, res[key]);
        }
      } else {
        for (let ke in rubbishPointsList_data[parseInt(tag)]) {
          for (let key in res) {
            if (rubbishPointsList_data[parseInt(tag)][ke].name == res[key].name) {
              addSinglePoint_chu(new BMapGL.Point(res[key].longitude, res[key].latitude), res[key].name, xOffset, yOffset, imageArray_chu[key], map, res[key]);
            }
          }
        }
      }
    }
  });
}
export function addSinglePoint_chu(point, labelText, xOffset, yOffset, iconimg, map, data) {
  console.log(point, labelText, xOffset, yOffset, iconimg, map, data);

  var size = new BMapGL.Size(30, 30);
  var icon = new BMapGL.Icon(iconimg, size);
  icon.setImageSize(size);
  var marker = new BMapGL.Marker(point, { icon: icon });
  //marker.setAnimation(BMAP_ANIMATION_BOUNCE);//跳动效果
  var label = new BMapGL.Label(labelText, { offset: new BMapGL.Size(xOffset, yOffset) });
  // label.setStyle({
  //     transform: 'translateX(-50%)'//label相对坐标点自动居中显示
  // })
  marker.setLabel(label);
  map.addOverlay(marker);

  marker.addEventListener("click", function () {
    showPop("处理厂", data);
  });

  ponitsArray_chu.push(marker);
}
//隐藏垃圾投放点
export function removePoints_chu(map) {
  for (var i = 0; i < ponitsArray_chu.length; i++) {
    map.removeOverlay(ponitsArray_chu[i]);
  }
}
//#endregion 处理厂标记
//显示小区信息的弹窗

import EZUIKit from "./ezuikit.js"
var decoder;
var decoders;
var huifangdata;
var camerapage = {
  start: 0,
  end: 3
}

export function start1() {
  $("#huifang").css("display", 'block');
  (function (huifangdata) {
    let str = ""
    for (let i = 0; i < huifangdata.cameraInfos.length; i++) {
      str += `<option style="padding:5px 0;">` + huifangdata.cameraInfos[i].channelName + `</option>`;
    }
    $("#huifang #cont #selhuif").html(str)
    document.getElementById("startlook").addEventListener("click", () => {
      var xiaoquxinxi = {}
      for (let i = 0; i < huifangdata.cameraInfos.length; i++) {
        if (huifangdata.cameraInfos[i].channelName == document.getElementById("selhuif").value) {
          xiaoquxinxi = huifangdata.cameraInfos[i]
        }
      }

      var a, b;
      if (document.getElementById("starttime").value == "" || document.getElementById("endtime").value == "") {
      } else {
        var reg = new RegExp("-", "g");//去掉时间里面的-
        a = document.getElementById("starttime").value.replace(reg, "");
        b = document.getElementById("endtime").value.replace(reg, "");
        if (b < a) {
        } else {
          var data = [{
            begin: a + "000000",
            channelNo: xiaoquxinxi.channelNo,
            deviceSerial: xiaoquxinxi.deviceSerial,
            end: b + "000000",
            accountId: xiaoquxinxi.ysAccountId
          }]
          var jsondata = JSON.stringify(data)
          $.ajax({
            url: cameraUrl + "api2/CameraInfo/rec",
            type: "post",
            async: false,
            data: jsondata,
            headers: {      //请求头
              "Content-type": "application/json; charset=utf-8",
            }, success(res) {
              stopCamera().then(() => {
                $("#playWind").html("<div></div>")
                $("#playvideo").html("<div></div>")
                var url = res[0].recUrl;
                var token = res[0].token;
                function handleError(e) {
                  console.log('捕获到错误', e)
                }
                function handleSuccess() {
                  console.log("播放成功回调函数，此处可执行播放成功后续动作");
                }
                // var url = "ezopen://open.ys7.com/F56178875/1.rec?begin=20210427000000&end=20210627000000";
                // var token ="at.2voea6gc3sujnd7b4f6zftns0mxrkvw8-5mmgn64zs5-0kod6fw-cyqtghjnh";
                decoders = new EZUIKit.EZUIPlayer({
                  id: 'huifvideo',
                  autoplay: true,
                  url,
                  accessToken: token,
                  decoderPath: './static/js',
                  width: 640,
                  height: 400,
                  handleError: handleError,
                  handleSuccess: handleSuccess,
                });
                decoders.on('log', log);
                function log(str, className) {
                  var s = (new Date()).Format('yyyy-MM-dd hh:mm:ss.S') + JSON.stringify(str);
                  console.log(s);
                }
              })

            }
          })
        }
      }
    })
  })(huifangdata)
}
export async function start2(num) {
  camerapage.start = await num * 4 - 1 - 3;
  camerapage.end = await num * 4 - 1;
  stopCamera().then(() => {
    $("#playWind").html("<div></div>")
    $("#playvideo").html("<div></div>")
    cameraInit(linshicamera)
  })
}
export async function start22(num) {

  // $("#playWind").html("<div></div>")
  // $("#playvideo").html("<div></div>")
  camerapage.start = await num * 4 - 1 - 3;
  camerapage.end = await num * 4 - 1;
  stopCamera().then(() => {
    cameraInit3(statuscamera)
  })
}
export async function start3(num) {

  camerapage.start = await num * 4 - 4;
  camerapage.end = await num * 4 - 1;
  if (camerapage.start > statuscamera.cameraInfos.length - 1) {
    start2(1)
  }
  if (camerapage.start <= statuscamera.cameraInfos.length - 1) {
    stopCamera().then(() => {
      $("#playWind").html("<div></div>")
      $("#playvideo").html("<div></div>")
      cameraInit(linshicamera)
    })
  }
}
export async function start32(num) {

  camerapage.start = await num * 4 - 4;
  camerapage.end = await num * 4 - 1;

  if (camerapage.start > statuscamera.cameraInfoDtos.length - 1) {
    start22(1)
  }
  if (camerapage.start <= statuscamera.cameraInfoDtos.length - 1) {
    stopCamera().then(() => {
      $("#playWind").html("<div></div>")
      $("#playvideo").html("<div></div>")
      cameraInit3(statuscamera)
    })
  }
}
//测试播放
// setTimeout(() => {
//   (function(){
//     function handleError(e) {
//       console.log('捕获到错误', e)
//     }
//     function handleSuccess() {
//       console.log("播放成功回调函数，此处可执行播放成功后续动作");
//     }
//     var url = "ezopen://open.ys7.com/F56178875/1.rec?begin=20210427000000&end=20210527000000";
//     var accessToken ="at.98jzcjl8776gmro72vy4aaco3rej00hk-7slug1oxsn-103jfrj-jgddbijaa";
//     decoders = new EZUIKit.EZUIPlayer({
//       id: 'huifvideo',
//       autoplay: true,
//       url,
//       accessToken,
//       decoderPath: './static/js',
//       width: 640,
//       height: 400,
//       margin: '0 auto',
//       handleError: handleError,
//       handleSuccess: handleSuccess,
//     });
//     decoders.on('log', log);
//     function log(str, className) {
//       var s = (new Date()).Format('yyyy-MM-dd hh:mm:ss.S') + JSON.stringify(str);
//       console.log(s);
//     }
//   })()
// }, 500);
var camerapagenum = 1;
var linshicamera = null;
var statuscamera = null;
function cameraInit(cameraInfo) {
  //监控摄像头
  var newlookInfo;
  //"摄像机点击事件触发"0
  $.ajax({
    url: cameraUrl + "api2/CameraInfo/list?page=0&size=500",
    type: "get",
    async: false,
    headers: {      //请求头
      Accept: "application/json; charset=utf-8",
    }, success(res) {
      console.log(res);
      for (let i = 0; i < res.length; i++) {
        if (cameraInfo.areaId == res[i].areaId) {
          newlookInfo = res[i];
          statuscamera = res[i];
          if (newlookInfo.cameraInfos.length > 4) {
            $("#previouspage").css("display", "block")
            $("#nextpage").css("display", "block")
          }
        }
      }
    }
  })
  //因为token会过期,所以再次请求摄像头信息接口
  var url = '';//播放地址
  var accessToken = "";  //token
  /**
   * cameraInfo.cameraType==1是萤石云的
   * cameraInfo.cameraType==2是HLS的
   * newlookInfo.areaType==1是处理厂
   */
  if (cameraInfo.cameraType == 1) {
    huifangdata = newlookInfo
  }
  if (cameraInfo.cameraType == 1) {
    function handleError(e) {
      console.log('捕获到错误', e)
    }
    function handleSuccess() {
      console.log("播放成功回调函数，此处可执行播放成功后续动作");
    }
    //萤石云摄像
    if (newlookInfo.areaType == 1) {
      //newlookInfo.areaType,处置点摄像头
      for (let index = 0; index < newlookInfo.cameraInfos.length; index++) {
        if (newlookInfo.cameraInfos[index].status == 1) {
          if (camerapage.start >= newlookInfo.cameraInfos.length) {
            camerapage.start = newlookInfo.cameraInfos.length - 4;
            camerapage.end = camerapage.start + 3
            if (index >= camerapage.start && index <= camerapage.end) {
              url += newlookInfo.cameraInfos[index].viewUrl;
              url += ","
            }
          } else {
            if (index >= camerapage.start && index <= camerapage.end) {
              url += newlookInfo.cameraInfos[index].viewUrl;
              url += ","
            }
          }
        }
      }
      url = url.substring(0, url.length - 1)
      accessToken = newlookInfo.token;
      console.log(accessToken);
      console.log(url);
      //处置点 分屏展示
      decoder = new EZUIKit.EZUIPlayer({
        id: 'playWind',
        autoplay: true,
        url,
        accessToken,
        decoderPath: './static/js',
        width: 640,
        height: 400,
        splitBasis: 2, // 1*1 2*2 3*3 4*4
      });
    } else {
      url = cameraInfo.viewUrl;
      accessToken = newlookInfo.token
      decoder = new EZUIKit.EZUIPlayer({
        id: 'playWind',
        autoplay: true,
        url,
        accessToken,
        decoderPath: './static/js',
        width: 640,
        height: 400
      });
    }
    //萤石云打印日志
    // 这里是打印日志，本例抛出到播放页面
    decoder.on('log', log);
    function log(str, className) {
      var s = (new Date()).Format('yyyy-MM-dd hh:mm:ss.S') + JSON.stringify(str);
      console.log(s);
    }
  }
  else if (cameraInfo.cameraType == 2) {
    if (newlookInfo.cameraInfos.length > 1) {
      // newlookInfo.cameraInfoDtos[0].viewUrl="http://122.193.19.2:8088/1002-806c5af0-70ce-4954-8436-0e9adb043c9d/index.m3u8"
      // newlookInfo.cameraInfoDtos[1].viewUrl="http://122.193.19.2:8088/1001-806b61ad-a465-4a0d-a6a2-47b5cb33001a/index.m3u8"
      for (let z = 0; z < newlookInfo.cameraInfos.length; z++) {
        let cc = `<div>
        <video id='myvideo` + z + `' class='video-js' controls width='320' height='200'><source id='video-source' src=` + newlookInfo.cameraInfos[z].viewUrl + ` type='application/x-mpegURL'></video>
        </div>`
        $("#playWind" + z).html(cc);
        //设置资源路径
        videojs.addLanguage("zh-CN", {
          Play: "播放",
          Pause: "暂停",
          "Current Time": "当前时间",
          "Stream Type": "媒体流类型",
          LIVE: "直播",
          Loaded: "加载完毕",
          Progress: "进度",
          Fullscreen: "全屏",
          "Non-Fullscreen": "退出全屏",
          Mute: "静音",
          Unmute: "取消静音",
          "Playback Rate": "播放速度",
          Subtitles: "字幕",
          "subtitles off": "关闭字幕",
          Captions: "内嵌字幕",
          "captions off": "关闭内嵌字幕",
          Chapters: "节目段落",
          "Close Modal Dialog": "关闭弹窗",
          Descriptions: "描述",
          "descriptions off": "关闭描述",
          "Audio Track": "音轨",
          "You aborted the media playback": "视频播放被终止",
          "A network error caused the media download to fail part-way.":
            "网络错误导致视频下载中途失败。",
          "The media could not be loaded, either because the server or network failed or because the format is not supported.":
            "视频因格式不支持或者服务器或网络的问题无法加载。",
          "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.":
            "由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。",
          "No compatible source was found for this media.":
            "无法找到此视频兼容的源。",
          "The media is encrypted and we do not have the keys to decrypt it.":
            "视频已加密，无法解密。",
          "Play Video": "播放视频",
          Close: "关闭",
          "Modal Window": "弹窗",
          "This is a modal window": "这是一个弹窗",
          "This modal can be closed by pressing the Escape key or activating the close button.":
            "可以按ESC按键或启用关闭按钮来关闭此弹窗。",
          ", opens captions settings dialog": ", 开启标题设置弹窗",
          ", opens subtitles settings dialog": ", 开启字幕设置弹窗",
          ", opens descriptions settings dialog": ", 开启描述设置弹窗",
          ", selected": ", 选择",
          "captions settings": "字幕设定",
          "Audio Player": "音频播放器",
          "Video Player": "视频播放器",
          Replay: "重播",
          "Progress Bar": "进度小节",
          "Volume Level": "音量",
          "subtitles settings": "字幕设定",
          "descriptions settings": "描述设定",
          Text: "文字",
          White: "白",
          Black: "黑",
          Red: "红",
          Green: "绿",
          Blue: "蓝",
          Yellow: "黄",
          Magenta: "紫红",
          Cyan: "青",
          Background: "背景",
          Window: "视窗",
          Transparent: "透明",
          "Semi-Transparent": "半透明",
          Opaque: "不透明",
          "Font Size": "字体尺寸",
          "Text Edge Style": "字体边缘样式",
          None: "无",
          Raised: "浮雕",
          Depressed: "压低",
          Uniform: "均匀",
          Dropshadow: "下阴影",
          "Font Family": "字体库",
          "Proportional Sans-Serif": "比例无细体",
          "Monospace Sans-Serif": "单间隔无细体",
          "Proportional Serif": "比例细体",
          "Monospace Serif": "单间隔细体",
          Casual: "舒适",
          Script: "手写体",
          "Small Caps": "小型大写字体",
          Reset: "重启",
          "restore all settings to the default values": "恢复全部设定至预设值",
          Done: "完成",
          "Caption Settings Dialog": "字幕设定视窗",
          "Beginning of dialog window. Escape will cancel and close the window.":
            "开始对话视窗。离开会取消及关闭视窗",
          "End of dialog window.": "结束对话视窗"
        })
        var myPlayer = videojs("myvideo" + z);
        videojs("myvideo" + z).ready(function () {
          var myPlay = this;
          myPlay.play();
          this.on("error", function () {
            console.log("加载错误")
            $("#toast").css("display", "block")
            setTimeout(() => {
              $("#toast").css("display", "none")
            }, 5000);
          });
          videotao.push(this)
          // this.on('timeupdate', function () {
          //   //somethings
          //   console.log("真的播放");
          // })
          // this.on("loadstart", function () {
          //   console.log("开始请求数据 ");
          // })
          // this.on("progress", function () {
          //   console.log("正在请求数据 ");
          // })
          // this.on("waiting", function () {
          //   console.log("等待数据")
          // });
        });
      }
    } else {
      //HLS摄像
      let cc = `<div><video id='my-video' class='video-js' style='margin:0 auto;' controls  width='605' height='400'><source id='video-source' headers='zzzzzz' src=` + cameraInfo.viewUrl + ` type='application/x-mpegURL'></video></div>`
      $("#playWind").html(cc);
      //设置资源路径
      videojs.addLanguage("zh-CN", {
        Play: "播放",
        Pause: "暂停",
        "Current Time": "当前时间",
        "Stream Type": "媒体流类型",
        LIVE: "直播",
        Loaded: "加载完毕",
        Progress: "进度",
        Fullscreen: "全屏",
        "Non-Fullscreen": "退出全屏",
        Mute: "静音",
        Unmute: "取消静音",
        "Playback Rate": "播放速度",
        Subtitles: "字幕",
        "subtitles off": "关闭字幕",
        Captions: "内嵌字幕",
        "captions off": "关闭内嵌字幕",
        Chapters: "节目段落",
        "Close Modal Dialog": "关闭弹窗",
        Descriptions: "描述",
        "descriptions off": "关闭描述",
        "Audio Track": "音轨",
        "You aborted the media playback": "视频播放被终止",
        "A network error caused the media download to fail part-way.":
          "网络错误导致视频下载中途失败。",
        "The media could not be loaded, either because the server or network failed or because the format is not supported.":
          "视频因格式不支持或者服务器或网络的问题无法加载。",
        "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.":
          "由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。",
        "No compatible source was found for this media.":
          "无法找到此视频兼容的源。",
        "The media is encrypted and we do not have the keys to decrypt it.":
          "视频已加密，无法解密。",
        "Play Video": "播放视频",
        Close: "关闭",
        "Modal Window": "弹窗",
        "This is a modal window": "这是一个弹窗",
        "This modal can be closed by pressing the Escape key or activating the close button.":
          "可以按ESC按键或启用关闭按钮来关闭此弹窗。",
        ", opens captions settings dialog": ", 开启标题设置弹窗",
        ", opens subtitles settings dialog": ", 开启字幕设置弹窗",
        ", opens descriptions settings dialog": ", 开启描述设置弹窗",
        ", selected": ", 选择",
        "captions settings": "字幕设定",
        "Audio Player": "音频播放器",
        "Video Player": "视频播放器",
        Replay: "重播",
        "Progress Bar": "进度小节",
        "Volume Level": "音量",
        "subtitles settings": "字幕设定",
        "descriptions settings": "描述设定",
        Text: "文字",
        White: "白",
        Black: "黑",
        Red: "红",
        Green: "绿",
        Blue: "蓝",
        Yellow: "黄",
        Magenta: "紫红",
        Cyan: "青",
        Background: "背景",
        Window: "视窗",
        Transparent: "透明",
        "Semi-Transparent": "半透明",
        Opaque: "不透明",
        "Font Size": "字体尺寸",
        "Text Edge Style": "字体边缘样式",
        None: "无",
        Raised: "浮雕",
        Depressed: "压低",
        Uniform: "均匀",
        Dropshadow: "下阴影",
        "Font Family": "字体库",
        "Proportional Sans-Serif": "比例无细体",
        "Monospace Sans-Serif": "单间隔无细体",
        "Proportional Serif": "比例细体",
        "Monospace Serif": "单间隔细体",
        Casual: "舒适",
        Script: "手写体",
        "Small Caps": "小型大写字体",
        Reset: "重启",
        "restore all settings to the default values": "恢复全部设定至预设值",
        Done: "完成",
        "Caption Settings Dialog": "字幕设定视窗",
        "Beginning of dialog window. Escape will cancel and close the window.":
          "开始对话视窗。离开会取消及关闭视窗",
        "End of dialog window.": "结束对话视窗"
      })
      var myPlayer = videojs("my-video");

      videojs("my-video").ready(function () {
        var myPlay = this;
        myPlay.play();
        videotao.push(this)
        this.on("error", function () {
          console.log("加载错误")
          $("#toast").css("display", "block")
          setTimeout(() => {
            $("#toast").css("display", "none")
          }, 5000);
        });
      }
      );
    }
  } else {
    console.log("cameraInfo判断错误")
    console.log(cameraInfo)
  }
}

function cameraInit2(cameraInfo) {
  //投放点监控
  $("#playvideo").html("")
  let newlookInfo;

  $.ajax({
    url: cameraUrl + "api2/CameraInfo/list?page=0&size=500",
    type: "get",
    async: false,
    headers: {      //请求头
      Accept: "application/json; charset=utf-8",
    }, success(res) {
      for (let i = 0; i < res.length; i++) {
        if (cameraInfo.cameraInfos[0].areaId == res[i].areaId) {
          newlookInfo = res[i]
        }
      }
    }
  })

  if (cameraInfo.cameraInfos[0].cameraType == 1) {

    function handleError(e) {
      console.log('捕获到错误', e)
    }
    function handleSuccess() {
      console.log("播放成功回调函数，此处可执行播放成功后续动作");
    }
    //萤石云摄像
    //newlookInfo.areaType,处置点摄像头
    if (newlookInfo.areaType == 1) {
      for (let index = 0; index < newlookInfo.cameraInfos.length; index++) {
        if (newlookInfo.cameraInfos[index].status == 1) {
          url += newlookInfo.cameraInfos[index].viewUrl;
          url += ","
        }
      }
      url = url.substring(0, url.length - 1)
      accessToken = newlookInfo.token
      //处置点 分屏展示
      decoder = new EZUIKit.EZUIPlayer({
        id: 'playWind',
        autoplay: true,
        url,
        accessToken,
        decoderPath: './static/js',
        width: 640,
        height: 400,
        splitBasis: 2, // 1*1 2*2 3*3 4*4
      });
    } else {
      if (cameraInfo.status == 1) {
        url = cameraInfo.cameraInfos[0].viewUrl;
        accessToken = newlookInfo.token
        decoder = new EZUIKit.EZUIPlayer({
          id: 'playWind',
          autoplay: true,
          url,
          accessToken,
          decoderPath: './static/js',
          width: 640,
          height: 400,
          handleError: handleError,
          handleSuccess: handleSuccess,
        });
      }
    }
    //萤石云打印日志
    // 这里是打印日志，本例抛出到播放页面
    decoder.on('log', log);
    function log(str, className) {
      var s = (new Date()).Format('yyyy-MM-dd hh:mm:ss.S') + JSON.stringify(str);
      console.log(s);
    }
  } else if (cameraInfo.cameraInfos[0].cameraType == 2) {
    //HLS摄像

    if (cameraInfo.cameraInfos.length > 1) {
      for (let z = 0; z < cameraInfo.cameraInfos.length; z++) {

        let cc = `<div><video id='myvideo` + z + `' class='video-js' width='320' height='200' controls ><source id='video-source' src=` + cameraInfo.cameraInfos[z].viewUrl + ` type='application/x-mpegURL'></video></div>`
        $("#playvideo" + z).html(cc);
        //设置资源路径
        videojs.addLanguage("zh-CN", {
          Play: "播放",
          Pause: "暂停",
          "Current Time": "当前时间",
          "Stream Type": "媒体流类型",
          LIVE: "直播",
          Loaded: "加载完毕",
          Progress: "进度",
          Fullscreen: "全屏",
          "Non-Fullscreen": "退出全屏",
          Mute: "静音",
          Unmute: "取消静音",
          "Playback Rate": "播放速度",
          Subtitles: "字幕",
          "subtitles off": "关闭字幕",
          Captions: "内嵌字幕",
          "captions off": "关闭内嵌字幕",
          Chapters: "节目段落",
          "Close Modal Dialog": "关闭弹窗",
          Descriptions: "描述",
          "descriptions off": "关闭描述",
          "Audio Track": "音轨",
          "You aborted the media playback": "视频播放被终止",
          "A network error caused the media download to fail part-way.":
            "网络错误导致视频下载中途失败。",
          "The media could not be loaded, either because the server or network failed or because the format is not supported.":
            "视频因格式不支持或者服务器或网络的问题无法加载。",
          "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.":
            "由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。",
          "No compatible source was found for this media.":
            "无法找到此视频兼容的源。",
          "The media is encrypted and we do not have the keys to decrypt it.":
            "视频已加密，无法解密。",
          "Play Video": "播放视频",
          Close: "关闭",
          "Modal Window": "弹窗",
          "This is a modal window": "这是一个弹窗",
          "This modal can be closed by pressing the Escape key or activating the close button.":
            "可以按ESC按键或启用关闭按钮来关闭此弹窗。",
          ", opens captions settings dialog": ", 开启标题设置弹窗",
          ", opens subtitles settings dialog": ", 开启字幕设置弹窗",
          ", opens descriptions settings dialog": ", 开启描述设置弹窗",
          ", selected": ", 选择",
          "captions settings": "字幕设定",
          "Audio Player": "音频播放器",
          "Video Player": "视频播放器",
          Replay: "重播",
          "Progress Bar": "进度小节",
          "Volume Level": "音量",
          "subtitles settings": "字幕设定",
          "descriptions settings": "描述设定",
          Text: "文字",
          White: "白",
          Black: "黑",
          Red: "红",
          Green: "绿",
          Blue: "蓝",
          Yellow: "黄",
          Magenta: "紫红",
          Cyan: "青",
          Background: "背景",
          Window: "视窗",
          Transparent: "透明",
          "Semi-Transparent": "半透明",
          Opaque: "不透明",
          "Font Size": "字体尺寸",
          "Text Edge Style": "字体边缘样式",
          None: "无",
          Raised: "浮雕",
          Depressed: "压低",
          Uniform: "均匀",
          Dropshadow: "下阴影",
          "Font Family": "字体库",
          "Proportional Sans-Serif": "比例无细体",
          "Monospace Sans-Serif": "单间隔无细体",
          "Proportional Serif": "比例细体",
          "Monospace Serif": "单间隔细体",
          Casual: "舒适",
          Script: "手写体",
          "Small Caps": "小型大写字体",
          Reset: "重启",
          "restore all settings to the default values": "恢复全部设定至预设值",
          Done: "完成",
          "Caption Settings Dialog": "字幕设定视窗",
          "Beginning of dialog window. Escape will cancel and close the window.":
            "开始对话视窗。离开会取消及关闭视窗",
          "End of dialog window.": "结束对话视窗"
        })
        setTimeout(() => {

          var myPlayer = videojs("myvideo" + z);
          console.log(myPlayer)
          videojs("myvideo" + z).ready(function () {
            var myPlay = this;
            myPlay.play();
            videotao.push(this)
            this.on("error", function () {
              console.log("加载错误")
              $("#toast").css("display", "block")
              setTimeout(() => {
                $("#toast").css("display", "none")
              }, 5000);
            });
          });
        }, 200);

      }
    } else {
      if (cameraInfo.cameraInfos[0].status == 1) {
        let cc = `<div><video id='myvideo' class='video-js' style='margin:0 auto;' width='605' height='400' controls ><source id='video-source' src=` + cameraInfo.cameraInfos[0].viewUrl + ` type='application/x-mpegURL'></video></div>`
        $("#playvideo").html(cc);
        //设置资源路径
        videojs.addLanguage("zh-CN", {
          Play: "播放",
          Pause: "暂停",
          "Current Time": "当前时间",
          "Stream Type": "媒体流类型",
          LIVE: "直播",
          Loaded: "加载完毕",
          Progress: "进度",
          Fullscreen: "全屏",
          "Non-Fullscreen": "退出全屏",
          Mute: "静音",
          Unmute: "取消静音",
          "Playback Rate": "播放速度",
          Subtitles: "字幕",
          "subtitles off": "关闭字幕",
          Captions: "内嵌字幕",
          "captions off": "关闭内嵌字幕",
          Chapters: "节目段落",
          "Close Modal Dialog": "关闭弹窗",
          Descriptions: "描述",
          "descriptions off": "关闭描述",
          "Audio Track": "音轨",
          "You aborted the media playback": "视频播放被终止",
          "A network error caused the media download to fail part-way.":
            "网络错误导致视频下载中途失败。",
          "The media could not be loaded, either because the server or network failed or because the format is not supported.":
            "视频因格式不支持或者服务器或网络的问题无法加载。",
          "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.":
            "由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。",
          "No compatible source was found for this media.":
            "无法找到此视频兼容的源。",
          "The media is encrypted and we do not have the keys to decrypt it.":
            "视频已加密，无法解密。",
          "Play Video": "播放视频",
          Close: "关闭",
          "Modal Window": "弹窗",
          "This is a modal window": "这是一个弹窗",
          "This modal can be closed by pressing the Escape key or activating the close button.":
            "可以按ESC按键或启用关闭按钮来关闭此弹窗。",
          ", opens captions settings dialog": ", 开启标题设置弹窗",
          ", opens subtitles settings dialog": ", 开启字幕设置弹窗",
          ", opens descriptions settings dialog": ", 开启描述设置弹窗",
          ", selected": ", 选择",
          "captions settings": "字幕设定",
          "Audio Player": "音频播放器",
          "Video Player": "视频播放器",
          Replay: "重播",
          "Progress Bar": "进度小节",
          "Volume Level": "音量",
          "subtitles settings": "字幕设定",
          "descriptions settings": "描述设定",
          Text: "文字",
          White: "白",
          Black: "黑",
          Red: "红",
          Green: "绿",
          Blue: "蓝",
          Yellow: "黄",
          Magenta: "紫红",
          Cyan: "青",
          Background: "背景",
          Window: "视窗",
          Transparent: "透明",
          "Semi-Transparent": "半透明",
          Opaque: "不透明",
          "Font Size": "字体尺寸",
          "Text Edge Style": "字体边缘样式",
          None: "无",
          Raised: "浮雕",
          Depressed: "压低",
          Uniform: "均匀",
          Dropshadow: "下阴影",
          "Font Family": "字体库",
          "Proportional Sans-Serif": "比例无细体",
          "Monospace Sans-Serif": "单间隔无细体",
          "Proportional Serif": "比例细体",
          "Monospace Serif": "单间隔细体",
          Casual: "舒适",
          Script: "手写体",
          "Small Caps": "小型大写字体",
          Reset: "重启",
          "restore all settings to the default values": "恢复全部设定至预设值",
          Done: "完成",
          "Caption Settings Dialog": "字幕设定视窗",
          "Beginning of dialog window. Escape will cancel and close the window.":
            "开始对话视窗。离开会取消及关闭视窗",
          "End of dialog window.": "结束对话视窗"
        })
        var myPlayer = videojs("myvideo");
        console.log(myPlayer)
        videojs("myvideo").ready(function () {
          var myPlay = this;
          myPlay.play();
          videotao.push(this)
          this.on("error", function () {
            console.log("加载错误")
            $("#toast").css("display", "block")
            setTimeout(() => {
              $("#toast").css("display", "none")
            }, 5000);
          });
        });
      } else {
        $("#playvideo").html("<div>该区域摄像头状态关闭</div>");
      }
    }
  } else {
    console.log("cameraInfo判断错误")
    console.log(cameraInfo)
  }

}
function cameraInit3(da) {
  //处理厂监控
  var newlookInfo;
  $.ajax({
    url: cameraUrl + "api2/main/rubbishStock?pointId=" + da.id + "&type=2",
    type: "get",
    async: false,
    headers: {      //请求头
      Accept: "application/json; charset=utf-8",
    },
    success: function (res) {
      newlookInfo = res;
      console.log("监控三");
      console.log(newlookInfo);
    }
  });

  statuscamera = newlookInfo

  if (newlookInfo.cameraInfoDtos.length > 0) {
    //因为token会过期,所以再次请求摄像头信息接口
    var url = '';//播放地址
    var accessToken = "";  //token
    if (newlookInfo.cameraInfoDtos[0].cameraType == 1) {
      function handleError(e) {
        console.log('捕获到错误', e)
      }
      function handleSuccess() {
        console.log("播放成功回调函数，此处可执行播放成功后续动作");
      }
      //萤石云摄像
      if (newlookInfo.cameraInfoDtos[0].areaType == 1) {
        //newlookInfo.areaType,处置点摄像头
        for (let index = 0; index < newlookInfo.cameraInfoDtos.length; index++) {
          if (newlookInfo.cameraInfoDtos[index].status == 1) {
            if (camerapage.start >= newlookInfo.cameraInfoDtos.length) {
              camerapage.start = newlookInfo.cameraInfoDtos.length - 4;
              camerapage.end = camerapage.start + 3
              if (index >= camerapage.start && index <= camerapage.end) {
                url += newlookInfo.cameraInfoDtos[index].viewUrl;
                url += ","
              }
            } else {
              if (index >= camerapage.start && index <= camerapage.end) {
                url += newlookInfo.cameraInfoDtos[index].viewUrl;
                url += ","
              }
            }
          }
        }
        url = url.substring(0, url.length - 1)
        accessToken = newlookInfo.token
        //处置点 分屏展示
        decoder = new EZUIKit.EZUIPlayer({
          id: 'chulic',
          autoplay: true,
          url,
          accessToken,
          decoderPath: './static/js',
          width: 640,
          height: 400,
          splitBasis: 2, // 1*1 2*2 3*3 4*4
        });

      } else {

        if (newlookInfo.cameraInfoDtos[0].status == 1) {
          url = newlookInfo.cameraInfoDtos[0].viewUrl;
          accessToken = newlookInfo.token
          decoder = new EZUIKit.EZUIPlayer({
            id: 'chulic',
            autoplay: true,
            url,
            accessToken,
            decoderPath: './static/js',
            width: 640,
            height: 400,
            handleError: handleError,
            handleSuccess: handleSuccess,
          });
        }

      }
      //萤石云打印日志
      // 这里是打印日志，本例抛出到播放页面
      decoder.on('log', log);
      function log(str, className) {
        var s = (new Date()).Format('yyyy-MM-dd hh:mm:ss.S') + JSON.stringify(str);
        console.log(s);
      }

    } else if (cameraInfo.cameraInfoDtos[0].cameraType == 2) {

      if (cameraInfo.cameraInfoDtos.length > 1) {
        for (let z = 0; z < cameraInfo.cameraInfoDtos.length; z++) {

          let cc = `<div><video id='myvideo` + z + `'  controls  class='video-js' width='320' height='200'><source id='video-source' src=` + cameraInfo.cameraInfoDtos[z].viewUrl + ` type='application/x-mpegURL'></video></div>`
          $("#chulic" + z).html(cc);
          //设置资源路径
          videojs.addLanguage("zh-CN", {
            Play: "播放",
            Pause: "暂停",
            "Current Time": "当前时间",
            "Stream Type": "媒体流类型",
            LIVE: "直播",
            Loaded: "加载完毕",
            Progress: "进度",
            Fullscreen: "全屏",
            "Non-Fullscreen": "退出全屏",
            Mute: "静音",
            Unmute: "取消静音",
            "Playback Rate": "播放速度",
            Subtitles: "字幕",
            "subtitles off": "关闭字幕",
            Captions: "内嵌字幕",
            "captions off": "关闭内嵌字幕",
            Chapters: "节目段落",
            "Close Modal Dialog": "关闭弹窗",
            Descriptions: "描述",
            "descriptions off": "关闭描述",
            "Audio Track": "音轨",
            "You aborted the media playback": "视频播放被终止",
            "A network error caused the media download to fail part-way.":
              "网络错误导致视频下载中途失败。",
            "The media could not be loaded, either because the server or network failed or because the format is not supported.":
              "视频因格式不支持或者服务器或网络的问题无法加载。",
            "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.":
              "由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。",
            "No compatible source was found for this media.":
              "无法找到此视频兼容的源。",
            "The media is encrypted and we do not have the keys to decrypt it.":
              "视频已加密，无法解密。",
            "Play Video": "播放视频",
            Close: "关闭",
            "Modal Window": "弹窗",
            "This is a modal window": "这是一个弹窗",
            "This modal can be closed by pressing the Escape key or activating the close button.":
              "可以按ESC按键或启用关闭按钮来关闭此弹窗。",
            ", opens captions settings dialog": ", 开启标题设置弹窗",
            ", opens subtitles settings dialog": ", 开启字幕设置弹窗",
            ", opens descriptions settings dialog": ", 开启描述设置弹窗",
            ", selected": ", 选择",
            "captions settings": "字幕设定",
            "Audio Player": "音频播放器",
            "Video Player": "视频播放器",
            Replay: "重播",
            "Progress Bar": "进度小节",
            "Volume Level": "音量",
            "subtitles settings": "字幕设定",
            "descriptions settings": "描述设定",
            Text: "文字",
            White: "白",
            Black: "黑",
            Red: "红",
            Green: "绿",
            Blue: "蓝",
            Yellow: "黄",
            Magenta: "紫红",
            Cyan: "青",
            Background: "背景",
            Window: "视窗",
            Transparent: "透明",
            "Semi-Transparent": "半透明",
            Opaque: "不透明",
            "Font Size": "字体尺寸",
            "Text Edge Style": "字体边缘样式",
            None: "无",
            Raised: "浮雕",
            Depressed: "压低",
            Uniform: "均匀",
            Dropshadow: "下阴影",
            "Font Family": "字体库",
            "Proportional Sans-Serif": "比例无细体",
            "Monospace Sans-Serif": "单间隔无细体",
            "Proportional Serif": "比例细体",
            "Monospace Serif": "单间隔细体",
            Casual: "舒适",
            Script: "手写体",
            "Small Caps": "小型大写字体",
            Reset: "重启",
            "restore all settings to the default values": "恢复全部设定至预设值",
            Done: "完成",
            "Caption Settings Dialog": "字幕设定视窗",
            "Beginning of dialog window. Escape will cancel and close the window.":
              "开始对话视窗。离开会取消及关闭视窗",
            "End of dialog window.": "结束对话视窗"
          })
          setTimeout(() => {

            this.on("error", function () {
              $("#toast").css("display", "block")
              setTimeout(() => {
                $("#toast").css("display", "none")
              }, 5000);
            });

            this.on("Loaded", () => {
              console.log("加载完成了");

            })
            var myPlayer = videojs("myvideo" + z);


            videojs("myvideo" + z).ready(function () {
              var myPlay = this;
              myPlay.play();
              videotao.push(this)
            });
          }, 200);

        }
      } else {
        if (cameraInfo.cameraInfoDtos[0].status == 1) {
          let cc = `<div><video id='myvideo' class='video-js' controls style='margin:0 auto;' width='605' height='400'><source id='video-source' src=` + cameraInfo.cameraInfoDtos[0].viewUrl + ` type='application/x-mpegURL'></video></div>`
          $("#chulic").html(cc);
          //设置资源路径
          videojs.addLanguage("zh-CN", {
            Play: "播放",
            Pause: "暂停",
            "Current Time": "当前时间",
            "Stream Type": "媒体流类型",
            LIVE: "直播",
            Loaded: "加载完毕",
            Progress: "进度",
            Fullscreen: "全屏",
            "Non-Fullscreen": "退出全屏",
            Mute: "静音",
            Unmute: "取消静音",
            "Playback Rate": "播放速度",
            Subtitles: "字幕",
            "subtitles off": "关闭字幕",
            Captions: "内嵌字幕",
            "captions off": "关闭内嵌字幕",
            Chapters: "节目段落",
            "Close Modal Dialog": "关闭弹窗",
            Descriptions: "描述",
            "descriptions off": "关闭描述",
            "Audio Track": "音轨",
            "You aborted the media playback": "视频播放被终止",
            "A network error caused the media download to fail part-way.":
              "网络错误导致视频下载中途失败。",
            "The media could not be loaded, either because the server or network failed or because the format is not supported.":
              "视频因格式不支持或者服务器或网络的问题无法加载。",
            "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.":
              "由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。",
            "No compatible source was found for this media.":
              "无法找到此视频兼容的源。",
            "The media is encrypted and we do not have the keys to decrypt it.":
              "视频已加密，无法解密。",
            "Play Video": "播放视频",
            Close: "关闭",
            "Modal Window": "弹窗",
            "This is a modal window": "这是一个弹窗",
            "This modal can be closed by pressing the Escape key or activating the close button.":
              "可以按ESC按键或启用关闭按钮来关闭此弹窗。",
            ", opens captions settings dialog": ", 开启标题设置弹窗",
            ", opens subtitles settings dialog": ", 开启字幕设置弹窗",
            ", opens descriptions settings dialog": ", 开启描述设置弹窗",
            ", selected": ", 选择",
            "captions settings": "字幕设定",
            "Audio Player": "音频播放器",
            "Video Player": "视频播放器",
            Replay: "重播",
            "Progress Bar": "进度小节",
            "Volume Level": "音量",
            "subtitles settings": "字幕设定",
            "descriptions settings": "描述设定",
            Text: "文字",
            White: "白",
            Black: "黑",
            Red: "红",
            Green: "绿",
            Blue: "蓝",
            Yellow: "黄",
            Magenta: "紫红",
            Cyan: "青",
            Background: "背景",
            Window: "视窗",
            Transparent: "透明",
            "Semi-Transparent": "半透明",
            Opaque: "不透明",
            "Font Size": "字体尺寸",
            "Text Edge Style": "字体边缘样式",
            None: "无",
            Raised: "浮雕",
            Depressed: "压低",
            Uniform: "均匀",
            Dropshadow: "下阴影",
            "Font Family": "字体库",
            "Proportional Sans-Serif": "比例无细体",
            "Monospace Sans-Serif": "单间隔无细体",
            "Proportional Serif": "比例细体",
            "Monospace Serif": "单间隔细体",
            Casual: "舒适",
            Script: "手写体",
            "Small Caps": "小型大写字体",
            Reset: "重启",
            "restore all settings to the default values": "恢复全部设定至预设值",
            Done: "完成",
            "Caption Settings Dialog": "字幕设定视窗",
            "Beginning of dialog window. Escape will cancel and close the window.":
              "开始对话视窗。离开会取消及关闭视窗",
            "End of dialog window.": "结束对话视窗"
          })
          var myPlayer = videojs("myvideo");
          console.log(myPlayer)
          videojs("myvideo").ready(function () {
            var myPlay = this;
            myPlay.play();
            videotao.push(this)
            this.on("error", function () {
              console.log("加载错误")
              $("#toast").css("display", "block")
              setTimeout(() => {
                $("#toast").css("display", "none")
              }, 5000);
            });
          });
        } else {
          $("#chulic").html("<div>该区域摄像头状态关闭</div>");
        }
      }
    } else {
      $("#chulic").html("<div style='text-align:center;margin-top:30px;'>该区域暂无监控</div>")
    }
  }




}

function stopCamera() {
  return new Promise(function (resolve, reject) {
    if (lookInfo && decoder) {
      if (lookInfo.areaType == 1) {
        var list = lookInfo.cameraInfos;
        for (var i = 0; i < list.length; i++) {
          decoder.stop(i);
          console.log("执行几遍啊");
        }
        decoder = "";
        console.log(decoder);
        lookInfo = {};
        resolve(true);
      } else {
        var stopPromise = decoder.stop();
        stopPromise.then(function () {
          console.log("关闭成功，用户执行关闭成功后的操作");
          lookInfo = {};
          resolve(true);
        })
      }
    } else {
      resolve();
    }
  })
}

//#endregion 弹出页面




function addSinglePoint_zycl(index, point, labelText, xOffset, yOffset, map) {
  var imgIndex = index % 7;
  var img = carImgArray[imgIndex];
  var size = new BMapGL.Size(30, 30);
  var icon = new BMapGL.Icon(img, size);
  icon.setImageSize(size);
  // icon.setAnchor(new BMapGL.Size(150,150));

  var marker = new BMapGL.Marker(point, { icon: icon });
  //marker.setAnimation(BMAP_ANIMATION_BOUNCE);//跳动效果
  var label = new BMapGL.Label(labelText, { offset: new BMapGL.Size(xOffset, yOffset) });
  //  label.setStyle({
  //      transform: 'translateX(-50%)'//label相对坐标点自动居中显示
  //  })
  marker.setLabel(label);
  map.addOverlay(marker);

  marker.addEventListener("click", function () {
    showPop("作业车辆");
  });

  ponitsArray_zycl.push(marker);
}
//隐藏车辆
export function removePoints_zycl(map) {
  for (var i = 0; i < ponitsArray_zycl.length; i++) {
    map.removeOverlay(ponitsArray_zycl[i]);
  }
}