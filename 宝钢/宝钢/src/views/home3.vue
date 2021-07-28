<template>
  <div class="home">
    <div class="bg">
      <div class="head">
        <div class="tit">蒸汽数据一览图</div>
      </div>
      <div class="test" @click="bool=!bool">
        <div class="tit">新消息提醒</div>
        <div class="desc">你收到一条新消息,请注意查收</div>
      </div>
      <img src="../../public/images/pwc_1.png" alt class="jwc1 jwc" />
      <img src="../../public/images/pwc_1.png" alt class="jwc2 jwc" />
      <img src="../../public/images/rh2.png" class="rh1 rh" alt />
      <img src="../../public/images/ylj.png" class="rh1_pt pt" alt />
      <img src="../../public/images/llj.png" class="rh1_fl fl" alt />
      <img src="../../public/images/jqf_1.png" class="rh1_jqf jqf" alt />

      <img src="../../public/images/rh2.png" class="rh2 rh" alt />
      <img src="../../public/images/ylj.png" class="rh2_pt pt" alt />
      <img src="../../public/images/llj.png" class="rh2_fl fl" alt />
      <img src="../../public/images/jqf_1.png" class="rh2_jqf jqf" alt />

      <img src="../../public/images/rh.png" class="rh3 rh" alt />
      <img src="../../public/images/ylj.png" class="rh3_pt pt" alt />
      <img src="../../public/images/llj.png" class="rh3_fl fl" alt />
      <img src="../../public/images/jqf_1.png" class="rh3_jqf jqf" alt />

      <img src="../../public/images/ylj.png" class="xrq_pt1 pt" alt />
      <img src="../../public/images/pqf_1.png" class="xrq_fm1 fm" alt />
      <img src="../../public/images/ylj.png" class="xrq_pt2 pt" alt />
      <img src="../../public/images/pqf_1.png" class="xrq_fm2 fm" alt />

      <img src="../../public/images/zl_1.png" class="zl1 zl" alt />
      <img src="../../public/images/llj.png" class="zl1_fl1 fl" alt />
      <img src="../../public/images/llj.png" class="zl1_fl2 fl" alt />
      <img src="../../public/images/cyq_1.png" class="zl1_cyq cyq" alt />

      <img src="../../public/images/zl_2.png" class="zl2 zl" alt />
      <img src="../../public/images/llj.png" class="zl2_fl1 fl" alt />
      <img src="../../public/images/llj.png" class="zl2_fl2 fl" alt />
      <img src="../../public/images/cyq_2.png" class="zl2_cyq cyq" alt />
      <img src="../../public/images/zl_2.png" class="zl3 zl" alt />
      <img src="../../public/images/llj.png" class="zl3_fl1 fl" alt />
      <img src="../../public/images/llj.png" class="zl3_fl2 fl" alt />
      <img src="../../public/images/cyq_2.png" class="zl3_cyq cyq" alt />
      <img src="../../public/images/zl_1.png" class="zl4 zl" alt />
      <img src="../../public/images/llj.png" class="zl4_fl1 fl" alt />
      <img src="../../public/images/llj.png" class="zl4_fl2 fl" alt />
      <img src="../../public/images/cyq_1.png" class="zl4_cyq cyq" alt />

      <img src="../../public/images/llj_off.png" class="zy1_fl fl" alt />
      <img src="../../public/images/ylj_off.png" class="zy1_pt pt" alt />
      <img src="../../public/images/blf_1_off.png" class="zy1_fm fm-left" alt />

      <img src="../../public/images/llj_off.png" class="zy2_fl fl" alt />
      <img src="../../public/images/ylj_off.png" class="zy2_pt pt" alt />
      <img src="../../public/images/blf_1_off.png" class="zy2_fm fm-left" alt />

      <img src="../../public/images/dysc_1.png" class="dy1 dy" alt />
      <img src="../../public/images/llj.png" class="dy1_fl fl" alt />
      <img src="../../public/images/blf_2.png" class="dy1_fm fm-right" alt />
      <img src="../../public/images/ylj.png" class="dy1_pt pt" alt />

      <img src="../../public/images/dysc_1.png" class="dy2 dy" alt />
      <img src="../../public/images/llj.png" class="dy2_fl fl" alt />
      <img src="../../public/images/blf_2.png" class="dy2_fm fm-right" alt />
      <img src="../../public/images/ylj.png" class="dy2_pt pt" alt />
      <!-- 总蓄热量 -->
      <div class="head-top txt" v-show="bool">
        <div class="desc">
          <div class="left">总蓄热量:</div>
          <div class="right">200t</div>
        </div>
        <div class="desc">
          <div class="left">RH运行:</div>
          <div class="right">20炉</div>
        </div>
        <div class="desc">
          <div class="left">管道压力:</div>
          <div class="right">3.45Mpa</div>
        </div>
        <div class="desc">
          <div class="left">放散状态:</div>
          <div class="right">ON/OFF</div>
        </div>
      </div>
      <!---->
      <!-- 十二个除氧器的图片 -->
      <div :class="'crq_' + val.id + ' crq'" v-for="(val, ind) in cyqlist_img" :key="ind">
        <img src="../../public/images/xrq_1.png" alt />
        <div class="num">{{ val.id }}#</div>
      </div>
      <!-- 十二个除氧器的图片 -->

      <!-- 下面开始全部都是黑图 -->
      <div :class="'rh_' + val.id + '_pt_txt txt'" v-for="(val, ind) in rhlist_pt" :key="ind">
        <div class="desc">
          <div class="left">累计用量</div>
          <div class="right">180t</div>
        </div>
      </div>
      <div :class="'rh_' + val.id + '_fl_txt txt'" v-for="(val, ind) in rhlist_fl" :key="ind">
        <div class="desc">
          <div class="left">信息:</div>
          <div class="right">40t/h</div>
        </div>
      </div>
      <div :class="'rh_' + val.id + '_fl2_txt txt'" v-for="(val, ind) in rhlist_fl2" :key="ind">
        <div class="desc">
          <div class="left">信息:</div>
          <div class="right">2.8Mpa</div>
        </div>
      </div>
      <div class="xrq_2_pt_txt txt">
        <div class="desc">
          <div class="left">信息:</div>
          <div class="right">2.8Mpa</div>
        </div>
      </div>
      <div class="xrq_8_pt_txt txt">
        <div class="desc">
          <div class="left">信息:</div>
          <div class="right">111</div>
        </div>
      </div>

      <!-- <div class="xrq_1_txt txt">
        <div class="desc">
          <div class="left">压力值</div>
          <div class="right">2.8Mpa</div>
        </div>
        <div class="desc">
          <div class="left">温度</div>
          <div class="right">270℃</div>
        </div>
        <div class="desc">
          <div class="left">毫米</div>
          <div class="right">-999mm</div>
        </div>
        <div class="desc">
          <div class="left">蓄热量</div>
          <div class="right">15t</div>
        </div>
      </div>-->

      <div :class="'xrq_'+val.id+'_txt txt'" v-for="(val,ind) in xrqlist" :key="ind">
        <div class="desc">
          <div class="left">压力值</div>
          <div class="right">2.8Mpa</div>
        </div>
        <div class="desc">
          <div class="left">温度</div>
          <div class="right">270℃</div>
        </div>
        <div class="desc">
          <div class="left">毫米</div>
          <div class="right">-999mm</div>
        </div>
        <div class="desc">
          <div class="left">蓄热量</div>
          <div class="right">15t</div>
        </div>
      </div>

      <!-- 低压信息 -->
      <div class="dy1_fl_txt txt">
        <div class="desc">
          <div class="left">瞬时流量:</div>
          <div class="right">2.8Mpa</div>
        </div>
      </div>
      <div class="dy1_pt_txt txt">
        <div class="desc">
          <div class="left">压力:</div>
          <div class="right">30t/h</div>
        </div>
      </div>
      <div class="dy1_dy_txt txt">
        <div class="desc">
          <div class="left">累计流量:</div>
          <div class="right">500t</div>
        </div>
      </div>
      <!-- 分割线低压一和二 -->
      <div class="dy2_fl_txt txt">
        <div class="desc">
          <div class="left">瞬时流量:</div>
          <div class="right">2.8Mpa</div>
        </div>
      </div>
      <div class="dy2_pt_txt txt">
        <div class="desc">
          <div class="left">压力:</div>
          <div class="right">30t/h</div>
        </div>
      </div>
      <div class="dy2_dy_txt txt">
        <div class="desc">
          <div class="left">累计流量:</div>
          <div class="right">500t</div>
        </div>
      </div>
      <!-- 低压信息 -->

      <!-- 中压信息 -->
      <div class="zy1_fm_txt txt">
        <div class="desc">
          <div class="left">阀门信息:</div>
          <div class="right">111</div>
        </div>
      </div>
      <div class="zy1_pt_txt txt">
        <div class="desc">
          <div class="left">压力:</div>
          <div class="right">30t/h</div>
        </div>
      </div>
      <div class="zy1_fl_txt txt">
        <div class="desc">
          <div class="left">瞬时流量:</div>
          <div class="right">2.8Mpa</div>
        </div>
      </div>
      <div class="zy2_fm_txt txt">
        <div class="desc">
          <div class="left">阀门信息:</div>
          <div class="right">111</div>
        </div>
      </div>
      <div class="zy2_pt_txt txt">
        <div class="desc">
          <div class="left">压力:</div>
          <div class="right">30t/h</div>
        </div>
      </div>
      <div class="zy2_fl_txt txt">
        <div class="desc">
          <div class="left">瞬时流量:</div>
          <div class="right">2.8Mpa</div>
        </div>
      </div>
      <!-- 中压信息 -->

      <!-- 转炉详细信息 -->
      <div class="zl" v-for="(val,ind) in zllist" :key="ind">
        <div :class="'zl'+val.id[0]+'_zl_txt txt'">
          <div class="desc">
            <div class="left">累计流量:</div>
            <div class="right">500t</div>
          </div>
        </div>
        <div :class="'zl'+val.id[0]+'_fl1_txt txt'">
          <div class="desc">
            <div class="left">瞬时流量:</div>
            <div class="right">35t/h</div>
          </div>
        </div>
        <div :class="'zl'+val.id[0]+'_cy_txt txt'">
          <div class="desc">
            <div class="left">累计流量:</div>
            <div class="right">100t</div>
          </div>
        </div>
        <div :class="'zl'+val.id[0]+'_fl2_txt txt'">
          <div class="desc">
            <div class="left">瞬时流量:</div>
            <div class="right">10t/h</div>
          </div>
        </div>
      </div>
      <!-- 转炉详细信息 -->
    </div>
    <helloword></helloword>
  </div>
