<template>
  <div id="RH" class="rh">
    <div class="head">RH运行详情</div>
    <div class="row-a1">
      <div class="zong">
        <div class="tit">RH流量汇总表</div>
        <div id="echart_4" class="echart"></div>
        <div class="tao">
          <div class="desc">
            <div class="txt">
              <div class="a1">管道阀前总压力:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan">Mpa</div>
              </div>
            </div>
            <div class="txt">
              <div class="a1">管道阀后总压力:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan">Mpa</div>
              </div>
            </div>
            <div class="txt">
              <div class="a1">用汽总温度平均值:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan">℃</div>
              </div>
            </div>
            <div class="txt">
              <div class="a1">用汽总流量:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan">t</div>
              </div>
            </div>
            <div class="txt">
              <div class="a1">瞬时流速:</div>
              <div class="a2">
                <div class="num">100</div>
                <div class="dan"></div>
              </div>
            </div>
          </div>
          <div class="mingci"></div>
        </div>
      </div>
      <div class="cons">
        <div class="con" v-for="(val,ind) in condata" :key="ind">
          <div :id="'echart_'+val.id" class="echart"></div>
          <div class="tao">
            <div class="desc">
              <div class="txt">
                <div class="a1">管道阀前压力:</div>
                <div class="a2">
                  <div class="num">100</div>
                  <div class="dan">Mpa</div>
                </div>
              </div>
              <div class="txt">
                <div class="a1">管道阀后压力:</div>
                <div class="a2">
                  <div class="num">100</div>
                  <div class="dan">Mpa</div>
                </div>
              </div>
              <div class="txt">
                <div class="a1">用汽温度:</div>
                <div class="a2">
                  <div class="num">100</div>
                  <div class="dan">℃</div>
                </div>
              </div>
              <div class="txt">
                <div class="a1">用汽流量:</div>
                <div class="a2">
                  <div class="num">100</div>
                  <div class="dan">t</div>
                </div>
              </div>
              <div class="txt">
                <div class="a1">瞬时流速:</div>
                <div class="a2">
                  <div class="num">100</div>
                  <div class="dan"></div>
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
  import helloword from "../components/fixed"
  import { GetZLData } from "../config/api";

  let axios = require("axios")
  let echarts = require("echarts")
  export default {
    components: {
      helloword
    },
    data() {
      return {
        real: [
          {
            tab: [5, 20, 36]
          },
          {
            tab: [5, 20, 36]
          },
          {
            tab: [5, 20, 36]
          },
          {
            tab: [5, 20, 36]
          }
        ],
        sham: [
          {
            tab: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60]
          },
          {
            tab: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60]
          },
          {
            tab: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60]
          },
          {
            tab: [10, 11, 16, 17, 18, 22, 58, 22, 55, 60]
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
          }
        ],
        time: []
      };
    },
    methods: {
      table() {
        for (let i = 0; i < 4; i++) {
          let myChart = echarts.init(
            document.getElementById("echart_" + (i + 1))
          );
          let tabtit = i + 1 + "号RH用汽流量表";
          let color = '#4a68c0'
          if (i == 3) tabtit = "", color = '#ffa558';
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
                color
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
              // data: [
              //   "1",
              //   "2",
              //   "3",
              //   "4",
              //   "5",
              //   "6",
              //   "7",
              //   "8",
              //   "9",
              //   "10",
              //   "11",
              //   "12"
              // ],
              data: this.time,
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
                name: "用汽",
                type: "line",
                data: this.real[i].tab,
                smooth: true,
                color,
                lineStyle: {
                  width: 3,
                  shadowColor: "rgba(0,0,0,0.4)",
                  shadowBlur: 10,
                  shadowOffsetY: 10
                }
              },
              {
                name: "预测用汽",
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

        // 绘制图表
      }
    },
    async mounted() {
      console.log(this.$router);
      axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(response => console.log(response));
      await GetZLData(340).then(res => {
        var data = [];
        var data1 = [];

        var time = [];
        for (const key in res.dicAll) {
          var text = "";
          text = key.toString().substr(8, 2);
          time.push(text);
          data.push(res.dicAll[key]);
          data1.push(res.dicPre[key]);
        }
        this.time = time;
        this.sham[0].tab = data1;
        this.real[0].tab=data
      });
      await GetZLData(338).then(res => {
        var data = [];
        var data1 = [];

        for (const key in res.dicAll) {
          
          data.push(res.dicAll[key]);
          data1.push(res.dicPre[key])
        }
        this.sham[1].tab = data1;
        this.real[1].tab=data
      });
      await GetZLData(336).then(res => {
        var data = [];
        var data1 = [];

        for (const key in res.dicAll) {
          
          data.push(res.dicAll[key]);
          data1.push(res.dicPre[key])
        }
        this.sham[2].tab = data1;
        this.real[2].tab=data
      });


      for (const key in  this.real[0].tab) {
         this.real[3].tab.push(this.real[0].tab[key]+this.real[1].tab[key]+this.real[2].tab[key])
      
          }
          for (const key in  this.sham[0].tab) {
         this.sham[3].tab.push(this.sham[0].tab[key]+this.sham[1].tab[key]+this.sham[2].tab[key])
      
          }

      this.table();

    }


  };
</script>
<style scoped>
  @import url('../../public/css/head.css');

  .rh {
    width: 1920px;
    height: 1080px;
    background-size: 1920px 1080px;
    position: relative;
    background: url("../../public/images/pic005.png");
  }

  .row-a1 {
    padding-top: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin-left: 120px;
  }

  .row-a1 .cons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .row-a1 .cons .con .tao {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 15px 0;
  }

  .row-a1 .cons .con {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    align-items: center;
    width: 30%;
    margin-bottom: 60px;
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

  .row-a1 .tao .mingci {
    font-size: 45px;
  }

  .row-a1 .cons .con .desc {
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
    width: 530px;
    height: 260px;
  }

  .row-a1 .zong {
    display: flex;
    flex-direction: column;
    color: #ffffff;
    align-items: center;
    width: 95%;
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
  }

  .row-a1 .zong .tit {
    font-size: 28px;
    font-weight: 600;
    margin-top: 30px;
    color: #ffa558;
    position: relative;
  }

  .row-a1 .zong .tit::before {
    position: absolute;
    left: -75px;
    top: 50%;
    content: "";
    display: block;
    width: 70px;
    background: orange;
    height: 3px;
    transform: translate(0, -50%);
  }

  .row-a1 .zong .tit::after {
    position: absolute;
    right: -75px;
    top: 50%;
    content: "";
    display: block;
    width: 70px;
    background: orange;
    height: 3px;
    transform: translate(0, -50%);
  }

  .row-a1 .zong .echart {
    width: 1650px;
    height: 260px;
  }

  .row-a1 .zong .tao {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
  }

  .row-a1 .zong .tao .mingci {
    font-size: 45px;
  }

  .row-a1 .zong .desc {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;
  }

  .row-a1 .zong .desc .txt {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
  }

  .row-a1 .zong .desc .txt .a2 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100px;
    align-items: center;
  }

  .row-a1 .zong .desc .txt .num {
    font-size: 18px;
    margin: 0 5px;
    font-weight: 600;
    color: chartreuse;
  }
</style>