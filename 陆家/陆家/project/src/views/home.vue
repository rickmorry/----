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
    <Foot :one="foot1" :two="foot2" :three="foot3" :four="foot4"></Foot>
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
      xcyd:false,
      jk:false,
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
      this.foot4 = false;
    },
    foot1(newValue, oldValue) {},
    foot2(newValue, oldValue) {},
    foot3(newValue, oldValue) {},
    foot4(newValue, oldValue) {},
    zycl(newValue, oldValue) {},
    tfxq(newValue, oldValue) {},
    jk(newValue,oldValue){
    }
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
  width: 1293px;
  height: 1000px;
  margin: 80px 375px 0 252px;
}
</style>