</template>

<script>

import helloword from "../components/fixed";
// @ is an alias to /src
export default {
  name: "index",
  components: {
    helloword
  },
  data() {
    return {
      bool: false,
      zllist: [
        {
          id: [1, 1]
        },
        {
          id: [1, 2]
        },
        {
          id: [2, 1]
        },
        {
          id: [2, 2]
        },
        {
          id: [3, 1]
        },
        {
          id: [3, 2]
        },
        {
          id: [4, 1]
        },
        {
          id: [4, 2]
        }
      ],
      xrqlist: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        },
        {
          id: 6
        },
        {
          id: 7
        },
        {
          id: 8
        },
        {
          id: 9
        },
        {
          id: 10
        },
        {
          id: 11
        },
        {
          id: 12
        }
      ],
      rhlist_pt: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ],
      rhlist_fl: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ],
      rhlist_fl2: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ],
      cyqlist_img: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        },
        {
          id: 6
        },
        {
          id: 7
        },
        {
          id: 8
        },
        {
          id: 9
        },
        {
          id: 10
        },
        {
          id: 11
        },
        {
          id: 12
        }
      ]
    };
  },
  methods: {},
  mounted() {
    let bg = document.getElementsByClassName("bg")[0];
    window.onresize = function() {
      if (document.body.clientWidth < 1920) {
        bg.style.width = "1920px";
      }
    };

    function data() {
      return new Promise((resolve, reject) => {
        let sino = parseInt(Math.random() * 6 + 1);
        setTimeout(() => {
          resolve(sino);
          reject();
        }, 3000);
      });
    }
    async function test() {
      let n = await data();
      console.log(n);
    }
    test();
    
  }
};
</script>
<style scoped>
*,
::after,
::before {
  margin: 0;
  padding: 0;
  list-style: none;
}

