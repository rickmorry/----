<template>
  <div class="container">
    <div class="allMap" id="container"></div>

    <div class="pop animated bounceIn">
      <div class="close" @click="closePop"></div>
      <div class="content"></div>
    </div>

    <div class="pop community bounceIn">
      <div class="close" @click="closePop"></div>
      <div class="content">
        <div class="append toufangdian">
          <table style="width: 100%; font-size: 18px">
            <tr style="height: 50px; font-size: 22px">
              <th colspan="2" id="name">**小区垃圾收集点位</th>
            </tr>
            <tr style="height: 50px">
              <th style="width: 180px; text-align: right">投放点类型</th>
              <td id="type"></td>
            </tr>
            <tr style="height: 50px">
              <th style="width: 180px; text-align: right">投放点经度</th>
              <td id="longitude"></td>
            </tr>
            <tr style="height: 50px">
              <th style="width: 180px; text-align: right">投放点纬度</th>
              <td id="latitude"></td>
            </tr>
          </table>
          <div class="childs" id="childs" style="display:flex;flex-direction:column;"></div>
          <div id="playvideo"></div>
          <div
            style="display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: space-around;
              margin-left:5px;
              "
          >
            <div id="playvideo0"></div>
            <div id="playvideo1"></div>
            <div id="playvideo2"></div>
            <div id="playvideo3"></div>
            <div id="playvideo4"></div>
            <div id="playvideo5"></div>
          </div>
        </div>

        <div class="append cheliang">
          <table style="width: 100%; font-size: 18px">
            <tr style="height: 50px; font-size: 22px">
              <th colspan="2">垃圾收集车辆</th>
            </tr>
            <tr style="height: 50px">
              <th style="width: 180px; text-align: right">车牌号</th>
              <td>苏E *****</td>
            </tr>
            <tr style="height: 50px">
              <th style="width: 180px; text-align: right">当前司机</th>
              <td>张**</td>
            </tr>
            <tr style="height: 50px">
              <th style="width: 180px; text-align: right">联系电话</th>
              <td>139********</td>
            </tr>
            <tr style="height: 50px">
              <th style="width: 180px; text-align: right">吨位</th>
              <td>5吨</td>
            </tr>
            <tr style="height: 50px">
              <th style="width: 180px; text-align: right">投入年月</th>
              <td>2019年10月</td>
            </tr>
            <tr style="height: 50px">
              <th style="width: 180px; text-align: right">所属单位</th>
              <td>苏州环卫所</td>
            </tr>
            <tr style="height: 50px">
              <th style="width: 180px; text-align: right">负责小区</th>
              <td>陆家***********</td>
            </tr>
          </table>
        </div>

        <div class="append camera">
          <h2 id="cameraTitle"></h2>
          <div id="playWind"></div>
          <div
            style="display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: space-between;
              margin-left:5px;
              margin-right:5px;
              "
          >
            <div id="playWind0"></div>
            <div id="playWind1"></div>
            <div id="playWind2"></div>
            <div id="playWind3"></div>
            <div id="playWind4"></div>
            <div id="playWind5"></div>
          </div>
        </div>

        <div class="append chulichang">
          <!-- <h2 id="chulictit" style="line-height:45px;text-align:center;font-size:30px;">开始了</h2> -->
          <table style="width: 100%; font-size: 18px">
            <tr style="height: 50px; font-size: 22px">
              <th colspan="2" id="name"></th>
            </tr>
            <tr style="height: 50px">
              <th style="width: 180px; text-align: right">处理厂垃圾</th>
              <td id="rubb"></td>
            </tr>
          </table>
          <div id="chulic" style="margin-left:5px;"></div>
          <div
            style="display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content:space-between;"
          >
            <div id="chulic0"></div>
            <div id="chulic1"></div>
            <div id="chulic2"></div>
            <div id="chulic"></div>
          </div>
        </div>

        <div class="append xuanchuan">
          <p id="title">陆家镇科普教育基地简介</p>
          <p
            id="titlejj"
          >陆家镇生活垃圾分类科普教育基地位于陆家镇党群服务中心三楼，占地面积100平方米，于2019年10月在昆山范围内率先建设完成。教育基地主要分为工作成果展区和垃圾分类科普展区，以图文展示+多媒体互动的方式，传播生活垃圾分类理念，助力居民垃圾分类习惯养成。</p>

          <img class="xuanimg" src="http://58.210.9.133/KS_ZHLJ/photo/垃圾分类_宣传引导/1.JPG" alt />
          <img class="xuanimg" src="http://58.210.9.133/KS_ZHLJ/photo/垃圾分类_宣传引导/2.png" alt />
          <img class="xuanimg" src="http://58.210.9.133/KS_ZHLJ/photo/垃圾分类_宣传引导/3.jpg" alt />
          <img class="xuanimg" src="http://58.210.9.133/KS_ZHLJ/photo/垃圾分类_宣传引导/4.jpg" alt />
          <img class="xuanimg" src="http://58.210.9.133/KS_ZHLJ/photo/垃圾分类_宣传引导/5.JPG" alt />
          <img class="xuanimg" src="http://58.210.9.133/KS_ZHLJ/photo/垃圾分类_宣传引导/6.JPG" alt />
          <p>视频：</p>
          <video
            src="http://58.210.9.133/KS_ZHLJ/photo/垃圾分类_宣传引导/陆家镇2019年生活垃圾分类工作回顾.mp4"
            controls="controls"
            class="vid"
          ></video>
          <p>附件：</p>
          <p></p>
          <p>
            <a
              href="http://58.210.9.133/KS_ZHLJ/photo/垃圾分类_宣传引导/1《苏州市生活垃圾分类管理条例》.doc"
              target="_blank"
            >1《苏州市生活垃圾分类管理条例》.doc</a>
          </p>
          <p></p>
          <p>
            <a
              href="http://58.210.9.133/KS_ZHLJ/photo/垃圾分类_宣传引导/2关于印发《昆山市全面推进生活垃圾分类管理共建共享高品质美好家园实施方案（2020—2022年）》的通知.doc"
              target="_blank"
            >2关于印发《昆山市全面推进生活垃圾分类管理共建共享高品质美好家园实施方案（2020—2022年）》的通知.doc</a>
          </p>
          <p></p>
          <p>
            <a
              href="http://58.210.9.133/KS_ZHLJ/photo/垃圾分类_宣传引导/3市政府办公室关于印发2020年昆山市生活垃圾分类及减量工作实施方案的通知.doc"
              target="_blank"
            >3市政府办公室关于印发2020年昆山市生活垃圾分类及减量工作实施方案的通知.doc</a>
          </p>
          <p></p>
          <p>
            <a
              href="http://58.210.9.133/KS_ZHLJ/photo/垃圾分类_宣传引导/4市政府办公室关于印发2020年昆山市生活垃圾分类及减量工作督查评价办法的通知.doc"
              target="_blank"
            >4市政府办公室关于印发2020年昆山市生活垃圾分类及减量工作督查评价办法的通知.doc</a>
          </p>
          <p></p>
          <p>
            <a
              href="http://58.210.9.133/KS_ZHLJ/photo/垃圾分类_宣传引导/5陆委发〔2019〕10号 关于印发《陆家镇生活垃圾分类工作实施方案》的通知.doc"
              target="_blank"
            >
              5陆委发〔2019〕10号
              关于印发《陆家镇生活垃圾分类工作实施方案》的通知.doc
            </a>
          </p>
          <p></p>
          <p>
            <a
              href="http://58.210.9.133/KS_ZHLJ/photo/垃圾分类_宣传引导/6关于印发《陆家镇关于进一步加强生活垃圾分类收运杜绝混收混运工作方案》的通知.doc"
              target="_blank"
            >6关于印发《陆家镇关于进一步加强生活垃圾分类收运杜绝混收混运工作方案》的通知.doc</a>
          </p>
          <p>
            <a
              href="http://58.210.9.133/KS_ZHLJ/photo/垃圾分类_宣传引导/7 2020年陆家镇生活垃圾分类及减量工作实施方案（审议稿）.docx"
              target="_blank"
            >7 2020年陆家镇生活垃圾分类及减量工作实施方案（审议稿）.docx</a>
          </p>
          <p>
            <a
              href="http://58.210.9.133/KS_ZHLJ/photo/垃圾分类_宣传引导/8 2020年陆家镇生活垃圾分类及减量工作任务分解表.docx"
              target="_blank"
            >8 2020年陆家镇生活垃圾分类及减量工作任务分解表.docx</a>
          </p>
        </div>
      </div>
    </div>

    <div class="pop community bounceIn" id="toufangxiaoqu">
      <div class="close" @click="closexiaoquPop"></div>
      <div class="content">
        <div class="append toufangxiaoqu community">
          <div style>
            <table style="width: 90%; font-size: 18px; margin-left: 5%">
              <tr style="height: 40px; font-size: 22px">
                <th colspan="4" class="name">**小区</th>
              </tr>
              <tr style="padding-bottom: 20px">
                <th style="width: 300px; text-align: right; height: 30px">所属社区</th>
                <td class="village"></td>
                <th style="width: 150px; text-align: right">总户数</th>
                <td class="totalHouse"></td>
              </tr>
              <tr>
                <td class="map" id="plot" colspan="4" style="text-align: center; height: 650px"></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="show tao" id="toast">
      <div class="txt">暂时无法播放监控，请稍后再试</div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

