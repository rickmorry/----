console.log("执行init.js")


//其中垃圾分类的颜色，分别 建筑、绿化、大件  可回收物、有害垃圾、厨余垃圾、其他垃圾
var categoryColors = ["rgb(254,196,60)", "rgb(16,247,238)", "rgb(239,114,56)", "rgb(16,115,183)", "rgb(208,49,53)", "rgb(19,146,77)", "rgb(121,117,118)"];
var categoryColors2 = ["#FEC43C", "#10F7EE", "#EF7238", "#1073B7", "#D03135", "#13924D", "#797576"];


var areaArray = ["/image/icon/car_jianzhu.png", "/image/icon/car_lvhua.png", "/image/icon/car_dajian.png", "/image/icon/car_kehuishouwu.png", "/image/icon/car_youhai.png", "/image/icon/car_chuyu.png", "/image/icon/car_qita.png",];
var areaArray = ["陈巷村(社区)", "神童泾村(社区)", "泗桥村(社区)", "邹家角村(社区)",
    "夏桥村(社区)", "车塘村(社区)", "合丰村(社区)", "邵村社区", "陆家村(社区)"];
var areaSimpleArray = ["陈巷", "神童泾", "泗桥", "邹家角",
    "夏桥", "车塘", "合丰", "邵村", "陆家"];
var dic_areaSimpleArray = {
    0: "陈巷", 1: "神童泾", 2: "泗桥", 3: "邹家角",
    4: "夏桥", 5: "车塘", 6: "合丰", 7: "邵村", 8: "陆家"
};



// export function goPage(page) {
//     window.location.href = page;
// }

export function xcyd() {
    showPop("宣传引导");
}

export function ssjk() {
}

//添加车辆
export function addPoints_yun() {
    var xOffset = 0;
    var yOffset = -25;

    var length = rubbishPointsList_yun.length;
    for (var i = 0; i < length; i++) {
        addSinglePoint_yun(rubbishPointsList_yun[i], '车辆' + i, xOffset, yOffset);
    }
}