.test {
  position: absolute;
  right: 30px;
  top: 10px;
  background: #ffffff;
  width: 160px;
  height: 50px;
  box-shadow: 1px 1px 3px 1px #999999;
  padding: 0 5px;
  border-radius: 5px;
}
.test .tit {
  font-size: 14px;
  font-weight: 600;
  line-height: 30px;
}
.test .desc {
  font-size: 12px;
}
/*公共属性*/
.rh {
  width: 115px;
  height: 175px;
}

.pt {
  width: 22px;
  height: 44px;
}

.fl {
  width: 25px;
  height: 50px;
}

.jqf {
  width: 30px;
  height: 30px;
}

.fm-left,
.fm-right {
  width: 30px;
  height: 40px;
}

.jwc {
  width: 75px;
  height: 60px;
}

.zl {
  width: 90px;
  height: 115px;
}

.cyq {
  width: 33px;
  height: 44px;
}

.fm {
  width: 25px;
  height: 50px;
}
/*公共属性 */

.head {
  width: 1920px;
  position: absolute;
  top: 10px;
}
.head .tit {
  text-align: center;
  color: #ffffff;
  font-size: 30px;
  line-height: 40px;
  font-weight: 600;
  padding-left: 120px;
}
.head-top {
  position: absolute;
  top: 20px;
  left: 120px;
}
.zl1 {
  position: absolute;
  left: 425px;
  top: 589px;
}