import {
  goPage,
  xcyd,
  ssjk,
  addPoints_yun
} from "../../public/static/js/init.js";
import {
  addSinglePoint_zycl,
  removePoints_zycl,
  addPoints_zycl,
  addCamera,
  addSingleCamera,
  removeCamera,
  showRealTimeCamera,
  addPoints_tou,
  addSinglePoint_tou,
  removePoints_tou,
  addLabels_community,
  showPop,
  addPoints_chu,
  removePoints_chu,
  showPop_Community,
  closePop,
  allplot,
  closexiaoquPop
} from "../../public/static/js/common.js";
import {
  getBoundary_village,
  removeLabel_village,
  addLabel_village,
  removeBoundary_village
} from "../../public/static/js/_lujia/village.js";
import {
  obj_village,
  obj_community,
  obj_point,
  getBoundary_Community,
  removeBoundary_Community,
  leixing,
  munclosepop
} from "../../public/static/js/_lujia/community.js";
import echart from "echarts";

import ezuikit from "../../public/static/js/ezuikit.js";

import yingshi from "../../public/static/js/yingshi.js";

export default {
  props: {
    tou: {
      type: Boolean
    },
    shou: {
      type: Boolean
    },
    yun: {
      type: Boolean
    },
    chu: {
      type: Boolean
    },
    num: {
      type: String
    },
    zycl: {
      type: Boolean
    },
    tfxq: {
      type: Boolean
    },
    xcyd: {
      type: Boolean
    },
    jk: {
      type: Boolean
    }
  },
  data() {
    return {
      villageFlagsHaveAdded: false,
      func: null,
      plot: null,
      plotdata: null
    };
  },
  watch: {
    tou(newValue, oldValue) {
      if (newValue) this.alladd();
      else this.alladd();
    },
    shou(newValue, oldValue) {
      if (newValue) this.alladd();
      else this.alladd();
    },
    yun(newValue, oldValue) {},
    chu(newValue, oldValue) {
      if (newValue) this.alladd();
      else this.alladd();
    },
    num(newValue, oldValue) {
      this.removeall(newValue);
      this.alladd();
    },
    zycl(newValue, oldValue) {
      if (newValue) this.alladd();
      else this.alladd();
    },
    tfxq(newValue, oldValue) {
      if (newValue) this.getBoundary_Community();
      else this.getBoundary_Community();
    },
    xcyd(newValue, oldValue) {
      if (newValue) this.showPop();
      else this.showPop();
    },
    jk(newValue, oldValue) {
      if (newValue) this.addCamera();
      else this.addCamera();
    }
  },
  mounted() {
    // $common()
    // $village()
    // $community()
    this.index();
    this.alladd();
    this.xiaoquindex();
    this.plotdata = allplot();
    leixing(this.num, this.plotdata);
  },
  methods: {
    closePop() {
      closePop();
      munclosepop();
    },
    closexiaoquPop() {
      closexiaoquPop();
    },
    index() {
       var map = new BMapGL.Map("container");
      var plotFlagsHaveAdded = false; //小区标记是否已经加入map
      var villageFlagsHaveAdded = false; //社区标记是否已经加入map
      var cameraFlagsHaveAdded = false; //监控标记是否已经加入map
      init(); // 异步加载地图
      function init() {
        var point = new BMapGL.Point(121.054574, 31.320442);
          map.centerAndZoom(point,15)
          map.enableScrollWheelZoom(true)
          map.setHeading(0)
          map.setTilt(60)
        // 创建Map实例
        // var point = new BMapGL.Point(121.054574, 31.320442); // 创建点坐标
        // map.centerAndZoom(point, 15);
        // map.enableScrollWheelZoom(); // 启用滚轮放大缩小
        map.setMapStyleV2({ styleId: "0c81c458c1ec8943f9ac943637cbad35" });

        //缩放开始的事件
        map.addEventListener("zoomstart", function(evt) {});
        //缩放结束的事件
        var _mapZoom = 14;
        map.addEventListener("zoomend", function(evt) {
          _mapZoom = map.getZoom();

          var villageShowLevel = 14;
          var plotShowLevel = 16;
          var cameraShowLevel = 17;

          //社区标签判断
          if (!villageFlagsHaveAdded && _mapZoom >= villageShowLevel) {
            //addLabel();//添加社区标签
            villageFlagsHaveAdded = true;
          }
          if (
            villageFlagsHaveAdded &&
            (_mapZoom < villageShowLevel || _mapZoom >= plotShowLevel)
          ) {
            //removeLabel();//移除社区标签
            villageFlagsHaveAdded = false;
          }

          //小区标签判断
          if (!plotFlagsHaveAdded && _mapZoom >= plotShowLevel) {
            //addLabelPlot();//添加小区标签
            plotFlagsHaveAdded = true;
          }

          if (plotFlagsHaveAdded && _mapZoom < plotShowLevel) {
            //removeLabelPlot();
            plotFlagsHaveAdded = false;
          }

          //监控标签判断
          if (!cameraFlagsHaveAdded && _mapZoom >= cameraShowLevel) {
            //addCamera();//添加摄像机标点
            cameraFlagsHaveAdded = true;
          }

          if (cameraFlagsHaveAdded && _mapZoom < cameraShowLevel) {
            //removeCamera();
            cameraFlagsHaveAdded = false;
          }
        });
        //getBoundary_Community();
        villageFlagsHaveAdded = getBoundary_village(map);  //这个影响3d地图
      }
      this.func = map;
    },
    alladd() {
      if (this.tou) addPoints_tou(this.num, this.func);
      else removePoints_tou(this.func);

      if (this.chu) addPoints_chu(this.num, this.func);
      else removePoints_chu(this.func);

      if (this.zycl || this.shou || this.yun) {
        addPoints_zycl(this.num, this.func);
      } else {
        removePoints_zycl(this.func);
      }
    },
    removeall(num) {
      console.log("清除所有标点?");
      removePoints_tou(this.func);
      removePoints_chu(this.func);
      removePoints_zycl(this.func);
      this.alladd();
      leixing(this.num);
    },
    getBoundary_Community() {
      if (this.tfxq) getBoundary_Community(this.func, this.num);
      else removeBoundary_Community(this.func, this.num);
    },
    showPop() {
      showPop("宣传引导");
    },
    addCamera() {
      //摄像机

      if (this.jk) addCamera(this.func);
      else removeCamera(this.func);
    },
    xiaoquindex() {}
  }
};
</script>

