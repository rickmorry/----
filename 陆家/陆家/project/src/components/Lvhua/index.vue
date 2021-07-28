<template>
  <div class="container">
    <div class="allMap" id="container"></div>
    <div class="current mainbox" style="position:relative">
            <div class="title" style="font-size:25px;font-weight:600;text-align:center;margin-bottom:10px;  position: absolute;
  top: 0px;
  left: 50%;
  transform: translate(-50%,-50%);
  color: #ffffff;">
        绿化垃圾
      </div>
      <div class="divchart one">
        <div class="panel bar1">
          <h2 style="text-align:left;">
            <a href="javascript:;">7日处理量(吨)</a>
          </h2>
          <div class="chart">图表</div>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="divchart two">
        <div class="panel bar2">
          <h2 style="text-align:left;">
            <a href="javascript:;">每月处理量(吨)</a>
          </h2>
          <div class="chart">图表</div>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="divchart three">
        <div class="panel bar3">
          <h2 style="text-align:left;">
            <a href="javascript:;">每年处理量(吨)</a>
          </h2>
          <div class="chart">图表</div>
          <div class="panel-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
let echarts = require("echarts");
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    start: String
  },
  watch: {
    start(newValue, oldValue) {
      if (newValue == "1") {
      }
    }
  },
  methods: {
    table_1() {
      var yearData = [
        {
          year: "(吨)", // 七日
          data: [
            [24, 27, 28, 30, 26, 27.5, 28],
            [22, 23, 25.8, 24.9, 22.8, 23.2, 21],
            [12, 10.9, 13.8, 12.9, 10.8, 9.2, 8.8]
          ]
        },
        {
          year: "(吨)", // 半年
          data: [
            [700, 750, 780, 800, 760, 720],
            [720, 700, 480, 500, 360, 420],
            [280, 250, 280, 300, 290, 320]
          ]
        }
      ];
      var xData = [
        [
          "2021-3-25",
          "2021-3-26",
          "2021-3-27",
          "2021-3-28",
          "2021-3-29",
          "2021-3-30",
          "2021-3-31"
        ],
        ["2020-10", "2020-11", "2020-12", "2021-01", "2021-02", "2021-03"]
      ];
      // 1. 实例化对象
      var myChart = echarts.init(document.querySelector(".bar1 .chart"));
      console.log();
      console.log(echarts);
      console.log("lvhua");
      console.log(myChart);

      // 2.指定配置
      var option = {
        color: [this.$store.state.categoryColors[1]],
        tooltip: {
          trigger: "axis"
        },
        legend: {
          show: false,
          // 如果series 对象有name 值，则 legend可以不用写data
          // 修改图例组件 文字颜色
          textStyle: {
            color: "#4c9bfd"
          },
          // 这个10% 必须加引号
          right: "10%"
        },
        grid: {
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          show: true, // 显示边框
          borderColor: "#012f4a", // 边框颜色
          containLabel: true // 包含刻度文字在内
        },
        xAxis: {
          type: "category",
          //boundaryGap: false,
          data: xData[0],
          axisTick: {
            show: false // 去除刻度线
          },
          axisLabel: {
            color: "rgba(238,223,204,0.85)" // 文本颜色
          },
          axisLine: {
            show: false // 去除轴线
          }
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false // 去除刻度线
          },
          axisLabel: {
            color: "rgba(238,223,204,0.85)" // 文本颜色
          },
          axisLine: {
            show: false // 去除轴线
          },
          splitLine: {
            lineStyle: {
              color: "rgba(238,223,204,0.85)" // 分割线颜色
            }
          }
        },
        series: [
          {
            name: "绿化垃圾",
            type: "bar",
            //true 可以让我们的折线显示带有弧度
            smooth: true,
            // 设置拐点
            symbol: "circle",
            // 拐点大小
            symbolSize: 8,
            barWidth: 18,
            data: yearData[0].data[0]
          }
        ]
      };

      // 3. 把配置给实例对象
      myChart.setOption(option);
      // 4. 让图表跟随屏幕自动的去适应
      window.addEventListener("resize", function() {
        myChart.resize();
      });

      // 5.点击切换效果
      $(".bar1 h2").on("click", "a", function() {
        $(this)
          .parent()
          .find("a")
          .removeClass("on");
        $(this).addClass("on");
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        var obj_x = xData[$(this).index()];
        option.xAxis.data = obj_x;
        // 需要重新渲染
        myChart.setOption(option);
      });
    },
    table_2() {
      var yearData = [
        {
          year: "(吨)", //
          data: [[108, 150, 120, 115, 121, 119, 129, 138, 148]]
        }
      ];
      var xData = [
        "2020-10",
        "2020-11",
        "2020-12",
        "2021-01",
        "2021-02",
        "2021-03"
      ];
      // 1. 实例化对象
      var myChart = echarts.init(document.querySelector(".bar2 .chart"));

      // 2.指定配置
      var option = {
        color: [this.$store.state.categoryColors[1]],
        tooltip: {
          trigger: "axis"
        },
        legend: {
          show: false,
          // 如果series 对象有name 值，则 legend可以不用写data
          // 修改图例组件 文字颜色
          textStyle: {
            color: "#4c9bfd"
          },
          // 这个10% 必须加引号
          right: "10%"
        },
        grid: {
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          show: true, // 显示边框
          borderColor: "#012f4a", // 边框颜色
          containLabel: true // 包含刻度文字在内
        },
        xAxis: {
          type: "category",
          //boundaryGap: false,
          data: xData,
          axisTick: {
            show: false // 去除刻度线
          },
          axisLabel: {
            color: "rgba(238,223,204,0.85)" // 文本颜色
          },
          axisLine: {
            show: false // 去除轴线
          }
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false // 去除刻度线
          },
          axisLabel: {
            color: "rgba(238,223,204,0.85)" // 文本颜色
          },
          axisLine: {
            show: false // 去除轴线
          },
          splitLine: {
            lineStyle: {
              color: "rgba(238,223,204,0.85)" // 分割线颜色
            }
          }
        },
        series: [
          {
            name: "绿化垃圾",
            type: "bar",
            //true 可以让我们的折线显示带有弧度
            smooth: true,
            // 设置拐点
            symbol: "circle",
            // 拐点大小
            symbolSize: 2,
            barWidth: 18,
            data: yearData[0].data[0]
          }
        ]
      };

      // 3. 把配置给实例对象
      myChart.setOption(option);
      // 4. 让图表跟随屏幕自动的去适应
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    table_3() {
      var yearData = [
        {
          year: "(吨)", //
          data: [[1580, 1708, 478]]
        }
      ];
      var xData = ["2019", "2020", "2021"];
      // 1. 实例化对象
      var myChart = echarts.init(document.querySelector(".bar3 .chart"));

      // 2.指定配置
      var option = {
        color: [this.$store.state.categoryColors[1]],
        tooltip: {
          trigger: "axis"
        },
        legend: {
          show: false,
          // 如果series 对象有name 值，则 legend可以不用写data
          // 修改图例组件 文字颜色
          textStyle: {
            color: "#4c9bfd"
          },
          // 这个10% 必须加引号
          right: "10%"
        },
        grid: {
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          show: true, // 显示边框
          borderColor: "#012f4a", // 边框颜色
          containLabel: true // 包含刻度文字在内
        },
        xAxis: {
          type: "category",
          //boundaryGap: false,
          data: xData,
          axisTick: {
            show: false // 去除刻度线
          },
          axisLabel: {
            color: "rgba(238,223,204,0.85)" // 文本颜色
          },
          axisLine: {
            show: false // 去除轴线
          }
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false // 去除刻度线
          },
          axisLabel: {
            color: "rgba(238,223,204,0.85)" // 文本颜色
          },
          axisLine: {
            show: false // 去除轴线
          },
          splitLine: {
            lineStyle: {
              color: "rgba(238,223,204,0.85)" // 分割线颜色
            }
          }
        },
        series: [
          {
            name: "绿化垃圾",
            type: "bar",
            //true 可以让我们的折线显示带有弧度
            smooth: true,
            // 设置拐点
            symbol: "circle",
            // 拐点大小
            symbolSize: 2,
            barWidth: 18,
            data: yearData[0].data[0]
          }
        ]
      };

      // 3. 把配置给实例对象
      myChart.setOption(option);
      // 4. 让图表跟随屏幕自动的去适应
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    }
  },
  mounted() {
    this.table_1();
    this.table_2();
    this.table_3();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 0px;
  background-color: aqua;
  text-align: center;
}
.mainbox {
  padding-top: 20px;
  margin-top: 100px;
}

