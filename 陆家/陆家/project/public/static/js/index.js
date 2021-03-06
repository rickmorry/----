// 大分流处理量 折线图
(function () {
    var yearData = [
        {
            year: "大分流处理量(吨)", // 七日
            data: [
                // 两个数组是因为有两条线
                [24, 27, 28, 30, 26, 27.5, 28],
                [22, 23, 25.8, 24.9, 22.8, 23.2, 21],
                [12, 10.9, 13.8, 12.9, 10.8, 9.2, 8.8]
            ]
        },
        {
            year: "每月处理量(吨)", // 半年
            data: [
                // 两个数组是因为有两条线
                [700, 750, 780, 800, 760, 720],
                [720, 700, 480, 500, 360, 420],
                [280, 250, 280, 300, 290, 320]
            ]
        }
    ];
    var xData = [
        [
            "2021-3-23",
            "2021-3-24",
            "2021-3-25",
            "2021-3-26",
            "2021-3-27",
            "2021-3-28",
            "2021-3-29"
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
    var myChart = echarts.init(document.querySelector(".line .chart"));

    // 2.指定配置
    var option = {
        // 通过这个color修改两条线的颜色
        color: [categoryColors[0], categoryColors[1], categoryColors[2]],
        tooltip: {
            trigger: "axis"
        },
        legend: {
            // 如果series 对象有name 值，则 legend可以不用写data
            // 修改图例组件 文字颜色
            data: [{
                name: "建筑垃圾", textStyle: {
                    color: categoryColors[0]
                }
            }, {
                name: "绿化垃圾", textStyle: {
                    color: categoryColors[1]
                }
            }, {
                name: "大件垃圾", textStyle: {
                    color: categoryColors[2]
                }
            }],
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
                name: "建筑垃圾",
                type: "line",
                //true 可以让我们的折线显示带有弧度
                smooth: true,
                // 设置拐点
                symbol: "circle",
                // 拐点大小
                symbolSize: 8,
                data: yearData[0].data[0]
            },
            {
                name: "绿化垃圾",
                type: "line",
                smooth: true,
                // 设置拐点
                symbol: "circle",
                // 拐点大小
                symbolSize: 8,
                data: yearData[0].data[1]
            },
            {
                name: "大件垃圾",
                type: "line",
                smooth: true,
                // 设置拐点
                symbol: "circle",
                // 拐点大小
                symbolSize: 8,
                data: yearData[0].data[2]
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
    $(".line h2").on("click", "a", function () {
        $(this).parent().find("a").removeClass("on");
        $(this).addClass("on");
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        option.series[2].data = obj.data[2];
        var obj_x = xData[$(this).index()];
        option.xAxis.data = obj_x;
        // 需要重新渲染
        myChart.setOption(option);
    });
})();

// 细分类处理量 柱状图
(function () {
    var yearData = [
        {
            year: "细分类处理量(吨)", // 七日
            data: [
                [4, 7, 2.8, 3.0, 2.6, 2.7, 2.8],
                [2, 2.3, 2.5, 2, 2.2, 2.3, 2.1],
                [3.5, 3.3, 2.9, 1.9, 2.15, 1.93, 1.89],
                [2, 1.9, 1.8, 1.6, 1.8, 1.85, 1.88]
            ]
        },
        {
            year: "每月处理量(吨)", // 半年
            data: [
                [108, 150, 120, 115, 121, 119],
                [52, 70, 48, 50, 36, 42],
                [72, 90, 88, 80, 66, 82],
                [49, 65, 58, 40, 39, 32]
            ]
        }
    ];
    var xData = [
        [
            "2021-3-23",
            "2021-3-24",
            "2021-3-25",
            "2021-3-26",
            "2021-3-27",
            "2021-3-28",
            "2021-3-29"
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
    var myChart = echarts.init(document.querySelector(".bar .chart"));

    // 2.指定配置
    var option = {
        // 通过这个color修改两条线的颜色
        color: [categoryColors[3], categoryColors[4], categoryColors[5], categoryColors[6]],
        tooltip: {
            trigger: "axis"
        },
        legend: {
            // 如果series 对象有name 值，则 legend可以不用写data
            // 修改图例组件 文字颜色
            data: [{
                name: "可回收物", textStyle: {
                    color: categoryColors[3]
                }
            }, {
                name: "有害垃圾", textStyle: {
                    color: categoryColors[4]
                }
            }, {
                name: "厨余垃圾", textStyle: {
                    color: categoryColors[5]
                }
            }, {
                name: "其他垃圾", textStyle: {
                    color: categoryColors[6]
                }
            }],
            icon: "circle",
            width: 340,
            fontSize: 10,
            itemGap: 5,
            padding: 0
            // 这个10% 必须加引号
            //right: "10%"
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
                name: "可回收物",
                type: "bar",
                //true 可以让我们的折线显示带有弧度
                smooth: true,
                // 设置拐点
                symbol: "circle",
                // 拐点大小
                symbolSize: 2,
                barWidth: 7,
                data: yearData[0].data[0]
            },
            {
                name: "有害垃圾",
                type: "bar",
                smooth: true,
                // 设置拐点
                symbol: "circle",
                // 拐点大小
                symbolSize: 2,
                barWidth: 7,
                data: yearData[0].data[1]
            },
            {
                name: "厨余垃圾",
                type: "bar",
                smooth: true,
                // 设置拐点
                symbol: "circle",
                // 拐点大小
                symbolSize: 2,
                barWidth: 7,
                data: yearData[0].data[2]
            },
            {
                name: "其他垃圾",
                type: "bar",
                smooth: true,
                // 设置拐点
                symbol: "circle",
                // 拐点大小
                symbolSize: 2,
                barWidth: 7,
                data: yearData[0].data[3]
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
    $(".bar h2").on("click", "a", function () {
        $(this).parent().find("a").removeClass("on");
        $(this).addClass("on");
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        option.series[2].data = obj.data[2];
        option.series[3].data = obj.data[3];
        var obj_x = xData[$(this).index()];
        option.xAxis.data = obj_x;
        // 需要重新渲染
        myChart.setOption(option);
    });
})();

// 饼形图
(function () {
    var yearData = [
        {
            name: "上一月度处理量占比", // 
            data: [
                { value: 20, name: "建筑垃圾" },
                { value: 26, name: "绿化垃圾" },
                { value: 24, name: "大件垃圾" },
                { value: 25, name: "可回收物" },
                { value: 20, name: "有害垃圾" },
                { value: 25, name: "厨余垃圾" },
                { value: 30, name: "其他垃圾" }
            ]
        },
        {
            name: "上一年度处理量占比", // 
            data: [
                { value: 208, name: "建筑垃圾" },
                { value: 288, name: "绿化垃圾" },
                { value: 278, name: "大件垃圾" },
                { value: 268, name: "可回收物" },
                { value: 238, name: "有害垃圾" },
                { value: 248, name: "厨余垃圾" },
                { value: 318, name: "其他垃圾" }
            ]
        }
    ];

    var myChart = echarts.init(document.querySelector(".pie .chart"));
    var option = {
        color: categoryColors,
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            align: 'left', //水平方向位置
            floating: true,
            width: 10,
            itemWidth: 10,
            itemMarginBottom: 10,
            itemMarginLeft: 10,
            verticalAlign: 'top', //垂直方向位置
            x: 0, //距离x轴的距离
            y: 30, //距离Y轴的距离
            //bottom: "0%",
            //itemWidth: 10,
            //itemHeight: 10,
            icon: "circle",
            //textStyle: {
            //    color: "rgba(255,255,255,.5)",
            //    fontSize: "12"
            //},
            data: [{
                name: "建筑垃圾", textStyle: {
                    color: categoryColors[0]
                }
            }, {
                name: "绿化垃圾", textStyle: {
                    color: categoryColors[1]
                }
            }, {
                name: "大件垃圾", textStyle: {
                    color: categoryColors[2]
                }
            }, {
                name: "可回收物", textStyle: {
                    color: categoryColors[3]
                }
            }, {
                name: "有害垃圾", textStyle: {
                    color: categoryColors[4]
                }
            }, {
                name: "厨余垃圾", textStyle: {
                    color: categoryColors[5]
                }
            }, {
                name: "其他垃圾", textStyle: {
                    color: categoryColors[6]
                }
            }],
        },
        series: [
            {
                name: "上一月度处理量占比",
                type: "pie",
                radius: ["10%", "70%"],
                center: ["50%", "50%"],
                roseType: "radius",
                // 图形的文字标签
                label: {
                    fontSize: 10
                },
                // 链接图形和文字的线条
                labelLine: {
                    // length 链接图形的线条
                    length: 6,
                    // length2 链接文字的线条
                    length2: 8
                },
                data: yearData[0].data
            }
        ]
    };
    myChart.setOption(option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    $(".pie h2").on("click", "a", function () {
        $(this).parent().find("a").removeClass("on");
        $(this).addClass("on");
        var obj = yearData[$(this).index()];
        option.series[0].name = obj.name;
        option.series[0].data = obj.data;
        // 需要重新渲染
        myChart.setOption(option);
    });

})();