.zl1_fl1 {
  position: absolute;
  left: 547px;
  top: 565px;
}

.zl1_fl2 {
  position: absolute;
  left: 482px;
  top: 710px;
}

.zl1_cyq {
  position: absolute;
  left: 438px;
  top: 750px;
  width: 33px;
}

.zl2 {
  position: absolute;
  left: 560px;
  top: 665px;
}

.zl2_fl1 {
  position: absolute;
  left: 680px;
  top: 642px;
}

.zl2_fl2 {
  position: absolute;
  left: 615px;
  top: 785px;
}

.zl2_cyq {
  position: absolute;
  left: 570px;
  top: 825px;
}

.zl3 {
  position: absolute;
  left: 695px;
  top: 745px;
}

.zl3_fl1 {
  position: absolute;
  left: 812px;
  top: 718px;
}

.zl3_fl2 {
  position: absolute;
  left: 747px;
  top: 865px;
}

.zl3_cyq {
  position: absolute;
  left: 703px;
  top: 900px;
}

.zl4 {
  position: absolute;
  left: 830px;
  top: 822px;
}

.zl4_fl1 {
  position: absolute;
  left: 945px;
  top: 795px;
}

.zl4_fl2 {
  position: absolute;
  left: 880px;
  top: 940px;
}

.zl4_cyq {
  position: absolute;
  left: 835px;
  top: 980px;
}

.zl1_fm {
  position: absolute;
  left: 577px;
  top: 540px;
}

.zl2_fm {
  position: absolute;
  left: 710px;
  top: 618px;
}

.zl3_fm {
  position: absolute;
  left: 842px;
  top: 693px;
}

.zl4_fm {
  position: absolute;
  left: 975px;
  top: 770px;
}

.jw1 {
  position: absolute;
  top: 360px;
  left: 1290px;
}

.jw2 {
  position: absolute;
  top: 580px;
  left: 1650px;
}

.rh1 {
  position: absolute;
  left: 205px;
  top: 300px;
}

.rh2 {
  position: absolute;
  left: 370px;
  top: 212px;
}

.rh3 {
  position: absolute;
  left: 1579px;
  top: 730px;
}

.rh1_pt {
  position: absolute;
  left: 328px;
  top: 422px;
}

.rh1_fl {
  position: absolute;
  left: 373px;
  top: 450px;
}

