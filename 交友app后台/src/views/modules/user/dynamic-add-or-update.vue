<template>
  <el-dialog
    :title="!dataForm.userId ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible"
  >
    <el-form
      :model="dataForm"
      :rules="dataRule"
      ref="dataForm"
      @keyup.enter.native="dataFormSubmit()"
      label-width="80px"
    >
      <el-form-item label="用户动态" prop="content">
        <el-input v-model="dataForm.content" :disabled="look" placeholder="用户动态"></el-input>
      </el-form-item>
      <el-form-item label="动态状态" prop="status">
        <el-select v-model="dataForm.status" :disabled="look" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="提交时间" prop="couponCount">
        <el-date-picker v-model="dataForm.datetime" type="date" format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期"></el-date-picker>
        <!-- <el-date-picker
      v-model="value2"
      align="right"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions">
    </el-date-picker> -->
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      dataForm: {
        userId: 0,
        userName: "",
        pic: "",
        status: 1,
        datetime: "",
        operator:"",
        likeNum:"",
        isDel:"",
        createTime:"",
        content:"",
        comment:""
      },
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 10 // 每页显示多少条
      },
      resourcesUrl: window.SITE_CONFIG.resourcesUrl,
      dataRule: {
        nickName: [
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ]
      },
      options: [
        {
          label: "允许",
          value: 1
        },
        {
          label: "永久封禁",
          value: 2
        }
      ],
      look: false,
      pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value2: '',
    };
  },
  methods: {
    init(id) {
      this.dataForm.userId = id || 0;
      this.visible = true;
      console.log(this.dataForm.userId);

      this.$nextTick(() => {
        this.$refs.dataForm.resetFields();
      });
      if (this.dataForm.userId) {
        this.$http({
          url: this.$http.adornUrl(`/post-record/info/${this.dataForm.userId}`),
          method: "get",
          params: this.$http.adornParams()
        }).then(({ data }) => {
          this.dataForm = data;
          console.log(this.dataForm,data)
        });
      }
      // this.dataForm = {
      //   userId: 0,
      //   nickName: "张三",
      //   pic: "/static/images/pic001.png",
      //   status: parseInt(Math.random() * 3),
      //   datetime: "2021-06-01 18:00:00"
      // };
    },
    // 表单提交
    dataFormSubmit() {
      let that = this
      console.log(this.dataForm)
      this.$http({
        url: this.$http.adornUrl(`/post-record`),
        method: 'put',
        data: this.$http.adornData({
          "age": this.dataForm.age,
          "comment": this.dataForm.comment,
          "content": this.dataForm.content,
          "createTime": this.dataForm.createTime,
          "id": this.dataForm.id,
          "isDel": this.dataForm.isDel,
          "isLiked": this.dataForm.isLiked,
          "likeNum": this.dataForm.likeNum,
          "operator": this.dataForm.operator,
          "pics": this.dataForm.pics,
          "sex": this.dataForm.sex,
          "status": this.dataForm.status,
          "userId": this.dataForm.userId,
          "userName": this.dataForm.userName,
          "userPic": this.dataForm.userPic
        })
      }).then(({ data }) => {
        this.$message({
          message: "操作成功",
          type: "success",
          duration: 1500,
          onClose: () => {
            this.visible = false;
            this.$emit("refreshDataList", this.page);
          }
        });
      });
    }
  }
};
</script>
