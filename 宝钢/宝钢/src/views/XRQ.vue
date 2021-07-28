<template>
  <div id="XRQ" class="xrq">
    <div class="nav">
      <div @click="tog=4" :class="tog==4?'liii':'li'">蓄热量</div>
      <div @click="tog=1" :class="tog==1?'liii':'li'">压力</div>
      <div @click="tog=2" :class="tog==2?'liii':'li'">温度</div>
      <div @click="tog=3" :class="tog==3?'liii':'li'">液位</div>
    </div>
    <div class="head">蓄热器运行详情</div>
    <div class="row-a1">
      <div class="con" v-for="(val,ind) in con_data" :key="ind">
        <div class="echarts">
          <div :id="'echart_'+(ind+1)+'_'+val.one" class="echart" v-show="tog==val.one"></div>
          <div :id="'echart_'+(ind+1)+'_'+val.two" class="echart" v-show="tog==val.two"></div>
          <div :id="'echart_'+(ind+1)+'_'+val.three" class="echart" v-show="tog==val.three"></div>
          <div :id="'echart_'+(ind+1)+'_'+val.four" class="echart" v-show="tog==val.four"></div>
        </div>
        <div class="desc">
          <div class="txt" v-show="tog==1">
            <div class="a1">实时压力:</div>
            <div class="a2">
              <div class="num">100</div>
              <div class="dan">Mpa</div>
            </div>
          </div>
          <div class="txt" v-show="tog==2">
            <div class="a1">实时温度:</div>
            <div class="a2">
              <div class="num">100</div>
              <div class="dan">℃</div>
            </div>
          </div>
          <div class="txt" v-show="tog==3">
            <div class="a1">实时液位:</div>
            <div class="a2">
              <div class="num">100</div>
              <div class="dan">ml</div>
            </div>
          </div>
          <div class="txt" v-show="tog==4">
            <div class="a1">实时蓄热量:</div>
            <div class="a2">
              <div class="num">100</div>
              <div class="dan">单位</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row-a2">
      <div class="con">
        <div class="tit">蓄热量表汇总</div>
        <div class="echart" id="echart_13_4"></div>
        <div class="desc">
          <div class="txt">
            <div class="a1">实时热量:</div>
            <div class="a2">
              <div class="num">100</div>
              <div class="dan">单位</div>
            </div>
          </div>
        </div>
      </div>

      <div class="con">
        <div class="tit">压力表汇总</div>
        <div class="echart" id="echart_13_1"></div>
        <div class="desc">
          <div class="txt">
            <div class="a1">实时压力:</div>
            <div class="a2">
              <div class="num">100</div>
              <div class="dan">Mpa</div>
            </div>
          </div>
        </div>
      </div>
      <div class="con">
        <div class="tit">温度表汇总</div>
        <div class="echart" id="echart_13_2"></div>
        <div class="desc">
          <div class="txt">
            <div class="a1">实时温度:</div>
            <div class="a2">
              <div class="num">100</div>
              <div class="dan">℃</div>
            </div>
          </div>
        </div>
      </div>
      <div class="con">
        <div class="tit">液位表汇总</div>
        <div class="echart" id="echart_13_3"></div>
        <div class="desc">
          <div class="txt">
            <div class="a1">实时液位:</div>
            <div class="a2">
              <div class="num">100</div>
              <div class="dan">ml</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <helloword></helloword>
  </div>