.mainbox .panel {
  position: relative;
  height: 280px;
  padding: 0 15px;
  border: 1px solid rgb(68, 118, 206);
  margin-bottom: 15px;
}

.mainbox .panel::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-left: 2px solid rgb(0, 149, 255);
  border-top: 2px solid rgb(0, 149, 255);
  content: "";
}

.mainbox .panel::after {
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  border-right: 2px solid rgb(0, 149, 255);
  border-top: 2px solid rgb(0, 149, 255);
  content: "";
}

.mainbox .panel .panel-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.mainbox .panel .panel-footer::before {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 20px;
  height: 20px;
  border-left: 2px solid rgb(0, 149, 255);
  border-bottom: 2px solid rgb(0, 149, 255);
  content: "";
}

.mainbox .panel .panel-footer::after {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20px;
  height: 20px;
  border-right: 2px solid rgb(0, 149, 255);
  border-bottom: 2px solid rgb(0, 149, 255);
  content: "";
}

.mainbox .panel h2 {
  height: 48px;
  color: #fff;
  line-height: 48px;
  text-align: center;
  font-size: 17px;
  font-weight: 400;
  margin: 0;
  display: flex;
}

.mainbox .panel h2 a {
  color: rgb(16, 247, 238);
  text-decoration: none;
  flex: 1;
  text-align: center;
}
.mainbox .panel .chart {
  height: 210px;
}
.menu {
  margin-top: 40px;
}

.menu .shouye {
  display: none;
}

.allMap {
  position: absolute;
  top: 80px;
  left: 270px;
  right: 380px;
  bottom: 90px;
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
</style>