<style>
.show,
.tao {
  width: 200px;
  border-radius: 5px;
  position: absolute;
  z-index: 999999;
  left: 50%;
  top: 40%;
  background: #ffffff;
  font-size: 14px;
  text-align: center;
  padding: 10px 0;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 2px 1px #f1f1f1;
  display: none;
}

.allMap {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 100px;
}

div.current {
  width: 350px;
  float: right;
  margin-right: 10px;
  height: 100%;
}

div.current .divchart {
  width: 340px;
  height: 280px;
}

div.current .divchart.two {
  margin: 20px 0;
}

/*地图隐藏比例尺和放大缩小*/
div.BMap_stdMpCtrl.BMap_stdMpType0.BMap_noprint.anchorTL {
  display: none;
}

div.BMap_noprint.anchorTR {
  display: none;
}

div.anchorBL {
  display: none;
}

/*弹出显示*/
.pop {
  display: none;
  position: absolute;
  width: 650px;
  height: 750px;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  z-index: 10086;
  background: url("../../public/static/image/bg_instruction.png") 0 0 no-repeat;
  background-size: 100% 100%;
  padding: 20px 0px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 0.2rem;
  color: #fff;
  font-family: "Microsoft YaHei", "Arial Narrow", HELVETICA;
  line-height: 0.3rem;
}