.rh1_jqf {
  position: absolute;
  left: 402px;
  top: 499px;
}

.rh2_pt {
  position: absolute;
  left: 487px;
  top: 332px;
}

.rh2_fl {
  position: absolute;
  left: 532px;
  top: 360px;
}

.rh2_jqf {
  position: absolute;
  left: 562px;
  top: 405px;
}

.rh3_pt {
  position: absolute;
  left: 1557px;
  top: 857px;
}

.rh3_fl {
  position: absolute;
  left: 1507px;
  top: 887px;
}

.rh3_jqf {
  position: absolute;
  left: 1450px;
  top: 947px;
  transform: rotate(115deg);
}

.crq img {
  width: 100%;
  height: 100%;
}

.crq .num {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 24px;
  color: #000;
  font-weight: 600;
  transform: translate(-50%, -50%);
}

.crq {
  position: absolute;
  width: 110px;
  height: 60px;
}

.crq_1 {
  left: 692px;
  top: 400px;
}

.crq_2 {
  left: 815px;
  top: 330px;
}

.crq_3 {
  left: 935px;
  top: 260px;
}

.crq_4 {
  left: 886px;
  top: 522px;
}

.crq_5 {
  left: 1010px;
  top: 455px;
}

.crq_6 {
  left: 1130px;
  top: 385px;
}

.crq_7 {
  left: 1068px;
  top: 615px;
}

.crq_8 {
  left: 1190px;
  top: 546px;
}

.crq_9 {
  left: 1308px;
  top: 477px;
}

.crq_10 {
  left: 1262px;
  top: 738px;
}

.crq_11 {
  left: 1380px;
  top: 671px;
}

.crq_12 {
  left: 1500px;
  top: 600px;
}
.jwc1 {
  position: absolute;
  left: 1288px;
  top: 360px;
}
.jwc2 {
  position: absolute;
  left: 1650px;
  top: 580px;
}
.dy1 {
  position: absolute;
  top: 110px;
  left: 1317px;
  width: 65px;
  height: 44px;
}

.dy1_fl {
  position: absolute;
  top: 125px;
  left: 1283px;
}

.dy1_pt {
  position: absolute;
  top: 148px;
  left: 1244px;
}

.dy1_fm {
  position: absolute;
  left: 1210px;
  top: 185px;
}

.xrq_fm1 {
  position: absolute;
  left: 793px;
  top: 435px;
}

.xrq_pt1 {
  position: absolute;
  left: 929px;
  top: 364px;
}

.xrq_fm2 {
  position: absolute;
  left: 1167px;
  top: 643px;
}

.xrq_pt2 {
  position: absolute;
  left: 1300px;
  top: 582px;
}

.zy1_fl {
  position: absolute;
  left: 1232px;
  top: 245px;
}

.zy1_pt {
  position: absolute;
  left: 1270px;
  top: 265px;
}

.zy1_fm {
  position: absolute;
  top: 305px;
  left: 1302px;
}

.zy2_fl {
  position: absolute;
  left: 1495px;
  top: 398px;
}

.zy2_pt {
  position: absolute;
  left: 1465px;
  top: 380px;
}

.zy2_fm {
  position: absolute;
  top: 380px;
  left: 1430px;
}

.dy2 {
  position: absolute;
  top: 325px;
  left: 1690px;
  width: 65px;
  height: 44px;
}

.dy2_fl {
  position: absolute;
  top: 340px;
  left: 1657px;
}

.dy2_pt {
  position: absolute;
  top: 365px;
  left: 1617px;
}

.dy2_fm {
  position: absolute;
  left: 1582px;
  top: 399px;
}

.bg {
  width: 1920px;
  height: 1080px;
  background: url("../../public/images/pic003.png");
  background-size: 1920px 1080px;
  position: relative;
}

.txt {
  /*弹窗设置 */
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  color: #ffffff;
  /* display: none; */
}
.txt .tit {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  line-height: 30px;
}
.txt .tit .left {
  color: #ffffff;
}
.txt .tit .right_on {
  /* 按钮开启 */
  color: green;
}
.txt .tit .right_off {
  /* 按钮关闭 */
  color: red;
}

