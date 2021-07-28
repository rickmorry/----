<template>
  <div class="hello">
    <header style>
      <div class="title">陆家镇生活垃圾分类智能管理系统</div>
      <img class="chang" src="../../../public/static/image/HEAD.png" />
    </header>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  position: fixed;
  z-index: 99;
  background-color: rgb(52,51,120);
}
header .title {
  position: absolute;
  z-index: 99;
  text-align: center;
  height: 50px;
  line-height: 50px;
  color: #54f8fd;
  font-size: 38.76px;
  left: 0;
  right: 0;
}

header .chang {
  position: absolute;
  width: 100%;
  height: 80px;
  z-index: 9;
}
</style>