.pop.community {
  background: none;
  background-color: #dbf2f3;
  border: 5px solid rgb(60, 76, 100);
  width: 1300px;
  height: 850px;
  top: 45%;
  color: rgb(60, 76, 100);
}

.pop.community table tr {
  border-bottom: 1px solid rgb(60, 76, 100);
}

td {
  text-align: center;
}

.pop .close {
  background: url("../../public/static/image/close.png") 50% no-repeat;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 15px;
  top: 30px;
  cursor: pointer;
  border: 1px solid #67c6ff;
  border-radius: 50%;
}

.pop .content {
  width: 100%;
  height: 95%;
  overflow-y: auto;
  margin-top: 35px;
}

.pop.community .content {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.pop .content p {
  line-height: 20px;
  padding: 0 15px;
}
.pop .content p:last-child {
  margin-bottom: 50px;
}
.pop .content .pointImg {
  width: 80%;
  margin: 15px auto 0;
  z-index: 1;
  position: relative;
}

.pop .content .pointImg img,
.pop .content .pointImg video {
  margin: 3px;
  width: 100%;
  border-radius: 10px;
  border: 2px solid #fff;
  background: #fff;
}

.append {
  display: none;
}

.content .append {
  display: block;
}

.pop .content #title {
  text-align: center;
  font-size: 22px;
}

