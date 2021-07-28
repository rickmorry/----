<template>
  <div id="HZ" class="hz">
    <div class="row-a1">
      <div class="cons">
        <div class="con">
          <div id="echart_1" class="echarts"></div>
          <div class="tao">
            <div class="desc">
              <div class="txt">
                <div class="a1">汽包液位①:</div>
                <div class="a2">
                  <div class="num">100</div>
                  <div class="dan">单位</div>
                </div>
              </div>
              <div class="txt">
                <div class="a1">汽包液位②:</div>
                <div class="a2">
                  <div class="num">100</div>
                  <div class="dan">单位</div>
                </div>
              </div>
              <div class="txt">
                <div class="a1">流速:</div>
                <div class="a2">
                  <div class="num">25</div>
                  <div class="dan">单位</div>
                </div>
              </div>
              <div class="txt">
                <div class="a1">压力值:</div>
                <div class="a2">
                  <div class="num">100</div>
                  <div class="dan">Mpa</div>
                </div>
              </div>
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
        </div>
        <div class="con">
          <div id="echart_2" class="echarts"></div>
          <div class="tao">
            <div class="desc">
              <div class="txt">
                <div class="a1">实时:</div>
                <div class="a2">
                  <div class="num">100</div>
                  <div class="dan">Mpa</div>
                </div>
              </div>
            </div>
            <div class="mingci"></div>
          </div>
        </div>
        <div class="con">
          <div id="echart_3" class="echarts"></div>
          <div class="tao">
            <div class="desc">
              <div class="txt">
                <div class="a1">rh总管总压力:</div>
                <div class="a2">
                  <div class="num">100</div>
                  <div class="dan">Mp5</div>
                </div>
              </div>
            </div>
            <div class="mingci"></div>
          </div>
        </div>
        <div class="con">
          <div id="echart_4" class="echarts"></div>
          <div class="tao">
            <div class="desc">
              <div class="txt">
                <div class="a1">蓄热量储热总压力:</div>
                <div class="a2">
                  <div class="num">100</div>
                  <div class="dan">Mp5</div>
                </div>
              </div>
              <div class="txt">
                <div class="a1">蓄热量储热总温度:</div>
                <div class="a2">
                  <div class="num">100</div>
                  <div class="dan">℃</div>
                </div>
              </div>
              <div class="txt">
                <div class="a1">蓄热量储热总流量:</div>
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
          <div id="echart_5" class="echarts"></div>
          <div class="tao">
            <div class="desc">
              <div class="txt">
                <div class="a1">低压总管压力:</div>
                <div class="a2">
                  <div class="num">100</div>
                  <div class="dan">Mp5</div>
                </div>
              </div>
              <div class="txt">
                <div class="a1">低压送汽温度:</div>
                <div class="a2">
                  <div class="num">100</div>
                  <div class="dan">℃</div>
                </div>
              </div>
              <div class="txt">
                <div class="a1">低压送汽累计流量:</div>
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
          <div id="echart_6" class="echarts"></div>
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
    helloword,
  },
  data() {
    return {
      real: [
        {
          first: [0, 8, 5, 3, 5],
        },
        {
          first: [53, 52, 33, 3, 5],
        },
        {
          first: [68, 8, 13, 55, 5],
        },
                {
          first: [68, 8, 13, 55, 5],
        },
                {
          first: [68, 8, 13, 55, 5],
        },
                {
          first: [68, 8, 13, 55, 5],
        },
      ],
      sham: [
        {
          first: [456, 8, 5, 3, 5, 54, 65, 3, 5, 56, 41, 63],
        },
        {
          first: [456, 8, 5, 3, 5, 54, 65, 3, 5, 56, 52, 63],
        },
        {
          first: [456, 8, 5, 3, 5, 54, 65, 3, 5, 56, 15, 12],
        },
                {
          first: [456, 8, 5, 3, 5, 54, 65, 3, 5, 56, 15, 12],
        },
                {
          first: [456, 8, 5, 3, 5, 54, 65, 3, 5, 56, 15, 12],
        },
                {
          first: [456, 8, 5, 3, 5, 54, 65, 3, 5, 56, 15, 12],
        }
      ],
    };
  },
  methods: {
    table() {
      for (let i = 0; i < 6; i++) {
        let myChart = echarts.init(
          document.getElementById("echart_" + (i + 1))
        );
        let tabtit = "";
        let data = [];
        let color="";
        let danwei="";
        if (i == 0) 
          tabtit = "转炉产汽汇总表",data = ["产汽", "预测产汽"],color="#8bbe7d",danwei="产汽(t)"
        else if (i == 1) tabtit = "除氧器进汽汇总表",data = ["进汽", "预测进汽"],color="#ee6666",danwei="进汽(t)"
        else if (i == 2) tabtit = "RH进汽汇总表",data = ["进汽", "预测进汽"],color="#ffa500",danwei="进汽(t)"
        else if (i == 3) tabtit = "蓄热量储热汇总表",data = ["储热", "预测储热"],color="#ffd700",danwei="储热(t)"
        else if (i == 4) tabtit = "低压送汽汇总表",data = ["进汽", "预测进汽"],color="#4a68c0",danwei="进汽(t)"
        else if (i == 5) tabtit = "中压进汽汇总表",data = ["进汽", "预测进汽"],color="#fac858",danwei="进汽(t)"
        else console.log("报错");
        console.log(data);
        myChart.setOption({
          backgroundColor: "rgba(0,0,0,0.5)",
          legend: {
            data,
            right: "right", //缩小数据的定位
            textStyle: {
              color: "#ffffff",
            },
          },
          title: {
            text: tabtit,
            textStyle: {
              color: color,
            },
            left: "center",
            subtextStyle: {
              color: "#ffffff",
              align: "center",
            },
          },
          textStyle: {
            color: "#ffffff",
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
              "12",
            ],
            // name: "时长(h)",
            axisLabel: {
              formatter: "{value}h", //y轴单位
            }, //x轴单位
          },
          yAxis: {
            name: danwei,
            // axisLabel: {
            //   formatter: "{value}Mpa" //y轴单位
            // }
          },
          series: [
            {
              name: data[0],
              type: "line",
              data: this.real[i].first,
              smooth: true,
              color: color,
              lineStyle: {
                width: 3,
                shadowColor: "rgba(0,0,0,0.4)",
                shadowBlur: 10,
                shadowOffsetY: 10,
              },
            },
            {
              name: data[1],
              type: "line",
              data: this.sham[i].first,
              color: "#999999",
              smooth: true,
              itemStyle: {
                normal: {
                  lineStyle: {
                    width: 2,
                    type: "dotted", //'dotted'虚线 'solid'实线
                  },
                },
              },
            },
          ],
        });
      }
    },
  },
  mounted() {
    var that = this;
    that.table();
  },
};
</script>
<style scoped>
.hz {
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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.row-a1 .cons .con {
  width: 30%;
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
  margin-bottom: 40px;
  padding-top: 20px;
  height: 470px;
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
  width: 500px;
  height: 330px;
}
</style>