</template>
<script>
import { GetZLData } from "../config/api";
import helloword from "../components/fixed";
let echarts = require("echarts");
export default {
  components: {
    helloword
  },
  data() {
    return {
      real: [
        {
          first: [5, 20, 36],
          second: [5, 20, 36],
          third: [5, 20, 36]
        },
        {
          first: [5, 20, 36],
          second: [5, 20, 36],
          third: [5, 20, 36]
        },
        {
          first: [5, 20, 36],
          second: [5, 20, 36],
          third: [5, 20, 36]
        },
        {
          first: [5, 20, 36],
          second: [5, 20, 36],
          third: [5, 20, 36]
        },
        {
          first: [5, 20, 36],
          second: [5, 20, 36],
          third: [5, 20, 36]
        },
        {
          first: [5, 20, 36],
          second: [5, 20, 36],
          third: [5, 20, 36]
        },
        {
          first: [5, 20, 36],
          second: [5, 20, 36],
          third: [5, 20, 36]
        },
        {
          first: [5, 20, 36],
          second: [5, 20, 36],
          third: [5, 20, 36]
        },
        {
          first: [5, 20, 36],
          second: [5, 20, 36],
          third: [5, 20, 36]
        },
        {
          first: [5, 20, 36],
          second: [5, 20, 36],
          third: [5, 20, 36]
        },
        {
          first: [5, 20, 36],
          second: [5, 20, 36],
          third: [5, 20, 36]
        },
        {
          first: [5, 20, 36],
          second: [5, 20, 36],
          third: [5, 20, 36]
        },
        {
          first: [5, 20, 36],
          second: [5, 20, 36],
          third: [5, 20, 36]
        },
        {
          first: [5, 20, 36],
          second: [5, 20, 36],
          third: [5, 20, 36]
        }
      ],
      sham: [
        {
          first: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          second: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          third: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60]
        },
        {
          first: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          second: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          third: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60]
        },
        {
          first: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          second: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          third: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60]
        },
        {
          first: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          second: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          third: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60]
        },
        {
          first: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          second: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          third: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60]
        },
        {
          first: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          second: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          third: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60]
        },
        {
          first: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          second: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          third: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60]
        },
        {
          first: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          second: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          third: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60]
        },
        {
          first: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          second: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          third: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60]
        },
        {
          first: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          second: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          third: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60]
        },
        {
          first: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          second: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          third: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60]
        },
        {
          first: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          second: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          third: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60]
        },
        {
          first: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          second: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60],
          third: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60]
        }
      ],
      tog: 4,
      con_data: [
        {
          one: 1,
          two: 2,
          three: 3,
          four: 4
        },
        {
          one: 1,
          two: 2,
          three: 3,
          four: 4
        },
        {
          one: 1,
          two: 2,
          three: 3,
          four: 4
        },
        {
          one: 1,
          two: 2,
          three: 3,
          four: 4
        },
        {
          one: 1,
          two: 2,
          three: 3,
          four: 4
        },
        {
          one: 1,
          two: 2,
          three: 3,
          four: 4
        },
        {
          one: 1,
          two: 2,
          three: 3,
          four: 4
        },
        {
          one: 1,
          two: 2,
          three: 3,
          four: 4
        },
        {
          one: 1,
          two: 2,
          three: 3,
          four: 4
        },
        {
          one: 1,
          two: 2,
          three: 3,
          four: 4
        },
        {
          one: 1,
          two: 2,
          three: 3,
          four: 4
        },
        {
          one: 1,
          two: 2,
          three: 3,
          four: 4
        }
      ],
      time: []
    };
  },
  methods: {
    yali() {
      /*压力表 */
      for (let i = 0; i < 13; i++) {
        let myChart1 = echarts.init(
          document.getElementById("echart_" + (i + 1) + "_1")
        );
        let tabtit = i + 1 + "号压力表";
        if (i == 12) tabtit = "";
        myChart1.setOption({
          backgroundColor: "rgba(0,0,0,0.5)",
          legend: {
            data: ["压力", "预测压力"],
            right: "right", //缩小数据的定位
            textStyle: {
              color: "#ffffff"
            }
          },
          title: {
            text: tabtit,
            textStyle: {
              color: "#fac858"
            },
            left: "center",
            subtextStyle: {
              color: "#ffffff",
              align: "center"
            }
          },
          textStyle: {
            color: "#ffffff"
          },
          tooltip: {},
          xAxis: {
            data: this.time,
            axisLabel: {
              formatter: "{value}h" //y轴单位
            }
          },
          yAxis: {
            name: "压力(Mpa)"
            // axisLabel: {
            //   formatter: "{value}Mpa" //y轴单位
            // }
          },
          series: [
            {
              name: "压力",
              type: "line",
              data: this.real[i].first,
              color: "#fac858",
              smooth: true
            },
            {
              name: "预测压力",
              type: "line",
              data: this.sham[i].first,
              color: "#999999",
              smooth: true,
              itemStyle: {
                normal: {
                  lineStyle: {
                    width: 2,
                    type: "dotted" //'dotted'虚线 'solid'实线
                  }
                }
              }
            }
          ]
        });
      }
    },
    wendu() {
      /**温度表 */
      for (let i = 0; i < 13; i++) {
        let myChart = echarts.init(
          document.getElementById("echart_" + (i + 1) + "_2")
        );
        let tabtit = i + 1 + "号温度表";
        if (i == 12) tabtit = "";
        myChart.setOption({
          backgroundColor: "rgba(0,0,0,0.5)",
          legend: {
            data: ["温度", "预测温度"],
            right: "right", //缩小数据的定位
            textStyle: {
              color: "#ffffff"
            }
          },
          textStyle: {
            color: "#ffffff"
          },
          title: {
            text: tabtit,
            textStyle: {
              color: "#8bbe7d"
            },
            left: "center",
            subtextStyle: {
              color: "#ffffff",
              align: "center"
            }
          },
          tooltip: {},
          xAxis: {
            axisLabel: {
              formatter: "{value}h" //y轴单位
            },
            data: this.time
          },
          yAxis: {
            name: "温度(℃)",
            axisLabel: {
              formatter: "{value}℃" //y轴单位
            },
            type: "value"
          },
          series: [
            {
              name: "温度",
              type: "line",
              data: this.real[i].second,
              color: "#8bbe7d",
              smooth: true
            },
            {
              name: "预测温度",
              type: "line",
              data: this.sham[i].second,
              color: "#999999",
              smooth: true,
              itemStyle: {
                normal: {
                  lineStyle: {
                    width: 2,
                    type: "dotted" //'dotted'虚线 'solid'实线
                  }
                }
              }
            }
          ]
        });
      }
    },
    yewei() {
      /**液位表 */
      for (let i = 0; i < 13; i++) {
        let myChart = echarts.init(
          document.getElementById("echart_" + (i + 1) + "_3")
        );
        let tabtit = i + 1 + "号液位表";
        if (i == 12) tabtit = "";
        myChart.setOption({
          backgroundColor: "rgba(0,0,0,0.5)",
          legend: {
            data: ["液位", "预测液位"],
            right: "right", //缩小数据的定位
            textStyle: {
              color: "#ffffff"
            }
          },
          textStyle: {
            color: "#ffffff"
          },
          title: {
            text: tabtit,
            textStyle: {
              color: "#4a68c0"
            },
            left: "center",
            subtextStyle: {
              color: "#ffffff",
              align: "center"
            }
          },
          tooltip: {},
          xAxis: {
            axisLabel: {
              formatter: "{value}h" //y轴单位
            },
            data: this.time
          },
          yAxis: {
            name: "液位(ml)",
            axisLabel: {
              formatter: "{value}ml" //y轴单位
            },
            type: "value"
          },
          series: [
            {
              name: "液位",
              type: "line",
              data: this.real[i].third,
              color: "#4a68c0",
              smooth: true
            },
            {
              name: "预测液位",
              type: "line",
              data: this.sham[i].third,
              color: "#999999",
              smooth: true,
              itemStyle: {
                normal: {
                  lineStyle: {
                    width: 2,
                    type: "dotted" //'dotted'虚线 'solid'实线
                  }
                }
              }
            }
          ]
        });
      }
    },
    xrq() {
      /**蓄热量 */
      for (let i = 0; i < 13; i++) {
        let myChart = echarts.init(
          document.getElementById("echart_" + (i + 1) + "_4")
        );
        let tabtit = i + 1 + "号蓄热表";
        if (i == 12) tabtit = "";
        myChart.setOption({
          backgroundColor: "rgba(0,0,0,0.5)",
          legend: {
            data: ["蓄热值", "预测蓄热值"],
            right: "right", //缩小数据的定位
            textStyle: {
              color: "#ffffff"
            }
          },
          textStyle: {
            color: "#ffffff"
          },
          title: {
            text: tabtit,
            textStyle: {
              color: "#ee6666"
            },
            left: "center",
            subtextStyle: {
              color: "#ffffff",
              align: "center"
            }
          },
          tooltip: {},
          xAxis: {
            axisLabel: {
              formatter: "{value}h" //y轴单位
            },
            data: this.time
          },
          yAxis: {
            name: "液位(ml)",
            axisLabel: {
              formatter: "{value}ml" //y轴单位
            },
            type: "value"
          },
          series: [
            {
              name: "蓄热值",
              type: "line",
              data: this.real[i].third,
              color: "#ee6666",
              smooth: true
            },
            {
              name: "预测蓄热值",
              type: "line",
              data: this.sham[i].third,
              color: "#999999",
              smooth: true,
              itemStyle: {
                normal: {
                  lineStyle: {
                    width: 2,
                    type: "dotted" //'dotted'虚线 'solid'实线
                  }
                }
              }
            }
          ]
        });
      }
    }
  },
  async mounted() {
    let that = this;

    // for (let i = 0; i < array.length; i++) {
    //   // if(i==0) 
    //   // if(i==)
    // }

    await GetZLData(64).then(res => {
      var time = [];
      var data = [];
      var data2 = [];
      for (let key in res.dicAll) {
        let text = "";
        text = key.toString().substr(8, 2);
        time.push(text);
        data.push(res.dicAll[key]);
      }
      for (let key in res.dicPre) {
        data2.push(res.dicPre[key]);
      }
      this.time = time;
      this.real[0].first = data;
      this.sham[0].first = data2;
    });

    await GetZLData(66).then(res => {
      var data = [];
      var data2 = [];
      for (let key in res.dicAll) {
        data.push(res.dicAll[key]);
      }
      for (let key in res.dicPre) {
        data2.push(res.dicPre[key]);
      }
      this.real[0].second = data;
      this.sham[0].second = data2;
    });

    await GetZLData(68).then(res => {
      var data = [];
      var data2 = [];
      for (let key in res.dicAll) {
        data.push(res.dicAll[key]);
      }
      for (let key in res.dicPre) {
        data2.push(res.dicPre[key]);
      }
      this.real[0].third = data;
      this.sham[0].third = data2;
    });

    that.yali();
    that.wendu();
    that.yewei();
    that.xrq();
  },
  updated() {}
};
</script>
<style scoped>
@import url("../../public/css/head.css");
.nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 15px;
  left: 120px;
}
.nav .li {
  width: 120px;
  line-height: 35px;
  background: #4a68c0;
  text-align: center;
  border-radius: 5px;
  color: #ffffff;
  border-left: solid 1px #ffffff;
  border-right: solid 1px #ffffff;
  margin-right: 5px;
}
.nav .li:hover {
  cursor: pointer;
  background: gold;
}
.nav .liii {
  cursor: pointer;
  background: gold;
}
.nav .liii {
  width: 120px;
  line-height: 35px;
  background: orange;
  text-align: center;
  border-radius: 5px;
  color: #ffffff;
  border-left: solid 1px #ffffff;
  border-right: solid 1px #ffffff;
  margin-right: 5px;
  font-weight: 600;
  font-size: 18px;
}
.xrq {
  width: 1920px;
  height: 1080px;
  background-size: 1920px 1080px;
  position: relative;
  background: url("../../public/images/pic005.png");
}
.row-a1 {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 120px;
  margin-bottom: 15px;
}
.row-a1 .con {
  display: flex;
  width: 23%;
  flex-direction: column;
  margin-bottom: 10px;
  border: solid 1px rgba(255, 255, 255, 0.5);
  background: linear-gradient(#ffffff, #ffffff) left top,
    linear-gradient(#ffffff, #ffffff) left top,
    linear-gradient(#ffffff, #ffffff) right top,
    linear-gradient(#ffffff, #ffffff) right top,
    linear-gradient(#ffffff, #ffffff) left bottom,
    linear-gradient(#ffffff, #ffffff) left bottom,
    linear-gradient(#ffffff, #ffffff) right bottom,
    linear-gradient(#ffffff, #ffffff) right bottom;
  background-repeat: no-repeat;
  background-size: 3px 30px, 30px 3px;
}
.row-a1 .tit {
  color: #ffffff;
  text-align: center;
  font-size: 24px;
}
.row-a1 .con .echarts {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.row-a1 .con .echarts .echart {
  margin-top: 5px;
  width: 400px;
  height: 180px;
}
.row-a1 .con .desc {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  color: #ffffff;
}
.row-a1 .con .desc .txt {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding: 3px 0;
}
.row-a1 .con .desc .txt .a2 {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100px;
  align-items: center;
}
.row-a1 .con .desc .txt .num {
  font-size: 18px;
  margin: 0 5px;
  font-weight: 600;
  color: chartreuse;
}

.row-a2 {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-left: 120px;
}
.row-a2 .con {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 24%;
  margin: 0 0.5%;
  border: solid 1px rgba(255, 255, 255, 0.5);
  background: linear-gradient(#ffffff, #ffffff) left top,
    linear-gradient(#ffffff, #ffffff) left top,
    linear-gradient(#ffffff, #ffffff) right top,
    linear-gradient(#ffffff, #ffffff) right top,
    linear-gradient(#ffffff, #ffffff) left bottom,
    linear-gradient(#ffffff, #ffffff) left bottom,
    linear-gradient(#ffffff, #ffffff) right bottom,
    linear-gradient(#ffffff, #ffffff) right bottom;
  background-repeat: no-repeat;
  background-size: 3px 30px, 30px 3px;
}
.row-a2 .con .tit {
  font-size: 18px;
  color: #ffffff;
  font-weight: 600;
  top: 10px;
  position: absolute;
  z-index: 1;
}
.row-a2 .con:nth-child(2) .tit {
  color: #fac858;
}
.row-a2 .con:nth-child(3) .tit {
  color: #8bbe7d;
}
.row-a2 .con:nth-child(4) .tit {
  color: #4a68c0;
}
.row-a2 .con:nth-child(1) .tit {
  color: #ee6666;
}
.row-a2 .con .echart {
  margin-top: 5px;
  width: 425px;
  height: 280px;
}

.row-a2 .con .desc {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  color: #ffffff;
}
.row-a2 .con .desc .txt {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding: 3px 0;
}
.row-a2 .con .desc .txt .a2 {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100px;
  align-items: center;
}
.row-a2 .con .desc .txt .num {
  font-size: 18px;
  margin: 0 5px;
  font-weight: 600;
  color: chartreuse;
}
</style>