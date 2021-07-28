<template>
  <div id="ZLXQ" class="zlxq">
    <div class="head">转炉运行详情</div>
    <div class="row-a1">
      <div class="cons">
        <div class="con" v-for="(val,ind) in condata" :key="ind">
          <div class="tao">
            <div class="desc">
              <div class="txt">
                <div class="a1">送出产量:</div>
                <div class="a2">
                  <div class="num">100</div>
                  <div class="dan">单位</div>
                </div>
              </div>
              <div class="txt">
                <div class="a1">瞬时流量:</div>
                <div class="a2">
                  <div class="num">100</div>
                  <div class="dan">单位</div>
                </div>
              </div>
            </div>
            <div class="mingci"></div>
          </div>
          <div :id="'echart_'+val.id+'_1'" class="echarts"></div>
          <div :id="'echart_'+val.id+'_2'" class="echarts"></div>
          <!-- <div :id="'echart_'+val.id+'_3'" class="echarts"></div> -->
        </div>
      </div>
      <div class="zong">
        <div class="tao">
          <div class="desc">
            <div class="txt">
              <div class="a1">送出产量:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan">单位</div>
              </div>
            </div>
            <div class="txt">
              <div class="a1">瞬时流量:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan">单位</div>
              </div>
            </div>
          </div>
          <div class="mingci"></div>
        </div>
        <div id="echart_5_1" class="echarts"></div>
        <div id="echart_5_2" class="echarts"></div>
        <!-- <div id="echart_5_3" class="echarts"></div> -->
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
          first: [5, 10, 33],
          second: [8, 53, 85],
          third: [55, 88, 22],
          fourth: [55, 33, 99, 11]
        },
        {
          first: [5, 10, 33],
          second: [8, 53, 85],
          third: [55, 88, 22],
          fourth: [55, 33, 99, 11]
        },
        {
          first: [5, 10, 33],
          second: [8, 53, 85],
          third: [55, 88, 22],
          fourth: [55, 33, 99, 11]
        },
        {
          first: [5, 10, 33],
          second: [8, 53, 85],
          third: [55, 88, 22],
          fourth: [55, 33, 99, 11]
        },
        {
          first: [5, 10, 33],
          second: [8, 53, 85],
          third: [55, 88, 22],
          fourth: [55, 33, 99, 11]
        }
      ],
      sham: [
        {
          first: [5, 10, 33, 12, 55, 33, 99, 1, 12, 14, 25, 6],
          second: [5, 10, 33, 12, 55, 33, 99, 1, 12, 14, 25, 6],
          third: [5, 10, 33, 12, 55, 33, 99, 1, 12, 14, 25, 6],
          fourth: [5, 10, 33, 12, 55, 33, 99, 1, 12, 14, 25, 6]
        },
        {
          first: [5, 10, 33, 12, 55, 33, 99, 1, 12, 14, 25, 6],
          second: [5, 10, 33, 12, 55, 33, 99, 1, 12, 14, 25, 6],
          third: [5, 10, 33, 12, 55, 33, 99, 1, 12, 14, 25, 6],
          fourth: [5, 10, 33, 12, 55, 33, 99, 1, 12, 14, 25, 6]
        },
        {
          first: [5, 10, 33, 12, 55, 33, 99, 1, 12, 14, 25, 6],
          second: [5, 10, 33, 12, 55, 33, 99, 1, 12, 14, 25, 6],
          third: [5, 10, 33, 12, 55, 33, 99, 1, 12, 14, 25, 6],
          fourth: [5, 10, 33, 12, 55, 33, 99, 1, 12, 14, 25, 6]
        },
        {
          first: [5, 10, 33, 12, 55, 33, 99, 1, 12, 14, 25, 6],
          second: [5, 10, 33, 12, 55, 33, 99, 1, 12, 14, 25, 6],
          third: [5, 10, 33, 12, 55, 33, 99, 1, 12, 14, 25, 6],
          fourth: [5, 10, 33, 12, 55, 33, 99, 1, 12, 14, 25, 6]
        },
        {
          first: [5, 10, 33, 12, 55, 33, 99, 1, 12, 14, 25, 6],
          second: [5, 10, 33, 12, 55, 33, 99, 1, 12, 14, 25, 6],
          third: [5, 10, 33, 12, 55, 33, 99, 1, 12, 14, 25, 6],
          fourth: [5, 10, 33, 12, 55, 33, 99, 1, 12, 14, 25, 6]
        }
      ],
      condata: [
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
        }
      ]
    };
  },
  methods: {
    chanqi() {
      for (let i = 0; i < 5; i++) {
        let myChart = echarts.init(
          document.getElementById("echart_" + (i + 1) + "_1")
        );
        let tabtit = i + 1 + "号转炉产汽";
        if (i == 4) tabtit = "产汽汇总表";
        myChart.setOption({
          backgroundColor: "rgba(0,0,0,0.5)",
          legend: {
            data: ["产汽", "预测产汽"],
            right: "right", //缩小数据的定位
            textStyle: {
              color: "#ffffff"
            }
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
            // name: "时长(h)",
            axisLabel: {
              formatter: "{value}h" //y轴单位
            } //x轴单位
          },
          yAxis: {
            name: "产气(Mpa)"
            // axisLabel: {
            //   formatter: "{value}Mpa" //y轴单位
            // }
          },
          series: [
            {
              name: "产汽",
              type: "line",
              data: this.real[i].first,
              smooth: true,
              color: "#8bbe7d",
              lineStyle: {
                width: 3,
                shadowColor: "rgba(0,0,0,0.4)",
                shadowBlur: 10,
                shadowOffsetY: 10
              }
            },
            {
              name: "预测产汽",
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
    jinqi() {
      for (let i = 0; i < 5; i++) {
        let myChart = echarts.init(
          document.getElementById("echart_" + (i + 1) + "_2")
        );
        let tabtit = i + 1 + "号转炉除氧器用汽";
        if (i == 4) tabtit = "除氧器用汽汇总表";
        myChart.setOption({
          backgroundColor: "rgba(0,0,0,0.5)",
          legend: {
            data: ["用汽", "预测用汽"],
            right: "right", //缩小数据的定位
            textStyle: {
              color: "#ffffff"
            }
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
            // name: "时长(h)",
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
              name: "用汽",
              type: "line",
              data: this.real[i].second,
              smooth: true,
              lineStyle: {
                width: 3,
                shadowColor: "rgba(0,0,0,0.4)",
                shadowBlur: 10,
                shadowOffsetY: 10
              },
              color: "#ee6666"
            },
            {
              name: "预测用汽",
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
    yali() {
      for (let i = 0; i < 5; i++) {
        let myChart = echarts.init(
          document.getElementById("echart_" + (i + 1) + "_3")
        );
        let tabtit = i + 1 + "号转炉压力";
        if (i == 4) tabtit = "压力汇总表";
        myChart.setOption({
          backgroundColor: "rgba(0,0,0,0.5)",
          legend: {
            data: ["用汽", "预测用汽"],
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
            // name: "时长(h)",
            axisLabel: {
              formatter: "{value}h" //y轴单位
            } //x轴单位
          },
          yAxis: {
            name: "压力(Mpa)",
            axisLabel: {
              formatter: "{value}" //y轴单位
            }
          },
          series: [
            {
              name: "用汽",
              type: "line",
              data: this.real[i].fourth,
              smooth: true,
              lineStyle: {
                width: 3,
                shadowColor: "rgba(0,0,0,0.4)",
                shadowBlur: 10,
                shadowOffsetY: 10
              },
              color: "#fac858"
            },
            {
              name: "预测用汽",
              type: "line",
              data: this.sham[i].fourth,
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
    var that = this;
    that.chanqi();
    that.jinqi();
    //that.yali();
  }
};
</script>
<style scoped>
@import url('../../public/css/head.css');
.zlxq {
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
}
.row-a1 .tao {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 15px 0;
  color: #ffffff;
}
.row-a1 .tao .mingci {
  font-size: 45px;
}
.row-a1 .cons {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.row-a1 .cons .con {
  width: 24%;
  margin: 0 0.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

.row-a1 .tao .desc {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
}
.row-a1 .tao .desc .txt {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
.row-a1 .tao .desc .txt .a2 {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100px;
  align-items: center;
}
.row-a1 .tao .desc .txt .num {
  font-size: 18px;
  margin: 0 5px;
  font-weight: 600;
  color: chartreuse;
}
.row-a1 .cons .echarts {
  width: 330px;
  height: 240px;
  margin-bottom: 20px;
}
.row-a1 .zong .echarts {
  width: 310px;
  height: 240px;
  margin-bottom: 20px;
}
.row-a1 .zong {
  width: 18%;
  margin: 0 0.5%;
  display: flex;
  align-items: center;
  flex-direction: column;
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
</style>