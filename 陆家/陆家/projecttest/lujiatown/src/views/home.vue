<template>
  <div class="container">
    <div class="home">
      <Main
        :tou="foot1"
        :shou="foot2"
        :yun="foot3"
        :chu="foot4"
        :num="leftnav"
        :tfxq="tfxq"
        :zycl="zycl"
        :xcyd="xcyd"
        :jk="jk"
      ></Main>
    </div>

    <Head></Head>
    <Left :type="leftnav" :car="zycl" :xiaoqu="tfxq"></Left>

    <Right v-if="leftnav=='-1'" :start="leftnav" key="1"></Right>
    <jianzhu v-if="leftnav=='0'" :start="leftnav" key="2"></jianzhu>
    <lvhua v-if="leftnav=='1'" :start="leftnav" key="3"></lvhua>
    <dajian v-if="leftnav=='2'" :start="leftnav" key="4"></dajian>
    <huishou v-if="leftnav=='3'" :start="leftnav" key="5"></huishou>
    <youhai v-if="leftnav=='4'" :start="leftnav" key="6"></youhai>
    <chuyu v-if="leftnav=='5'" :start="leftnav" key="7"></chuyu>
    <qita v-if="leftnav=='6'" :start="leftnav" key="8"></qita>
    <Foot :one="foot1" :two="foot2" :three="foot3" :four="foot4"></Foot>

  </div>
</template>

<script>
//import $ from "jquery";
import Foot from "../components/Foot";
import Head from "../components/Head";
import Left from "../components/Left";

import Right from "../components/Right";
import jianzhu from "../components/Jianzhu";
import lvhua from "../components/Lvhua";
import dajian from "../components/Dajian";
import huishou from "../components/Huishou";
import youhai from "../components/Youhai";
import chuyu from "../components/Chuyu";
import qita from "../components/Qita";

import Main from "./index";

export default {
  name: "HelloWorld",
  data() {
    return {
      leftnav: "-1",
      zycl: false,
      tfxq: false,
      xcyd: false,
      jk: false,
      foot1: false,
      foot2: false,
      foot3: false,
      foot4: false
    };
  },
  components: {
    Foot,
    Head,
    Left,
    Right,
    Main,
    jianzhu,
    lvhua,
    dajian,
    huishou,
    youhai,
    chuyu,
    qita
  },
  props: {
    msg: String
  },
  watch: {
    leftnav() {
      this.zycl = false;
      this.tfxq = false;
      //this.foot1 = false;
      this.foot2 = false;
      this.foot3 = false;
      //this.foot4 = false;
    },
    foot1(newValue, oldValue) {},
    foot2(newValue, oldValue) {},
    foot3(newValue, oldValue) {},
    foot4(newValue, oldValue) {},
    zycl(newValue, oldValue) {},
    tfxq(newValue, oldValue) {},
    jk(newValue, oldValue) {}
  },
  computed: {},
  methods: {
    leftclick(e) {
      this.type = e;
    }
  },
  mounted() {
    //console.log($);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background-color: rgb(52, 51, 120);
}
/* .foot{
  position: relative;
  bottom: 0;
}
img.footer {
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0px;
  background-color: rgb(52, 51, 120);
}
footer {
  position: relative;
  height: 100px;
  bottom: 0;
  left: 0;
  right: 0;
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
  background-image: url("../../public/static/image/qt3/tou.png");
}

footer div.out div.tou.on {
  background-image: url("../../public/static/image/qt3/pic004.png");
}

footer div.out div.tou:hover {
  background-image: url("../../public/static/image/qt3/tou_2.png");
}

footer div.out div.shou {
  background-image: url("../../public/static/image/qt3/shou.png");
}

footer div.out div.shou.on {
  background-image: url("../../public/static/image/qt3/pic007.png");
}

footer div.out div.shou:hover {
  background-image: url("../../public/static/image/qt3/shou_2.png");
}

footer div.out div.yun {
  background-image: url("../../public/static/image/qt3/yun.png");
}

footer div.out div.yun.on {
  background-image: url("../../public/static/image/qt3/pic002.png");
}

footer div.out div.yun:hover {
  background-image: url("../../public/static/image/qt3/yun_2.png");
}

footer div.out div.chu {
  background-image: url("../../public/static/image/qt3/chu.png");
}

footer div.out div.chu.on {
  background-image: url("../../public/static/image/qt3/pic005.png");
}

footer div.out div.chu:hover {
  background-image: url("../../public/static/image/qt3/pic008.png");
} */
.row-a1 {
  /* width: 1308px;
  height: 998px;
  border: solid 1px #00ff00;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
}
.home {
  position: relative;
  min-width: 1293px;
  min-height: 1000px;
  margin: 80px 375px 0px 252px;
}
</style>
