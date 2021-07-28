<template>
  <div id="DYSQ" class="dysq">
    <div class="head">中压运行详情</div>
    <div class="row-a1">
      <div class="con">
        <div id="echart_1_1" class="echart"></div>
        <div class="tao">
          <div class="desc">
            <div class="txt">
              <div class="a1">中压总管压力:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan">Mp5</div>
              </div>
            </div>
            <div class="txt">
              <div class="a1">中压送汽温度:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan">℃</div>
              </div>
            </div>
            <div class="txt">
              <div class="a1">中压送汽累计流量:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan">t</div>
              </div>
            </div>
          </div>
          <div class="mingci"></div>
        </div>
      </div>
      <div class="con">
        <div id="echart_2_1" class="echart"></div>
        <div class="tao">
          <div class="desc">
            <div class="txt">
              <div class="a1">中压总管压力:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan">Mp5</div>
              </div>
            </div>
            <div class="txt">
              <div class="a1">中压送汽温度:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan">℃</div>
              </div>
            </div>
            <div class="txt">
              <div class="a1">中压送汽累计流量:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan">t</div>
              </div>
            </div>
          </div>
          <div class="mingci"></div>
        </div>
      </div>
      <div class="con">
        <div id="echart_3_1" class="echart"></div>
        <div class="tao">
          <div class="desc">
            <div class="txt">
              <div class="a1">中压总管总压力:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan">Mp5</div>
              </div>
            </div>
            <div class="txt">
              <div class="a1">中压送汽总温度:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan">℃</div>
              </div>
            </div>
            <div class="txt">
              <div class="a1">中压送汽总流量:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan">t</div>
              </div>
            </div>
          </div>
          <div class="mingci"></div>
        </div>
      </div>
      <div class="con">
        <div id="echart_1_2" class="echart"></div>
        <div class="tao">
          <div class="desc">
            <div class="txt">
              <div class="a1">中压总管压力:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan">Mp5</div>
              </div>
            </div>
            <div class="txt">
              <div class="a1">中压送汽温度:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan">℃</div>
              </div>
            </div>
            <div class="txt">
              <div class="a1">中压送汽累计流量:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan">t</div>
              </div>
            </div>
          </div>
          <div class="mingci"></div>
        </div>
      </div>
      <div class="con">
        <div id="echart_2_2" class="echart"></div>
        <div class="tao">
          <div class="desc">
            <div class="txt">
              <div class="a1">中压总管压力:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan">Mp5</div>
              </div>
            </div>
            <div class="txt">
              <div class="a1">中压送汽温度:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan">℃</div>
              </div>
            </div>
            <div class="txt">
              <div class="a1">中压送汽累计流量:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan">t</div>
              </div>
            </div>
          </div>
          <div class="mingci"></div>
        </div>
      </div>
      <div class="con">
        <div id="echart_3_2" class="echart"></div>
        <div class="tao">
          <div class="desc">
            <div class="txt">
              <div class="a1">中压总管总压力:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan">Mp5</div>
              </div>
            </div>
            <div class="txt">
              <div class="a1">中压送汽总温度:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan">℃</div>
              </div>
            </div>
            <div class="txt">
              <div class="a1">中压送汽总流量:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan">t</div>
              </div>
            </div>
          </div>
          <div class="mingci"></div>
        </div>
      </div>
    </div>
    <helloword></helloword>
  </div>
</template>
<script>
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
          tab: [29, 35, 36],
        },
        {
          tab: [35, 57, 36],
        },
        {
          tab: [60, 33, 36],
        }
      ],
      sham: [
        {
          tab: [30, 35, 45, 40, 35, 40, 45, 55, 55, 60]
        },
        {
          tab: [30, 35, 45, 40, 35, 40, 45, 55, 55, 60]
        },
        {
          tab: [30, 35, 45, 40, 35, 40, 45, 55, 55, 60]
        }
      ]
    };
  },
  methods: {
    liuliang() {
      for (let i = 0; i < 3; i++) {
        let tabtit = i + 1 + "号中压送汽表";
        let myChart = echarts.init(
          document.getElementById("echart_" + (i + 1) + "_1")
        );
        if (i == 2) tabtit = "中压送汽汇总表";
        myChart.setOption({
          backgroundColor: "rgba(0,0,0,0.5)",
          legend: {
            data: ["送汽流量", "模拟送汽流量"],
            right: "right", //缩小数据的定位
            textStyle: {
              color: "#ffffff"
            }
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
          textStyle: {
            color: "#ffffff"
          },
          tooltip: {},
          xAxis: {
            data: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12"
            ],
            name: "时长(h)",
            axisLabel: {
              formatter: "{value}h" //y轴单位
            } //x轴单位
          },
          yAxis: {
            name: "流量(t)",
            axisLabel: {
              formatter: "{value}t" //y轴单位
            }
          },
          series: [
            {
              name: "送汽流量",
              type: "line",
              data: this.real[i].tab,
              smooth: true
            },
            {
              name: "模拟送汽流量",
              type: "line",
              data: this.sham[i].tab,
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
    yali() {
      for (let i = 0; i < 3; i++) {
        let tabtit = i + 1 + "号中压压力表";
        let myChart = echarts.init(
          document.getElementById("echart_" + (i + 1) + "_2")
        );
        if (i == 2) tabtit = "中压压力汇总表";
        myChart.setOption({
          backgroundColor: "rgba(0,0,0,0.5)",
          legend: {
            data: ["压力", "模拟压力"],
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
            data: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12"
            ],
            axisLabel: {
              formatter: "{value}h" //y轴单位
            } //x轴单位
          },
          yAxis: [
             {
              name: "t/h",
              axisLabel: {
                formatter: "{value}t/h", //y轴单位
              },
              interval: 10,
              min: 25,
              max: 60,
              axisTick: {
                show: true,
                lineStyle: {
                  color: "#ff0000",
                },
              },
              splitLine: {
                lineStyle: {
                  // 使用深浅的间隔色
                  color: "#ff0000",
                },
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: "#ff0000",
                },
              },
            },
            {
              axisLabel: {
                formatter: "{value}Mpa", //y轴单位
              },
              interval: 0.5,
              min: 2.3,
              max: 3.45,
              axisTick: {
                show: true,
                lineStyle: {
                  color: "#00ff00",
                },
              },
              splitLine: {
                lineStyle: {
                  // 使用深浅的间隔色
                  color: "#00ff00",
                },
              },              axisLine: {
                show: true,
                lineStyle: {
                  color: "#00ff00",
                },
              },
            },
          ],
          series: [
            {
              name: "压力",
              type: "line",
              data: this.real[i].tab,
              smooth: true,
              color: "#fac858"
            },
            {
              name: "模拟压力",
              type: "line",
              data: this.sham[i].tab,
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
  mounted() {
    this.liuliang();
    this.yali();
  }
};
</script>
<style scoped>
@import url("../../public/css/head.css");
.dysq {
  width: 1920px;
  height: 1080px;
  background-size: 1920px 1080px;
  position: relative;
  background: url("../../public/images/pic005.png");
}
.row-a1 {
  padding-top: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 120px;
  margin-bottom: 30px;
}
.row-a1 .con .tao {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 15px 0;
}
.row-a1 .tao .mingci {
  font-size: 45px;
}
.row-a1 .con {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  align-items: center;
  width: 30%;
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
  margin-bottom: 50px;
}
.row-a1 .con .desc {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
}
.row-a1 .con .desc .txt {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
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
.row-a1 .con .echart {
  width: 520px;
  height: 320px;
}
.row-a1 .zong {
  width: 30%;
}

</style>