<template>
  <div class="hello">
    <ul>
      <li>
        <router-link to="/" class="link">
          <img src="../../public/images/icon006.png" alt />
          <div class="txt">首页</div>
        </router-link>
      </li>
      <li>
        <router-link to="/hz" class="link">
          <img src="../../public/images/icon012.png" alt />
          <div class="txt">汇总</div>
        </router-link>
      </li>
      <li>
        <router-link to="/zlxq" class="link">
          <img src="../../public/images/icon011.png" alt />
          <div class="txt">转炉</div>
        </router-link>
      </li>
      <li>
        <router-link to="/rh" class="link">
          <img src="../../public/images/icon007.png" alt />
          <div class="txt">RH</div>
        </router-link>
      </li>
      <li>
        <router-link to="/xrq" class="link">
          <img src="../../public/images/icon008.png" alt />
          <div class="txt">蓄热器</div>
        </router-link>
      </li>
      <li>
        <router-link to="/dyzq" class="link">
          <img src="../../public/images/icon009.png" alt />
          <div class="txt">低压送汽</div>
        </router-link>
      </li>
      <li>
        <router-link to="/zyzg" class="link">
          <img src="../../public/images/icon010.png" alt />
          <div class="txt">中压总管</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: Number
  },
  data() {
    return {
      num: 1
    };
  },
  methods: {},
  mounted() {
    this.num = this.msg;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  top: 0;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 100vh;
  background: #2c3e57;
  width: 80px;
  /* border-right: solid 1px #ffffff; */

  box-shadow: 1px 1px 10px 5px rgba(255, 255, 255, 0.3);
}
.hello ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.hello ul li {
  margin-bottom: 50px;
}
.hello ul li:hover {
  background: gold;
}
.hello ul li:hover .link{
  opacity: 1;
}
.hello ul li .link {
  color: #ffffff;
  opacity: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px;
  font-size: 15px;
  font-weight: 600;
  padding: 10px 5px;
}
.hello ul li .txt {
  font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑,
    STHeiti, MingLiu;
}
.hello ul li img {
  width: 35px;
  height: 35px;
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 10px;
}
.hello ul .active {
  background: orange;
  color: #ffffff;
  opacity: 1 !important;
}
.hello ul li:last-child {
  margin-bottom: 0px;
}
</style>
