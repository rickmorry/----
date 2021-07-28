<template>
  <div class="menuout">
    <div class="menu">
      <div class="big shouye" v-show="bool" @click="goPage('-1')" style="margin-bottom:10px;">
        <img class="icon" src="../../../public/static/image/icon/tao.png" />
        <span>首&nbsp;&nbsp;&nbsp;&nbsp;页</span>
        <div class="yuan"></div>
        <img src="~../../../public/static/image/qt2/首页 (1).png" />
      </div>
      <div class="big">
        <span>大 分 流</span>
        <div class="yuan"></div>
        <img src="~../../../public/static/image/qt2/tit_1.png" />
      </div>
      <div class="small" @click="goPage('0')" :class="type=='0'?'on':''">
        <span>建筑垃圾</span>
        <div class="yuan"></div>
        <img src="~../../../public/static/image/qt3/001@2x.png" />
      </div>
      <div class="small" @click="goPage('1')" :class="type=='1'?'on':''">
        <span>绿化垃圾</span>
        <div class="yuan"></div>
        <img src="~../../../public/static/image/qt3/002@2x.png" />
      </div>
      <div class="small" @click="goPage('2')" :class="type=='2'?'on':''">
        <span>大件垃圾</span>
        <div class="yuan"></div>
        <img src="~../../../public/static/image/qt3/003@2x.png" />
      </div>
      <div class="big two">
        <span>细 分 类</span>
        <div class="yuan"></div>
        <img src="~../../../public/static/image/qt2/tit_2.png" />
      </div>
      <div class="small" @click="goPage('3')" :class="type=='3'?'on':''">
        <span>可回收物</span>
        <div class="yuan"></div>
        <img src="~../../../public/static/image/qt3/004@2x.png" />
      </div>
      <div class="small" @click="goPage('4')" :class="type=='4'?'on':''">
        <span>有害垃圾</span>
        <div class="yuan"></div>
        <img src="~../../../public/static/image/qt3/005@2x.png" />
      </div>
      <div class="small" @click="goPage('5')" :class="type=='5'?'on':''">
        <span>厨余垃圾</span>
        <div class="yuan"></div>
        <img src="~../../../public/static/image/qt3/006@2x.png" />
      </div>
      <div class="small" @click="goPage('6')" :class="type=='6'?'on':''">
        <span>其他垃圾</span>
        <div class="yuan"></div>
        <img src="~../../../public/static/image/qt3/007@2x.png" />
      </div>
      <div class="big two">
        <span>其 他</span>
        <div class="yuan"></div>
        <img src="~../../../public/static/image/qt2/tit_3.png" />
      </div>
      <div class="small" @click="zycl()">
        <span>作业车辆</span>
        <div class="yuan"></div>
        <img src="~../../../public/static/image/qt3/008@2x.png" />
      </div>
      <div class="small" @click="tfxq()">
        <span>投放小区</span>
        <div class="yuan"></div>
        <img src="~../../../public/static/image/qt3/009@2x.png" />
      </div>
      <div class="small" @click="xcyd()">
        <span>宣传引导</span>
        <div class="yuan"></div>
        <img src="~../../../public/static/image/qt3/010@2x.png" />
      </div>
      <div class="small" @click="ssjk()">
        <span>实时监控</span>
        <div class="yuan"></div>
        <img src="~../../../public/static/image/qt3/011@2x.png" />
      </div>
    </div>
    <div class="menu-footer"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bool: false
    };
  },
  props: {
    type: {
      type: String
    },
    car: {
      type: Boolean
    },
    xiaoqu: {
      type: Boolean
    }
  },
  methods: {
    goPage(type) {
      //this.$emit('leftclick',type)
      console.log(type);
      this.$parent.leftnav = type;
      if (type == "-1") this.bool = false;
      else this.bool = true;
    },
    zycl() {
      //作业车辆
      if (this.$parent.zycl) this.$parent.zycl = false;
      else this.$parent.zycl = true;
    },
    tfxq() {
      if (this.$parent.tfxq) this.$parent.tfxq = false;
      else this.$parent.tfxq = true;
    },
    xcyd() {
      if (this.$parent.xcyd) this.$parent.xcyd = false;
      else this.$parent.xcyd = true;
    },
    ssjk() {
      if (this.$parent.jk) this.$parent.jk = false;
      else this.$parent.jk = true;
    }
  },
  mounted() {}
};
</script>

<style>
.menuout {
  width: 230px;
  position: fixed;
  top: 100px;
  left: 20px;
  bottom: 70px;
  z-index: 100;
  height: 909px;
  border: 1px solid rgb(68, 118, 206);
}

.menuout::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  border-left: 2px solid rgb(0, 149, 255);
  border-top: 2px solid rgb(0, 149, 255);
  content: "";
}

.menuout::after {
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-right: 2px solid rgb(0, 149, 255);
  border-top: 2px solid rgb(0, 149, 255);
  content: "";
}

.menu-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.menu-footer::before {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 30px;
  height: 30px;
  border-left: 2px solid rgb(0, 149, 255);
  border-bottom: 2px solid rgb(0, 149, 255);
  content: "";
}

.menu-footer::after {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-right: 2px solid rgb(0, 149, 255);
  border-bottom: 2px solid rgb(0, 149, 255);
  content: "";
}

.menu {
  width: 170px;
  margin-left: 30px;
  margin-top: 20px;
}

.menu .big {
  width: 170px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-image: url("../../../public/static/image/qt3/menu_purple.png");
  background-size: 100%;
  background-repeat: no-repeat;
  color: white;
  font-size: 18.14px;
  cursor: pointer;
  position: relative;
}

.menu .big div.yuan {
  position: absolute;
  top: 7px;
  right: 15px;
  width: 32px;
  height: 32px;
  border-radius: 15px;
  background-color: rgb(60, 76, 100);
}

.menu .big.two {
  margin-top: 40px;
}

.menu .big img {
  width: 22px;
  height: 22px;
  position: absolute;
  right: 20px;
  top: 12px;
}
.menu .big .icon {
  width: 22px;
  height: 22px;
  position: absolute;
  left: 20px;
  top: 12px;
}

.menu .big span {
  margin-left: -20px;
}

.menu .small {
  width: 170px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  color: #ffffff;
  margin-top: 10px;
  background-image: url("../../../public/static/image/qt3/menu_blue.png");
  background-size: 100%;
  background-repeat: no-repeat;
  cursor: pointer;
  position: relative;
}

.menu .small div.yuan {
  position: absolute;
  top: 7px;
  right: 15px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: rgb(60, 76, 100);
}

.menu .small:hover {
  background-image: url("../../../public/static/image/qt3/menu_orange.png");
}
.menu .small.on {
  background-image: url("../../../public/static/image/qt3/menu_orange.png");
}
.menu .small img {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
  top: 10px;
}

.menu .small span {
  margin-left: -20px;
}

.menuimg {
  position: absolute;
  left: 170px;
  top: 320px;
}
</style>
