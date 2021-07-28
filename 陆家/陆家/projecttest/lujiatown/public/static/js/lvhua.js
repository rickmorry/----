// 图
(function () {
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
        ], [
            "2020-10",
            "2020-11",
            "2020-12",
            "2021-01",
            "2021-02",
            "2021-03"
        ]
    ];
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".bar1 .chart"));

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
    window.addEventListener("resize", function () {
        myChart.resize();
    });

    // 5.点击切换效果
    $(".bar1 h2").on("click", "a", function () {
        $(this).parent().find("a").removeClass("on");
        $(this).addClass("on");
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        var obj_x = xData[$(this).index()];
        option.xAxis.data = obj_x;
        // 需要重新渲染
        myChart.setOption(option);
    });
})();

//  柱状图
(function () {
    var yearData = [
        {
            year: "(吨)", // 
            data: [
                [108, 150, 120, 115, 121, 119, 129, 138, 148]
            ]
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
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

(function () {
    var yearData = [
        {
            year: "(吨)", // 
            data: [
                [1580, 1708, 478]
            ]
        }
    ];
    var xData = [
        "2019",
        "2020",
        "2021"
    ];
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
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();



