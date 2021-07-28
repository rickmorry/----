<template>
  <div class="hello" :class="bool==true?'hel':'hell'">
    <ul>
      <img @click="cli" src="../../public/images/icon002.png" :class="bool==true?'icon':'ico'" alt="">
      <li @click="num=1" :class="num==1?'taoi':''">
        <router-link to="/">首页</router-link>
      </li>
      <li @click="num=2" :class="num==2?'taoi':''">
        <router-link to="/rh">RH 详情</router-link>
      </li>
      <li @click="num=3" :class="num==3?'taoi':''">
        <router-link to="/xrq">蓄热器详情</router-link>
      </li>
      <li @click="num=4" :class="num==4?'taoi':''">
        <router-link to="/dyzq">低压送气详情</router-link>
      </li>
      <li @click="num=5" :class="num==5?'taoi':''">
        <router-link to="/rh">首页</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data () {
    return {
      bool:true,
      num:1
    }
  },methods: {
    cli(){
      this.bool=!this.bool;
      console.log(this.bool);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #ffffff;
}
.hello {

  position: fixed;
}
.hel{
  top: 50%;
  animation: hel1 .9s;
  transform: translate(0, -50%);
}
.hell{
  left: -160px;
  top: 50%;
  animation: hel2 .9s;
  transform: translate(0, -50%);
}
.hello ul {
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #363579;
  padding: 50px 30px 50px 10px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}
.hello ul li {
  width: 140px;
  line-height: 45px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 600;
  background: url('../../public/images/icon004.png') no-repeat center;
  background-size: 100%;
}
.hello ul .taoi{
   background: url('../../public/images/icon003.png') no-repeat center;
  background-size: 100%;
}
.hello ul li:hover{
  background: url('../../public/images/icon005.png') no-repeat center;
  background-size: 100%;
}
.hello ul li:last-child {
  margin-bottom: 0px;
}
ul .icon{
  width: 40px;
  height: 40px;
  position: absolute;
  right: -20px;
  top: 50%;
  animation: ico1 .5s;
  transform: translate(0,-50%);
}
ul .ico{
  width: 40px;
  height: 40px;
  position: absolute;
  right: -20px;
  top: 50%;
  animation: ico2 .5s;
  transform: translate(0,-50%) rotate(-180deg);
}

@keyframes hel1{
  from {left: -160px;}
  to {left: 0px;}
}
@keyframes hel2{
  from {left:0px;}
  to {left: -160px;}
}
@keyframes ico1{
  from {transform:translate(0,-50%) rotate(-180deg);}
  to {transform:translate(0,-50%) rotate(0);}
}
@keyframes ico2{
  from {transform:translate(0,-50%) rotate(0);}
  to {transform:translate(0,-50%) rotate(-180deg);}
}
</style>