.txt .desc {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  line-height: 30px;
}
.rh_1_pt_txt {
  position: absolute;
  left: 300px;
  top: 340px;
  width: 100px;
  height: 30px;
  border-radius: 10px;
}

.rh_1_fl_txt {
  position: absolute;
  left: 400px;
  top: 430px;
  width: 80px;
  height: 30px;
  border-radius: 10px;
}

.rh_1_fl2_txt {
  position: absolute;
  left: 350px;
  top: 390px;
  width: 100px;
  height: 30px;
  border-radius: 10px;
}

.rh_2_pt_txt {
  position: absolute;
  left: 450px;
  top: 225px;
  width: 100px;
  height: 30px;
  border-radius: 10px;
}

.rh_2_fl_txt {
  position: absolute;
  left: 560px;
  top: 340px;
  width: 80px;
  height: 30px;
  border-radius: 10px;
}

.rh_2_fl2_txt {
  position: absolute;
  left: 510px;
  top: 310px;
  width: 80px;
  height: 30px;
  border-radius: 10px;
}

.rh_3_pt_txt {
  position: absolute;
  left: 1700px;
  top: 780px;
  width: 100px;
  height: 30px;
  border-radius: 10px;
}

.rh_3_fl_txt {
  position: absolute;
  left: 1415px;
  top: 885px;
  width: 80px;
  height: 30px;
  border-radius: 10px;
}

.rh_3_fl2_txt {
  position: absolute;
  left: 1480px;
  top: 820px;
  width: 80px;
  height: 30px;
  border-radius: 10px;
}

.xrq_1_txt {
  left: 660px;
  top: 280px;
}

.xrq_1_txt,
.xrq_2_txt {
  position: absolute;
  width: 100px;
  height: 120px;
  border-radius: 10px;
}

.xrq_2_txt {
  left: 775px;
  top: 230px;
}

.xrq_2_pt_txt {
  position: absolute;
  left: 900px;
  top: 410px;
  width: 80px;
  height: 30px;
  border-radius: 10px;
}

.xrq_3_txt {
  position: absolute;
  left: 895px;
  top: 160px;
  width: 100px;
  height: 120px;
  border-radius: 10px;
}

.xrq_4_txt {
  left: 790px;
  top: 500px;
}

.xrq_4_txt,
.xrq_5_txt {
  position: absolute;
  width: 100px;
  height: 120px;
  border-radius: 10px;
}

.xrq_5_txt {
  left: 1005px;
  top: 350px;
}

.xrq_6_txt {
  left: 1120px;
  top: 280px;
}

.xrq_6_txt,
.xrq_7_txt {
  position: absolute;
  width: 100px;
  height: 120px;
  border-radius: 10px;
}

.xrq_7_txt {
  left: 990px;
  top: 540px;
}

.xrq_8_txt {
  position: absolute;
  left: 1110px;
  top: 475px;
  width: 100px;
  height: 120px;
  border-radius: 10px;
}

.xrq_8_pt_txt {
  position: absolute;
  left: 1300px;
  top: 615px;
  width: 90px;
  height: 30px;
  border-radius: 10px;
}

.xrq_9_txt {
  left: 1235px;
  top: 410px;
}

.xrq_9_txt,
.xrq_10_txt {
  position: absolute;
  width: 100px;
  height: 120px;
  border-radius: 10px;
}

.xrq_10_txt {
  left: 1340px;
  top: 770px;
}

.xrq_11_txt {
  left: 1460px;
  top: 695px;
}

.xrq_11_txt,
.xrq_12_txt {
  position: absolute;
  width: 100px;
  height: 120px;
  border-radius: 10px;
}

.xrq_12_txt {
  left: 1580px;
  top: 625px;
}

.dy1_fl_txt {
  left: 1190px;
  top: 95px;
}

.dy1_fl_txt,
.dy1_pt_txt {
  position: absolute;
  width: 100px;
  height: 30px;
  border-radius: 10px;
}

.dy1_pt_txt {
  left: 1135px;
  top: 130px;
}

.dy1_dy_txt {
  left: 1300px;
  top: 75px;
}