.pop .content #titlejj {
  text-indent: 40px;
  line-height: 25px;
}

.pop .content img {
  margin: 3px;
  width: 290px;
  height: 180px;
  border-radius: 10px;
  border: 2px solid #fff;
  background: #fff;
}

.pop.community .content img {
  margin: 3px;
  width: auto;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  margin: auto;
}

/* .pop .content video {
  margin: 3px;
  width: 590px;
  border-radius: 10px;
  border: 2px solid #fff;
  background: #fff;
} */
/* .pop .content video {
  margin: 3px;
  width: 590px;
  border-radius: 10px;
  border: 2px solid #fff;
  background: #fff;
} */

.pop a,
.pop a:hover {
  text-decoration: none;
  color: #fff;
}

.append .camera {
  width: 600px;
}

#playWind {
  margin-left: 5px;
}

#cameraTitle {
  margin: 20px 0;
  text-align: center;
  line-height: 45px;
  font-size: 25px;
}

#plot {
  background: rgb(60, 76, 100, 0.2);
}
#toufangxiaoqu {
  z-index: 10000;
}
#playvideo {
  max-width: 100%;
  text-align: center;
}
.content .xuanimg {
  margin-left: 15px !important;
}
.content .vid {
  margin-left: 15px !important;
}
</style>
