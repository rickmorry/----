<template>
  <div class="container">
    <img class="footer" src="../../../public/static/image/qt/编组 8.png" />
    <footer class="footer">
      <div class="out">
        <div class="tou" :class="one?'on':''" @click="$parent.foot1=!one"></div>
        <div class="shou" :class="two?'on':''" @click="$parent.foot2=!two,$parent.foot3=!three"></div>
        <div class="yun" :class="three?'on':''" @click="$parent.foot3=!three,$parent.foot2=!two"></div>
        <div class="chu" :class="four?'on':''" @click="$parent.foot4=!four"></div>
      </div>
    </footer>
  </div>
</template>

<script>
// --------------
// 5.点击切换效果
export default {
  props: {
    one: {
      type: Boolean
    },
    two: {
      type: Boolean
    },
    three: {
      type: Boolean
    },
    four: {
      type: Boolean
    }
  },
  data() {
    return {};
  },
  methods: {

	},
  mounted() {

	}
};

// $(".line h2").on("click", "a", function() {
//   $(this)
//     .parent()
//     .find("a")
//     .removeClass("on");
//   $(this).addClass("on");
//   var obj = yearData[$(this).index()];
//   option.series[0].data = obj.data[0];
//   option.series[1].data = obj.data[1];
//   option.series[2].data = obj.data[2];
//   var obj_x = xData[$(this).index()];
//   option.xAxis.data = obj_x;
//   // 需要重新渲染
//   myChart.setOption(option);
// });
// $("footer .shou").click(function() {
//   if (!$(this).hasClass("on")) {
//     $("footer .on").removeClass("on");
//     $(this).addClass("on");
//   } else {
//     $(this).removeClass("on");
//   }
//   zycl();
// });
// $("footer .yun").click(function() {
//   if (!$(this).hasClass("on")) {
//     $("footer .on").removeClass("on");
//     $(this).addClass("on");
//   } else {
//     $(this).removeClass("on");
//   }
//   zycl();
// });
// $("footer .chu").click(function() {
//   if (!$(this).hasClass("on")) {
//     $("footer .on").removeClass("on");
//     $(this).addClass("on");
//     addPoints_chu();
//   } else {
//     $(this).removeClass("on");
//     removePoints_chu();
//   }
// });
</script>

<style>
img.footer {
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0px;
  background-color: rgb(52, 51, 120);
  z-index: 100;
}
footer {
  position: fixed;
  height: 100px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 101;
}
footer div.out {
  height: 100px;
  width: 450px;
  margin: 0 auto;
  margin-top: -10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

footer div.out div {
  cursor: pointer;
}

footer div.out div {
  width: 70px;
  height: 70px;
  line-height: 60px;
  text-align: center;
  display: inline-block;
  font-size: 33.6px;
  color: #08304a;
  background-repeat: 50%;
}

footer div.out div {
  background-size: 100%;
  background-repeat: 50%;
}

footer div.out div.tou {
  background-image: url("../../../public/static/image/qt3/tou.png");
}

footer div.out div.tou.on {
  background-image: url("../../../public/static/image/qt3/pic004.png");
}

footer div.out div.tou:hover {
  background-image: url("../../../public/static/image/qt3/tou_2.png");
}

footer div.out div.shou {
  background-image: url("../../../public/static/image/qt3/shou.png");
}

footer div.out div.shou.on {
  background-image: url("../../../public/static/image/qt3/pic007.png");
}

footer div.out div.shou:hover {
  background-image: url("../../../public/static/image/qt3/shou_2.png");
}

footer div.out div.yun {
  background-image: url("../../../public/static/image/qt3/yun.png");
}

footer div.out div.yun.on {
  background-image: url("../../../public/static/image/qt3/pic002.png");
}

footer div.out div.yun:hover {
  background-image: url("../../../public/static/image/qt3/yun_2.png");
}

footer div.out div.chu {
  background-image: url("../../../public/static/image/qt3/chu.png");
}

footer div.out div.chu.on {
  background-image: url("../../../public/static/image/qt3/pic005.png");
}

footer div.out div.chu:hover {
  background-image: url("../../../public/static/image/qt3/pic008.png");
}
</style>