.dy1_dy_txt,
.zy1_fm_txt {
  position: absolute;
  width: 90px;
  height: 30px;
  border-radius: 10px;
}

.zy1_fm_txt {
  left: 1330px;
  top: 295px;
}

.zy1_pt_txt {
  left: 1295px;
  top: 262px;
}

.zy1_fl_txt,
.zy1_pt_txt {
  position: absolute;
  width: 100px;
  height: 30px;
  border-radius: 10px;
}
.zy1_fl_txt {
  left: 1255px;
  top: 230px;
}

.zy2_fm_txt {
  left: 1350px;
  top: 415px;
}
.zy2_fm_txt,
.zy2_pt_txt {
  position: absolute;
  width: 90px;
  height: 30px;
  border-radius: 10px;
}

.zy2_pt_txt {
  left: 1450px;
  top: 345px;
}

.zy2_fl_txt {
  position: absolute;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  top: 445px;
  left: 1420px;
}
.dy2_fl_txt {
  position: absolute;
  width: 100px;
  height: 30px;
  border-radius: 10px;
}

.dy2_fl_txt {
  top: 385px;
  left: 1660px;
}

.dy2_pt_txt {
  left: 1555px;
  top: 335px;
}

.dy2_dy_txt,
.dy2_pt_txt {
  position: absolute;
  width: 90px;
  height: 30px;
  border-radius: 10px;
}
.dy2_dy_txt {
  left: 1660px;
  top: 290px;
}

.zl1_zl_txt {
  position: absolute;
  left: 420px;
  top: 560px;
  width: 90px;
  height: 30px;
  border-radius: 10px;
}
.zl1_cy_txt {
  position: absolute;
  left: 390px;
  top: 800px;
  width: 90px;
  height: 30px;
  border-radius: 10px;
}
.zl1_fl1_txt {
  position: absolute;
  left: 575px;
  top: 565px;
  width: 90px;
  height: 30px;
  border-radius: 10px;
}
.zl1_fl2_txt {
  position: absolute;
  left: 375px;
  top: 710px;
  width: 90px;
  height: 30px;
  border-radius: 10px;
}

.zl2_zl_txt {
  position: absolute;
  left: 560px;
  top: 630px;
  width: 90px;
  height: 30px;
  border-radius: 10px;
}
.zl2_cy_txt {
  position: absolute;
  left: 500px;
  top: 875px;
  width: 90px;
  height: 30px;
  border-radius: 10px;
}
.zl2_fl1_txt {
  position: absolute;
  left: 710px;
  top: 640px;
  width: 90px;
  height: 30px;
  border-radius: 10px;
}
.zl2_fl2_txt {
  position: absolute;
  left: 510px;
  top: 785px;
  width: 90px;
  height: 30px;
  border-radius: 10px;
}

.zl3_zl_txt {
  position: absolute;
  left: 700px;
  top: 715px;
  width: 90px;
  height: 30px;
  border-radius: 10px;
}
.zl3_cy_txt {
  position: absolute;
  left: 635px;
  top: 950px;
  width: 90px;
  height: 30px;
  border-radius: 10px;
}
.zl3_fl1_txt {
  position: absolute;
  left: 840px;
  top: 715px;
  width: 90px;
  height: 30px;
  border-radius: 10px;
}
.zl3_fl2_txt {
  position: absolute;
  left: 645px;
  top: 865px;
  width: 90px;
  height: 30px;
  border-radius: 10px;
}

.zl4_zl_txt {
  position: absolute;
  left: 820px;
  top: 795px;
  width: 90px;
  height: 30px;
  border-radius: 10px;
}
.zl4_cy_txt {
  position: absolute;
  left: 765px;
  top: 1030px;
  width: 90px;
  height: 30px;
  border-radius: 10px;
}
.zl4_fl1_txt {
  position: absolute;
  left: 970px;
  top: 835px;
  width: 90px;
  height: 30px;
  border-radius: 10px;
}
.zl4_fl2_txt {
  position: absolute;
  left: 900px;
  top: 985px;
  width: 90px;
  height: 30px;
  border-radius: 10px;
}
</style>